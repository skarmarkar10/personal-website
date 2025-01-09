import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://www.linkedin.com/in/michaelldangelo',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://www.instagram.com/_kshriya/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.facebook.com/shriya.karmarkar/',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'mailto:shriya.karmarkar@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://github.com/mldangelo',
    label: 'Github',
    icon: faGithub,
  },
];

export default data;
