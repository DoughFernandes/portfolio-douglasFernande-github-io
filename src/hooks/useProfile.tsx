import API from '@src/app/api/Profile/routes';
import { Profile } from '@src/interface/types';
import { useEffect, useState } from 'react';

interface UseProfileReturn {
  dataProfile?: Profile | null;
  error: string | null;
  loading: boolean;
}

const useProfile = (): UseProfileReturn => {
  const [dataProfile, setDataProfile] = useState<Profile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await API();
        setDataProfile(data);
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

  return { dataProfile, error, loading };
};

export default useProfile;
