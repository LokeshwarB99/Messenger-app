'use client';

import Modal from '@/app/components/Modal';
import Image from 'next/image';

type Props = {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
};

function ImageModal({ isOpen, onClose, src }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='w-full h-full'>
        <Image alt='Image' className='' height={500} width={500} src={src!} />
      </div>
    </Modal>
  );
}

export default ImageModal;
