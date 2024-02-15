import { useEffect, useState } from 'react';
import Btn from './component/Btn';
import Input from './component/Input';
import LinkText from './component/LinkText';
import Header from './component/Header';

export default function ProfileChange() {
  const [category, setCategory] = useState<string[]>([
    '혼자',
    '가족',
    '연인',
    '친구',
    '부모님',
    '모임',
  ]);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    '혼자',
  ]);

  const handleCategoryClick = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category),
      );
    } else {
      console.log(selectedCategories);
      if (selectedCategories.length < 3) {
        setSelectedCategories([...selectedCategories, category]);
      }
    }
  };

  return (
    <div className="h-[100%]">
      <Header back text="내 프로필 변경하기" border />

      <div className="mx-[10%] flex flex-col gap-4 h-full">
        <label
          htmlFor="photo"
          className="w-[80px] h-[80px] bg-gray-300 overflow-hidden rounded-[80px] mx-auto my-[30px]"
        >
          <img src="" alt="" />
        </label>
        <input type="file" id="photo" hidden accept=".png .jpg" />
        <Input type="text" text="닉네임" label="닉네임" />
        <Input type="text" text="자신을 한줄로 소개해주세요" label="한줄소개" />

        <div className="flex">
          <h3 className="font-bold">해시태그 선택하기</h3>
          <p>(3개까지)</p>
        </div>
        <p className="text-sm leading-[1px]">
          회원님이 올린 리뷰를 기반으로 선별해봤어요!
        </p>
        <p className="text-sm leading-[1px]">
          자신을 대표하는 해시태그를 선택해주세요 :)
        </p>

        <div className="">
          {category.map((e, index) => (
            <button
              type="button"
              key={index}
              className={`py-[1px] px-2 m-2 rounded-xl border  ${
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
        <Btn className="bg-primary text-white mt-auto">변경하기</Btn>
      </div>
    </div>
  );
}
