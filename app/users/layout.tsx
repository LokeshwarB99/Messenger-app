import Sidebar from '../components/sidebar/Sidebar';
import getUsers from '@/app/actions/getUsers';
import UserList from './components/UserList';
import getCurrentUser from '../actions/getCurrentUser';
type Props = {
  children: React.ReactNode;
};

export default async function UsersLayout({ children }: Props) {
  const users = await getUsers();
  const currentUser = await getCurrentUser();
  return (
    <Sidebar>
      <div className='h-full'>
        <UserList items={users} currentUser={currentUser!} />
        {children}
      </div>
    </Sidebar>
  );
}
