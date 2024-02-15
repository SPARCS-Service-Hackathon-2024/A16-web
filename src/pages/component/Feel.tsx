import React, { useState } from 'react';
import Good from '../../assets/Good.png';
import Bad from '../../assets/Bad.png';

type FeelProps = {
  BadReview: String[];
  GoodReview: String[];
};

const Feel: React.FC<FeelProps> = ({ BadReview, GoodReview }) => {
  return (
    <div className="flex items-center my-[20px] relative">
      <div className="absolute w-[2px] h-full bg-gray-300 translate-x-[-50%] top-0 left-[50%]"></div>
      <div className="w-[50%] px-[3%]">
        <div className="flex items-center">
          <img className="w-[15%] mr-1 object-cover" src={Good} alt="" />
          <p className="font-bold text-lg">좋았던 점</p>
        </div>
        {GoodReview.map((e, i) => (
          <p className="text-base leading-8 font-light" key={i}>
            {e}
          </p>
        ))}
      </div>
      <div className="w-[50%] px-[3%]">
        <div className="flex items-center">
          <img className="w-[15%] mr-1 object-cover" src={Bad} alt="" />
          <p className="font-bold text-lg">아쉬운 점</p>
        </div>
        {BadReview.map((e, i) => (
          <p className="text-base leading-8 font-light" key={i}>
            {e}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Feel;
