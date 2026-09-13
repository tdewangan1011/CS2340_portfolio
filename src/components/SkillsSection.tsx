import { skillGroups } from '../data/portfolio';
import { SectionHeader } from './SectionHeader';

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Technical Skills"
          title="Tools and technologies I have worked with"
          description="Grouped by the kinds of projects where I have used them: programming, machine learning, web development, data infrastructure, and leadership."
          align="center"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {skillGroups.map((group) => (
            <div key={group.title} className="glass-panel p-5">
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
