import { Link, useNavigate } from 'react-router-dom';
import { getKakaoAuthorizeUrl } from '../api/auth';
import Btn from './component/Btn';
import LinkText from './component/LinkText';

declare global {
  interface Window {
    flutter_inappwebview?: {
      callHandler: <T = unknown>(
        handlerName: string,
        ...args: unknown[]
      ) => Promise<T>;
    };
  }
}

export default function JoinWay() {
  const navigate = useNavigate();
  const loginWithKakao = async () => {
    const handler = window.flutter_inappwebview;
    if (!handler) {
      location.href = await getKakaoAuthorizeUrl();
      return;
    }
    const idToken = await handler.callHandler<string>('loginWithKakao');
    navigate('/join', { state: { kakao: idToken } });
  };

  return (
    <div className="mx-[10%] pt-[30%] flex flex-col gap-4">
      <h3 className="text-2xl leading-[250px] text-center font-bold">
        회원가입 방법을 선택하세요!
      </h3>
      <Link to="/join" className="w-full">
        <Btn className="bg-primary text-white w-full">이메일로 가입하기</Btn>
      </Link>
      <Btn
        className="bg-[#F2DA00] text-[#282732] border border-[#E8E9EA]"
        onClick={loginWithKakao}
      >
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
