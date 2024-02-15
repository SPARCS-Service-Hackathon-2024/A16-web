import React, { useState } from 'react';
import GStar from '../../assets/GStar.png';
import YStar from '../../assets/YStar.png';
import HalfStar from '../../assets/HalfStar.png';
import Reviews from './Reviews';

const MypageMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('내 리뷰'); // 활성화된 탭을 관리하는 상태

  // 버튼 클릭 시 해당 버튼의 활성화 상태를 변경하는 함수
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    console.log(activeTab);
  };

  return (
    <div>
      <div className="flex items-center mb-[1px]">
        <div className="h-15 w-full flex items-center">
          <button
            type="button"
            className={`w-1/3 h-full bg-white font-bold leading-[45px] border-b border-gray-300 ${
              activeTab === '내 리뷰'
                ? 'border-[#2E83F2] text-black'
                : 'border-gary-300 text-[#cccccc]'
            }`}
            onClick={() => handleTabClick('내 리뷰')}
          >
            내 리뷰
          </button>
          <button
            type="button"
            className={`w-1/3 h-full bg-white font-bold leading-[45px] border-b border-gray-300 ${
              activeTab === '좋아요 한 리뷰'
                ? 'border-[#2E83F2] text-black'
                : 'border-gary-300 text-[#cccccc]'
            }`}
            onClick={() => handleTabClick('좋아요 한 리뷰')}
          >
            좋아요 한 리뷰
          </button>
          <button
            type="button"
            className={`w-1/3 h-full bg-white font-bold leading-[45px] border-b border-gray-300 ${
              activeTab === '찜한 장소'
                ? 'border-[#2E83F2] text-black'
                : 'border-gary-300 text-[#cccccc]'
            }`}
            onClick={() => handleTabClick('찜한 장소')}
          >
            찜한 장소
          </button>
        </div>
      </div>
      <div className={`${activeTab != '내 리뷰' && 'hidden'}`}>
        <Reviews />
      </div>
      <div className={`${activeTab != '좋아요 한 리뷰' && 'hidden'}`}>
        <Reviews />
      </div>
      <div className={`${activeTab != '찜한 장소' && 'hidden'}`}></div>
    </div>
  );
};

export default MypageMenu;
