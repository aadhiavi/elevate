// Home page

import { Link } from 'react-router-dom';
import { Card } from '../components';
import { GraduationCap, Users, Award, Globe, TrendingUp, Star, ArrowRight, ShieldCheck, Map, Rocket, Heart, Settings } from 'lucide-react';
import { HeroDecoration, FloatingElements } from '../components/Decorations';
import { useSEO } from '../hooks/useSEO';
import malaysiaLife from '../assets/malaysia_life.png';
import careerSuccess from '../assets/career_success.png';

export const Home = () => {
  useSEO({
    title: 'Study in Malaysia for Indian Students | TSEA Education India',
    description: 'Explore affordable study abroad options with TSEA Education. Get expert guidance for universities in Malaysia, visa support, and career-focused pathways.',
    keywords: 'study in Malaysia for Indian students, Malaysia education consultancy India, affordable study abroad options'
  });

  return (
    <div className="space-y-12 md:space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white shadow-2xl" data-aos="fade-up">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.35),_transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.2),_transparent_35%)]" />
        <HeroDecoration />
        <FloatingElements />
        <div className="relative grid gap-12 lg:grid-cols-[1.3fr_0.7fr] items-center p-6 md:p-16">
          <div className="space-y-6 md:space-y-10" data-aos="fade-right" data-aos-delay="200">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-400" />
              <span className="inline-block rounded-full bg-emerald-500/10 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-sm font-black uppercase tracking-[0.2em] text-emerald-300 border border-emerald-500/20">
                Elevate Advisors | TSEA Education
              </span>
            </div>
            <h1 className="text-4xl xs:text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl leading-[1.1]">
              Study in Malaysia for
              <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Indian Students
              </span>
              <span className="text-2xl sm:text-4xl lg:text-5xl block mt-4 text-slate-300 font-bold">Affordable Global Education Starts Here</span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl leading-relaxed text-slate-200 font-medium">
              TSEA Education is a trusted Malaysia education consultancy in India helping students access world-class universities and career-focused study abroad pathways.
            </p>


            <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 max-w-2xl">
              <p className="text-lg text-slate-300">
                Looking for affordable study abroad options? We help students from South India explore universities in Malaysia, offering globally recognized degrees, low tuition costs, and strong career opportunities.
              </p>
            </div>

            <div className="flex flex-col xs:flex-row gap-4 sm:gap-6">
              <Link to="/services" className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-black text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 hover:scale-105 transition-all duration-300">
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-black text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300">
                Get Free Guide
              </Link>
            </div>


            {/* Fast Facts Overlay */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">4-Hour Flight Time</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">English-Medium Instruction</span>
              </div>
            </div>
          </div>

          <div className="relative group lg:mt-0 mt-8" data-aos="fade-left" data-aos-delay="400">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-[3rem] blur-2xl group-hover:opacity-100 transition-opacity duration-500 opacity-50" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl">
              <img
                src={malaysiaLife}
                alt="Indian Student in Malaysia"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">Preferred Destination</h4>
                      <p className="text-emerald-200 text-sm font-semibold uppercase tracking-wider">Top Choice for Indian Students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About TSEA Snapshot Section */}
      <section className="relative p-6 sm:p-8 md:p-16 bg-white rounded-[2rem] md:rounded-[3rem] shadow-xl overflow-hidden group" data-aos="fade-up">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="grid gap-8 lg:grid-cols-2 items-center relative z-10">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-600 text-xs sm:text-sm font-black uppercase tracking-widest">
              <Users className="h-4 w-4" /> About TSEA Education
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              The 11th Venture under
              <span className="block text-emerald-600">Trade Syndicate</span>
            </h2>
            <div className="space-y-4 md:space-y-6">
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                TSEA Education is dedicated to helping students from South India access global education opportunities.
              </p>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                In collaboration with international education experts, we provide structured pathways from school to career, ensuring every student is prepared for a successful future.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-2">
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                <div className="text-2xl sm:text-3xl font-black text-emerald-600 mb-1">11+</div>
                <p className="text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-wider">Successful Ventures</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="text-2xl sm:text-3xl font-black text-blue-600 mb-1">Expert</div>
                <p className="text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-wider">Education Advisors</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl h-64 sm:h-96 lg:h-full">
            <img
              src={careerSuccess}
              alt="Collaboration and Success"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>


      {/* Why Choose TSEA - Feature Grid */}
      <section className="space-y-16" data-aos="fade-up">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-600 text-sm font-bold uppercase tracking-widest">
            Why TSEA Education?
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900">Premium Guidance for Success</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {[
            {
              title: 'Personalized Education Pathways',
              desc: 'Customized study plans tailored to individual student strengths and career goals.',
              icon: GraduationCap,
              color: 'emerald'
            },
            {
              title: 'Global University Partnerships',
              desc: 'Direct access to top-ranked Malaysian universities and international branch campuses.',
              icon: Globe,
              color: 'blue'
            },
            {
              title: 'Career-Focused Approach',
              desc: 'Bridging the gap between academic learning and regional industry demands.',
              icon: TrendingUp,
              color: 'purple'
            },
            {
              title: 'End-to-End Support',
              desc: 'Complete assistance from initial counseling to on-ground support in Malaysia.',
              icon: Heart,
              color: 'rose'
            },
            {
              title: 'Data-Driven Guidance',
              desc: 'Using market trends and statistics to recommend the most promising programs.',
              icon: Award,
              color: 'orange'
            }
          ].map((feature, i) => (
            <Card key={i} className="p-6 sm:p-8 group hover:-translate-y-2 transition-all duration-500 border-none shadow-xl hover:shadow-2xl flex flex-col items-center text-center rounded-[2rem] bg-white">
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center bg-${feature.color}-50 text-${feature.color}-600 mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-7 w-7 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-4 tracking-tight leading-snug">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{feature.desc}</p>
            </Card>
          ))}
        </div>

      </section>

      {/* Pathway to Malaysia - Expanded Roadmap */}
      <section className="py-16 md:py-20 bg-slate-900 text-white rounded-[2rem] md:rounded-[4rem] px-6 sm:px-8 md:px-16" data-aos="fade-up">
        <div className="text-center space-y-4 mb-12 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-black">Your Pathway to Success</h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            A structured, stress-free roadmap taking you from South India to the heart of world-class education.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
          {[
            {
              step: '01',
              title: 'Consultation',
              desc: 'We map your student profile to the best-fit programs and universities.',
              icon: ShieldCheck,
              color: 'text-emerald-400'
            },
            {
              step: '02',
              title: 'Admission',
              desc: 'Direct application support, document verification, and communication.',
              icon: Map,
              color: 'text-blue-400'
            },
            {
              step: '03',
              title: 'Visa & Logistics',
              desc: 'Expert visa guidance and assistance with travel for a smooth transition.',
              icon: Settings,
              color: 'text-purple-400'
            },
            {
              step: '04',
              title: 'Orientation',
              desc: 'On-ground assistance in Malaysia to help you settle into campus life.',
              icon: Rocket,
              color: 'text-orange-400'
            },
          ].map((item, index) => (
            <div key={item.step} className="relative group p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-black text-base border border-white/10 shadow-xl">
                  {item.step}
                </div>
              </div>
              <h3 className="text-xl font-black mb-3 text-white tracking-tight">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Quick Facts Section */}
      {/* <section className="grid gap-8 md:grid-cols-4" data-aos="fade-up">
        {[
          { label: 'Annual Tuition', value: '₹3L - ₹6L', sub: 'Highly Competitive' },
          { label: 'Living Costs', value: '₹20k/mo', sub: 'Affordable Lifestyle' },
          { label: 'Global Rank', value: 'Top 100', sub: 'World-Class Univs' },
          { label: 'Job Market', value: 'Growing', sub: 'Multinational Presence' }
        ].map((fact, idx) => (
          <div key={idx} className="p-8 rounded-3xl bg-white shadow-lg border border-slate-50 text-center">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">{fact.label}</p>
            <div className="text-3xl font-black text-slate-900 mb-1">{fact.value}</div>
            <p className="text-xs font-bold text-emerald-600 lowercase">{fact.sub}</p>
          </div>
        ))}
      </section> */}

      {/* Final CTA */}
      <section className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-16 md:py-20 px-6 sm:px-8 text-center" data-aos="fade-up">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent_70%)] opacity-50" />
        <div className="relative max-w-4xl mx-auto space-y-8 md:space-y-10">
          <h2 className="text-4xl md:text-7xl font-black tracking-tight leading-tight">Ready for your Malaysia Success Story?</h2>
          <p className="text-lg md:text-2xl text-white/90 font-medium">
            Join thousands of Indian students studying in top Malaysian campuses today.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="px-10 md:px-12 py-4 md:py-5 bg-white text-emerald-600 rounded-full font-black text-lg md:text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
