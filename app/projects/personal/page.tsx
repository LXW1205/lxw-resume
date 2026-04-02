import ProjectsView from "../components/ProjectsView"
import { personalProjects } from "../data/projects"

export default function PersonalProjectsPage() {
    return (
        <ProjectsView
            title="Personal Projects"
            description="Showcasing my personal projects and experiments"
            projects={personalProjects}
            activeTab="personal"
        />
    )
}
