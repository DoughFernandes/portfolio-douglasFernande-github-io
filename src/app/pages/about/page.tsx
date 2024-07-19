'use client'

import React from 'react';
import Loading from '@src/components/Loading';
import useProfile from '@src/hooks/useProfile';
import { useLoadingState } from '@src/hooks/loading';

export default function Skills() {
  const { dataProfile, error, loading } = useProfile();
  const showLoading = useLoadingState(loading);

  return (
    <div>
      {(loading || showLoading) && <Loading />}
      {error && <p>{error}</p>}
      {!showLoading && dataProfile && (
        <div>
          <p>Nome: {dataProfile.name}</p>
          <p>Email: {dataProfile.email}</p>
          <p>Job: {dataProfile.job}</p>
          {Array.isArray(dataProfile.skills?.hardSkills) &&
            dataProfile.skills.hardSkills.map((skill, index) => (
              <section key={index}>
                <p>{skill.name}</p>
                <img width={50} src={skill.logo} alt={skill.name} />
              </section>
            ))
          }
        </div>
      )}
    </div>
  );
}
