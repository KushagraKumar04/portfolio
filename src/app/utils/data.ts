export const navigationLinks = [
  { label: 'Start', path: '#home' },
  { label: 'About Me', path: '#about' },
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
  tags: string[]
}

export const projectsData: projectType[] = [
  {
    name: 'Coffee Date Invitation',
    repo: 'https://github.com/KushagraKumar04/Coffee-Date',
    url: 'https://kushagrakumar04.github.io/Coffee-Date/',
    image:
      'Images/image.png',
    description:
      'This project showcases a simple and elegant web page that confirms the acceptance of a coffee date invitation. Built with HTML and CSS, it features a visually appealing design with a background image, a welcoming message, and a convenient button to return to the homepage.',
    tags: ['react', 'typescript', 'styled-components', 'axios', 'api']
  },
  {
    name: 'Space Tourism Website',
    repo: 'https://github.com//grazziotti/space-tourism-website',
    url: 'https://space-tourism-website-grazziotti.vercel.app/',
    image:
      'https://i.ibb.co/c17p422/Screenshot-2023-07-16-at-00-54-48-Space-Tourism-Website.png',
    description: 'Multi-page Website com tema espacial.',
    tags: ['html', 'css', 'frontend', 'webpage']
  },
  {
    name: 'LaTeX-Resume-Builder',
    repo: 'https://github.com/KushagraKumar04/LaTeX-Resume-Builder',
    url: 'https://interactive-comments-section-eta.vercel.app/',
    image:
      'https://i.ibb.co/4WNm2qY/Screenshot-2023-07-14-at-23-31-53-Frontend-Mentor-Interactive-comments-section.png',
    description: 'Building a resume builder using LaTeX.',
    tags: ['MongoDB', 'react', 'Java Script']
  },
  {
    name: 'Face Emotion Recognition',
    repo: 'https://github.com/KushagraKumar04/Face-Emotion-Recognition',
    url: false,
    image:
      'Images/Face_Emotion_interface.png',
    description: 'Detects various aspects from the picture provided.',
    tags: ['deepface', 'python', 'machine learning', 'colab',]
  },
  {
    name: 'Traffic Accident Analysis',
    repo: 'https://github.com/KushagraKumar04/Traffic-Accident-Analysis',
    url: 'false',
    image:
      'Images/Accident_Analysis.png',
    description: 'Listagem de dados locais com filtragem.',
    tags: ['react', 'typescript', 'bem']
  },
  {
    name: 'ToDo App',
    repo: 'https://github.com/grazziotti/todo-app',
    url: 'https://grazziotti.github.io/todo-app/',
    image:
      'https://i.ibb.co/Wg5GvD2/Screenshot-2023-07-15-at-23-25-42-Frontend-Mentor-Todo-app.png',
    description: 'Um aplicativo de lista de tarefas.',
    tags: ['html', 'css', 'javascript', 'bem']
  },
  {
    name: 'Weather App',
    repo: 'https://github.com/grazziotti/weather-app',
    url: 'https://grazziotti.github.io/weather-app',
    image:
      'https://i.ibb.co/zhPsH8D/Screenshot-2023-09-09-at-21-02-56-Weather-App.png',
    description:
      'Aplicação que fornece informações atualizadas sobre o clima em qualquer lugar do mundo.',
    tags: ['html', 'css', 'javascript', 'api']
  },
  {
    name: 'Rock-paper-scissors Game',
    repo: 'https://github.com/grazziotti/rock-paper-scissors-game',
    url: 'https://grazziotti.github.io/rock-paper-scissors-game/',
    image:
      'https://i.ibb.co/d7FczYy/Screenshot-2023-09-09-at-21-06-42-Frontend-Mentor-Rock-Paper-Scissors.png',
    description: 'Um jogo clássico de pedra-papel-tesoura disponível online.',
    tags: ['html', 'css', 'javascript', 'bem']
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
    name: 'Tailwindcss'
  },
  {
    img: 'nextjs/nextjs-original.svg',
    name: 'Nextjs'
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
