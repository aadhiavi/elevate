// About page

import { Card } from '../components';
import { GraduationCap, Users, Award, TrendingUp, Target, Heart, Shield, Mail } from 'lucide-react';
import aboutHero from '../assets/about_hero.png';
import teamCollage from '../assets/team_collage.png';

export const About = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white shadow-2xl" data-aos="fade-up">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.35),_transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.2),_transparent_35%)]" />
        <div className="relative grid gap-12 lg:grid-cols-2 items-center p-6 md:p-16">
          <div className="space-y-8" data-aos="fade-right">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-10 w-10 text-emerald-400" />
              <span className="inline-block rounded-full bg-emerald-500/10 px-6 py-3 text-lg font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Our Mission
              </span>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              Architect of
              <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Global Mobility
              </span>
            </h1>
            <p className="max-w-xl text-xl leading-8 text-slate-200">
              Transforming uncertainty into direction and ambition for students 
              and professionals worldwide through innovative education solutions.
            </p>
          </div>
          <div className="relative" data-aos="fade-left">
            <div className="absolute -inset-4 bg-emerald-500/20 rounded-[3rem] blur-2xl" />
            <img 
              src={aboutHero} 
              alt="Advisory Session" 
              className="relative rounded-[2rem] border border-white/20 shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="space-y-12" data-aos="fade-up">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-slate-900">Our Mission</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            To empower students and professionals with the knowledge, tools, and connections
            needed to succeed in an increasingly globalized world.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Who We Are',
              description: 'Elevate Advisors is an education and global mobility specialist that combines local expertise with international reach.',
              icon: Users,
              color: 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200',
              iconColor: 'text-blue-600',
            },
            {
              title: 'What We Do',
              description: 'From career-skills training to study destination guidance, we deliver data-driven support across all educational needs.',
              icon: Target,
              color: 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200',
              iconColor: 'text-emerald-600',
            },
            {
              title: 'Our Impact',
              description: 'Helping thousands of students achieve their dreams through transparent advice and innovative solutions.',
              icon: TrendingUp,
              color: 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200',
              iconColor: 'text-purple-600',
            },
          ].map((item, index) => (
            <Card key={item.title} className={`${item.color} border-2 hover:shadow-xl transition-all duration-300 group cursor-pointer p-8`} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`h-7 w-7 ${item.iconColor}`} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">{item.title}</h3>
              <p className="text-slate-600 leading-6">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl" data-aos="fade-up">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-slate-900">Our Core Values</h2>
          <p className="text-xl text-slate-600">The principles that guide everything we do</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'Trust & Transparency',
              description: 'We believe in complete transparency with compliance and accountability at the heart of our operations.',
              icon: Shield,
              color: 'from-blue-500 to-cyan-500',
            },
            {
              title: 'Innovation & Excellence',
              description: 'We continuously innovate and deliver smart solutions powered by analytics and cutting-edge technology.',
              icon: Award,
              color: 'from-emerald-500 to-green-500',
            },
            {
              title: 'Personalized Support',
              description: 'Every student receives personal attention from initial assessment to successful outcome achievement.',
              icon: Heart,
              color: 'from-purple-500 to-pink-500',
            },
          ].map((value, index) => (
            <Card key={value.title} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center" data-aos="fade-up" data-aos-delay={index * 150}>
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} mb-6 mx-auto`}>
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
              <p className="text-slate-700 leading-7">{value.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="space-y-16" data-aos="fade-up">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-slate-900">Meet Our Leadership</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A dedicated team of international education specialists committed to your success.
          </p>
        </div>

        <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 text-white p-8 md:p-16">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="relative grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold">Expert Guidance at Every Step</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Our advisors bring years of experience in international admissions, visa processing, 
                and career counseling. We don't just process applications; we build futures.
              </p>
              <div className="grid gap-6">
                {[
                  { name: 'Dr. Sarah Wilson', role: 'Chief Education Strategist', desc: '15+ years in international higher education.' },
                  { name: 'Marcus Chen', role: 'Head of Global Admissions', desc: 'Specialist in Malaysian & Singaporean institutions.' },
                ].map((member) => (
                  <div key={member.name} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="h-12 w-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-bold">{member.name}</h4>
                      <p className="text-emerald-400 text-sm mb-1">{member.role}</p>
                      <p className="text-slate-400 text-xs">{member.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-emerald-500/20 rounded-[2rem] blur-xl" />
              <img 
                src={teamCollage} 
                alt="Our Expert Team" 
                className="relative rounded-3xl border border-white/10 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16" data-aos="fade-up">
        <div className="grid gap-8 md:grid-cols-4">
          {[
            { number: '5+', label: 'Years of Experience', icon: Award, color: 'from-blue-500 to-cyan-500' },
            { number: '50+', label: 'Partner Universities', icon: GraduationCap, color: 'from-emerald-500 to-green-500' },
            { number: '98%', label: 'Client Satisfaction', icon: Heart, color: 'from-purple-500 to-pink-500' },
            { number: '24/7', label: 'Expert Support', icon: Users, color: 'from-orange-500 to-red-500' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center group" data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
