import { ClassProjectSection } from './components/ClassProjectSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { FeaturedProject } from './components/FeaturedProject';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { ResumeSection } from './components/ResumeSection';
import { SkillsSection } from './components/SkillsSection';

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-ink text-slate-100">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(54,244,218,0.16),transparent_28%),radial-gradient(circle_at_76%_14%,rgba(167,139,250,0.12),transparent_25%),linear-gradient(135deg,#07111f_0%,#0b1220_48%,#081b22_100%)]" />
        <div className="data-grid absolute inset-0 opacity-45" />
        <div className="airflow absolute inset-0 opacity-50" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <ClassProjectSection />
        <FeaturedProject />
        <ProjectsSection />
        <ExperienceTimeline />
        <SkillsSection />
        <ResumeSection />
      </main>
      <Footer />
    </div>
  );
}
