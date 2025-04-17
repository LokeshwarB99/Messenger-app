'use client';

import { User } from '@prisma/client';
import UserBox from './UserBox';
import { BsGear } from 'react-icons/bs';
import { useState } from 'react';
import SettingsModal from '@/app/components/sidebar/SettingsModal';
type Props = {
  items: User[];
  currentUser: User;
};

function UserList({ items, currentUser }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SettingsModal currentUser={currentUser} isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <aside className='fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-gray-200 block w-full left-0'>
        <div className='px-5'>
          <div className='flex flex-row justify-between items-center'>
            <div className='text-2xl font-bold text-neutral-800 py-4'>Contacts</div>
            <div
              onClick={() => setIsOpen(true)}
              className='rounded-full p-2 block lg:hidden  bg-gray-100 text-gray-600 cursor-pointer hover:opacity-75 transition'>
              <BsGear size={20} />
            </div>
            {/* <button className='lg:hidden' onClick={() => setIsOpen(true)}>
              <BsGear className='text-sky-500 h-5 w-5' />
            </button> */}
          </div>
          {items.map((item) => (
            <UserBox key={item.id} data={item} />
          ))}
        </div>
      </aside>
    </>
  );
}

export default UserList;
