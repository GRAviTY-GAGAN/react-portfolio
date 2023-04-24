import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  chakraUi,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  k2v,
  tripguide,
  threejs,
  firebase,
  SSi,
  snapdeal,
  nordstorm,
  gitRepoSearch,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    // title: "Web Developer",
    title: "Custom useReducer Hook",
    icon: web,
    link: "https://gagan-bn.hashnode.dev/building-our-own-custom-usereducer-hook",
  },
  {
    // title: "React Native Developer",
    title: "this keyword in Javascript",
    icon: mobile,
    link: "https://gagan-bn.hashnode.dev/this-keyword-in-javascript",
  },
  {
    // title: "Backend Developer",
    title: "Promise in JavaScript",
    icon: backend,
    link: "https://gagan-bn.hashnode.dev/promise-in-javascript",
  },
  {
    // title: "Content Creator",
    title: "useState() hook",
    icon: creator,
    link: "https://gagan-bn.hashnode.dev/usestate-hook",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    // name: "Three JS",
    name: "Chakra Ui",
    // icon: threejs,
    icon: chakraUi,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    // name: "docker",
    name: "firebase",
    icon: firebase,
    // icon: docker,
  },
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Talent Acquisition Associate",
    company_name: "SSi People",
    icon: SSi,
    iconBg: "#383E56",
    date: "August 2020 - September 2020",
    points: [
      "Recruited IT professionals for clients through sourcing, technical screening, negotiating rates, scheduling interviews, and checking references.",
      "Utilized Boolean search and passive sourcing on LinkedIn and Google for niche skills, and recruited via job boards such as Dice, Monster, Indeed, and CareerBuilder.",
      "Efficiently evaluated candidates based on skills, experience, and qualifications, and coordinated end-to-end interviews between client and candidate.",
    ],
  },
  {
    title: "Web Development Internship",
    company_name: "K2V INFOTECH LLP",
    icon: k2v,
    iconBg: "#383E56",
    date: "August 2020 - September 2020",
    points: [
      "Writing well designed, testable, efficient code by using best software development practices.",
      "Creating website layout/user interfaces by using standard HTML/CSS practices.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Integrating data from various back-end services and databases.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  // {
  //   name: "Car Rent",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "Flashdeal",
    description:
      "Flash deal is a clone of Snapdeal. Snapdeal is an indian e-commerce company that offers a wide range of clothing, accessories and footwear.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "json-server",
        color: "green-text-gradient",
      },
      {
        name: "ChakraUI",
        color: "pink-text-gradient",
      },
    ],
    image: snapdeal,
    source_code_link: "https://github.com/GRAviTY-GAGAN/-invincible-ice-6073",
    live_demo_link: "https://grand-dasik-526567.netlify.app/",
  },
  {
    name: "Sandstorm",
    description:
      "Sandstorm is a clone of Nordstorm. Nordstrom is a high-end American department store chain that sells clothing, shoes, accessories, and beauty products for women, men, and children.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "json-server",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: nordstorm,
    source_code_link: "https://github.com/GRAviTY-GAGAN/righteous-hand-1433",
    live_demo_link: "https://sandstorm-gsvr.netlify.app/",
  },
  {
    name: "Github Repository Search App",
    description:
      "A app using which we can search for repository of any github user.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: gitRepoSearch,
    source_code_link:
      "https://github.com/GRAviTY-GAGAN/Github-Repositiry-Search-App",
    live_demo_link: "https://github-repository-search1.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
