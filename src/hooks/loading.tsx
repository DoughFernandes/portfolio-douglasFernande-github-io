import { useEffect, useState } from 'react';

export function useLoadingState(loading: boolean): boolean {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setShowLoading(false);
      });
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return showLoading;
}
