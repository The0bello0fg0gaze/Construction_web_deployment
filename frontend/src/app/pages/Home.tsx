import { Link } from "react-router";
import { ArrowRight, ChevronRight, CheckCircle2, Clock } from "lucide-react";
import { PROJECTS } from "../data/mockData";

export default function Home() {
  const workingProjects = PROJECTS.filter((p) => p.status === "in-progress").slice(0, 2);
  const completedProjects = PROJECTS.filter((p) => p.status === "completed").slice(0, 2);

  return (
    <div className="flex flex-col flex-1 bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] lg:h-[700px] bg-neutral-900 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-left text-white">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 font-semibold tracking-wider text-xs uppercase mb-6 border border-amber-500/30 backdrop-blur-sm">
              Building The Future
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Engineering excellence from <span className="text-amber-500">ground</span> to <span className="text-amber-500">sky</span>
            </h1>
            <p className="text-lg lg:text-xl text-neutral-300 font-medium mb-10 max-w-2xl leading-relaxed">
              We deliver world-class commercial, residential, and infrastructure projects with unwavering commitment to safety, quality, and integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/projects"
                className="bg-amber-500 hover:bg-amber-600 text-neutral-900 font-bold px-8 py-4 rounded-md transition-colors text-center text-lg flex items-center justify-center gap-2"
              >
                View Our Portfolio <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold px-8 py-4 rounded-md transition-colors text-center text-lg flex items-center justify-center"
              >
                Discover Our Values
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-amber-500 py-12 relative z-20 -mt-8 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-lg shadow-xl mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 divide-x divide-amber-600/30">
          <div className="text-center px-4">
            <p className="text-4xl font-extrabold text-neutral-900 mb-2">10+</p>
            <p className="text-amber-900 font-semibold text-sm uppercase tracking-wider">Years Experience</p>
          </div>
          <div className="text-center px-4">
            <p className="text-4xl font-extrabold text-neutral-900 mb-2">20+</p>
            <p className="text-amber-900 font-semibold text-sm uppercase tracking-wider">Projects Completed</p>
          </div>
          <div className="text-center px-4">
            <p className="text-4xl font-extrabold text-neutral-900 mb-2">6</p>
            <p className="text-amber-900 font-semibold text-sm uppercase tracking-wider">Active Sites</p>
          </div>
          <div className="text-center px-4">
            <p className="text-4xl font-extrabold text-neutral-900 mb-2">100%</p>
            <p className="text-amber-900 font-semibold text-sm uppercase tracking-wider">Safety Record</p>
          </div>
        </div>
      </section>

      {/* Projects Overview */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">Our Work</h2>
              <p className="text-lg text-neutral-600 max-w-2xl">
                Explore our portfolio of cutting-edge developments, from active construction sites to celebrated completions.
              </p>
            </div>
            <Link to="/projects" className="hidden md:flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors">
              See all projects <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* In Progress */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-neutral-200 pb-4">
                <Clock className="w-6 h-6 text-amber-500" />
                <h3 className="text-2xl font-bold text-neutral-900">In Progress</h3>
              </div>
              
              <div className="space-y-6">
                {workingProjects.map((project) => (
                  <div key={project.id} className="group bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col sm:flex-row">
                    <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-amber-500 text-neutral-900 text-xs font-bold px-2 py-1 rounded">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                      <h4 className="text-xl font-bold text-neutral-900 mb-2">{project.title}</h4>
                      <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                      <p className="text-amber-600 text-sm font-semibold flex items-center gap-1.5 mt-auto">
                        <Clock className="w-4 h-4" /> {project.completionDate}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Completed */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-neutral-200 pb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <h3 className="text-2xl font-bold text-neutral-900">Completed</h3>
              </div>
              
              <div className="space-y-6">
                {completedProjects.map((project) => (
                  <div key={project.id} className="group bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col sm:flex-row">
                    <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0"
                      />
                      <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                      <h4 className="text-xl font-bold text-neutral-900 mb-2">{project.title}</h4>
                      <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                      <p className="text-neutral-500 text-sm font-semibold flex items-center gap-1.5 mt-auto">
                        <CheckCircle2 className="w-4 h-4" /> {project.completionDate}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link to="/projects" className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors">
              See all projects <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}
