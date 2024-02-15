import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Grade from './Grade';
import Comment from './Comment';

type VideoProps = {
    src?: string;
    name?: string;
    grade?: string;
}

const Video: React.FC<VideoProps> = ({ src, grade, name }) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(true);

    const handleVideoClick = () => {
        setIsPlaying(prevState => !prevState);
        console.log(isPlaying);
    };

    
    return (
        <div className='w-full h-custom overflow-hidden relative bg-black' onClick={handleVideoClick}>
            <video className='w-auto h-full object-contain m-auto' autoPlay={isPlaying} src="/no.mp4" muted>
            </video>
            <div className='bg-gradient-video w-full h-full absolute top-0 left-0'></div>
            <div className="absolute right-5 bottom-[30%] z-10">
                <div className="heart flex flex-col justify-center items-center">
                    <div className="cursor-pointer">
                        <img className='h-[20px] object-cover mt-6' src="/assets/heart.png" alt="" />
                        <p className='text-white text-xs mt-1'>1235</p>
                    </div>
                    <div className="cursor-pointer">
                        <img className='h-[20px] object-cover mt-3' src="/assets/commant.png" alt="" />

                    </div>
                    <div className="cursor-pointer">
                        <img className='h-[20px] object-cover mt-6' src="/assets/share.png" alt="" />
                    </div>
                    <Link className='block h-[16px] mt-6' to=""><img className='h-[100%] w-auto object-cover ' src="/assets/info.png" alt="" /></Link>
                </div>
            </div>
            <div className="absolute left-5 bottom-[30px]">
                <div className="flex items-center">
                    <div className="w-[48px] h-[48px] shrink-0 bg-gray-400 rounded-[48px] overflow-hidden">
                        <img className='' src="/" alt="" />
                    </div>
                    <div className='pl-2'>
                        <div className='flex items-center text-white text-sm'>
                            <p className='text-white font-bold'>__A___D___</p>
                            <button className='px-2 bg-inherit ml-2 border boer-1 rounded-xlrd border-white text-white '>팔로우</button>
                        </div>
                        <p className='text-white text-sm leading-7'>유성구 둔산동 백년식당</p>
                        <Grade grade={4.8} className={`w-[3%]`} className2={`text-sm text-white font-light`}/>
                    </div>
                </div>
                <p className='text-sm my-2 text-white'>유성구 둔산동에 위치한 백년식당입니다.<br /> 다양한 반찬을 즐길 수 있습니다.</p>
                <span className='px-2 bg-inherit mr-2 border border-1 rounded-xl border-white text-white'>#가족</span>
                <span className='px-2 bg-inherit mr-2 border border-1 rounded-xl border-white text-white'>#맛집</span>
            </div>
            <Comment />
        </div>
    );
}

export default Video;
