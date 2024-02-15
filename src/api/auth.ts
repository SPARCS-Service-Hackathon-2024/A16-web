import { useMutation, useQuery } from '@tanstack/react-query';
import api from '.';
import { createContext, useContext, useEffect } from 'react';

const loginByEmail = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) =>
  api.post('/auth/email/login', { email, password }).then(({ data }) => ({
    accessToken: data.accessToken as string,
  }));

interface User {
  id: string;
  email: string;
  nickname: string;
  bio: string;
  tags: string[];
  followings: number;
  followers: number;
}

export const useAuthProvider = () => {
  const {
    mutate: mutateByEmail,
    error: emailLoginError,
    data: loginResponse,
  } = useMutation({ mutationFn: loginByEmail });
  const { data, refetch, error } = useQuery<User>({ queryKey: ['/user/me'] });

  useEffect(() => {
    if (loginResponse?.accessToken) {
      localStorage.setItem('accessToken', loginResponse.accessToken);
    }
    refetch();
  }, [loginResponse, refetch]);

  return {
    loginByEmail: mutateByEmail,
    error: emailLoginError,
    user: error ? null : data,
  };
};

export const authContext = createContext<
  ReturnType<typeof useAuthProvider> | undefined
>(undefined);

export const useAuth = () => {
  const value = useContext(authContext);
  if (!value)
    throw new Error(
      'Cannot find AuthProvider. Please wrap your component with AuthProvider',
    );
  return value;
};
