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
    // tailwind,
    git,
    docker,
    // carrent,
    // jobit,
    // tripguide,
    netspi,
    java,
    python,
    csharp,
    // springboot,
    springframework,
    dotnet,
    // mysql,
    postgresql,
    // mui,
    // bootstrap,
    aws,
    // awsS3,
    // awslambda,
    sunbeam,
    sppu,
    bharati,
    portfolio,
    opus,
    emeraldoasis,
} from "../assets";
import NavbarLink from "./enums";
import { Education, Experience, NavLink, Project, ProjectTag, Service, Technology, Testimonial } from "./types";

export const navLinks: NavLink[] = [
    {
        id: NavbarLink.ABOUT.toLowerCase(),
        title: NavbarLink.ABOUT,
    },
    {
        id: NavbarLink.EXPERIENCE.toLowerCase(),
        title: NavbarLink.EXPERIENCE,
    },
    {
        id: NavbarLink.SKILLS.toLowerCase(),
        title: NavbarLink.SKILLS,
    },
    {
        id: NavbarLink.PROJECTS.toLowerCase(),
        title: NavbarLink.PROJECTS,
    },
    {
        id: NavbarLink.EDUCATION.toLowerCase(),
        title: NavbarLink.EDUCATION,
    },
    {
        id: NavbarLink.TESTIMONIALS.toLowerCase(),
        title: NavbarLink.TESTIMONIALS,
    },
    {
        id: NavbarLink.CONTACT.toLowerCase(),
        title: NavbarLink.CONTACT,
    },
];

const about: string =
    "Fast-paced Fullstack Software Engineer, leading transformative initiatives in advanced technological solutions."
    + " Recognised for adeptly architecting high-performance applications, collaborating across teams to deliver"
    + " cutting-edge and secure outcomes. As a dedicated advocate for technological progress, actively cultivating"
    + " connections with industry peers, fostering a collaborative spirit to propel the boundaries of innovation and excellence."

const services: Service[] = [
    {
        title: "Database Technologies",
        icon: mobile,
    },
    {
        title: "Backend Development",
        icon: backend,
    },
    {
        title: "Frontend Development",
        icon: web,
    },
    {
        title: "Cloud Computing",
        icon: creator,
    },
];

const technologies: Technology[] = [
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Python",
        icon: python,
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
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "C#",
        icon: csharp,
    },
    // {
    //     name: "Spring Boot",
    //     icon: springboot,
    // },
    {
        name: "Spring Framework",
        icon: springframework,
    },
    {
        name: ".NET Core",
        icon: dotnet,
    },
    // {
    //     name: "MySQL",
    //     icon: mysql,
    // },
    {
        name: "PostgreSQL",
        icon: postgresql,
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
        name: "Git",
        icon: git,
    },
    // {
    //     name: "Material UI",
    //     icon: mui,
    // },
    // {
    //     name: "Tailwind CSS",
    //     icon: tailwind,
    // },
    // {
    //     name: "Bootstrap",
    //     icon: bootstrap,
    // },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "AWS",
        icon: aws,
    },
    // {
    //     name: "AWS S3",
    //     icon: awsS3,
    // },
    // {
    //     name: "AWS Lambda",
    //     icon: awslambda,
    // }
];

