import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type SettingTextProps = {
  text: string;
  nextUrl?: string;
  icon?: boolean;
  border?: boolean;
  onClick?: () => void;
};

const SettingText = ({
  text,
  nextUrl,
  icon,
  border,
  onClick,
}: SettingTextProps) => {
  return (
    <Link
      onClick={onClick}
      to={nextUrl ?? '#'}
      className={`h-[64px] w-full leading-[64px] flex items-center pl-5 ${
        border && 'border-b border-gray-300'
      }`}
    >
      {icon && <img className="h-6 w-6 mr-3" src="/assets/Point.png" alt="" />}
      <p className="lg">{text}</p>
    </Link>
  );
};

export default SettingText;
