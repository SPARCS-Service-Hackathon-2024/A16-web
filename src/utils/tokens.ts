export const saveToken = (accessToken: string) => {
  localStorage.setItem('accessToken', accessToken);
};

export const removeToken = () => {
  localStorage.removeItem('accessToken');
};

export const loadToken = () => {
  return localStorage.getItem('accessToken');
};
