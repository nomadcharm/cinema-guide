import { useEffect } from 'react';

export const useSetPageTitle = (title: string, dep?: string): void => {
  useEffect(() => {
    document.title = title;
  }, [dep, title]);
};
