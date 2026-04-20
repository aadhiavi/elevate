// Why Malaysia page
import { Card } from '../components';
import { Users, Award, Globe, DollarSign, Shield, Briefcase, Heart, Coffee, CheckCircle, ArrowRight, Rocket } from 'lucide-react';
import campusImg from '../assets/campus.png';
import auditoriumImg from '../assets/auditorium.png';
import lifestyleImg from '../assets/lifestyle.png';
import { useSEO } from '../hooks/useSEO';

export const WhyMalaysia = () => {
  useSEO({
    title: 'Why Study in Malaysia | Low Cost Study Abroad Countries',
    description: 'Discover why Malaysia is one of the best countries to study abroad after 12th. Learn about the straightforward Malaysia student visa for Indians and affordable excellence.',
    keywords: 'low cost study abroad countries, Malaysia student visa for Indians, best countries to study abroad after 12th'
  });

  return (
    <div className="space-y-16 md:space-y-32 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white shadow-2xl" data-aos="fade-up">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.35),_transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.2),_transparent_35%)]" />
        <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center p-8 md:p-20">
          <div className="space-y-8" data-aos="fade-right">
            <div className="flex items-center gap-3">
              <Globe className="h-10 w-10 text-emerald-400" />
              <span className="inline-block rounded-full bg-emerald-500/10 px-6 py-3 text-lg font-bold uppercase tracking-[0.2em] text-emerald-300 border border-emerald-500/20">
                Study in Malaysia
              </span>
            </div>
            <h1 className="text-5xl font-black tracking-tight sm:text-7xl leading-[1.1]">
              Gateway to <br/>
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Global Excellence
              </span>
            </h1>
            <p className="max-w-2xl text-xl md:text-2xl leading-relaxed text-slate-200 font-medium">
              Malaysia is becoming one of the best countries to study abroad after 12th due to its affordability, global universities, and student-friendly environment.
            </p>
            <div className="p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
              <p className="text-lg text-slate-300 leading-relaxed">
                As one of the top low cost study abroad countries, it offers the perfect balance of cost and quality, including a streamlined Malaysia student visa for Indians. Experience a world-class education system in the heart of Southeast Asia.
              </p>
            </div>
          </div>
          <div className="relative group" data-aos="fade-left">
            <div className="absolute -inset-6 bg-emerald-500/20 rounded-[3rem] blur-3xl group-hover:opacity-100 transition-opacity opacity-50" />
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
              <img 
                src={campusImg} 
                alt="Modern Malaysia Campus" 
                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Indian Students Section */}
      <section className="space-y-12" data-aos="fade-up">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-50 rounded-full text-emerald-600 text-sm font-bold uppercase tracking-widest">
            The Indian Student Perspective
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900">Why Indian Students Choose Malaysia</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Affordability', desc: 'Lower cost of tuition and living compared to US, UK, or Australia.', icon: DollarSign, bg: 'bg-blue-50', color: 'text-blue-600' },
            { title: 'Smooth Visa Process', desc: 'Easy and fast Malaysia student visa processing for Indian citizens.', icon: CheckCircle, bg: 'bg-emerald-50', color: 'text-emerald-600' },
            { title: 'Post-Study Work', desc: 'Strong post-study work opportunities and internships in regional hubs.', icon: Briefcase, bg: 'bg-purple-50', color: 'text-purple-600' },
            { title: 'Cultural Familiarity', desc: 'Home to a massive Indian community, familiar food, and festivals.', icon: Heart, bg: 'bg-rose-50', color: 'text-rose-600' },
          ].map((item, i) => (
            <Card key={i} className="p-8 hover:shadow-2xl transition-all duration-500 group border-none bg-white">
              <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Malaysia - 4 Pillars */}
      <section className="relative p-8 md:p-20 bg-slate-50 rounded-[4rem] overflow-hidden" data-aos="fade-up">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        </div>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
              A Global Leader in <br/>
              <span className="text-blue-600">Higher Education</span>
            </h2>
            <div className="grid gap-8">
              {[
                { title: 'Globally Recognized Universities', desc: 'Study at internationally accredited institutions with high global rankings.', icon: Award },
                { title: 'Affordable Education & Living', desc: 'High-quality education without the financial burden of Western destinations.', icon: DollarSign },
                { title: 'High Visa Approval Rate', desc: 'Student-friendly policies with smooth and transparent visa processing.', icon: CheckCircle },
                { title: 'Post-Graduation Opportunities', desc: '12-month Graduate Pass to explore work, internships, and careers.', icon: Rocket },
              ].map((pillar, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <pillar.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{pillar.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
               <img src={auditoriumImg} alt="Modern University Auditorium" className="w-full h-auto" />
             </div>
             <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 max-w-xs">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Academic Excellence</p>
                <p className="text-lg font-bold text-slate-900 leading-tight">World-class infrastructure and high-tech campus facilities.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Global Hub of Opportunity */}
      <section className="py-20" data-aos="fade-up">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900">A Global Hub of Opportunity</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Malaysia sits at the heart of Southeast Asia’s growth, home to regional headquarters of the world's most innovative giants.
          </p>
        </div>

        <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-slate-50 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {['Google', 'Microsoft', 'Intel', 'Shell', 'AirAsia', 'Grab'].map((company) => (
              <div key={company} className="text-2xl font-black text-slate-300 hover:text-slate-900 transition-colors cursor-default">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities Section */}
      <section className="space-y-16" data-aos="fade-up">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-bold uppercase tracking-widest">
              Top Ranked Institutions
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900">Partnered Universities</h2>
          </div>
          <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all flex items-center gap-2 group">
            Compare All Universities <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            'University of Malaya (UM)', 
            'Universiti Sains Malaysia (USM)', 
            'Monash University Malaysia', 
            'University of Nottingham Malaysia', 
            'Taylor’s University', 
            'Sunway University'
          ].map((uni, i) => (
            <Card key={i} className="p-8 flex items-center gap-6 group hover:bg-blue-600 transition-all duration-500 cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-black group-hover:bg-white transition-all">
                {i + 1}
              </div>
              <span className="text-xl font-black text-slate-900 group-hover:text-white transition-all">{uni}</span>
            </Card>
          ))}
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="relative py-20 rounded-[4rem] overflow-hidden" data-aos="fade-up">
        <div className="absolute inset-0 bg-slate-900" />
        <img src={lifestyleImg} alt="Life in Malaysia" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
        <div className="relative grid gap-16 lg:grid-cols-2 items-center p-8 md:p-20">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">Lifestyle in <br/><span className="text-emerald-400">Malaysia</span></h2>
            <div className="grid gap-8">
              {[
                { title: 'Safe & Welcoming', icon: Shield, desc: 'Highest safety standards with a friendly multicultural society.' },
                { title: 'Diverse Culture', icon: Users, desc: 'Vibrant mix of Malay, Indian, and Chinese communities.' },
                { title: 'Affordable Lifestyle', icon: Coffee, desc: 'High quality of life with world-famous food and vibrant cities.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-20 px-8 text-center" data-aos="fade-up">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent_70%)] opacity-50" />
        <div className="relative max-w-4xl mx-auto space-y-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight">Your Malaysia Journey Starts Here</h2>
          <p className="text-2xl text-white/90 font-medium italic">
            "The perfect bridge from South India to a global career."
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-12 py-5 bg-white text-emerald-600 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-all">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

