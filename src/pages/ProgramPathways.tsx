import { Map, BookOpen, GraduationCap as GraduationIcon, Award, Briefcase, TrendingUp, ShieldCheck } from 'lucide-react';
import pathwayRoadmap from '../assets/pathway_roadmap.png';
import { useSEO } from '../hooks/useSEO';

export const ProgramPathways = () => {
  useSEO({
    title: 'Study Abroad Program Pathways | TSEA Education',
    description: 'Find the best countries to study abroad after 12th. Get structured guidance on diplomas, degrees, and post study work in Malaysia with TSEA Education.',
    keywords: 'best countries to study abroad after 12th, post study work Malaysia'
  });

  return (
    <div className="space-y-16 md:space-y-32 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white shadow-2xl" data-aos="fade-up">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.35),_transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.2),_transparent_35%)]" />
        <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center p-8 md:p-20">
          <div className="space-y-8" data-aos="fade-right" data-aos-delay="200">
            <div className="flex items-center gap-3">
              <Map className="h-10 w-10 text-emerald-400" />
              <span className="inline-block rounded-full bg-emerald-500/10 px-6 py-3 text-lg font-bold uppercase tracking-[0.2em] text-emerald-300 border border-emerald-500/20">
                Strategic Roadmaps
              </span>
            </div>
            <h1 className="text-5xl font-black tracking-tight sm:text-7xl leading-[1.1]">
              Study Abroad <br/>
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Program Pathways
              </span>
            </h1>
            <p className="text-2xl font-bold text-slate-300">After 12th, Diploma & Graduation</p>
            <p className="max-w-2xl text-xl leading-relaxed text-slate-200 font-medium">
              We provide structured guidance for students looking to move to one of the best countries to study abroad after 12th, helping them choose the right pathway from diploma to degree to maximizing post study work Malaysia opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-black px-10 py-5 rounded-full shadow-lg shadow-emerald-500/20 transition-all duration-300 text-lg">
                Start Your Roadmap
              </button>
            </div>
          </div>
          <div className="relative group lg:mt-0 mt-8" data-aos="fade-left" data-aos-delay="400">
            <div className="absolute -inset-6 bg-blue-500/20 rounded-[3rem] blur-3xl group-hover:opacity-100 transition-opacity opacity-50" />
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src={pathwayRoadmap} 
                alt="Educational Pathway Roadmap" 
                className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Your Education Journey - Visual Roadmap */}
      <section className="space-y-16" data-aos="fade-up">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-bold uppercase tracking-widest">
            The Roadmap
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900">Your Education Journey</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            We guide students through every critical stage of their international academic progression.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 relative px-4 md:px-0">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-emerald-100 via-blue-100 to-purple-100 -translate-y-1/2 hidden lg:block" />
          {[
            { 
              title: "After 10th / 12th (HSC)", 
              pathway: "Diploma / TVET", 
              desc: "Fast-track technical education and vocational training leading to immediate industry skills.",
              icon: BookOpen,
              color: "emerald"
            },
            { 
              title: "After Diploma", 
              pathway: "Bachelor's Degree", 
              desc: "Transition into top-ranked university programs with advanced credit standing.",
              icon: GraduationIcon,
              color: "blue"
            },
            { 
              title: "After Bachelor's", 
              pathway: "Master's / PhD", 
              desc: "Advanced research and specialization to reach the peak of your professional career.",
              icon: Award,
              color: "purple"
            }
          ].map((step, i) => (
            <div key={i} className="relative z-10 group" data-aos="fade-up" data-aos-delay={i * 200}>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-50 flex flex-col items-center text-center h-full">
                <div className={`w-20 h-20 rounded-3xl bg-slate-50 text-slate-900 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner`}>
                  <step.icon className="h-10 w-10 text-blue-600" />
                </div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">{step.title}</p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-0.5 w-8 bg-slate-200" />
                  <h3 className="text-2xl font-black text-slate-900">{step.pathway}</h3>
                  <div className="h-0.5 w-8 bg-slate-200" />
                </div>
                <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="relative p-8 md:p-20 bg-slate-900 text-white rounded-[4rem] overflow-hidden" data-aos="fade-up">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(52,211,153,0.1),_transparent_40%)]" />
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                Our Strategic <br/>
                <span className="text-emerald-400">Approach</span>
              </h2>
              <p className="text-xl text-slate-300 font-medium leading-relaxed">
                We don’t just help you apply — we help you plan. Strategy is the core of successful global mobility.
              </p>
            </div>
            <div className="grid gap-8">
              {[
                { title: 'Course Selection', desc: 'Alignment with long-term career goals and industry evolution.', icon: TrendingUp },
                { title: 'University Matching', desc: 'Finding the right academic environment and cultural fit.', icon: Building2 },
                { title: 'Long-term Career Alignment', desc: 'Ensuring your study choice translates into global employability.', icon: Briefcase },
                { title: 'End-to-End Execution', desc: 'Strategic support from initial planning to departure.', icon: ShieldCheck },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-white/10 transition-all">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group grayscale hover:grayscale-0 transition-all duration-700">
             <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
               <div className="absolute inset-0 bg-blue-600/10" />
               <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Consultation Session" className="w-full h-auto" />
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-8 text-center" data-aos="fade-up">
        <div className="relative max-w-4xl mx-auto space-y-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight">Design Your Future <br /> Roadmap Today</h2>
          <p className="text-2xl text-white/90 font-medium">
             Expert consultation to align your education with your global ambitions.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-12 py-5 bg-white text-blue-600 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-all">
              Book Strategic Session
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const Building2 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>
  </svg>
);
