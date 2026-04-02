import ProjectsView from "../components/ProjectsView"
import { academicProjects } from "../data/projects"

export default function AcademicProjectsPage() {
    return (
        <ProjectsView
            title="Academic Projects"
            description="Showcasing my academic work and research"
            projects={academicProjects}
            activeTab="academic"
        />
    )
}
