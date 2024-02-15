import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type CommentPrors = {
  text: string;
  name: string;
  img: string;
  id: string;
};

const Comment: React.FC<CommentPrors> = ({ text, name, img, id }) => {
  return (
    <div className="flex align-center min-h-16 pt-2 w-full px-5">
      <Link
        to="/"
        className="block h-12 w-12 rounded-3xl bg-gray-300 overflow-hidden mx-3"
      >
        <img className="h-full w-full" src={img} alt="" />
      </Link>
      <div>
        <h5>{name}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
