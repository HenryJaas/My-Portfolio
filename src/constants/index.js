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
    csharplogo,
    angularlogo,
    clogo,
    javalogo,
    git,
    msnet,
    pythonlogo,
    phone,
    universe,
    hankkija,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Java Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "C#/.NET Developer",
      icon: creator,
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
      name: "Angular",
      icon: angularlogo,
    },
    {
      name: "C#",
      icon: csharplogo,
    },
    {
      name: "Java",
      icon: javalogo,
    },
    {
      name: ".NET",
      icon: msnet,
    },
    {
      name: "C",
      icon: clogo,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "React",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: pythonlogo,
    },
  ];
  
  const experiences = [
    {
      title: "Telemarketer",
      company_name: "Myyntimestarit Oy",
      icon: phone,
      iconBg: "#383E56",
      date: "May 2017 - July 2017",
      points: [
        "Sold a newspaper named Maaseudun tulevaisuus.",
        "Translated into Coutrysides future.",
      ],
    },
    {
      title: "Storage worker",
      company_name: "Transval Oy/Hankkija",
      icon: hankkija,
      iconBg: "#E6DEDD",
      date: "May 2018 - Aug 2021",
      points: [
        "Collected and packed spareparts for agriculture machines.",
        "Worked for the online store of Hankkija. Either completed the orders or worked on the returns.",
        "Made waybills for the cargo that got sent out.",
        "Gained a lot of experience with a forklift.",
      ],
    },
    {
      title: "Micro-front end project",
      company_name: "Fliq/VAMK",
      icon: angularlogo,
      iconBg: "#383E56",
      date: "Sep 2023 - Dec 2023 ",
      points: [
        "Was done as a school project for VAMK.",
        "The project included Angular and TypeScript.",
        "Had bi-weekly team meetings.",
        "Project was well documented and we made the project using scrum.",
      ],
    },
    {
      title: "Your workplace!",
      company_name: "",
      icon: universe,
      iconBg: "#E6DEDD",
      date: "Present",
      points: [
        "Looking for work in software development or service desk.",
        "I'm a quick learner with a solid start from school and free-time.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Java servlet RESTAPI",
      description:
        "School management system. This was done in 2 hours as a java course final project. ",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Mariadb",
          color: "green-text-gradient",
        },
        {
          name: "Html/Css",
          color: "pink-text-gradient",
        },
      ],
      image: javalogo,
      source_code_link: "https://github.com/HenryJaas/Java-Servlets/tree/master/FinalRestApi",
    },
    {
      name: "Jaas Chat",
      description:
        "A simple WPC Chat App with C#",
      tags: [
        {
          name: "Csharp",
          color: "blue-text-gradient",
        },
        {
          name: "WPC",
          color: "green-text-gradient",
        },
        {
          name: "MVVM",
          color: "pink-text-gradient",
        },
      ],
      image: csharplogo,
      source_code_link: "https://github.com/HenryJaas/JaasChat",
    },
    {
      name: "Micro front-end widget for Fliq Prototype",
      description:
        "Notepad widget inside of a webpage. Widget that gets imported from outside using Micro front-end. This is a prototype as I'm not able to show the finished project.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "Module-federation",
          color: "pink-text-gradient",
        },
      ],
      image: angularlogo,
      source_code_link: "https://github.com/HenryJaas/HenryJaas.github.io",
    },
  ];
  
  export { services, technologies, experiences, projects };