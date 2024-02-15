import React from 'react';
import { Link } from 'react-router-dom';

type LinkTextProps = {
  text?: string;
  LinkMsg: string;
  className: string;
  to: string;
};

const LinkText: React.FC<LinkTextProps> = ({
  text,
  className,
  LinkMsg,
  to,
}) => {
  return (
    <div className={`flex ${className} text-base`}>
      {text && <p className="mr-[10px]">{text}</p>}
      <Link
        to={to}
        className={text ? `text-primary block` : `text-[#6B8BDE] block`}
      >
        <p>{LinkMsg}</p>
      </Link>
    </div>
  );
};

export default LinkText;
