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
  git,
  figma,
  threejs,
  banolive,
  animated,
  blog,
  ecommerce2,
  Lime,
  VulcanTech,
  Jinnbyte,
  NlinetPortal,
  BuffDude,
  RecoveryGuru,
  Recovery,
  Depart,
  AireAdmin,
  Bakeshop,
  Sosna,
  Vape,
  mustakshif,
  navicosoft,
  TheCakery
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
    title: "Full-Stack Developer",
    icon: backend,
  },
  {
    title: "React.JS Developer",
    icon: creator,
  },
  {
    title: "Next.JS Developer",
    icon: web,
  },
  {
    title: "Node.JS Developer",
    icon: mobile,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React Native Developer",
    company_name: "Lime Technologies",
    icon: Lime,
    iconBg: "#383E56",
    date: "Jan 2022 - Feb 2023",
    points: [
      "Developing and maintaining mobile applications using React Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross platform (android & ios) compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "VulcanTech",
    icon: VulcanTech,
    iconBg: "#E6DEDD",
    date: "March 2023 - Dec 2023",
    points: [
      "Developing and maintaining web applications using React.js & Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "FullStack Developer",
    company_name: "Jinnbyte",
    icon: Jinnbyte,
    iconBg: "#383E56",
    date: "Jan 2024 - Continue",
    points: [
      "Developed responsive and interactive web applications using React.js, Next.js, Three.js, and Node.js to deliver exceptional user experiences.",
      "Collaborated with UI/UX designers and cross-functional teams to plan, build, and refine scalable web solutions.",
      "Ensured cross-browser compatibility and mobile responsiveness for seamless performance across devices.",
      "Reviewed and refactored codebases to maintain high standards of code quality, performance, and maintainability.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Their Shopify expertise transformed our online store—fast checkout, custom filters, and secure payments. Sales jumped 30% in the first month!",
    name: "Emily Turner",
    designation: "Head of eCom",
    company: "Sweet Treats Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Built our React/Next.js testimonial carousel and dynamic UI components exactly to spec. Performance is lightning-fast and UX is slick!",
    name: "Oliver Smith",
    designation: "CTO",
    company: "NextApp Labs",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Their node.js reseller portal work was secure backend, custom dashboards & easy domain integration. Incredibly reliable delivery!",
    name: "Sophie Nguyen",
    designation: "Founder",
    company: "EcoWear Australia",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Banolive Mobile App (React Native)",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: banolive,
    source_code_link: "https://play.google.com/store/apps/details?id=com.bano.live&hl=en&pli=1",
  },
  {
    name: "Animated Website (Next.js)",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "motiondiv",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: animated,
    source_code_link: "https://www.wearedepart.com/",
  },
  {
    name: "Fully Functional Blog Website (React.js)",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "routing",
        color: "pink-text-gradient",
      },
      {
        name: "apis",
        color: "green-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://brainhub.eu/",
  },
  {
    name: "Ecommerce Website (React.js)",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "apis",
        color: "pink-text-gradient",
      },
      {
        name: "reduxjs",
        color: "blue-text-gradient",
      },
    ],
    image: ecommerce2,
    source_code_link: "https://eshop-tcj.netlify.app/",
  },
  {
    name: "Nlient Student Portal (Next.js + Node.js)",
    description:
      "I designed and developed a responsive student portal frontend. It includes auth screens, a dashboard with charts, course listing pages, and a profile section.",
    tags: [
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "routing",
        color: "pink-text-gradient",
      },
      {
        name: "apis",
        color: "green-text-gradient",
      },
      {
        name: "reduxjs",
        color: "blue-text-gradient",
      },
    ],
    image: NlinetPortal,
    source_code_link: "https://main.d2i7jgwyzqg9yr.amplifyapp.com/",
  },
  {
    name: "Buff-Dudes Dashboard (React.js)",
    description:
      "Built the main analytics dashboard for Buff Dudes with dynamic date filters, revenue insights, and responsive charts. Focused on clear data visualization and user-friendly UI.",
    tags: [
      {
        name: "reactjs",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "routing",
        color: "pink-text-gradient",
      },
      {
        name: "apis",
        color: "green-text-gradient",
      },
    ],
    image: BuffDude,
    source_code_link: "https://stagingportal.buffdudes.app/",
  },
  {
    name: "Recovery Guru Admin Dashboard (Next.js)",
    description:
      "Developing core features for Recovery Guru's admin panel, including user, product, and brand management. Focused on clean UI, secure access, and real-time performance for a smooth backend experience.",
    tags: [
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "routing",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: RecoveryGuru,
    source_code_link: "https://admin.recoveryguru.com.au/",
  },
  {
    name: "Recovery Guru Website (Next.js + Zustand)",
    description:
      "Contributed to Recovery Guru by building reusable components, smart product suggestions, and currency conversion. Added advanced filters, integrated comparison APIs, and improved UI based on client feedback.",
    tags: [
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "routing",
        color: "pink-text-gradient",
      },
      {
        name: "Zustand",
        color: "green-text-gradient",
      },
    ],
    image: Recovery,
    source_code_link: "https://comparison.recoveryguru.com.au/",
  },
  {
    name: "We Are Depart - Portfolio Website",
    description:
      "Contributed to We Are Depart’s portfolio site using Next.js. Built responsive components, added smooth animations, responsive design and ensured performance across devices.",
    tags: [
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "motion-dev",
        color: "pink-text-gradient",
      },
      {
        name: "Zustand",
        color: "green-text-gradient",
      },
    ],
    image: Depart,
    source_code_link: "https://www.wearedepart.com/",
  },
  {
    name: "Aire Admin Dashboard (Next.js + Api's)",
    description:
      "Worked on Aire’s admin dashboard, building features like subscription flow, booking system, and API integrations. Also improved UI/UX by refining components for better usability and consistency.",
    tags: [
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "responsiveness",
        color: "pink-text-gradient",
      },
      {
        name: "React Query",
        color: "green-text-gradient",
      },
    ],
    image: AireAdmin,
    source_code_link: "https://www.wearedepart.com/",
  },
  {
    name: "Sosna Gems Store - Shopify Website",
    description:
      "I designed and developed this elegant, responsive e-commerce website for Sosna Gems, a handmade jewelry brand specializing in one-of-a-kind pieces.",
    tags: [
      {
        name: "Shopify",
        color: "pink-text-gradient",
      },
      {
        name: "optimized",
        color: "green-text-gradient",
      },
      {
        name: "responsiveness",
        color: "pink-text-gradient",
      },
      {
        name: "ecommerce",
        color: "green-text-gradient",
      },
    ],
    image: Sosna,
    source_code_link: "https://sosnagems.com/",
  },
  {
    name: "Posh Pop Bakeshop - Shopify Website",
    description:
      "I designed and optimized this high-end eCommerce website for Posh Pop Bakeshop, a gluten-free dessert brand known for luxurious baked goods.",
    tags: [
      {
        name: "Shopify",
        color: "pink-text-gradient",
      },
      {
        name: "business",
        color: "green-text-gradient",
      },
      {
        name: "responsiveness",
        color: "pink-text-gradient",
      },
      {
        name: "ecommerce",
        color: "green-text-gradient",
      },
    ],
    image: Bakeshop,
    source_code_link: "https://www.poshpopbakeshop.com/",
  },
  {
    name: "Vape Store Online - Shopify",
    description:
      " designed and developed a modern, responsive e-commerce website for a vape store, offering an intuitive user experience and seamless shopping flow.",
    tags: [
      {
        name: "Shopify",
        color: "pink-text-gradient",
      },
      {
        name: "business",
        color: "green-text-gradient",
      },
      {
        name: "Store",
        color: "pink-text-gradient",
      },
      {
        name: "ecommerce",
        color: "green-text-gradient",
      },
    ],
    image: Vape,
    source_code_link: "https://trendingvapestore.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
