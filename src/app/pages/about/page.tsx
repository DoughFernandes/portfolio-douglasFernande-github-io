'use client';

import useProfile from '@src/hooks/useProfile';

export default function Skills() {
  const { dataProfile, error, loading } = useProfile();

  return (
    <div>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {dataProfile && (
        <div>
          <p>Nome: {dataProfile.name}</p>
          <p>Email: {dataProfile.email}</p>
          <p>Job: {dataProfile.job}</p>
          {Array.isArray(dataProfile.skills.hardSkills) &&
            dataProfile.skills.hardSkills.map((skill, index) => {
              return (
                <section key={index}>
                  <p>{skill.name}</p>
                  <img width={50} src={skill.logo} alt={skill.name} />
                </section>
              );
            })}
        </div>
      )}
    </div>
  );
}
