import { useState } from 'react';
import { useSEO } from '../hooks/useSEO';

import { Button, Card } from '../components';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Camera, 
  Users, 
  Globe,
  Send,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export const Contact = () => {
  useSEO({
    title: 'Contact Us | Elevate Education - Start Your Global Journey',
    description: 'Get in touch with our expert advisors for a free consultation about studying in Malaysia. We provide end-to-end support for university admissions and visas.',
    keywords: 'contact elevate education, study in malaysia consultation, education consultants south india, university admissions help'
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('full_name', formData.name);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('phone', formData.phone);
    formDataToSubmit.append('subject', formData.subject);
    formDataToSubmit.append('message', formData.message);

    try {
      const response = await fetch('https://tseaeducation.com/backend/form_handler.php', {
        method: 'POST',
        body: formDataToSubmit,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(data.error || (data.errors ? data.errors.join(', ') : 'Something went wrong'));
      }
    } catch (err) {
      setError('Failed to connect to the server. Please ensure the backend is running.');
      console.error('Submission error:', err);
    } finally {
      setLoading(false);
    }
  };


  const contactMethods = [
    {
      title: 'Our Office',
      details: 'Plot No 128, Gate Number 6, Sitaram Nagar, Gunrock Enclave, Secunderabad, Telangana, India - 500009',
      icon: MapPin,
      color: 'blue'
    },
    {
      title: 'Email Us',
      details: 'tseaeducation@tradesyndicate.in',
      icon: Mail,
      color: 'emerald',
      link: 'mailto:tseaeducation@tradesyndicate.in'
    },
    {
      title: 'Call Us',
      details: '+91 8309622516',
      icon: Phone,
      color: 'purple',
      link: 'tel:+918309622516'
    },
    {
      title: 'WhatsApp',
      details: 'Chat with our experts instantly',
      icon: MessageCircle,
      color: 'green',
      link: 'https://wa.me/message/3OEWJUYPYPXJO1'
    }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Camera, url: 'https://www.instagram.com/tsea_education/?hl=en', color: 'hover:text-pink-500' },
    { name: 'Facebook', icon: Users, url: 'https://www.facebook.com/profile.php?id=61570873471632', color: 'hover:text-blue-600' },
    { name: 'Twitter (X)', icon: MessageCircle, url: 'https://x.com/TSEA_Education', color: 'hover:text-slate-900' },
  ];

  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white p-8 sm:p-12 md:p-24 shadow-2xl" data-aos="fade-up">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.3),_transparent_40%)]" />
        <div className="relative text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-white/10 rounded-full mb-2">
            <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-tight">
            Start Your <br/>
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent italic">Global Journey</span> Today
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium mx-auto max-w-2xl pt-2 md:pt-4">
            Whether you have questions about universities, visas, or career pathways, we are ready to help.
          </p>
        </div>
      </section>


      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Contact Information */}
        <div className="space-y-10 md:space-y-12">
          <div className="space-y-4" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Get in Touch</h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Reach out through any of our channels. We strive to respond within 24 hours.
            </p>
            <div className="w-16 h-1 bg-emerald-500 rounded-full" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className={`p-6 border-slate-100 shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-[2rem] bg-white ${method.link ? 'cursor-pointer hover:shadow-2xl' : ''}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => method.link ? window.open(method.link, '_blank') : null}
              >
                <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-slate-50 text-emerald-600 border border-emerald-50`}>
                  <method.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight">{method.title}</h3>
                <p className="text-slate-600 font-bold leading-relaxed text-sm">{method.details}</p>
                {method.link && (
                  <div className="mt-4 text-emerald-600 text-xs font-black uppercase tracking-widest flex items-center gap-1 group">
                    Connect Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </Card>
            ))}
          </div>


          {/* Connect with us (Social Media) */}
          <div className="bg-slate-50 rounded-3xl p-8 space-y-6" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-slate-900">Connect With Us</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all font-medium text-slate-600 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div data-aos="fade-left">
          <Card className="p-6 sm:p-8 md:p-12 shadow-2xl border-slate-100 rounded-[2rem] md:rounded-[2.5rem] bg-white">
            <div className="mb-8 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Send an Inquiry</h2>
              <p className="text-slate-500 font-bold text-sm">Fill out the form below and we'll be in touch shortly.</p>
            </div>


            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 ml-1 uppercase tracking-widest">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 sm:py-4 bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all font-bold text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 ml-1 uppercase tracking-widest">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 sm:py-4 bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all font-bold text-sm"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-700 ml-1 uppercase tracking-widest">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 sm:py-4 bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all font-bold text-sm"
                  placeholder="john@example.com"
                />
              </div>


              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all font-medium"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all font-medium resize-none"
                  placeholder="Tell us about your educational goals..."
                ></textarea>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-emerald-500 hover:bg-emerald-600 rounded-2xl py-4 text-lg font-black flex items-center justify-center gap-2 group disabled:opacity-50"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Book a Free Consultation with Our Experts'} 
                {!loading && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </Button>

              {error && (
                <div className="p-4 bg-red-50 text-red-700 rounded-2xl text-center font-bold border border-red-100">
                  {error}
                </div>
              )}


              {submitted && (
                <div className="p-4 bg-emerald-50 text-emerald-700 rounded-2xl text-center font-bold flex items-center justify-center gap-2 border border-emerald-100">
                  <CheckCircle className="w-5 h-5" />
                  Thank you! Your request has been received.
                </div>
              )}
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};
