import { useState } from 'react';
import { Button, Card } from '../components';
import { 
  Brain, 
  Target, 
  Zap, 
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Send
} from 'lucide-react';

export const TakeTest = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    targetCountry: 'Malaysia',
    budget: '',
    interest: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const steps = [
    {
      title: 'Basic Information',
      description: 'Let\'s start with your contact details.',
      fields: (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Email Address</label>
            <input 
              type="email" 
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>
      )
    },
    {
      title: 'Academic Background',
      description: 'What is your current or highest level of education?',
      fields: (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
          {['High School', 'Bachelor\'s Degree', 'Master\'s Degree', 'Other'].map((edu) => (
            <button
              key={edu}
              onClick={() => setFormData({...formData, education: edu})}
              className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 flex justify-between items-center ${
                formData.education === edu 
                ? 'border-emerald-500 bg-emerald-50 text-emerald-900 shadow-md scale-[1.02]' 
                : 'border-slate-100 hover:border-emerald-200 bg-white'
              }`}
            >
              <span className="font-semibold">{edu}</span>
              {formData.education === edu && <CheckCircle className="h-5 w-5 text-emerald-500" />}
            </button>
          ))}
        </div>
      )
    },
    {
      title: 'Goals & Interests',
      description: 'Find your perfect path.',
      fields: (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Primary Field of Interest</label>
            <select 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-500"
              value={formData.interest}
              onChange={(e) => setFormData({...formData, interest: e.target.value})}
            >
              <option value="">Select a field...</option>
              <option value="engineering">Engineering & Technology</option>
              <option value="business">Business & Management</option>
              <option value="medicine">Medicine & Healthcare</option>
              <option value="arts">Arts & Humanities</option>
              <option value="science">Applied Sciences</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Budget Range (Annual)</label>
            <div className="grid grid-cols-2 gap-4">
              {['Below $10k', '$10k - $20k', '$20k - $30k', '$30k+'].map((range) => (
                <button
                  key={range}
                  onClick={() => setFormData({...formData, budget: range})}
                  className={`p-3 text-center text-sm rounded-lg border transition-all ${
                    formData.budget === range 
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold' 
                    : 'border-slate-200 hover:border-emerald-300'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-12 md:space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 md:p-24 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-blue-600/20" />
        <div className="relative text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-bold uppercase tracking-widest">
            <Brain className="h-4 w-4" /> Smart Assessment
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            Discover Your <span className="text-emerald-400">Future.</span>
          </h1>
          <p className="text-xl text-slate-300">
            Take our 2-minute assessment to unlock customized global education recommendations 
            based on your profile, budget, and career goals.
          </p>
        </div>
      </section>

      {/* Assessment Form Section */}
      <section className="max-w-4xl mx-auto" data-aos="fade-up">
        <Card className="p-8 md:p-12 shadow-2xl border-none bg-white relative overflow-hidden">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-50">
            <div 
              className="h-full bg-emerald-500 transition-all duration-500 ease-out"
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            />
          </div>

          <div className="flex justify-between items-start mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">{steps[step].title}</h2>
              <p className="text-slate-500">{steps[step].description}</p>
            </div>
            <div className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase">
              Step {step + 1} of {steps.length}
            </div>
          </div>

          <div className="min-h-[300px]">
            {steps[step].fields}
          </div>

          <div className="flex justify-between mt-12 pt-8 border-t border-slate-50">
            <button
              onClick={prevStep}
              disabled={step === 0}
              className={`flex items-center gap-2 font-bold px-6 py-3 rounded-xl transition-all ${
                step === 0 ? 'opacity-0 pointer-events-none' : 'text-slate-400 hover:text-slate-900'
              }`}
            >
              <ArrowLeft className="h-5 w-5" /> Previous
            </button>
            
            {step < steps.length - 1 ? (
              <Button 
                onClick={nextStep}
                className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105"
              >
                Next Step <ArrowRight className="h-5 w-5" />
              </Button>
            ) : (
              <Button 
                className="bg-emerald-500 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-600 hover:scale-105"
                onClick={() => alert('Assessment submitted! Our experts will contact you soon.')}
              >
                Submit Form <Send className="h-5 w-5" />
              </Button>
            )}
          </div>
        </Card>
      </section>

      {/* Trust Badges */}
      <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
         <div className="flex items-center gap-2 text-xl font-bold"><CheckCircle className="h-6 w-6" /> Data Secure</div>
         <div className="flex items-center gap-2 text-xl font-bold"><Zap className="h-6 w-6" /> Instant Results</div>
         <div className="flex items-center gap-2 text-xl font-bold"><Target className="h-6 w-6" /> Personalized</div>
      </div>
    </div>
  );
};
