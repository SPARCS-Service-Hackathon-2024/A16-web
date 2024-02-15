import React, { useState } from 'react';

type Category = {
  text: string;
};
const Category: React.FC<Category> = ({ text }) => {
  return (
    <div
      className={`px-2 py-1 border rounded-2xl border-primary bg-white text-primary mr-2`}
    >
      {text}
    </div>
  );
};

export default Category;
