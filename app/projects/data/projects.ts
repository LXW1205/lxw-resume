export type Project = {
    title: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    link: string;
    images: string[];
};

export const academicProjects: Project[] = [
    {
        title: "Digital Scholarship and Tracking System",
        description: "A comprehensive platform for managing scholarship applications, tracking student eligibility, and automating award distribution workflows.",
        longDescription: "",
        technologies: ["HTML", "TailwindCSS", "Java", "PostgreSQL"],
        link: "#",
        images: [
            "/screenshots/scholarship-system-1.png",
            "/screenshots/scholarship-system-2.png",
            "/screenshots/scholarship-system-3.png"
        ]
    },
    {
        title: "Database of Cinema Ticketing System",
        description: "Designed and implemented a relational database schema for managing movie screenings, ticket reservations, and customer transactions.",
        longDescription: "",
        technologies: ["PostgreSQL"],
        link: "#",
        images: [
            "/screenshots/cinema-db-1.png",
            "/screenshots/cinema-db-2.png",
            "/screenshots/cinema-db-3.png"
        ]
    },
    {
        title: "Parking Lot System",
        description: "Object-oriented parking management system featuring real-time spot tracking, automated billing, and receipt generation.",
        longDescription: "",
        technologies: ["Java", "PostgreSQL"],
        link: "#",
        images: [
            "/screenshots/parking-system-1.png",
            "/screenshots/parking-system-2.png",
            "/screenshots/parking-system-3.png"
        ]
    },
    {
        title: "Seminar Management System",
        description: "Desktop application for coordinating seminar schedules, managing speaker assignments, and tracking attendee registrations.",
        longDescription: "",
        technologies: ["Java", "PostgreSQL"],
        link: "#",
        images: [
            "/screenshots/seminar-system-1.png",
            "/screenshots/seminar-system-2.png",
            "/screenshots/seminar-system-3.png"
        ]
    },
    {
        title: "MixToolz",
        description: "A web-based toolbox featuring multiple utility applications with an intuitive interface and responsive design.",
        longDescription: "",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://mixtoolz.vercel.app/",
        images: [
            "/screenshots/mixtools-1.png",
            "/screenshots/mixtools-2.png",
            "/screenshots/mixtools-3.png"
        ]
    }
];

export const personalProjects: Project[] = [
    {
        title: "Self-hosted Home Server",
        description: "",
        longDescription: "",
        technologies: ["Ubuntu", "Docker", "Portainer", "Nginx", "PostgreSQL", "Redis"],
        link: "https://lxw-resume.vercel.app/",
        images: [
            "/screenshots/homelab-1.png",
            "/screenshots/homelab-2.png",
            "/screenshots/homelab-3.png"
        ]
    }
];
