import { projects } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';
import { SectionHeader } from './SectionHeader';

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Projects"
          title="Projects and research work"
          description="A selection of class, research, internship, personal, and community projects. These range from data analysis and backend development to machine learning research and nonprofit work."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
