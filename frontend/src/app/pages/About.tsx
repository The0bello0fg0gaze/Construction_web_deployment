import { VALUES } from "../data/mockData";
import { ShieldCheck, Award, Handshake, Leaf, Building2, Users, Target } from "lucide-react";

export default function About() {
  const iconMap: Record<string, any> = {
    ShieldCheck,
    Award,
    Handshake,
    Leaf
  };

  return (
    <div className="flex flex-col flex-1 bg-white pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6 tracking-tight">About BuildCorp</h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Building the foundations of tomorrow with uncompromising dedication to quality, safety, and our clients' vision.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-24">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900">ABOUT US</h2>
              <div className="w-20 h-1.5 bg-amber-500 rounded-full"></div>
              <p className="text-lg text-neutral-600 leading-relaxed">
	      The constructors is a leading construction contracting firm specializing in Reinforced Cement Concrete (RCC) works and comprehensive finishing services to deliver turnkey lock-and-key solutions. With a skilled workforce and modern construction techniques, we ensure high-quality, durable, and cost-effective structures for residential, commercial, and industrial projects. Our team of skilled professionals is equipped to handle all aspects of your project, from structural reinforcement to detailed finishing touches. Surya Construction ensures minimal time and cost overruns, delivering excellent quality project outcomes with honesty and professional integrity. At Surya Construction, the union of advanced technology and a professional approach has propelled us to our current standing in the industry.
	      </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Throughout our journey, our commitment to excellence has never wavered. We invest heavily in our team, integrating cutting-edge technology and sustainable practices to ensure every project is delivered safely, on time, and beyond expectations.
              </p>
            </div>
            <div className="lg:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl h-[400px] w-full">
              <img 
                src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200" 
                alt="BuildCorp Team on site" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-neutral-900/10"></div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-neutral-50 rounded-3xl p-8 md:p-12 mb-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Our Mission</h3>
            <p className="text-neutral-600 leading-relaxed">
              To deliver exceptional construction services through innovation, foresight, and integrity, fostering long-lasting relationships built on trust and mutual success.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8 text-neutral-600" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Our Vision</h3>
            <p className="text-neutral-600 leading-relaxed">
              To be the premier construction company recognized globally for our commitment to sustainable building, technological advancement, and community enrichment.
            </p>
          </div>
        </section>

        {/* Company Values */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Core Values</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              The principles that guide our decisions, actions, and the way we build.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, index) => {
              const Icon = iconMap[value.icon] || ShieldCheck;
              return (
                <div 
                  key={index} 
                  className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-lg hover:border-amber-200 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-neutral-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-50 group-hover:scale-110 transition-all">
                    <Icon className="w-7 h-7 text-neutral-700 group-hover:text-amber-500 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{value.title}</h3>
                  <p className="text-neutral-600 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
