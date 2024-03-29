import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Grade from './Grade';
import Comments from './Comments';

type VideoProps = {
  src?: string;
  name?: string;
  grade?: string;
};

const Video = ({
  user,
  place,
  tags,
  stars,
  likes,
  active,
  files,
}: VideoProps) => {
  const videoEl = React.useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoEl.current) {
      if (videoEl.current.paused) {
        videoEl.current.play();
      } else {
        videoEl.current.pause();
      }
    }
  };

  useEffect(() => {
    if (videoEl.current) {
      if (active) {
        videoEl.current.play();
      } else {
        videoEl.current.pause();
      }
    }
  }, [active]);

  return (
    <div
      className="w-full h-custom overflow-hidden relative bg-black"
      onClick={handleVideoClick}
    >
      <video
        className="w-auto h-full object-contain m-auto"
        ref={videoEl}
        playsInline
        src={files[0].url}
        muted
      ></video>
      <div className="bg-gradient-video w-full h-full absolute top-0 left-0"></div>
      <div className="absolute right-5 bottom-[10%] z-10">
        <div className="heart flex flex-col justify-center items-center">
          <div className="cursor-pointer flex flex-col items-center">
            <img
              className="h-[20px] object-cover mt-6"
              src="/assets/heart.png"
              alt=""
            />
            <p className="text-white text-xs mt-1">{likes}</p>
          </div>
          <div className="cursor-pointer">
            <img
              className="h-[20px] object-cover mt-3"
              src="/assets/commant.png"
              alt=""
            />
          </div>
          <div className="cursor-pointer">
            <img
              className="h-[20px] object-cover mt-6"
              src="/assets/share.png"
              alt=""
            />
          </div>
          <Link className="block h-[16px] mt-6" to="">
            <img
              className="h-[100%] w-auto object-cover "
              src="/assets/info.png"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="absolute left-5 bottom-[30px]">
        <div className="flex items-center">
          <div className="w-[48px] h-[48px] shrink-0 bg-gray-400 rounded-[48px] overflow-hidden">
            <img
              className=""
              src={`https://randomuser.me/api/portraits/men/${Math.floor(
                Math.random() * 100,
              )}.jpg`}
              alt=""
            />
          </div>
          <div className="pl-2">
            <div className="flex items-center text-white text-sm">
              <p className="text-white font-bold">{user.nickname}</p>
              <button className="px-2 bg-inherit ml-2 border boer-1 rounded-xlrd border-white text-white ">
                {user.isFollowing ? '팔로잉' : '팔로우'}
              </button>
            </div>
            <p className="text-white text-sm leading-7">{place.name}</p>
            <Grade
              grade={stars}
              className={`w-[3%]`}
              className2={`text-sm text-white font-light`}
            />
          </div>
        </div>
        <p className="text-sm my-2 text-white">
          유성구 둔산동에 위치한 백년식당입니다.
          <br /> 다양한 반찬을 즐길 수 있습니다.
        </p>
        {tags.map((tag) => (
          <span className="px-2 bg-inherit mr-2 border border-1 rounded-xl border-white text-white">
            {`#${tag}`}
          </span>
        ))}
      </div>
      {/* <Comments /> */}
    </div>
  );
};

export default Video;
