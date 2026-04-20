import { Card, Button } from '../components';
import { 
  Briefcase, 
  Lightbulb, 
  Coffee, 
  Palette, 
  GraduationCap, 
  Rocket,
  ArrowRight,
  TrendingUp,
  Search,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import techImg from '../assets/opp_tech_innovation.png';
import eduImg from '../assets/opp_education.png';

export const Opportunities = () => {
  useSEO({
    title: 'Career & Graduate Opportunities in Malaysia | Elevate Education',
    description: 'Explore the growing job sectors and post-study work opportunities in Malaysia. Learn about the 12-month Graduate Pass and global career pathways for Indian students.',
    keywords: 'malaysia graduate pass, work in malaysia for indians, global career opportunities, tech jobs malaysia, study and work malaysia'
  });

  const sectors = [
    {
      title: 'Technology & Innovation',
      description: 'Join the forefront of digital transformation with rapidly growing tech hubs across Malaysia. Focus areas include AI, Fintech, and Cybersecurity.',
      icon: Lightbulb,
      color: 'blue',
      image: techImg
    },
    {
      title: 'Business & Entrepreneurship',
      description: 'Engage with a dynamic Southeast Asian economy. Top multinational corporations have their regional headquarters right here in Kuala Lumpur.',
      icon: Briefcase,
      color: 'emerald',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Hospitality & Tourism',
      description: 'Build a career in one of the world\'s most visited countries. Five-star resorts and global hospitality brands offer unmatched opportunities.',
      icon: Coffee,
      color: 'orange',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Creative Industries',
      description: 'From digital animation to high-end design studios, tap into a vibrant, government-supported creative media ecosystem.',
      icon: Palette,
      color: 'purple',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'International Education',
      description: 'An emerging global hub for higher learning. Experience and contribute to diverse academic environments and institutional partnerships.',
      icon: Globe,
      color: 'cyan',
      image: eduImg
    }
  ];

  const graduateAdvantages = [
    { title: 'Stay after graduation', icon: Rocket },
    { title: 'Search for jobs globally', icon: Search },
    { title: 'Gain real-world experience', icon: TrendingUp }
  ];

  return (
    <div className="space-y-16 md:space-y-32 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white shadow-2xl" data-aos="fade-up">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.15),_transparent_60%)]" />
        <div className="relative p-8 sm:p-12 md:p-24 lg:p-32 max-w-4xl space-y-6 md:space-y-8" data-aos="fade-right">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-400 text-xs sm:text-sm font-black uppercase tracking-widest border border-emerald-500/30">
            Global Careers
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1]">
            Build Your Future <br/>
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Beyond Borders</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 leading-relaxed font-medium">
            Discover rapidly growing opportunities across multiple modern industries, setting you up for worldwide success.
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            <Link to="/contact">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 px-8 sm:px-10 text-base sm:text-lg font-black rounded-full flex items-center gap-2 shadow-lg shadow-emerald-500/30">
                Explore Your Path <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* Growing Opportunities Grid */}
      <section className="space-y-12 md:space-y-16">
        <div className="text-center space-y-4" data-aos="fade-up">
          <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">Growing Sectors</h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed px-4">Thrive in industries that are shaping the future economy in Southeast Asia.</p>
        </div>

        <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, index) => (
            <Card 
              key={index} 
              className="flex flex-col group overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-48 sm:h-56 overflow-hidden">
                <img src={sector.image} alt={sector.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8 sm:p-10 space-y-6 flex-1">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-slate-50 text-slate-900 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-inner`}>
                  <sector.icon className="w-7 h-7" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">{sector.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm sm:text-base">{sector.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>


      {/* Graduate Advantage Section */}
      <section className="bg-slate-50 rounded-[2rem] md:rounded-[4rem] p-8 sm:p-12 md:p-24 relative overflow-hidden" data-aos="fade-up">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 -rotate-12 translate-x-1/4 translate-y-1/4 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative grid gap-12 md:gap-16 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8 md:space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full text-blue-600 text-xs sm:text-sm font-black uppercase tracking-widest border border-blue-500/20">
                Post-Study Visa
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 leading-tight">The 12-Month <br/><span className="text-blue-600 italic">Graduate Pass</span></h2>
            </div>
            
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
              Malaysia's progressive visa policies give you the runway you need to transition seamlessly into the workforce.
            </p>

            <div className="space-y-4 sm:space-y-6 pt-4">
              {graduateAdvantages.map((adv, idx) => (
                <div key={idx} className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-2xl shadow-md border border-slate-100 hover:translate-x-2 transition-transform" data-aos="fade-up" data-aos-delay={idx * 150}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <adv.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-lg sm:text-xl font-bold text-slate-800 leading-tight">{adv.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 h-64 sm:h-[400px] lg:h-[600px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" 
              alt="Graduate Success" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
              <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                  <span className="font-black text-slate-900 text-sm sm:text-base">Real-World Experience</span>
                </div>
                <p className="text-slate-600 font-bold text-[10px] sm:text-sm">Join a global workforce right out of university.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