const experiences: Experience[] = [
    {
        title: "Software Engineer",
        companyName: "NetSPI",
        icon: netspi,
        iconBg: "#E6DEDD",
        date: "July 2023 - Present",
        points: [
            "Led the successful implementation of Multi-Factor Authentication (MFA) in Spring Framework with Java, enhancing user security via phone number and Microsoft Authenticator app, which resulted in a 30% reduction in unauthorised intrusion attempts.",
            "Initiated an innovative login flow in React with Typescript supporting features like MFA, password expiration, and prevention of reuse.",
            "Mentored and empowered new team members through comprehensive training in product, code, and technology practices for swift integration and impactful contributions to product advancement.",
            "Demonstrated adaptability through a swift transition to a new project, with a driven mindset and delivering valuable contributions that accelerated the timeline by 15%.",
        ],
    },
    {
        title: "Associate Software Engineer",
        companyName: "NetSPI",
        icon: netspi,
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
];

export const educations: Education[] = [
    {
        degree: 'PostGraduate Diploma in Advance Computing',
        grade: '84.63%',
        university: 'Sunbeam Institute of Information Technology, Pune, India',
        date: 'Sep 2021 - Apr 2022',
        icon: sunbeam,
        iconBg: '#FAF9F6',
        points: [
            'Honored to possess a PG Diploma in Advanced Computing and securing All India Rank 1 in the CCAT entrance exam.',
            'The diverse syllabus covered critical subjects such as OS, Software Development Methodologies, OOP, DSA, Database Technologies, Web-based Java Programming, Web Programming, and .NET, shaping my skill set.',
            'Led restaurant management website project, guiding team to develop a robust solution using Spring, React, and MySQL, showcasing technical acumen and effective leadership.',
            'Top-ranking academic excellence combined with practical project leadership provides a versatile skill set for tackling complex challenges in software development.',
        ]
    },
    {
        degree: 'Bachelor of Engineering (Mechanical)',
        grade: '7.59',
        university: 'Savitribai Phule Pune University, India',
        date: 'Aug 2017 - Nov 2020',
        icon: sppu,
        iconBg: '#FAF9F6',
        points: [
            'Sponsorship Coordinator role in the final year showcased strategic thinking and effective coordination, directly transferrable to software development.',
            'Department Head role in the third year honed project management and organizational abilities, emphasizing precision and attention to detail—qualities seamlessly transitioned into the software engineering role.',
            'Leadership experiences contribute to a results-oriented mindset and collaborative approach, enhancing the ability to thrive in cross-functional software development teams.'
        ]
    },
    {
        degree: 'Diploma in Mechanical Engineering',
        grade: '81.53%',
        university: 'Bharati VidyaPeeth Deemed University Pune, India',
        date: 'Aug 2014 - Jun 2017',
        icon: bharati,
        iconBg: '#FAF9F6',
        points: [
            'Diploma and diverse co-curriculars strengthened hands-on problem-solving skills for software engineering challenges.',
            'Active project participation showcased adeptness in applying engineering principles, fostering crucial collaborative and communication skills.',
            'Unique blend of strategic thinking, organizational prowess, and hands-on problem-solving equips tools to address complex software challenges with confidence, fostering a dynamic work environment.'
        ]
    }
]

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
        name: "Portfolio",
        description:
            "The Portfolio Project is a comprehensive web application designed to showcase a software developer's skills, projects, experiences, and achievements in a visually appealing and interactive manner. This portfolio acts as a digital resume and a platform for the developer to present their professional journey, skills, and accomplishments.",
        tags: [
            {
                name: "react",
                color: "orange-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "three",
                color: "blue-text-gradient",
            },
            {
                name: "framer",
                color: "pink-text-gradient",
            },
            {
                name: "reacttilt",
                color: "yellow-text-gradient",
            },
        ] as ProjectTag[],
        image: portfolio,
        link: "https://github.com/saurabhthecodewizard/portfolio",
    },
    {
        name: "Opus",
        description:
            "A corporate management system which is a specialized solution designed to facilitate efficient management of resources within an organization. This comprehensive system streamlines various HR processes, including employee onboarding, attendance tracking, project and task management.",
        tags: [
            {
                name: "java",
                color: "orange-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "springboot",
                color: "blue-text-gradient",
            },
            {
                name: "mysql",
                color: "pink-text-gradient",
            },
            {
                name: "react",
                color: "yellow-text-gradient",
            },
            {
                name: "redux",
                color: "indigo-text-gradient",
            },
        ] as ProjectTag[],
        image: opus,
        link: "https://github.com/saurabhthecodewizard/opus-client",
        extraLink: "https://github.com/saurabhthecodewizard/opus-server",
    },
    {
        name: "Emerald Oasis",
        description:
            "A Multi-Cuisine Food Ordering System which revolutionizes the dining experience for customers of the restaurant chain, Emerald Oasis. This intuitive system offers an online ordering solution that allows customers to explore a diverse multi-cuisine menu, place orders, all from the comfort of their homes or on-the-go.",
        tags: [
            {
                name: "java",
                color: "orange-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "springboot",
                color: "blue-text-gradient",
            },
            {
                name: "mysql",
                color: "pink-text-gradient",
            },
            {
                name: "react",
                color: "yellow-text-gradient",
            },
        ] as ProjectTag[],
        image: emeraldoasis,
        link: "https://github.com/saurabhthecodewizard/Emerald-Oasis",
    },
];

export { about, services, technologies, experiences, testimonials, projects };