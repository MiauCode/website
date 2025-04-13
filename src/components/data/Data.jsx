import {
  FaMobile,
  FaLaptopCode,
  FaNetworkWired,
  FaUsers,
  FaRobot,
  FaDatabase,
  FaCodeBranch,
  FaLanguage,
} from "react-icons/fa";

import { MdWebhook, MdConnectWithoutContact } from "react-icons/md";
import { GiCircuitry } from "react-icons/gi";

export const navLinksdata = [
  {
    _id: 1001,
    title: "Home",
    link: "home",
  },
  {
    _id: 1002,
    title: "Features",
    link: "features",
  },
  {
    _id: 1003,
    title: "Skills",
    link: "skills",
  },
  {
    _id: 1004,
    title: "Projects",
    link: "projects",
  },
  {
    _id: 1005,
    title: "Career & education",
    link: "career",
  },
  {
    _id: 1006,
    title: "Accolades",
    link: "accolades",
  },
  {
    _id: 1007,
    title: "Contact",
    link: "contact",
  },
];

export const featuresData = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: "Software Wizardry",
    des: "From coding up cool stuff in my free time to building apps as part of my journey, I've got a knack for crafting digital wonders.",
  },
  {
    id: 2,
    icon: <FaUsers />,
    title: "User Whiz",
    des: "I make sure my projects don't just look good, but they feel like a breeze to use. It's all about giving people that 'wow' experience!",
  },
  {
    id: 3,
    icon: <MdWebhook />,
    title: "API Magic",
    des: "I can weave APIs into my projects like a wizard, bringing in all sorts of data and making things work like a charm with the outside world.",
  },
  {
    id: 4,
    icon: <FaRobot />,
    title: "AI Buddy",
    des: "I've got AI in my toolkit and I'm not afraid to use it. It's like having a tech-savvy sidekick that makes everything smarter and faster.",
  },
  {
    id: 5,
    icon: <MdConnectWithoutContact />,
    title: "Customer Service",
    des: "Thanks to my customer service roles, I've learned the best ways to satisfy the customers.",
  },
  {
    id: 6,
    icon: <FaLanguage />,
    title: "Polyglot",
    des: "My tongue twists often because I speak five different languages. English, Finnish, Turkish, Russian and Swedish.",
  },
  {
    id: 7,
    icon: <FaCodeBranch />,
    title: "Version Control Guru",
    des: "Git is my trusted sidekick in the world of code. I use it to manage, collaborate, and keep track of changes. No code mysteries escape me!",
  },
];

export const educationItems = [
  {
    title: "High School",
    subtitle: "Lahden Lyseon Lukio",
    lore: "Finished high school on time with main focus on math-related courses",
    date: "2019 - 2022",
    icon: "school",
  },
  {
    title: "Bachelor's and Master's of Computer Science, 2nd year",
    subtitle: "Tampere University",
    lore: "I am currently studying at Tampere University doing my bachelor's degree in computer science",
    date: "2023 - 2028",
    icon: "school",
  },

];

export const workItems = [
  {
    workPlace: "Dalaman",
    title: "Waiter, Restaurant",
    subtitle: "I worked as a waiter",
    date: "2018 - 2022",
    icon: "FaPizzaSlice",
  },
  {
    workPlace: "Tripla Bar",
    title: "Bartender, Bar",
    subtitle: "I'm good at making cocktails",
    date: "2020 - 2022",
    icon: "FaWineGlassAlt",
  },
  {
    workPlace: "Hartwall",
    title: "Storage worker",
    subtitle: "Drove trucks in Hartwalls storages",
    date: "2022",
    icon: "FaTruck",
  },
  {
    workPlace: "Kärkkäinen",
    title: "Storage worker",
    subtitle: "Collected and packed up web orders",
    date: "2022",
    icon: "FaTruck",
  },
  {
    workPlace: "Lahden Seudun Pool ry",
    title: "Full-stack developer",
    subtitle: "<In progress> Developing a web platform for the club",
    date: "2024 - 2025",
    icon: "FaLaptopCode",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Alettin Basboga",
    title: "CEO, Politician,",
    org: "Bogalettin Oy",
    desc: "In their work, Emre has demonstrated excellent teamwork, and customer service skills. Emre handles his tasks responsibly and professionally. Emre is an active and self-initiative employee, and he was also well-liked by the work community.",
  },
  {
    id: 2,
    name: "Teemu",
    title: "A full-time friend",
    desc: "A pretty cool dude 👍🏻",
  },
];

