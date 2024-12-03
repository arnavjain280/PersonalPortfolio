
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
    buffcoin,
    wefit,
    tailwind,
    nodejs,
    mongodb,
    git,
    python,
    figma,
    c,
  c2,
  java,
  numpy,
  postgresql,
    stock,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "Projects",
      title: "Projects",
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
      title: "Research Assistant",
      icon: mobile,
    },
    {
      title: "Machine Learning Enthusiast",
      icon: backend,
    },
  ];
  
  const technologies = [
   
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C++",
      icon: c,
    },
    {
      name: "C",
      icon: c2,
    },
    
    {
      name: "Java",
      icon: java,
    },
    {
      name: "numpy",
      icon: numpy,
    },
    
    {
      name: "SQL",
      icon: postgresql,
    },
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
      name: "React JS",
      icon: reactjs,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
   
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    
    {
      title: "Data Science Intern ",
      company_name: "Boeing Digital Aviation Solutions ",
      icon: mobile,
      date: "May 2024 - Present",
      points: [
        "Engineered complex data pipelines in Dataiku and Databricks using Python to integrate weather and flight data, developing automated models that predict flight diversions based on real-time weather conditions, while optimizing large-scale data processing for efficiency.",
        "Designed and deployed advanced visualizations to analyze the impact of wind speed and visibility on flight diversions, presenting key insights through intuitive dashboards and enabling real-time decision-making.",
        "Automated security vulnerability reporting by integrating Rapid7 and AWS SecurityHub into data pipelines, enabling real-time insights and reducing response times to critical exploits, while optimizing Python scripts for seamless data ingestion into PostgreSQL.",
        "Developed interactive dashboards in Power BI and Tableau, visualizing high-priority vulnerabilities and ransomware threats, driving actionable remediation strategies and enhancing cross-functional team collaboration for improved security posture.",
      ],
    },
    {
      title: "Data Structures Course Assistant",
      company_name: "University of Colorado at Boulder",
      icon: mobile,
      date: "Aug 2023 - Dec 2023",
      points: [
        "Facilitated weekly office hours to provide one-on-one instruction and clarify complex concepts, resulting in an increase in student understanding of data structures",
      ],
    },
    {
      title: "Undergraduate Research Intern",
      company_name: "Peleg Lab",
      icon: mobile,
      date: "Aug 2022 - Dec 2022",
      points: [
        "Collaborated with senior researcher to perform a behavioral assay on M. pudica plants grown in the lab to test the hypothesis that these plants can modulate their folding responses when presented with repeated stimulation.",
        "Leveraged Python and MATLAB for data collection and analysis/visualization, quantifying changes in plants' folding responses under varied stimuli intensity, duration, and frequency. This precise measurement facilitated the discovery of critical plant behavior trends and patterns.",
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
    {
      name: "Stock Price Prediction Using Python & Machine Learning",
      description:
        "Developed an Artificial Neural Network utilizing Long Short-Term Memory (LSTM) to predict future stock prices.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "green-text-gradient",
        },
        {
          name: "LSTM",
          color: "pink-text-gradient",
        },
      ],
      image: stock,
      source_code_link: "https://github.com/",
    },
    // {
    //   name: "AI Chatbot using Web Speech API, Node.js, and API.ai",
    //   description:
    //     "Developed an AI chatbot that leverages the Web Speech API, Node.js, and API.ai to provide users with an interactive and conversational experience.",
    //   tags: [
    //     {
    //       name: "Node.js",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "Web Speech API",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "API.ai",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: figma,
    //   source_code_link: "https://github.com/",
    // },
    {
      name: "WeFit! Project",
      description:
        "Part of a six-person team that developed WeFit, a full-stack web application designed to provide users with a comprehensive fitness tracking and planning tool.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: wefit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Buff-Coin Cryptocurrency Project",
      description:
        "Implemented a basic version of blockchain that mines cryptocurrency using data structures in C++.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Blockchain",
          color: "green-text-gradient",
        },
        {
          name: "Data Structures",
          color: "pink-text-gradient",
        },
      ],
      image: buffcoin,
      source_code_link: "https://github.com/",
    },
  ];
  export { services, technologies, experiences, testimonials, projects };