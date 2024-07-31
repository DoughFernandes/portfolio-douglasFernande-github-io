import API from '@src/app/api/Profile/routes';
import { Profile } from '@src/interface/types';
import { useEffect, useState } from 'react';

const useProfile = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data: Profile = await API();
        setProfile(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return { profile, error, loading };
};

export default useProfile;
