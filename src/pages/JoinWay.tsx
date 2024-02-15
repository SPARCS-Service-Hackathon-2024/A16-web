import { Link } from 'react-router-dom';
import Btn from './component/Btn';
import LinkText from './component/LinkText';

export default function JoinWay() {
  return (
    <div className="mx-[10%] pt-[30%]">
      <h3 className="text-2xl leading-[250px] text-center font-bold">
        회원가입 방법을 선택하세요!
      </h3>
      <Link to="/join">
        <Btn className="bg-primary text-white">이메일로 가입하기</Btn>
      </Link>
      <Btn className="bg-[#F2DA00] text-[#282732] border border-[#E8E9EA]">
        카카오톡으로 가입하기
      </Btn>
      <LinkText
        className="leading-10 mb-10 justify-center"
        text="이미 회원이신가요?"
        LinkMsg="로그인"
        to="/login"
      />
    </div>
  );
}
