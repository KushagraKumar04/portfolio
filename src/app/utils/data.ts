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
    url: 'https://github.com/KushagraKumar04/Face-Emotion-Recognition',
    image:
      'https://drive.google.com/uc?export=view&id=1wFnBkr5tgOKTfOty3Cm5_HDhayoU2t9L',
    description:
      'The Face Emotion Recognition project utilizes the DeepFace library to detect and analyze emotions from facial images. This project leverages the power of deep learning and computer vision to accurately identify emotions such as happiness, sadness, anger, surprise, and more, directly from uploaded images. The project is implemented using Python and is run on Google Colab for ease of access and computational efficiency.',
    Skills: ['python', 'deepface', 'google Collab', 'Machine Learning']
  },
  {
    name: 'Traffic Accident Data Analysis',
    repo: 'https://github.com/KushagraKumar04/Traffic-Accident-Analysis',
    url: 'https://github.com/KushagraKumar04/Traffic-Accident-Analysis/blob/main/Task3.ipynb',
    image:
      'https://drive.google.com/uc?export=view&id=19PW6X7bGyfsTvzWcI407HOMlkpN9IKL1',
    description:
      'This project analyzes traffic accident data to identify patterns based on road conditions, weather, and time of day. Visual representations of accident hotspots and contributing factors are created to offer a comprehensive understanding of the dynamics involved. The insights from this analysis aim to develop targeted strategy to improve road safety',
    Skills: ['python', 'Data Analysis', 'Data Refining', 'pandas', 'Matplot']
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
