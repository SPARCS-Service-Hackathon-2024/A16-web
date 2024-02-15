import React from 'react';
import Header from './component/Header';
import { FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Category from './component/Category';
import Grade from './component/Grade';
import Feel from './component/Feel';
import Reviews from './component/Reviews';
import Menu from './component/Menu';

// type StoreProps = {
//     type: string;
//     profileImg: string;
//     profileUrl: string;
//     name: string;
//     videoImg?: string;
//     followChk?: boolean;
//     videoUrl: string;
//     Categorys: string[];
// }

export default function Store() {
  return (
    <div className="h-[100vh]">
      <Header back={true} alarm={true} />
      <div className="py-[56px] bg-white ">
        <div className="w-full h-[240px]">
          <img
            className="w-full h-full object-cover"
            src="/assets/img.png"
            alt=""
          />
        </div>
        <div className=" mx-[3%] ">
          <div className="mt-[3%] flex justify-between items-center ">
            <h3 className="text-xl font-bold">가게이름</h3>
            <Link
              className="font-white bg-primary text-white px-8 py-2 rounded-2xl"
              to="/"
            >
              리뷰 작성
            </Link>
          </div>
          <div className="flex items-center h-auto py-[15px] text-lg">
            <FaLocationArrow className="mr-[10px] rotate-[270deg]" />
            <p>대전광역시 유성구 둔산동 어쩌구길 33</p>
          </div>
          <Grade grade={4.8} />
          <div className="flex">
            <Category text="#가족" />
            <Category text="#맛집" />
            <Category text="#맛집" />
          </div>
          <Feel BadReview={['a', 'b', 'c']} GoodReview={['a', 'b', 'c']} />
        </div>
        <div className="bar w-full h-[8px] bg-[#f5f5f5]"></div>
        <Reviews text="이 가게를 방문한 사람들의 리뷰" />
        <Menu video={true} />
      </div>
    </div>
  );
}
