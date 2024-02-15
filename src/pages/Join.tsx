import { useState } from 'react';
import Btn from './component/Btn';
import Header from './component/Header';
import Input from './component/Input';

export default function Join() {
  const [emailError, setEmailError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();
  const [passwordConfirmError, setPasswordConfirmError] = useState<string>();
  const [nicknameError, setNicknameError] = useState<string>();

  return (
    <div className="h-screen flex flex-col">
      <Header text="회원가입" back={true} border={true} />
      <div className="px-8 py-4 flex-1 flex flex-col">
        <Input
          type="text"
          text="abcde@gmail.com"
          label="이메일"
          errorMessage={emailError}
        />
        <Input
          type="password"
          text="영어 대소문자, 숫자로 구성"
          label="비밀번호"
          errorMessage={passwordError}
        />
        <Input
          type="password"
          text="비밀번호 확인"
          label="비밀번호 확인"
          errorMessage={passwordConfirmError}
        />
        <Input
          type="text"
          text="닉네임 입력"
          label="닉네임"
          errorMessage={nicknameError}
        />
        <Btn className="bg-primary text-white left-0 mt-auto">가입하기</Btn>
      </div>
    </div>
  );
}
