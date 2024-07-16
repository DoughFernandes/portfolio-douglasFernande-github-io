import React from 'react';
import useProfile from '@/hooks/useProfile';

const ProfileComponent: React.FC = () => {
  const { dataProfile, error, loading } = useProfile();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {dataProfile ? (
        <pre>{JSON.stringify(dataProfile, null, 2)}</pre>
      ) : (
        <div>No profile data</div>
      )}
    </div>
  );
};

export default ProfileComponent;
