import EmptyState from '@/app/components/EmptyState';
type Props = {};

function Users({}: Props) {
  return (
    <div className='hidden lg:block lg:pl-80 h-full'>
      <EmptyState />
    </div>
  );
}

export default Users;
