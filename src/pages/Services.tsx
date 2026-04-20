import { Card, Button } from '../components';
import { 
  GraduationCap, 
  TrendingUp, 
  Home,
  ShieldCheck,
  CheckCircle2,
  Heart,
  Plane,
  ArrowRight
} from 'lucide-react';
import servicesHero from '../assets/services_hero.png';
import visaImg from '../assets/visa_premium.png';
import familyImg from '../assets/family_premium.png';
import campusImg from '../assets/campus.png';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

export const Services = () => {
  useSEO({
    title: 'Overseas Education Consultants India | TSEA Services',
    description: 'TSEA Education is your trusted overseas education consultants in South India. We provide end-to-end support for university applications and visa assistance.',
    keywords: 'overseas education consultants India, study abroad consultants South India'
  });

  const tseaServices = [
    {
      title: 'University Applications',
      description: 'End-to-end support for selecting and applying to universities, ensuring all documentation meets global standards.',
      icon: GraduationCap,
      features: ['Institutional Matching', 'Document Verification', 'Application Management'],
      color: 'blue',
      image: campusImg
    },
    {
      title: 'Career Counseling',
      description: 'Personalized guidance to align your international education with future high-impact career opportunities.',
      icon: TrendingUp,
      features: ['Goal Alignment', 'Skills Assessment', 'Market Insights'],
      color: 'emerald',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Visa Assistance',
      description: 'Smooth and guided visa application process with our expert advisors, maintaining high success rates.',
      icon: ShieldCheck,
      features: ['Document Preparation', 'Interview Coaching', 'Status Training'],
      color: 'purple',
      image: visaImg
    },
    {
      title: 'Accommodation Support',
      description: 'Help finding safe, affordable, and high-quality housing options close to your chosen university campus.',
      icon: Home,
      features: ['Safety Verification', 'Budget Optimization', 'Lease Assistance'],
      color: 'orange',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Pre-Departure Support',
      description: 'Everything you need before moving abroad, from cultural briefing to essential logistics and packing guides.',
      icon: Plane,
      features: ['Cultural Orientation', 'Emergency Protocols', 'Travel Checklists'],
      color: 'cyan',
      image: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Parent & Travel Assistance',
      description: 'Dedicated support for families visiting or accompanying students, ensuring comfort for the whole family.',
      icon: Heart,
      features: ['Family Visa Support', 'Travel Coordination', 'Settling-in Services'],
      color: 'rose',
      image: familyImg
    }
  ];

  return (
    <div className="space-y-16 md:space-y-32 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-slate-900 shadow-2xl" data-aos="fade-up">
        <div className="absolute inset-0 grayscale opacity-40 hover:grayscale-0 transition-all duration-1000">
          <img src={servicesHero} alt="Premium Consultancy" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/85 to-transparent" />
        <div className="relative p-8 sm:p-12 md:p-24 lg:p-32 max-w-4xl space-y-6 md:space-y-8" data-aos="fade-right">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-400 text-xs sm:text-sm font-black uppercase tracking-widest border border-emerald-500/30">
            Expert Consultancy
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1]">
            Trusted Overseas <br/>
            <span className="text-emerald-400 italic">Advisors in India</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 leading-relaxed max-w-2xl font-medium">
            Providing end-to-end support for students from South India planning their global education journey.
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            <Link to="/contact">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 px-8 sm:px-10 text-base sm:text-lg font-black rounded-full shadow-lg shadow-emerald-500/30">
                Book Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="space-y-16 md:space-y-20">
        <div className="text-center space-y-4" data-aos="fade-up">
          <h2 className="text-3xl md:text-6xl font-black text-slate-900 leading-tight">What We Offer</h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed px-4">Comprehensive support systems built on trust, efficiency, and global standards.</p>
        </div>

        <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {tseaServices.map((service, index) => (
            <Card 
              key={index} 
              className="flex flex-col group overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {service.image && (
                <div className="h-44 sm:h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              )}
              <div className="p-8 sm:p-10 space-y-6 md:space-y-8 flex-1">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center bg-slate-50 text-slate-900 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-inner`}>
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm sm:text-base">{service.description}</p>
                </div>
                <div className="space-y-3.5 sm:space-y-4 pt-6 border-t border-slate-50">
                  {service.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-3 text-slate-500 font-bold text-sm sm:text-base">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>



      {/* Unique Value Section */}
      <section className="bg-slate-50 rounded-[2rem] md:rounded-[4rem] p-8 sm:p-12 md:p-24 relative overflow-hidden" data-aos="fade-up">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/5 -rotate-12 translate-x-1/2 translate-y-1/2 rounded-full blur-3xl pointer-events-none" />
        <div className="relative grid gap-12 md:gap-16 lg:grid-cols-2 items-center">
          <div className="space-y-8 md:space-y-10">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">Beyond Simple <br/><span className="text-emerald-500 underline decoration-emerald-200 underline-offset-8">Applications.</span></h2>
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
              We specialize in creating structured pathways that connect students to world-class educational hubs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-black flex items-center gap-3 hover:bg-slate-800 transition-all group active:scale-95">
                  Get Started <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-white p-8 sm:p-12 rounded-[2rem] md:rounded-[3.5rem] shadow-2xl border border-white space-y-12">
            <div className="text-center">
              <p className="text-[10px] sm:text-sm font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Our Success Rate</p>
              <div className="text-6xl sm:text-8xl font-black text-emerald-500">98%</div>
              <p className="text-lg sm:text-xl font-black text-slate-900 mt-4 tracking-tight">Visa Approval Success</p>
            </div>
            <div className="h-px bg-slate-100" />
            <div className="grid grid-cols-2 gap-6 sm:gap-8 text-center text-slate-900 font-black text-base sm:text-xl italic opacity-40">
              <div>Trust</div>
              <div>Expertise</div>
              <div>Efficiency</div>
              <div>Success</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-16 md:py-20 px-6 sm:px-8 text-center" data-aos="fade-up">
        <div className="relative max-w-4xl mx-auto space-y-8 md:space-y-10">
          <h2 className="text-4xl md:text-7xl font-black tracking-tight leading-tight">Ready to Start Your Journey?</h2>
          <p className="text-lg md:text-2xl text-white/90 font-medium max-w-2xl mx-auto italic">
            "We handle the logistics so you can focus on your future."
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact">
              <button className="px-10 md:px-12 py-4 md:py-5 bg-white text-emerald-600 rounded-full font-black text-lg md:text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
                Consult an Expert
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

