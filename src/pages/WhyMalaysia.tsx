// Why Malaysia page

import { Card } from '../components';
import { GraduationCap, Users, Award, MapPin, DollarSign, Shield, Briefcase, Globe, CheckCircle } from 'lucide-react';
import malaysiaHero from '../assets/malaysia_hero.png';

export const WhyMalaysia = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white shadow-2xl" data-aos="fade-up">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.35),_transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.2),_transparent_35%)]" />
        <div className="relative grid gap-12 lg:grid-cols-2 items-center p-6 md:p-16">
          <div className="space-y-8" data-aos="fade-right">
            <div className="flex items-center gap-3">
              <MapPin className="h-10 w-10 text-emerald-400" />
              <span className="inline-block rounded-full bg-emerald-500/10 px-6 py-3 text-lg font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Gateway to Success
              </span>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              Studying in
              <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Malaysia
              </span>
            </h1>
            <p className="max-w-xl text-xl leading-8 text-slate-200">
              World-class degrees at competitive costs. Experience the perfect blend 
              of high-value education and vibrant multicultural life.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Explore Programs
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-full border-2 transition-all duration-300">
                View Requirements
              </button>
            </div>
          </div>
          <div className="relative group" data-aos="fade-left">
            <div className="absolute -inset-4 bg-blue-500/20 rounded-[3rem] blur-2xl group-hover:opacity-100 transition-opacity opacity-50" />
            <img 
              src={malaysiaHero} 
              alt="Malaysia Study Destination" 
              className="relative rounded-[2rem] border border-white/20 shadow-2xl w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Key Advantages Section */}
      <section className="space-y-12" data-aos="fade-up">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-slate-900">Why Choose Malaysia?</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover the compelling reasons why Malaysia has become the preferred destination for international students worldwide.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: 'High Value Education',
              description: 'Access world-class degrees at competitive costs, with government-backed campuses and strong industry partnerships that ensure quality education.',
              icon: GraduationCap,
              color: 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200',
              iconColor: 'text-blue-600',
            },
            {
              title: 'Global Recognition',
              description: 'Malaysian institutions are recognized globally for innovation, accreditation, and graduate success across international job markets.',
              icon: Award,
              color: 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200',
              iconColor: 'text-emerald-600',
            },
          ].map((advantage, index) => (
            <Card key={advantage.title} className={`${advantage.color} border-2 hover:shadow-xl transition-all duration-300 group cursor-pointer p-8`} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <advantage.icon className={`h-7 w-7 ${advantage.iconColor}`} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">{advantage.title}</h3>
              <p className="text-slate-600 leading-6">{advantage.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl" data-aos="fade-up">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-slate-900">Life in Malaysia</h2>
          <p className="text-xl text-slate-600">Experience quality education with exceptional living standards</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'Affordable Living',
              description: 'Lower cost of living without compromising quality of life and access to premium facilities and amenities.',
              icon: DollarSign,
              color: 'from-blue-500 to-cyan-500',
            },
            {
              title: 'Safe Environment',
              description: 'A welcoming multicultural society with strong support systems for international students and families.',
              icon: Shield,
              color: 'from-emerald-500 to-green-500',
            },
            {
              title: 'Career Pathways',
              description: 'Industry-driven programs that prepare you for global careers with practical skills and international recognition.',
              icon: Briefcase,
              color: 'from-purple-500 to-pink-500',
            },
          ].map((benefit, index) => (
            <Card key={benefit.title} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center" data-aos="fade-up" data-aos-delay={index * 150}>
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} mb-6 mx-auto`}>
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
              <p className="text-slate-700 leading-7">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16" data-aos="fade-up">
        <div className="grid gap-8 md:grid-cols-4">
          {[
            { number: '200K+', label: 'International Students', icon: Users, color: 'from-blue-500 to-cyan-500' },
            { number: '100+', label: 'Partner Universities', icon: GraduationCap, color: 'from-emerald-500 to-green-500' },
            { number: '95%', label: 'Graduate Employment', icon: Briefcase, color: 'from-purple-500 to-pink-500' },
            { number: '50+', label: 'Countries Represented', icon: Globe, color: 'from-orange-500 to-red-500' },
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

      {/* CTA Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16" data-aos="fade-up">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.1),_transparent_70%)]" />
        <div className="relative text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Study in Malaysia?</h2>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Join the growing community of international students choosing Malaysia for their educational journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <GraduationCap className="mr-2 h-5 w-5 inline" />
              Apply Now
            </button>
            <button className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-full border-2 transition-all duration-300">
              <Users className="mr-2 h-5 w-5 inline" />
              Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
