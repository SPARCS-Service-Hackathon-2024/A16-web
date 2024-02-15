import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type SettingTextPrors = {
  text: string;
  nextUrl?: string;
  icon?: boolean;
  border?: boolean;
};

const SettingText: React.FC<SettingTextPrors> = ({
  text,
  nextUrl,
  icon,
  border,
}) => {
  return (
    <Link
      to={nextUrl ? nextUrl : '#'}
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
