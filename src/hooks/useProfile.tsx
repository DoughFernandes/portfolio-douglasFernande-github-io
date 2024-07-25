import API from '@src/app/api/Profile/routes';
import { Profile } from '@src/interface/types';
import { useEffect, useState } from 'react';

interface UseProfileReturn {
  profile?: Profile | null;
  error: string | null;
  loading: boolean;
}

const useProfile = (): UseProfileReturn => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data: Profile = await API();

        setProfile({
          nome: data.nome,
          foto: data.foto,
          emprego: data.emprego,
          localizacao: data.localizacao,
          contato: {
            email: data.contato.email,
            telefone: data.contato.telefone,
            github: data.contato.github,
            linkedin: data.contato.linkedin,
            Instagram: data.contato.Instagram
          },
          github: data.github,
          linkedin: data.linkedin,
          descricao: data.descricao,
          habilidades_tecnicas: data.habilidades_tecnicas,
          habilidades_interpessoais: data.habilidades_interpessoais,
          idiomas: data.idiomas,
          portfolio: data.portfolio,
          experiencia_profissional: data.experiencia_profissional,
          educacao: data.educacao
        });
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

  return {
    profile,
    error,
    loading
  };
};

export default useProfile;
