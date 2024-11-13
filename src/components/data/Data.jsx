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
    confidence: 70,
    where: "Go-to version control system for all projects",
  },
  {
    id: 11,
    name: "vscode",
    confidence: 100,
    where: "My go-to code editor for all projects",
  },
];

export const someExperience = [
  {
    
    id: 2,
    name: "React",
    confidence: 50,
    where: "In different projects",
  },
  {
    id: 3,
    name: "Javascript",
    confidence: 50,
    where: "During personal projects",
  },
  {
    id: 5,
    name: "Tailwind",
    confidence: 30,
    where: "Creating this website",
  },
  {
    id: 6,
    name: "Node",
    confidence: 35,
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
    confidence: 60,
    where: "During personal projects, some school projects",
  },
  {
    id: 5,
    name: "CSS",
    confidence: 60,
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
    why: "I know the basics of Machine learning and know how to use and integrate API's",
  },
];

export const learning = [
  {
    id: 2,
    name: "Tailwind",
    skill: 30,
    why: "I want to learn how to create stylish websites",
  },
  {
    id: 3,
    name: "React",
    skill: 30,
    why: "I want to learn how to create more complex websites and apps",
  },
  {
    id: 4,
    name: "Node",
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
    id: 1,
    name: "Rust",
    why: "I have heard a lot of good things about Rust and want to learn it",
  },
  {
    id: 2,
    name: "Python",
    why: "I want to deepen my previous knowledge of Python",
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
    ],
    img: "https://i.ibb.co/XWrHknw/vm3.png",
    code: "https://github.com/temevh/valuework",
  }
  /*
  {
    title: "Hash table utilizing linked list",
    desc: "A fairly straightforward hash table utilizing linked list. The hash table is made to be able to handle collisions and it is made to be able to handle and match a large amount of data.",
    tags: [
      {
        name: "Python",
        color: "red-600",
      },
      {
        name: "DSA",
        color: "green-600",
      },
      {
        name: "Hashing",
        color: "yellow-600",
      },
    ],
    img: "https://www.ekreative.com/wp-content/uploads/2021/03/pankaj-patel-_SgRNwAVNKw-unsplash.jpg",
    code: "https://github.com/temevh/Algorithms-and-data-structures/tree/master/Assingment",
  },
  {
    title: "Arduino alarm system",
    desc: "A fairly complex alarm system made with two Arduino boards which are connected with USART. The movement sensor waits for movements and triggers an alarm protocol when triggered",
    tags: [
      {
        name: "C",
        color: "red-600",
      },
      {
        name: "Arduino",
        color: "green-600",
      },
      {
        name: "Atmel studio",
        color: "yellow-600",
      },
    ],
    img: "https://user-images.githubusercontent.com/96690178/259686989-b7ab8e2d-f22a-4dca-803c-aca4170e6632.jpg",
    code: "https://github.com/temevh/Arduino-AlarmSystem/tree/main",
  },

  {
    title: "Outhere",
    desc: "A mobile app made with Dart and Flutter which gives the user a task to complete every day. Goal is for the user to improve in one category every day (for example sociability, learning or concentration). Very much still a work in progress!",
    tags: [
      {
        name: "Dart",
        color: "red-600",
      },
      {
        name: "Flutter",
        color: "green-600",
      },
      {
        name: "Mobile",
        color: "blue-800",
      },
    ],
    img: "https://user-images.githubusercontent.com/96690178/264060743-53ccea43-4be3-426c-9f78-1f6a67245932.jpg",
    code: "https://github.com/temevh/outhere/tree/main",
  },
  {
    title: "Wherewolf",
    desc: "A first person game made with Godot. In the game the player has to either save or kill the villagers of a small town, depending on the time of day. The game was made for Finnish Game Jam 2022. My main task was creating the assets/graphics.",
    tags: [
      {
        name: "Godot",
        color: "red-600",
      },
      {
        name: "GAP",
        color: "green-600",
      },
      {
        name: "Game",
        color: "yellow-600",
      },
    ],
    img: "https://ggj.s3.amazonaws.com/styles/game_content__wide/games/screenshots/2022/01/138869/nayttokuva_154.png?itok=JMBNCLa2&timestamp=1643543481",
    code: "https://github.com/temevh/fgj2022",
  },
  {
    title: "Maltas data dashboard",
    desc: "A full-stack dashboard application for healthcare professionals. The dashboard shows data related to the hand washing in a selected unit (hospital, operating room etc.)",
    tags: [
      {
        name: "React",
        color: "red-600",
      },
      {
        name: "Typescript",
        color: "green-600",
      },
      {
        name: "Node",
        color: "yellow-600",
      },
      {
        name: "Next.js",
        color: "yellow-600",
      },
    ],
    img: "https://monday.com/blog/wp-content/uploads/2022/03/Untitled-188.png",
    code: "https://github.com/PROJ-A2023-G08/maltas-data-dashboard",
  },
  */
];
