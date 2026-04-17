import { Card, Button } from '../components';
import { 
  GraduationCap, 
  Globe, 
  TrendingUp, 
  Users, 
  Home,
  ShieldCheck,
  FileText
} from 'lucide-react';

export const Services = () => {
  const premiumServices = [
    {
      title: 'University Admissions',
      description: 'Navigating the complex application process for top-tier universities in Malaysia and worldwide. We handle everything from document verification to follow-ups.',
      icon: GraduationCap,
      features: ['Institutional Matchmaking', 'Application Management', 'Scholarship Assistance'],
      color: 'blue'
    },
    {
      title: 'Visa & Immigration',
      description: 'Expert guidance on student visa requirements, renewals, and professional pass applications. Ensuring 100% compliance with local regulations.',
      icon: Globe,
      features: ['EMGS Documentation', 'Sticker Endorsement', 'Renewal Services'],
      color: 'emerald'
    },
    {
      title: 'Career Counseling',
      description: 'Empowering students with industry-relevant skills and personalized career pathways. We bridge the gap between education and employment.',
      icon: TrendingUp,
      features: ['Industry Internships', 'CV Workshops', 'Job Placement Support'],
      color: 'purple'
    },
    {
      title: 'Accommodation Support',
      description: 'Finding a second home in Malaysia made easy. We assist in securing safe, affordable, and high-quality housing near your campus.',
      icon: Home,
      features: ['On-campus Housing', 'Private Rentals', 'Roommate Matching'],
      color: 'orange'
    },
    {
      title: 'Pre-Departure Briefing',
      description: 'Comprehensive orientation covering everything from cultural integration to local transport, ensuring you arrive prepared.',
      icon: ShieldCheck,
      features: ['Cultural Orientation', 'Travel Logistics', 'Banking Setup'],
      color: 'cyan'
    },
    {
      title: 'Post-Arrival Assistance',
      description: 'We stay by your side even after you arrive. From medical check-ups to local SIM cards, we make your transition seamless.',
      icon: Users,
      features: ['Airport Pickup', 'Medical Screening', 'Local Guide'],
      color: 'rose'
    }
  ];

  return (
    <div className="space-y-12 md:space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 md:p-16 mb-12 shadow-2xl" data-aos="fade-up">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-blue-600/20" />
        <div className="relative text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            Comprehensive 
            <span className="block text-emerald-400">Education Solutions.</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            From your first inquiry to your first job, Elevate Advisors provides 
            end-to-end support throughout your global mobility journey.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">Get Free Consultation</Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {premiumServices.map((service, index) => (
          <Card key={index} className="group hover:-translate-y-2 transition-all duration-500 border-slate-100 shadow-xl hover:shadow-2xl p-8 space-y-6">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-${service.color}-50 text-${service.color}-600 group-hover:scale-110 transition-transform duration-300`}>
              <service.icon className="w-8 h-8" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed min-h-[100px]">{service.description}</p>
            </div>
            <ul className="space-y-3 pt-4 border-t border-slate-100">
              {service.features.map((feature, fidx) => (
                <li key={fidx} className="flex items-center gap-2 text-sm text-slate-500">
                  <FileText className="w-4 h-4 text-emerald-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </section>

      {/* FAQ/Process CTA */}
      <section className="bg-emerald-50 rounded-[3rem] p-12 text-center space-y-8">
        <h2 className="text-3xl font-bold text-slate-900">Need a Custom Solution?</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Every student journey is unique. Contact our advisors for a personalized roadmap 
          tailored to your specific goals and financial preferences.
        </p>
        <Button size="lg" className="bg-slate-900 text-white rounded-full px-12">Contact Our Experts</Button>
      </section>
    </div>
  );
};
