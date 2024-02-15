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
      className={`h-[48px] px-2 ${className} text-lg text-center rounded-lg`}
    >
      {children}
    </button>
  );
};

export default Btn;
