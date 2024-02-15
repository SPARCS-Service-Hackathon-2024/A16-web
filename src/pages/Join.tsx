import { SubmitHandler, useForm } from 'react-hook-form';
import Btn from './component/Btn';
import Header from './component/Header';
import Input from './component/Input';
import { useEffect, useState } from 'react';
import { useRegister } from '../api/hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { decode } from 'js-base64';

interface JoinForm {
  email: string;
  code: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
}

export default function Join() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const kakao = state?.kakao as string | undefined;

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
    setValue,
  } = useForm<JoinForm>();

  const [status, setStatus] = useState<
    'idle' | 'loading' | 'pending' | 'success' | 'fail'
  >('idle');

  const {
    checkEmail,
    checkNickname,
    emailError,
    nicknameError,
    sendEmailCode,
    verifyEmailCode,
    register: registerByEmail,
    emailVerificationToken,
  } = useRegister();

  const join: SubmitHandler<JoinForm> = async (data) => {
    if (data.password !== data.passwordConfirm) {
      setError('passwordConfirm', { message: '비밀번호가 다릅니다' });
      return;
    }
    if (kakao ? false : !emailVerificationToken) return;

    await checkNickname(data.nickname);
    console.log(
      JSON.stringify({
        email: data.email,
        emailVerificationToken: emailVerificationToken ?? kakao!,
        nickname: data.nickname,
        password: data.password,
      }),
    );
    await registerByEmail({
      email: data.email,
      emailVerificationToken: emailVerificationToken ?? kakao!,
      nickname: data.nickname,
      password: data.password,
    });
    navigate('/login');
  };

  const verifyEmail = async () => {
    const email = getValues('email');
    setStatus('loading');
    await checkEmail(email);
    await sendEmailCode(email);
    setStatus('pending');
  };

  const verifyEmailCodeAction = async () => {
    const email = getValues('email');
    const code = getValues('code');
    await verifyEmailCode({ email, code });
    setStatus('success');
  };

  useEffect(() => {
    if (!kakao) return;
    const payload = kakao.split('.')[1];
    const decoded = decode(payload);
    const json = JSON.parse(decoded);
    setValue('email', json.email);
    setValue('nickname', json.nickname);
  }, [kakao, setValue]);

  return (
    <form onSubmit={handleSubmit(join)} className="h-screen flex flex-col">
      <Header text="회원가입" back={true} border={true} />
      <div className="px-8 py-4 flex-1 flex flex-col gap-2">
        <div className="flex gap-2 items-end">
          <Input
            className="w-full"
            type="text"
            text="abcde@gmail.com"
            label="이메일"
            autoCapitalize="off"
            autoComplete="off"
            readOnly={!!kakao}
            errorMessage={
              errors.email?.message ??
              (emailError ? '이메일 중복입니다.' : undefined)
            }
            trailing={
              kakao ? null : (
                <Btn
                  type="button"
                  className={`text-white left-0 mt-4 ${
                    ['pending', 'loading'].includes(status)
                      ? 'bg-gray-300'
                      : 'bg-primary'
                  }`}
                  onClick={
                    !['pending', 'loading'].includes(status)
                      ? verifyEmail
                      : undefined
                  }
                >
                  코드 전송
                </Btn>
              )
            }
            {...register('email')}
          />
        </div>
        {status !== 'idle' && (
          <div>
            <Input
              type="text"
              text="abcd1234"
              label="이메일 인증코드"
              autoCapitalize="off"
              autoComplete="off"
              {...register('code')}
              trailing={
                <Btn
                  type="submit"
                  className={`text-white left-0 mt-4 ${
                    status === 'pending' ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  onClick={
                    status === 'pending' ? verifyEmailCodeAction : undefined
                  }
                >
                  인증하기
                </Btn>
              }
            />
          </div>
        )}
        <Input
          type="password"
          text="영어 대소문자, 숫자로 구성"
          label="비밀번호"
          {...register('password')}
        />
        <Input
          type="password"
          text="비밀번호 확인"
          label="비밀번호 확인"
          {...register('passwordConfirm')}
        />
        <Input
          type="text"
          text="닉네임 입력"
          label="닉네임"
          errorMessage={
            errors.nickname?.message ??
            (nicknameError ? '닉네임 중복입니다' : undefined)
          }
          {...register('nickname')}
        />
        <Btn className="bg-primary text-white left-0 mt-auto">가입하기</Btn>
      </div>
    </form>
  );
}
