import API from '@src/app/api/Profile/routes';
import { Profile } from '@src/interface/types';
import { useEffect, useState } from 'react';

interface UseProfileReturn {
  data?: Profile | null;
  error: string | null;
  loading: boolean;
}

const useProfile = (): UseProfileReturn => {
  const [data, setData] = useState<Profile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data: Profile = await API();
        setData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return { data, error, loading };
};

export default useProfile;
