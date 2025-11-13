import React from "react";
import { FaUser, FaEnvelope, FaBriefcase } from "react-icons/fa";

import { TbFileDescription } from "react-icons/tb";

export const navItems = [
  {
    name: "About",
    link: "#about-me",
    icon: React.createElement(TbFileDescription)
  },
  {
    name: "Experiance",
    link: "#experiance",
    icon: React.createElement(FaBriefcase)
  },
  {
    name: "Testimonials",
    link: "#testimonials",
    icon: React.createElement(FaUser)
  },
  { name: "Contact", link: "#contact", icon: React.createElement(FaEnvelope) }
];

export const projects = [
  {
    id: 1,
    title: "FastCart – Smart, Seamless, and Speedy Shopping",
    des: "Shop smarter with FastCart — a sleek, lightning-fast e-commerce experience built with React & Redux for modern shoppers.",
    img: "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748878645/dd230362-c984-463e-8841-34a66bb1e518.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1748872501/vrsidrjikuzuoa2enkqu.svg",
      "/fm.svg"
    ],
    link: "https://fast-cart-omega.vercel.app/"
  },
  {
    id: 2,
    title: "Gymo: Your Interactive Guide to Smarter, Stronger Workouts",
    des: "Gymo is a dynamic fitness web application that allows users to explore a wide range of exercises through animated GIFs, filter them by body part, and search in real-time. Each exercise has a detailed view with equipment info, muscle targets, related body parts, YouTube tutorials, and similar workouts using the same machine.",
    img: "https://res.cloudinary.com/dkby0jbe3/image/upload/v1749851879/yuw17qvtk2ckcntkrpd9.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "https://res.cloudinary.com/dkby0jbe3/image/upload/v1749896916/hfq7ntwvcqbbwkzbp4pb.svg",
      "/fm.svg"
    ],
    link: "https://gymo-sigma.vercel.app/"
  },
  {
    id: 3,
    title:
      "E-Commerce RESTful API – Scalable, Secure, and Fully-Featured Backend",
    des: "A complete e-commerce backend built with Node.js, Express, and MongoDB, featuring authentication (JWT), validation, Stripe payments, image uploads with Cloudinary, and full RESTful API documentation via Postman.",
    img: "https://res.cloudinary.com/dkby0jbe3/image/upload/v1762987172/E-Commerce%20API%20%28Node.js%2C%20Express%20and%20MongoDB%29.png",
    iconLists: ["/node.png", "/js.png", "/ex.png", "/mdb.png", "/stripe.jpeg"],
    link: "https://documenter.getpostman.com/view/41775437/2sB3WjyP5z"
  }
];

export const testimonials = [
  {
    quote:
      "Working with Kyrillos felt like partnering with a frontend architect. He doesn’t just write code — he builds systems. From reusable components to performance tuning, every line he commits has purpose. Our UI became faster, cleaner, and easier to maintain because of him. Respectfully, one of the best I've seen.",
    name: "Andrew Moheb",
    title: "Junior React.js Developer",
    img: "/Testimonials Images/Andrew.jpg"
  },
  {
    quote:
      "Kyrillos bridges the gap between backend and frontend like few can. His ability to take complex APIs and integrate them into intuitive React interfaces made our workflow seamless. He’s got a solid understanding of both logic and user experience — a rare combo. Respectfully, he's a game changer.",
    name: "Fady Nader",
    title: "Junior .NET Developer",
    img: "/Testimonials Images/Fady.jpg"
  },
  {
    quote:
      "As someone who was still learning Next.js, working with Kyrillos made all the difference. He explained things clearly, showed me how to structure pages, handle SSR, and protect APIs — all without ever making me feel lost. His patience and clarity turned my confusion into confidence.",
    name: "David Medhat",
    title: "Next.js Developer",
    img: "/Testimonials Images/David.png"
  },
  {
    quote:
      "Every time I review Kyrillos’s code, I come out smarter. His use of custom hooks, dynamic routing, and code splitting techniques made our dashboard fly. He balances performance with readability like a pro — one of the best frontend engineers I’ve worked with. Respectfully, a true craftsman.",
    name: "Abanoub Samy",
    title: "React.js Developer",
    img: "/Testimonials Images/Abanoub.jpg"
  },
  {
    quote:
      "Kyrillos brought clarity and leadership to our NTI project from day one. He didn’t just write code — he guided discussions, built consensus, and executed with consistency. He was the glue that held our team together, both technically and emotionally. Respectfully, he's a natural leader.",
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
    nameImg: "/cloudName.svg"
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg"
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg"
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg"
  },
  {
    id: 5,
    name: "docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg"
  }
];

export const workExperience = [
  {
    id: 1,
    title: "Freelance Frontend Dev – Remote Projects",
    desc: "Delivering responsive React.js UIs for freelance clients. Managing Git, deployed to Vercel, and communicated with clients directly.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg"
  },
  {
    id: 2,
    title: "Node.js Backend Dev – Udemy Course",
    desc: "Learned Node.js & Express.js to build RESTful APIs and backend logic. Integrated MongoDB and React in a MERN stack setup.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg"
  },
  {
    id: 3,
    title: "React Developer Track – Self-Paced Study",
    desc: "Completed practical React & TypeScript training. Built reusable components and responsive layouts using modern libraries.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg"
  },
  {
    id: 4,
    title: "Web Design Intern – NTI Training Program",
    desc: "Built responsive layouts using HTML5, CSS3, Bootstrap, and JavaScript as part of a hands-on internship at NTI.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg"
  }
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
  }
];
