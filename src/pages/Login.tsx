import { useEffect, useState } from 'react';
import Btn from './component/Btn';
import Input from './component/Input';
import LinkText from './component/LinkText';
import { useAuth } from '../api/auth';

export default function Login() {
  const [emailError, setEmailError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();
  const { loginByEmail, error } = useAuth();

  useEffect(() => {
    const message = error
      ? '이메일 또는 비밀번호가 일치하지 않습니다'
      : undefined;
    setEmailError(message);
    setPasswordError(message);
  }, [error]);

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    if (!payload.email) {
      setEmailError('이메일을 입력해주세요');
      return;
    }
    setEmailError(undefined);
    if (!payload.password) {
      setPasswordError('비밀번호를 입력해주세요');
      return;
    }
    setPasswordError(undefined);

    loginByEmail(payload);
  };

  return (
    <form onSubmit={login} className="mx-[10%] pt-[30%]">
      <h3 className="text-3xl leading-[100px] text-center font-bold">로그인</h3>
      <Input
        type="text"
        text="이메일주소"
        name="email"
        autoCapitalize="off"
        autoComplete="off"
        errorMessage={emailError}
      />
      <Input
        type="password"
        text="비밀번호"
        name="password"
        errorMessage={passwordError}
      />
      <LinkText
        className="leading-[30px] mb-[40px] justify-end"
        LinkMsg="비밀번호 재설정"
        to="/login"
      />
      <Btn className="bg-primary text-white">로그인</Btn>
      <Btn className="bg-[#F2DA00] text-[#282732] border border-[#E8E9EA]">
        카카오톡으로 로그인하기
      </Btn>
      <LinkText
        className="leading-[80px] mb-[40px] justify-center"
        text="아직계정이 없으신가요?"
        LinkMsg="회원가입"
        to="/join-way"
      />
    </form>
  );
}
