import { NavigateFunction, useNavigate } from 'react-router-dom';

export const useNavigateBack = (): () => void => {
  const navigate: NavigateFunction = useNavigate();

  return (): void => {
    navigate(-1);
  };
};