export const mostUsed = [
  {
    id: 0,
    name: "Python",
    confidence: 80,
    where: "On school courses and some personal projects",
  },
  {
    id: 6,
    name: "C++",
    confidence: 80,
    where: "I have used C++ for my own and embedded systems projects",
  },
  {
    id: 9,
    name: "Git",
    confidence: 80,
    where: "Go-to version control system for all projects",
  },
  {
    id: 11,
    name: "vscode",
    confidence: 100,
    where: "My go-to code editor for all projects",
  },
  {
    id: 15,
    name: "API",
    confidence: 70,
    where:
      "Using different types of API's (mainly openapi) for projects at work, school and on my freetime",
    },
    {
      id: 2,
      name: "Next.js",
      confidence: 60,
      where: "In different projects",
    },
    {
      id: 2,
      name: "React",
      confidence: 70,
      where: "In different projects",
    },
    {
      id: 3,
      name: "Javascript",
      confidence: 70,
      where: "During personal projects",
    },
    {
      id: 5,
      name: "Tailwind",
      confidence: 100,
      where: "Creating this website",
    },
];

export const someExperience = [

  {
    id: 6,
    name: "Node",
    confidence: 60,
    where: "With some projects",
  },
  {
    id: 7,
    name: "MongoDb",
    confidence: 70,
    where: "Alongside work projects",
  },
  {
    id: 10,
    name: "Typescript",
    confidence: 35,
    where: "Using alongside React",
  },
  {
    id: 4,
    name: "Html",
    confidence: 100,
    where: "During personal projects, some school projects",
  },
  {
    id: 5,
    name: "CSS",
    confidence: 90,
    where: "Suring personal projects, some school projects",
  },
  {
    id: 1,
    name: "Java",
    confidence: 40,
    where: "During an OOP course at school",
  },
  {
    id: 7,
    name: "Android Studio",
    confidence: 50,
    where: "During an OOP course at school",
  },
  {
    id: 10,
    name: "Linux",
    confidence: 30,
    where: "While using virtual machines for different purposes",
  },
  {
    id: 14,
    name: "Matlab",
    confidence: 40,
    where: "Some basic calculations and operations",
  },
  {
    id: 4,
    name: "ML",
    confidence: 40,
    where: "I know the basics of Machine learning and know how to use and integrate API's",
  },
];

export const learning = [
  {
    id: 3,
    name: "React",
    skill: 30,
    why: "I want to learn how to create more complex websites and apps",
  },
  {
    id: 6,
    name: "Java",
    why: "I am learning Java as a part of my current OOP course",
  },
];

export const wantingToLean = [
  {
    id: 10,
    name: "Embedded systems",
    why: "I want to develope my career towards embedded systems",
  },
  {
    id: 1,
    name: "Rust",
    why: "I have heard a lot of good things about Rust and want to learn it",
  },
  {
    id: 1,
    name: "C",
    why: "One of the most important languages in the world. I want to learn it",
  },
];

export const certificates = [
  {
    name: "Junction hackathon",
    year: 2024,
    description:
      "I participated in a hackathon with a few of my friends and created a working full-stack app",
  },
  {
    name: "Cyber security base",
    year: 2024,
    description:
      "An open cyber security course made by the University of Helsinki",
  },
  {
    name: "Ulla Tuominen Foundation's contest winners",
    year: 2023,
    description:
      "Me and a few of my classmates won the contest with our working electronic therapy device",
  },
  {
    name: "Multiple different Udemy courses",
    year: 2023,
    description:
      "I have completed and studied multiple different Udemy courses",
  },
];

export const achievements = [
  {
    name: "Koja hackathon 2nd place",
    year: 2025,
    description:
      "I participated in a hackathon with a few of my friends and created a working 3D-simulation webapplication",
  },
  {
    name: "Platinum in Valorant",
    year: 2023,
    description:
      "My peak rank in Valorant. Very proud of myself",
  },
  {
    name: "101kg bench",
    year: 2023,
    description:
      "I finally managed to bench press 101kg near the end of 2023😎",
  },
  {
    name: "TiTe overalls team treasurer",
    year: 2024,
    description:
      "I was chosen as the treasurer of the overall team for the computer science students of Tampere University",
  },
  {
    name: "TiTe guild master",
    year: 2024,
    description:
      "I was chosen as the guild master for the computer science students of Tampere University",
  },
];

export const projects = [
  {
    title: "Valuemap",
    desc: "Valuemap matches job seekers with companies based on shared values, believes and needs. Made for Junction hackathon 2024 ",
    tags: [
      {
        name: "ReactJs",
        color: "red-600",
      },
      {
        name: "NextJs",
        color: "red-600",
      },
      {
        name: "MongoDB",
        color: "red-600",
      },
      {
        name: "TailwindCSS",
        color: "red-600",
      },
      {
        name: "Machine Learning",
        color: "red-600",
      },
    ],
    img: "https://i.ibb.co/XWrHknw/vm3.png",
    code: "https://github.com/temevh/valuework",
  },
];
