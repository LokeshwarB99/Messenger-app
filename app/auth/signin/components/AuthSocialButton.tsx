"use client";
import { IconType } from "react-icons";
type Props = {
  icon: IconType;
  onClick: () => void;
  disabled?: boolean;
};

function AuthSocialButton({ icon: Icon, onClick, disabled }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0 disabled:bg-neutral-200 disabled:cursor-not-allowed"
    >
      <Icon />
    </button>
  );
}

export default AuthSocialButton;
