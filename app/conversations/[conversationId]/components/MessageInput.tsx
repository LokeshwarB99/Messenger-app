'use client';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

type Props = {
  register: UseFormRegister<FieldValues>;
  placeholder?: string;
  id: string;
  required?: boolean;
  type?: string;
  errors: FieldErrors;
};

function MessageInput({ register, placeholder, id, required, type, errors }: Props) {
  return (
    <div className='relative w-full '>
      <input
        type={type}
        id={id}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className='text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none'
      />
    </div>
  );
}

export default MessageInput;
