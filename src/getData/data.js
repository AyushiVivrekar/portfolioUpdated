import project1 from '../assests/project1.png'
import project2 from '../assests/project2.png'
import project3 from '../assests/project3.png'
import project4 from '../assests/project4.png'
import project5 from '../assests/project5.png'
import project6 from '../assests/project6.png'
import project7 from '../assests/project7.png'
import project8 from '../assests/project8.png'
import project9 from '../assests/project9.png'

import { SiHtml5, SiCss3, SiBootstrap } from 'react-icons/si';
import { MdWidgets } from 'react-icons/md';
import { FaJsSquare, FaReact, FaGithub } from 'react-icons/fa';


export const SkillsData=[
  {
    skillsName : "HTML",
    skillValue: "95",
    skillText : "95%",
    icon: <SiHtml5 color="red" size={30} />,
  },
  {
    skillsName : "CSS",
    skillValue: "90",
    skillText : "90%",
    icon: <SiCss3 color="blue" size={30} />,
  },

  {
    skillsName : "Bootstrap",
    skillValue: "85",
    skillText : "85%",
    icon: <SiBootstrap color="purple" size={30} />,
  },
  {
    skillsName : "Material UI",
    skillValue: "80",
    skillText : "80%",
    icon: <MdWidgets color='skyblue' size={30} />
  },
  {
    skillsName : "JavaScript",
    skillValue: "80",
    skillText : "80%",
    icon:  <FaJsSquare color="orange" size={30} />
  },
  {
    skillsName : "React JS",
    skillValue: "90",
    skillText : "90%",
    icon:  <FaReact color="cyan" size={30} />
  },
  {
    skillsName : "GitHub",
    skillValue: "70",
    skillText : "70%",
    icon: <FaGithub color="black" size={30} />
  },
]

export const PortfolioDetails = [
    {
      imgUrl: project1,
      title: "Counter App",
      description: "Crafted a sleek JS counter app, demonstrating foundational proficiency in front-end development for modern web applications."
    },
    {
      imgUrl: project2,
      title: "Basic Signup Page",
      description: "Developed a minimalist yet functional signup page using HTML, CSS, and JavaScript, showcasing foundational skills in front-end web development."
    },
    {
      imgUrl: project3,
      title: "Expanding Images",
      description: "Crafted an immersive image expansion experience using HTML, CSS, and JavaScript, highlighting attention to detail and interactivity in web design."
    },
    {
      imgUrl: project4,
      title: "Age Counter",
      description: "Crafted a user-friendly Age Counter application with HTML, CSS, and JavaScript, simplifying age tracking and calculation with ease."
    },
    {
      imgUrl: project5,
      title: "Temperature ControlApp",
      description: "A Temperature ControlApp, built with React.js, HTML, CSS, and Bootstrap, featuring a user-friendly interface and seamless integration with temperature monitoring systems."
    },
    {
        imgUrl: project6,
      title: "Mart E-commerce Project",
      description: "Built a robust Mart E-commerce platform using HTML, CSS, Bootstrap, React JS, and Redux Toolkit, ensuring a smooth and stylish shopping journey with advanced features.",
      links: 'https://mrt-ecommerce.web.app/'
    },
    {   
        imgUrl: project7,
        title: "Stocks Emoji Project",
        description: "SocksEmoji: Your ultimate investment research platform. We provide products to guide you from discovery to decision-making and follow-up, ensuring confident and intelligent investing.",
        links:'https://www.stocksemoji.com/'
    },
    {   
        imgUrl: project8,
        title: "DonBosco School Project",
        description: "The DonBosco School Project is a React JS-based website with seamless design-functionality integration, offering an intuitive user experience. It showcases my expertise in React JS and web design, making it a standout addition to my portfolio.",
         links:'https://donboscoicseschoolchitradurga.com/'
    },
    {
      imgUrl: project9,
      title: "JUNO Application",
      description: 
      "In an AR project, spatial anchors were strategically used to store data positions, enhancing immersion and functionality.",
      links :'https://junowebapp.z29.web.core.windows.net/login'
    }
  ];