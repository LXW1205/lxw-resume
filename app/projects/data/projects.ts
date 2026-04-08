export type Project = {
    title: string;
    description: string;
    technologies: string[];
    deployUrl?: string;
    githubUrl?: string;
    images: string[];
};

export const academicProjects: Project[] = [
    {
        title: "Digital Scholarship and Tracking System",
        description: "A comprehensive platform for managing scholarship applications, tracking student eligibility, and automating award distribution workflows.",
        technologies: ["HTML", "TailwindCSS", "Java", "PostgreSQL"],
        deployUrl: "https://scholarship-system.onrender.com",
        githubUrl: "https://github.com/LXW1205/scholarship-system",
        images: [
            "/screenshots/scholarship-system-1.png",
            "/screenshots/scholarship-system-2.png",
            "/screenshots/scholarship-system-3.png"
        ]
    },
    {
        title: "Database of Cinema Ticketing System",
        description: "Designed and implemented a relational database schema for managing movie screenings, ticket reservations, and customer transactions.",
        technologies: ["PostgreSQL"],
        githubUrl: "https://github.com/LXW1205/cinema-ticketing-db",
        images: [
            "/screenshots/cinema-db-1.png",
            "/screenshots/cinema-db-2.png",
            "/screenshots/cinema-db-3.png"
        ]
    },
    {
        title: "Parking Lot System",
        description: "Object-oriented parking management system featuring real-time spot tracking, automated billing, and receipt generation.",
        technologies: ["Java", "PostgreSQL"],
        githubUrl: "https://github.com/LXW1205/parking-lot-system",
        images: [
            "/screenshots/parking-system-1.png",
            "/screenshots/parking-system-2.png",
            "/screenshots/parking-system-3.png"
        ]
    },
    {
        title: "Seminar Management System",
        description: "Desktop application for coordinating seminar schedules, managing speaker assignments, and tracking attendee registrations.",
        technologies: ["Java", "PostgreSQL"],
        githubUrl: "https://github.com/LXW1205/seminar-management",
        images: [
            "/screenshots/seminar-system-1.png",
            "/screenshots/seminar-system-2.png",
            "/screenshots/seminar-system-3.png"
        ]
    },
    {
        title: "MixToolz",
        description: "A web-based toolbox featuring multiple utility applications with an intuitive interface and responsive design.",
        technologies: ["HTML", "CSS", "JavaScript"],
        deployUrl: "https://mixtoolz.vercel.app/",
        githubUrl: "https://github.com/LXW1205/MixToolz",
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
        technologies: ["Ubuntu", "Docker", "Portainer", "Nginx", "PostgreSQL", "Redis"],
        images: [
            "/screenshots/homelab-1.png",
            "/screenshots/homelab-2.png",
            "/screenshots/homelab-3.png"
        ]
    }
];
