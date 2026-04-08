import { PROJECTS } from "../data/mockData";
import { Clock, CheckCircle2 } from "lucide-react";

export default function Projects() {
  const inProgress = PROJECTS.filter(p => p.status === "in-progress");
  const completed = PROJECTS.filter(p => p.status === "completed");

  const renderProjectCard = (project: any, isCompleted: boolean) => (
    <div key={project.id} className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
      <div className="h-64 relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isCompleted ? 'grayscale group-hover:grayscale-0' : ''}`}
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-neutral-900 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
          {project.category}
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-neutral-900 mb-3">{project.title}</h3>
        <p className="text-neutral-600 leading-relaxed mb-6 flex-grow">{project.description}</p>
        <div className="flex items-center gap-2 pt-4 border-t border-neutral-100 mt-auto">
          {isCompleted ? (
            <span className="flex items-center gap-2 text-green-600 font-semibold text-sm">
              <CheckCircle2 className="w-5 h-5" />
              {project.completionDate}
            </span>
          ) : (
            <span className="flex items-center gap-2 text-amber-600 font-semibold text-sm">
              <Clock className="w-5 h-5" />
              {project.completionDate}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col flex-1 bg-neutral-50 pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6 tracking-tight">Our Portfolio</h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            From groundbreaking infrastructure to iconic commercial spaces, explore the developments shaping our future.
          </p>
        </div>

        {/* In Progress */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-amber-100 rounded-lg">
              <Clock className="w-8 h-8 text-amber-600" />
            </div>
            <h2 className="text-3xl font-bold text-neutral-900">Active Sites</h2>
            <div className="h-px bg-neutral-200 flex-grow ml-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {inProgress.map(p => renderProjectCard(p, false))}
          </div>
        </section>

        {/* Completed */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-neutral-900">Completed Projects</h2>
            <div className="h-px bg-neutral-200 flex-grow ml-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {completed.map(p => renderProjectCard(p, true))}
          </div>
        </section>
      </div>
    </div>
  );
}