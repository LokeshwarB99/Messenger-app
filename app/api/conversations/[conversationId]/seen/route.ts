import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { prisma } from "@/prisma/client";
import { pusherServer } from "@/pusher";

interface IParams {
  conversationId?: string;
}

export async function POST(
  request: Request,
  { params }: { params: Promise<IParams> }
) {
  try {
    // Await the params promise
    const { conversationId } = await params;

    const currentUser = await getCurrentUser();

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Find existing conversation
    const conversation = await prisma.conversation.findUnique({
      where: { id: conversationId },
      include: {
        messages: { include: { seen: true } },
        users: true,
      },
    });

    if (!conversation) {
      return new NextResponse("Invalid ID", { status: 400 });
    }

    // Find last message
    const lastMessage = conversation.messages[conversation.messages.length - 1];
    if (!lastMessage) return NextResponse.json(conversation);

    // Update seen status
    const updatedMessage = await prisma.message.update({
      where: { id: lastMessage.id },
      include: { sender: true, seen: true },
      data: { seen: { connect: { id: currentUser.id } } },
    });

    // Notify user about updated conversation
    await pusherServer.trigger(currentUser.email, "conversation:update", {
      id: conversationId,
      messages: [updatedMessage],
    });

    // If already seen, return early
    if (lastMessage.seenIds.includes(currentUser.id)) {
      return NextResponse.json(conversation);
    }

    // Update last message seen status
    await pusherServer.trigger(
      conversationId!,
      "message:update",
      updatedMessage
    );

    return new NextResponse("Success");
  } catch (error) {
    console.error(error, "ERROR_MESSAGES_SEEN");
    return new NextResponse("Error", { status: 500 });
  }
}
