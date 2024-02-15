import { useMutation } from '@tanstack/react-query';
import api from '.';
import { createContext, useContext } from 'react';

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

const useAuthProvider = () => {
  const { mutate: mutateByEmail, error: emailLoginError } = useMutation({
    mutationFn: loginByEmail,
  });
  return { loginByEmail: mutateByEmail, error: emailLoginError };
};

const authContext = createContext<
  ReturnType<typeof useAuthProvider> | undefined
>(undefined);

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const value = useAuthProvider();
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const value = useContext(authContext);
  if (!value)
    throw new Error(
      'Cannot find AuthProvider. Please wrap your component with AuthProvider',
    );
  return value;
};
