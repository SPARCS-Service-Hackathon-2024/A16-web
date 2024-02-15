import { authContext, useAuthProvider } from '../auth';

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const value = useAuthProvider();
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
