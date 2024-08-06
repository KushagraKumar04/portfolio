export const navigationLinks = [
  { label: 'Home', path: '#home' },
  { label: 'About', path: '#about' },
  { label: 'Projects', path: '#projects' },
  { label: 'Skills', path: '#skills' },
  { label: 'Contact', path: '#contact' }
]

export type projectType = {
  name: string
  repo: string
  url: string | false
  image: string
  description: string
  Skills: string[]
}

export const projectsData: projectType[] = [
  {
    name: 'Coffee Date',
    repo: 'https://github.com/KushagraKumar04/Coffee-Date',
    url: 'https://kushagrakumar04.github.io/Coffee-Date/',
    image:
      'https://drive.google.com/uc?export=view&id=1aFu4P9V9tBjdosJtkBecQbjNKpf_8FW_',
    description:
      'This project showcases a simple and elegant web page that confirms the acceptance of a coffee date invitation. Built with HTML and CSS, it features a visually appealing design with a background image, a welcoming message, and a convenient button to return to the homepage.',
    Skills: ['css', 'html', 'animation-css', 'web', 'interactive']
  },
  {
    name: 'Face Emotion Recognisation',
    repo: 'https://github.com/KushagraKumar04/Face-Emotion-Recognition',
    url: '#',
    image:
      'https://i.ibb.co/b69XhBD/Screenshot-2023-07-11-at-22-26-22-REST-Countries-API.png',
    description: '#',
    Skills: ['react', 'typescript', 'styled-components', 'axios', 'api']
  }
]

export const skillsData = [
  {
    img: 'html5/html5-original.svg',
    name: 'HTML'
  },
  {
    img: 'css3/css3-original.svg',
    name: 'CSS'
  },
  {
    img: 'javascript/javascript-original.svg',
    name: 'JavaScript'
  },
  {
    img: 'sass/sass-original.svg',
    name: 'Sass'
  },
  {
    img: 'typescript/typescript-original.svg',
    name: 'TypeScript'
  },
  {
    img: 'react/react-original.svg',
    name: 'React'
  },
  {
    img: 'tailwindcss/tailwindcss-original.svg',
    name: 'Tailwind CSS'
  },
  {
    img: 'nextjs/nextjs-original.svg',
    name: 'Next.js'
  },
  {
    img: 'nodejs/nodejs-original.svg',
    name: 'Node.js'
  },
  {
    img: 'express/express-original.svg',
    name: 'Express'
  },
  {
    img: 'postgresql/postgresql-original.svg',
    name: 'PostgreSQL'
  },
  {
    img: 'git/git-original.svg',
    name: 'Git'
  }
]
