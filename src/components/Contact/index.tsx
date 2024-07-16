import {
  FaEnvelope,
  FaGithubAlt,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';
import styles from './contact.module.scss';

const ContatoIcons = () => {
  const openEmailClient = (event: any) => {
    event.preventDefault();
    const email = 'dfdsf1996@gmail.com';
    const subject = 'Assunto do Email';
    const body = 'Corpo do Email';
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    window.open(gmailUrl, '_blank');
  }

  return (
    <ul className={styles.container__icons}>
      <li>
        <a
          target='_blanck'
          className={styles.links}
          href='https://github.com/DoughFernandes'
          title='icon github'
        >
          <FaGithubAlt />
        </a>
      </li>
      <li>
        <a
          target='_blanck'
          className={styles.links}
          href='https://www.linkedin.com/in/dough-fernandes/'
          title='icon linkedin'
        >
          <FaLinkedinIn />
        </a>
      </li>
      <li>
        <a
          target='_blanck'
          className={styles.links}
          href='https://www.instagram.com/dooughsouza/?next=%2F'
          title='icon Instagram'
        >
          <FaInstagram />
        </a>
      </li>
      <li>
        <a
          target='_blanck'
          className={styles.links}
          href='whatsapp: (11) 955824702'
          title='icon Whatsapp'
        >
          <FaWhatsapp />
        </a>
      </li>
      <li>
        <a
          target='_blank'
          className={styles.links}
          href='#'
          title='icon E-mail'
          onClick={openEmailClient}
        >
          <FaEnvelope />
        </a>
      </li>
    </ul>
  );
};

export default ContatoIcons;
