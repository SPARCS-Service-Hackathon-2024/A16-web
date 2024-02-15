import { useMutation } from '@tanstack/react-query';
import api from '..';

export const useRegister = () => {
  const { mutateAsync: checkEmail, error: emailError } = useMutation({
    mutationFn: (email: string) => api.post('/auth/check/email', { email }),
  });
  const { mutateAsync: checkNickname, error: nicknameError } = useMutation({
    mutationFn: (nickname: string) =>
      api.post('/auth/check/nickname', { nickname }),
  });
  const { mutateAsync: sendEmailCode } = useMutation({
    mutationFn: (email: string) => api.post('/auth/email/code', { email }),
  });
  const { mutateAsync: verifyEmailCode, data } = useMutation({
    mutationFn: (data: { email: string; code: string }) =>
      api.post<{ token: string }>('/auth/email/verify', data),
  });

  const { mutateAsync: register } = useMutation({
    mutationFn: (data: {
      email: string;
      emailVerificationToken: string;
      nickname: string;
      password: string;
    }) => api.post('/auth/email/register', data),
  });

  return {
    checkEmail,
    emailError,
    checkNickname,
    nicknameError,
    sendEmailCode,
    verifyEmailCode,
    emailVerificationToken: data?.data.token,
    register,
  };
};
