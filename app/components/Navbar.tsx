"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { status, data: session } = useSession();

  if (status === "loading") return null;

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b shadow-sm">
      {/* Logo */}
      <div className="text-lg font-bold">
        <Link href="/" className="text-gray-700 hover:text-black">
          Amazon
        </Link>
      </div>

      <div className="flex space-x-6">
        <Link href="/" className="text-gray-700 hover:text-black">
          Home
        </Link>
        <Link href="/products" className="text-gray-700 hover:text-black">
          Products
        </Link>
      </div>

      {/* Login Button */}
      {status === "unauthenticated" && (
        <Button asChild>
          <Link href="/api/auth/signin">Sign in</Link>
        </Button>
      )}

      {status === "authenticated" && (
        <div>
          {session.user!.name ? session.user!.name : session.user!.email}
          <Button className="ml-3" asChild>
            <Link href="/api/auth/signout">Sign out</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
