import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './component/Header';

type SettingPrors = {
  text: string;
  nextUrl?: string;
  icon?: string;
};

const Setting: React.FC<SettingPrors> = ({ text, nextUrl, icon }) => {
  return (
    <div>
      <Header text="설정" back />
      <Link to={nextUrl ? nextUrl : '#'} className="h-13 w-full leading-13">
        {text}
      </Link>
    </div>
  );
};

export default Setting;
