import getConversations from '../actions/getConversations';
import getUsers from '../actions/getUsers';
import Sidebar from '../components/sidebar/Sidebar';
import ConversationList from './components/ConversationList';

type Props = {
  children: React.ReactNode;
};

export default async function ConversationLayout({ children }: Props) {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    <Sidebar>
      <ConversationList users={users} initialItems={conversations} />

      <div className='h-full '>{children}</div>
    </Sidebar>
  );
}
