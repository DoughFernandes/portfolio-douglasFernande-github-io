'use client';

import Loading from '@src/components/Loading';
import { useLoadingState } from '@src/hooks/loading';
import useProfile from '@src/hooks/useProfile';

export default function Skills() {
  const { data, error, loading } = useProfile();
  const showLoading = useLoadingState(loading);

  return (
    <div>
      {(loading || showLoading) && <Loading />}
      {error && <p>{error}</p>}
      {!showLoading && data && (
        <div>
          <p>Nome: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Job: {data.job}</p>
          {Array.isArray(data.skills?.hardSkills) &&
            data.skills.hardSkills.map((skill, index) => (
              <section key={index}>
                <p>{skill.name}</p>
                <img width={50} src={skill.logo} alt={skill.name} />
              </section>
            ))}
        </div>
      )}
    </div>
  );
}
