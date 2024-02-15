export const saveToken = (accessToken: string) => {
  localStorage.setItem('accessToken', accessToken);
};

export const loadToken = () => {
  return localStorage.getItem('accessToken');
};
