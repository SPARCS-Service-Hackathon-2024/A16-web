import React, { useState } from 'react';
import Header from './component/Header';
import { FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import GStar from '../assets/GStar.png';
import YStar from '../assets/YStar.png';
import Input from './component/Input';
import Btn from './component/Btn';

export default function ReviewRegistration() {
  const [star, setStar] = useState<number>(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    '맛집',
    '혼자',
  ]);
  const [category, setCategory] = useState<string[]>([
    '혼자',
    '가족',
    '연인',
    '친구',
    '부모님',
    '모임',
  ]);
  const [category2, setCategory2] = useState<string[]>([
    '맛집',
    '디저트',
    '데이트코스',
    '교육적인',
    '추억만들기',
    '대전의 명물',
    '감성적인',
    '가족적인',
    '혼자서도 좋아요',
    '과학',
    '여가',
  ]);
  const handleStarClick = (number: number) => {
    setStar(number);
  };
  const handleCategoryClick = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category),
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div>
      <Header text="리뷰 등록하기" back border />
      <div className="bg-[#f5f5f5] w-full h-full flex flex-col gap-4 p-5">
        <button
          //   onClick={}
          className="w-full bg-white px-2 py-5 flex flex-col justify-center items-center rounded-xl"
        >
          <h3 className="text-base font-bold pb-1">
            방문한 장소의 주소를 입력해주세요
          </h3>
          <Input type="text" text="주소 찾기" />
        </button>
        <label
          htmlFor="video"
          className="w-full bg-white px-2 py-5 flex flex-col justify-between items-center rounded-xl"
        >
          <img
            className="h-[30px] object-cover"
            src="/assets/video.png"
            alt=""
          />
          <p className="flex leading-10">리뷰 영상을 업로드 해주세요</p>
          <input id="video" type="file" hidden accept=".mp4" />
        </label>
        <div className="w-full bg-white px-2 py-5 flex flex-col justify-center items-center rounded-xl">
          <h3 className="text-base font-bold">방문한 장소가 어땠나요?</h3>
          <div className="flex items-center ">
            <button type="button" onClick={() => setStar(1)}>
              <img
                className="h-6 w-6 mx-1"
                src={star >= 1 ? YStar : GStar}
                alt=""
              />
            </button>
            <button type="button" onClick={() => setStar(2)}>
              <img
                className="h-6 w-6 mx-1"
                src={star >= 2 ? YStar : GStar}
                alt=""
              />
            </button>
            <button type="button" onClick={() => setStar(3)}>
              <img
                className="h-6 w-6 mx-1"
                src={star >= 3 ? YStar : GStar}
                alt=""
              />
            </button>
            <button type="button" onClick={() => setStar(4)}>
              <img
                className="h-6 w-6 mx-1"
                src={star >= 4 ? YStar : GStar}
                alt=""
              />
            </button>
            <button type="button" onClick={() => setStar(5)}>
              <img
                className="h-6 w-6 mx-1"
                src={star >= 5 ? YStar : GStar}
                alt=""
              />
            </button>
            <h1 className="text-xl">4.0</h1>
          </div>
        </div>
        <div className="w-full bg-white px-2 py-5 flex flex-col justify-center items-center rounded-xl">
          <h3 className="text-base font-bold">
            방문한 장소와 어울리는
            <span className="text-[#2E83F2]">키워드</span>를 골라주세요!
          </h3>
          <p className="leading-10">누구와 방문하면 좋을 것 같나요?</p>
          <div className="flex items-center flex-wrap justify-center">
            {category.map((e, index) => (
              <button
                type="button"
                key={index}
                className={`py-[1px] px-2 m-2 rounded-xl border ${
                  selectedCategories.includes(e)
                    ? 'border-primary text-primary'
                    : 'border-[#828282] text-[#828282]'
                }`}
                onClick={() => handleCategoryClick(e)}
              >
                #{e}
              </button>
            ))}
          </div>
          <p className="leading-10">누구와 방문한 장소는 어떘나요?</p>
          <div className="flex items-center flex-wrap justify-center">
            {category2.map((e, index) => (
              <button
                type="button"
                key={index}
                className={`py-[1px] px-2 m-2 rounded-xl border ${
                  selectedCategories.includes(e)
                    ? 'border-primary text-primary'
                    : 'border-[#828282] text-[#828282]'
                }`}
                onClick={() => handleCategoryClick(e)}
              >
                #{e}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full bg-white px-2 py-5 flex flex-col justify-center items-center rounded-xl">
          <h3 className="text-base font-bold pb-[15px]">
            방문한 장소에 대해서 작성해 주세요
          </h3>
          <textarea
            className="w-[100%] h-[172px] outline-none bg-[#F1F7FF] p-2 rounded-lg"
            placeholder="리뷰 작성하기"
          ></textarea>
        </div>
        <Btn className="bg-primary text-white">등록하기</Btn>
      </div>
    </div>
  );
}
