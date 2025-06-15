import React from 'react';
import {
  FaUser,
  FaEnvelope,
  FaBriefcase
} from "react-icons/fa"; 

import { TbFileDescription } from "react-icons/tb";

export const navItems = [
  { name: "About", link: "#about-me", icon: React.createElement(TbFileDescription ) }, 
  { name: "Experiance", link: "#experiance",  icon: React.createElement(FaBriefcase) },   
  { name: "Testimonials", link: "#testimonials", icon: React.createElement(FaUser) },  
  { name: "Contact", link: "#contact", icon: React.createElement(FaEnvelope) }  
];

export const projects = [
  {
    id: 1,
    title: "FastCart – Smart, Seamless, and Speedy Shopping",
    des: "Shop smarter with FastCart — a sleek, lightning-fast e-commerce experience built with React & Redux for modern shoppers.",
    img: "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748878645/dd230362-c984-463e-8841-34a66bb1e518.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748872501/vrsidrjikuzuoa2enkqu.svg", "/fm.svg"],
    link: "https://fast-cart-omega.vercel.app/",
  },
  {
    id: 2,
    title: "Gymo: Your Interactive Guide to Smarter, Stronger Workouts",
    des: "Gymo is a dynamic fitness web application that allows users to explore a wide range of exercises through animated GIFs, filter them by body part, and search in real-time. Each exercise has a detailed view with equipment info, muscle targets, related body parts, YouTube tutorials, and similar workouts using the same machine.",
    img: "https://res.cloudinary.com/dkby0jbe3/image/upload/v1749851879/yuw17qvtk2ckcntkrpd9.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "https://res.cloudinary.com/dkby0jbe3/image/upload/v1749896916/hfq7ntwvcqbbwkzbp4pb.svg", "/fm.svg"],
    link: "https://gymo-sigma.vercel.app/",
  },
  // {
  //   id: 3,
  //   title: "AI Image SaaS - Canva Application",
  //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   link: "https://github.com/adrianhajdin/ai_saas_app",
  // },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects...",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "https://github.com/adrianhajdin/iphone",
  // },
];

export const testimonials = [
    {
      quote:
        "Kyrillos’s mastery of React and component design helped us scale our UI faster than ever. Clean code, reusable logic, smart state management — the guy’s got it all. I learned a ton just by reviewing his pull requests. His approach to building UI is not just functional, it's strategic.",
      name: "Andrew Moheb",
      title: "Junior React.js Developer",
      img: "/Testimonials Images/Andrew.png"
    },
    {
      quote:
        "I saw firsthand how Kyrillos handled complex .NET backends while integrating seamlessly with modern Next.js frontends. His ability to bridge both worlds — backend logic and frontend experience — is next-level. He doesn't just build features; he engineers systems that last.",
      name: "Fady Nader",
      title: "Junior .NET Developer",
      img: "/Testimonials Images/Fady.png"
    },
    {
      quote:
        "Even though my core focus is security, Kyrillos’s attention to secure data flows in his Next.js projects really stood out. From API protection to SSR edge cases, he understands the security layer like someone who's worked in the field. It’s rare to see devs this proactive about best practices.",
      name: "David Medhat",
      title: "Next.js Developer",
      img: "/Testimonials Images/David.png"
    },
    {
      quote:
        "When we collaborated on a complex React dashboard, Kyrillos brought structure and clarity from day one. Modular components, custom hooks, optimized routing — all wrapped in a blazing-fast Next.js app. He’s the kind of developer you want leading your frontend stack.",
      name: "Tony Saad",
      title: "React.js Developer",
      img: "/Testimonials Images/Tony.png"
    },
    {
      quote:
        "I worked with Kyrillos on our NTI graduation project. He brought great structure and vision to the design process. Always focused, creative, and cooperative — a real team player who made a big impact on the final product and truly elevated our team's overall workflow and output.",
      name: "Yasser Alderwy",
      title: "React.js Developer",
      img: "/Testimonials Images/Yasser.png"
    }
  ];  

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web Designer Intern",
    desc: "Built responsive front-end pages using HTML5, CSS3, Bootstrap, and JavaScript in a hands-on training project.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "React.js Developer Track – Self-Paced Study",
    desc: "Completed hands-on React & TypeScript training, building responsive UIs with modern libraries and Git version control.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Developer – Self Employed",
    desc: "Delivered front-end solutions using React stack for freelance clients, handling Git, portfolios, and end-to-end client communication.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Graduation Project Team Lead",
    desc: "Led a team of 4 to build a full-stack restaurant table booking system using PHP and React.js, delivering a fully functional MVP with real-world workflows.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/kyrillos-samy-38b110222",
    title: "LinkedIn.com"
  },
  {
    id: 2,
    img: "/git.svg",
    link: "https://github.com/Kyrillos-Samy1",
    title: "GitHub.com"
  },
  {
    id: 3,
    img: "/whatsapp.png",
    link: "https://wa.me/201271470997",
    title: "WhatsApp.com"
  },
  {
    id: 4,
    img: "/facebook.png",
    link: "https://www.facebook.com/kero.samy.104",
    title: "FaceBook.com"
  },
  
    
];