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
import NavbarLink from "./enums";
import { Experience, NavLink, Project, ProjectTag, Service, Technology, Testimonial } from "./types";

export const navLinks: NavLink[] = [
    {
        id: NavbarLink.ABOUT.toLowerCase(),
        title: NavbarLink.ABOUT,
    },
    {
        id: NavbarLink.WORK.toLowerCase(),
        title: NavbarLink.WORK,
    },
    {
        id: NavbarLink.CONTACT.toLowerCase(),
        title: NavbarLink.CONTACT,
    },
];

const services: Service[] = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies: Technology[] = [
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
    {
        name: "docker",
        icon: docker,
    },
];

const experiences: Experience[] = [
    {
        title: "Software Engineer",
        company_name: "NetSPI",
        icon: starbucks,
        iconBg: "#383E56",
        date: "July 2023 - Present",
        points: [
            "Spearheaded Multi-Factor Authentication (MFA) implementation successfully in Spring Framework with Java, enhancing user access security via phone number and Microsoft Authenticator app, which resulted in a 30% reduction in unauthorized access attempts, enhancing overall platform security.",
            "Designed an innovative login flow in React with Typescript supporting features like MFA, password expiration, and prevention of reuse, showcasing inventive problem-solving.",
            "Mentored and empowered new team members through comprehensive training in product, code, and tech practices for swift integration and impactful contributions to product development.",
            "Demonstrated adaptability by swiftly transitioning to a new product, showcasing a proactive mindset and integrating seamlessly into the work environment, delivering valuable contributions that accelerated the project timeline by 15%.",
        ],
    },
    {
        title: "Associate Software Engineer",
        company_name: "NetSPI",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "May 2022 - June 2023",
        points: [
            "Led the BAS (Breach and Attack Simulation) transition from a company-centric to an operation-centric focus, fostering collaboration through discussions with team members to optimize dashboards and APIs, resulting in a 25% improvement in detecting and mitigating potential security threats.",
            "Liaised transparent communication channels during untested status implementation for detection control level, aligning efforts with teammates on operation-centered dashboards.",
            "Cultivated a collaborative culture while working on features like MITRE Tag import with STIX models in C#, ensuring collective exploration of the best solutions, increasing team efficiency and problem-solving speed by 15%.",
            "Coordinated the product reporting feature using the pdfmake library in React, with a unique JavaScript and Web workers solution, which reduced report generation time by 60%, showcasing both efficiency and creative problem-solving.",
            "Implemented advanced filtering functionality for TTP Coverages with .NET Core, resulting in a 40% improvement in data analysis speed and accuracy, optimizing the platform for large-scale data processing.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials: Testimonial[] = [
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

const projects: Project[] = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ] as ProjectTag[],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ] as ProjectTag[],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ] as ProjectTag[],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };