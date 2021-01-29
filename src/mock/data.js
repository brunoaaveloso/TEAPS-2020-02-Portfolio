import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Olá, sou',
  name: 'Bruno Veloso',
  subtitle: 'Estudante de ADS',
  cta: 'Quer saber mais sobre mim?',
};

// ABOUT DATA
export const aboutData = {
  img: 'perfil.jpg',
  paragraphOne: 'Meu nome é Bruno Veloso. Sou uberabense, tenho 32 anos, uma esposa que é uma Deusa (o nome dela, rsrsrs) e uma filhinha de 5 anos.',
  paragraphTwo: 'Atualmente trabalho na área de alimentos em um pequeno restaurante e pretendo enriquecer o meu trabalho com novas tecnologias e ideias adquiridas no curso de ADS.',
  paragraphThree: 'Sou vegano há 16 anos e entusiasta de games para PC e games de ritmo para mobile.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'reciclafacil.jpg',
    title: 'Recicla Fácil',
    info: 'Aplicativo Android',
    info2: 'O projeto Recicla Fácil é um produto desenvolvido para fins acadêmicos e se trata de um aplicativo móvel onde o cidadão de Uberaba e região, possa solicitar o agendamento da coleta de seus resíduos recicláveis em seu endereço de maneira simples, através de um sistema que integre cooperativas e empresas de catadores atuantes na coleta seletiva.',
    url: 'https://drive.google.com/file/d/1_mrapHt4_zQ8cytNgcBgoNjk6_diTyg_/view?usp=sharing',
    repo: 'https://gitlab.com/vinicius_laraujo/tcd-pdm', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cultivourbano.jpg',
    title: 'Cultivo Urbano',
    info: 'Aplicativo Android',
    info2: 'O aplicativo Cultivo Urbano foi desenvolvido e concebido como um catálogo colaborativo de plantas em que serão difundidas as espécies mais indicadas para cultivo urbano / doméstico',
    url: 'https://docs.google.com/document/d/1jh-QRDcpTVaztIbXBnFE74ZQpPsiTQr8Z5qFhgI-Yqw/edit?usp=sharing',
    repo: 'https://gitlab.com/MagusFreeman/cultivourbano', // if no repo, the button will not show up
  },
];

// FAMILY DATA
export const familyData = [
  {
    id: nanoid(),
    img: 'deusapic.jpg',
    title: 'Deusa Cristiane',
    info: 'Esposa',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cecilia.jpg',
    title: 'Cecília Ártemis',
    info: 'Filha',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Gostaria de trabalhar comigo? Perfeito!',
  btn: 'Entre Em Contato',
  email: 'brunoaaveloso@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/pax.aeterna',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/brunoaaveloso/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
