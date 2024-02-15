import React from 'react';
import Header from './component/Header';
import Menu from './component/Menu';
import BannerSlider from './component/BannerSlider';
import NowReviews from './component/NowReviews';
import CategoryMenu from './component/CategoryMenu';
import SearchMenu from './component/SearchMenu';

export default function Home() {
  return (
    <div className="h-[100%] pb-[70px] ">
      <Header alarm={true} review={true} />
      <SearchMenu />
      <div className="mx-[10%]">
        <BannerSlider />
      </div>
      <CategoryMenu />
      <div className="bar w-full h-[8px] bg-[#f5f5f5]"></div>
      <NowReviews />
      <Menu home={true} />
    </div>
  );
}
