import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// type CommentProps = {
//     home?: boolean;
//     map?: boolean;
//     video?: boolean;
//     mypage?: boolean;
// }

const Comment: React.FC = () => {


    return (
        <div className='w-full h-full'>
            <div className="w-full h-full bg-black bg-opacity-50 absolute bottom-0 right-0"></div>
            <div className="w-full h-[70%] bg-white rounded-t-2xl absolute bottom-0 right-0 z-50">
                <div className="h-[70px] w-full">
                    <div className="w-[15%] h-[3px] rounded-lg bg-[#D9D9D9] mt-[5px] mx-auto"></div>
                    <h3 className="pl-[50px] leading-[56px] text-xl font-bold">
                        댓글
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Comment;
