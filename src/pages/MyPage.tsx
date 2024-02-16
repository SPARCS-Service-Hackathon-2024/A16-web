import { Link } from 'react-router-dom';
import Header from './component/Header';
import Menu from './component/Menu';
import MypageMenu from './component/MypageMenu';

export default function MyPage() {
  return (
    <div className="h-screen">
      <Header text="마이페이지" setting />
      <div className="m-5">
        <div className="flex items-center">
          <div className="w-[80px] bg-gray-300 h-[80px] overflow-hidden rounded-[100px]">
            <img src="./" alt="" />
          </div>
          <div className="pl-5 h-[80px] flex flex-col justify-between">
            <div className="flex items-center ">
              <h3 className="text-xl">와유</h3>
              <Link to={`/profileChange`} className="w-6 h-6 rotate-180">
                <img className="w-6 h-6" src="/assets/back.png" alt="" />
              </Link>
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
