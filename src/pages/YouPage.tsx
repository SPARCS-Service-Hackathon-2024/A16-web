import Header from './component/Header';
import { Link } from 'react-router-dom';
import MypageMenu from './component/MypageMenu';
import Menu from './component/Menu';

export default function YouPage() {
  return (
    <div className="h-screen">
      <Header back text=" " />
      <div className="m-5">
        <div className="flex items-center">
          <div className="w-[80px] bg-gray-300 h-[80px] overflow-hidden rounded-[100px]">
            <img src="./" alt="" />
          </div>
          <div className="pl-5 h-[130px] flex flex-col justify-between">
            <div className="flex items-center ">
              <h3 className="text-xl">가유</h3>
            </div>
            <div className="flex items-center h-3">
              <p className="text-xs">팔로워 999</p>
              <div className="w-[1px] h-3 bg-slate-300 mx-3"></div>
              <p className="text-xs">팔로잉 2999</p>
            </div>
            <div className="flex items-center">
              <span className="text-sm py-[1px] px-2 m-1 rounded-xl border border-primary text-primary">
                #맛집
              </span>
              <span className="text-sm py-[1px] px-2 m-1 rounded-xl border border-primary text-primary">
                #디자인
              </span>
              <span className="text-sm py-[1px] px-2 m-1 rounded-xl border border-primary text-primary">
                #과학
              </span>
            </div>
            <button className="py-1 px-16 rounded-lg bg-[#2E83F2] text-[#ffffff]">
              팔로우
            </button>
            {/* <button className="py-2 px-16 rounded-lg">팔로잉</button> */}
          </div>
        </div>
        <p className="text-sm mt-3">
          한줄소개입니다한줄소개입니다한줄소개입니다한줄소개입니다
        </p>
      </div>
      <MypageMenu />
      <Menu mypage />
    </div>
  );
}
