import React from 'react';

type BtnProps = {
  className: string;
};

const Btn = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<BtnProps> &
  React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={`w-[100%] h-[48px] mb-[10px] ${className} text-lg text-center leading-[48px] rounded-lg`}
    >
      {children}
    </button>
  );
};

export default Btn;
