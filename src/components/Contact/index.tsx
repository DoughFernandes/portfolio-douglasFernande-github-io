import useProfile from '@src/hooks/useProfile';
import { memo } from 'react';
import { FaEnvelope, FaGithubAlt, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import styles from './contact.module.scss';

interface IconProps {
  href?: string;
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  onclick?: () => void;
}

const Icon = memo(({ href, title, Icon, onclick }: IconProps) => (
  <a target='_blank' className={styles.links} href={href} title={title} onClick={onclick || undefined}>
    <Icon className={styles.ImgIcon}/>
    <span>{title}</span>
  </a>
));

const ContatoIcons = memo(() => {
  const { profile } = useProfile();
  const { email, github, linkedin, telefone: whatsapp } = profile?.contato || {};

  function openEmailClient(event?: any) {
    event?.preventDefault();
    const subject = 'Assunto do Email';
    const body = 'Corpo do Email';
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    event ? window.open(gmailUrl, '_blank') : null;
  }

  return (
    <ul className={styles.container__icons}>
      <li>
        <Icon href={github} title='GitHub' Icon={FaGithubAlt} />
      </li>
      <li>
        <Icon href={linkedin} title='LinkedIn' Icon={FaLinkedinIn} />
      </li>
      <li>
        <Icon href='https://www.instagram.com/dooughsouza/?next=%2F' title='Instagram' Icon={FaInstagram} />
      </li>
      <li>
        <Icon href={`whatsapp:${whatsapp}`} title='WhatsApp' Icon={FaWhatsapp} />
      </li>
      <li>
        <Icon onclick={openEmailClient} title='Email' Icon={FaEnvelope} />
      </li>
    </ul>
  );
});

export default ContatoIcons;
