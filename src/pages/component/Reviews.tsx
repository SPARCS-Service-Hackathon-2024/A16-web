import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type ReviewsProps = {
    text?: String;
    videoInfo?: String[];
}

const Reviews: React.FC<ReviewsProps> = ({ text , videoInfo}) => {

    return (
        <div>
            {text && <div className='w-full bg-white h-[50px] px-5 leading-[50px] text-lg font-bold'>{text}</div>}
            <div className="bg-[#f5f5f5] w-full flex flex-wrap">
                {/* {videoInfo.map((e,i) => (
                    <div className='' key={i}>{e}</div>
                ))} */}
                <Link to="/" className='relative shadow-custom2 w-1/3 h-[200px] p-[0.5px] block'>
                    <img className='w-full h-full object-cover' src="/assets/img.png" alt="" />
                    {/* {name && } */}
                    <p className='absolute left-2 bottom-2 text-white text-sm'>이름 이름</p>
                </Link>
                <Link to="/" className='w-1/3 h-[200px] p-[0.5px] block'>
                    <img className='w-full h-full object-cover' src="/assets/img.png" alt="" />
                </Link>
                <Link to="/" className='w-1/3 h-[200px] p-[0.5px] block'>
                    <img className='w-full h-full object-cover' src="/assets/img.png" alt="" />
                </Link>
                <Link to="/" className='w-1/3 h-[200px] p-[0.5px] block'>
                    <img className='w-full h-full object-cover' src="/assets/img.png" alt="" />
                </Link>
            </div>
        </div>
    );
}

export default Reviews;
