// Home page

import { Link } from 'react-router-dom';
import { Button, Card } from '../components';
import { GraduationCap, Users, Award, Globe, TrendingUp, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { HeroDecoration, StatsDecoration, WaveDecoration, FloatingElements } from '../components/Decorations';
import { Settings, ShieldCheck, Map, Rocket } from 'lucide-react';
import homeHero from '../assets/home_hero.png';

export const Home = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white shadow-2xl" data-aos="fade-up">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.35),_transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.2),_transparent_35%)]" />
        <HeroDecoration />
        <FloatingElements />
        <div className="relative grid gap-12 lg:grid-cols-[1.3fr_0.7fr] items-center p-6 md:p-16">
          <div className="space-y-6 md:space-y-8" data-aos="fade-right" data-aos-delay="200">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-emerald-400" />
              <span className="inline-block rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Elevate Advisors Education
              </span>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              Transform Your
              <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Future Today
              </span>
            </h1>
            <p className="text-lg font-medium uppercase tracking-[0.3em] text-emerald-200">
              Trade Syndicate
            </p>
            <p className="max-w-2xl text-xl leading-8 text-slate-200">
              We are the architect of cross-border global mobility. Transforming uncertainty
              into direction and ambition for students and professionals worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="primary" size="lg" className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <GraduationCap className="mr-2 h-5 w-5" />
                Start Your Journey
              </Button>
              <Link to="/take-test" className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300">
                <Award className="mr-2 h-5 w-5" />
                Take Assessment
              </Link>
            </div>
          </div>
          <div className="relative group" data-aos="fade-left" data-aos-delay="400">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-[3rem] blur-2xl group-hover:opacity-100 transition-opacity duration-500 opacity-50" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl">
              <img 
                src={homeHero} 
                alt="International Student in Malaysia" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center">
                      <Star className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">#1 Study Destination</h4>
                      <p className="text-emerald-200 text-sm">Preferred by 200k+ Students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16" data-aos="fade-up">
        <WaveDecoration />
        <div className="relative grid gap-8 md:grid-cols-4">
          {[
            { number: '10,000+', label: 'Students Guided', icon: Users, color: 'from-blue-500 to-cyan-500' },
            { number: '50+', label: 'Partner Universities', icon: GraduationCap, color: 'from-emerald-500 to-green-500' },
            { number: '95%', label: 'Success Rate', icon: Award, color: 'from-purple-500 to-pink-500' },
            { number: '24/7', label: 'Support Available', icon: Globe, color: 'from-orange-500 to-red-500' },
          ].map((stat, index) => (
            <div key={stat.label} className="relative text-center group" data-aos="zoom-in" data-aos-delay={index * 100}>
              <StatsDecoration />
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="space-y-12" data-aos="fade-up">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-slate-900">Our Premium Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive education advisory solutions designed to transform your academic and career aspirations into reality.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'University Admissions',
              description: 'Expert guidance through the entire admission process for top universities worldwide.',
              icon: GraduationCap,
              color: 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200',
              iconColor: 'text-blue-600',
            },
            {
              title: 'Visa & Immigration',
              description: 'Complete support for student visas, work permits, and immigration procedures.',
              icon: Globe,
              color: 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200',
              iconColor: 'text-emerald-600',
            },
            {
              title: 'Career Counseling',
              description: 'Personalized career guidance and skill development programs for future success.',
              icon: TrendingUp,
              color: 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200',
              iconColor: 'text-purple-600',
            },
            {
              title: 'Accommodation Support',
              description: 'Assistance in finding safe, affordable housing options near your study destination.',
              icon: Users,
              color: 'bg-gradient-to-br from-orange-50 to-red-50 border-orange-200',
              iconColor: 'text-orange-600',
            },
          ].map((service, index) => (
            <Card key={service.title} className={`${service.color} border-2 hover:shadow-xl transition-all duration-300 group cursor-pointer`} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-7 w-7 ${service.iconColor}`} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">{service.title}</h3>
              <p className="text-slate-600 leading-6 mb-4">{service.description}</p>
              <div className="flex items-center text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl" data-aos="fade-up">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-slate-900">What Our Students Say</h2>
          <p className="text-xl text-slate-600">Real stories from students who achieved their dreams with our guidance</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              name: 'Sarah Chen',
              role: 'Computer Science Student',
              university: 'University of Malaya',
              content: 'Elevate Advisors made my dream of studying in Malaysia a reality. Their guidance was exceptional and they were there every step of the way.',
              rating: 5,
              avatar: 'SC',
            },
            {
              name: 'Ahmed Hassan',
              role: 'Business Administration',
              university: 'Monash University Malaysia',
              content: 'The visa process was seamless thanks to their expert team. I highly recommend Elevate Advisors to anyone considering international education.',
              rating: 5,
              avatar: 'AH',
            },
            {
              name: 'Priya Sharma',
              role: 'Medicine Student',
              university: 'AIMST University',
              content: 'Outstanding support throughout my application process. Their knowledge of Malaysian universities helped me make the best choice for my career.',
              rating: 5,
              avatar: 'PS',
            },
          ].map((testimonial, index) => (
            <Card key={testimonial.name} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-8" data-aos="fade-up" data-aos-delay={index * 150}>
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 leading-7 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                  <div className="text-xs text-slate-500">{testimonial.university}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20" data-aos="fade-up">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-slate-900">Our Proven Process</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Your journey to international success is simplified through our structured four-step approach.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-4 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 hidden md:block z-0" />
          {[
            { step: '01', title: 'Initial Assessment', desc: 'Detailed analysis of your goals and academic background.', icon: ShieldCheck, color: 'text-blue-600', bg: 'bg-blue-100' },
            { step: '02', title: 'University Selection', desc: 'Identifying institutions that perfectly match your aspirations.', icon: Map, color: 'text-emerald-600', bg: 'bg-emerald-100' },
            { step: '03', title: 'Application Support', desc: 'Expert guidance on documentation and visa procedures.', icon: Settings, color: 'text-purple-600', bg: 'bg-purple-100' },
            { step: '04', title: 'Successful Placement', desc: 'Finalizing admission and preparing for your new journey.', icon: Rocket, color: 'text-orange-600', bg: 'bg-orange-100' },
          ].map((item, index) => (
            <div key={item.step} className="relative z-10 text-center space-y-4 bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 group" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="h-8 w-8" />
              </div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">{item.step}</div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Universities Section */}
      <section className="py-16 border-y border-slate-200 overflow-hidden" data-aos="fade-up">
        <div className="text-center mb-10">
          <h3 className="text-lg font-semibold text-slate-500 uppercase tracking-[0.2em]">Partnered with Global Institutions</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           <div className="flex items-center gap-2 text-2xl font-black text-slate-400"><GraduationCap className="h-8 w-8" /> UNIVERSITY OF MALAYA</div>
           <div className="flex items-center gap-2 text-2xl font-black text-slate-400"><Award className="h-8 w-8" /> MONASH MALAYSIA</div>
           <div className="flex items-center gap-2 text-2xl font-black text-slate-400"><Globe className="h-8 w-8" /> TAYLOR'S UNIVERSITY</div>
           <div className="flex items-center gap-2 text-2xl font-black text-slate-400"><TrendingUp className="h-8 w-8" /> SUNWAY UNIVERSITY</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16" data-aos="fade-up">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.1),_transparent_70%)]" />
        <div className="relative text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Elevate Your Future?</h2>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Take the first step towards your international education journey. Our experts are here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="primary" size="lg" className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <GraduationCap className="mr-2 h-5 w-5" />
              Get Started Today
            </Button>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};