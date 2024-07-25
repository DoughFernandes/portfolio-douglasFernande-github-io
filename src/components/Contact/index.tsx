import useProfile from '@src/hooks/useProfile';
import { memo } from 'react';
import {
  FaEnvelope,
  FaGithubAlt,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp
} from 'react-icons/fa';
import styles from './contact.module.scss';

interface IconProps {
  href: string | undefined;
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Icon = memo(({ href, title, Icon }: IconProps) => (
  <a target='_blank' className={styles.links} href={href} title={title}>
    <Icon />
  </a>
));

const ContatoIcons = memo(() => {
  const { profile } = useProfile();
  const {
    email,
    github,
    linkedin,
    telefone: whatsapp
  } = profile?.contato || {};

  const openEmailClient = (event: any) => {
    event.preventDefault();
    const subject = 'Assunto do Email';
    const body = 'Corpo do Email';
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    window.open(gmailUrl, '_blank');
  };

  return (
    <ul className={styles.container__icons}>
      <li>
        <Icon href={github} title='GitHub' Icon={FaGithubAlt} />
      </li>
      <li>
        <Icon href={linkedin} title='LinkedIn' Icon={FaLinkedinIn} />
      </li>
      <li>
        <Icon
          href='https://www.instagram.com/dooughsouza/?next=%2F'
          title='Instagram'
          Icon={FaInstagram}
        />
      </li>
      <li>
        <Icon
          href={`https://wa.me/${whatsapp}`}
          title='WhatsApp'
          Icon={FaWhatsapp}
        />
      </li>
      <li>
        <a
          className={styles.links}
          onClick={openEmailClient}
          title='Email'
          style={{ cursor: 'pointer' }}
        >
          <FaEnvelope />
        </a>
      </li>
    </ul>
  );
});

export default ContatoIcons;
