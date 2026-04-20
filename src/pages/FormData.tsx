import { useState, useEffect } from 'react';
import { Card, Button, LoadingSpinner } from '../components';
import { Mail, Phone, Calendar, RefreshCcw, Lock, User, MessageSquare, ShieldAlert } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

interface Submission {
  id: string;
  full_name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  submitted_at: string;
}

export const FormData = () => {
  useSEO({
    title: 'Admin | View Submissions - Elevate Education',
    description: 'Internal dashboard to view form submissions.',
  });

  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const fetchSubmissions = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://tseaeducation.com/backend/get_submissions.php');
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      setSubmissions(data);
    } catch (err) {
      setError('Could not connect to the database. Ensure the backend is live.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchSubmissions();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check for internal use
    if (password === 'TSEA2026') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-6">
        <Card className="max-w-md w-full p-8 md:p-12 text-center space-y-8 rounded-[2.5rem] shadow-2xl">
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto">
            <Lock className="h-10 w-10 text-emerald-600" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-black text-slate-900">Admin Access</h1>
            <p className="text-slate-500 font-medium">Please enter the password to view submissions.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none font-bold"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 py-4 rounded-2xl font-black text-lg">
              Login
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-12 pb-20 p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6" data-aos="fade-down">
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900">Form Submissions</h1>
          <p className="text-slate-500 font-medium">Viewing latest leads from the contact form.</p>
        </div>
        <Button 
          onClick={fetchSubmissions} 
          disabled={loading}
          className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 px-8 py-3 rounded-full"
        >
          <RefreshCcw className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
          Refresh Data
        </Button>
      </div>

      {error ? (
        <Card className="p-12 border-red-100 bg-red-50 text-center space-y-4">
          <ShieldAlert className="h-12 w-12 text-red-500 mx-auto" />
          <h2 className="text-xl font-bold text-red-900">{error}</h2>
          <Button onClick={fetchSubmissions} className="bg-red-600">Try Again</Button>
        </Card>
      ) : loading ? (
        <div className="h-64 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="grid gap-6 overflow-hidden">
          <div className="overflow-x-auto rounded-[2rem] border border-slate-100 shadow-xl bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-500">Submitter</th>
                  <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-500">Contact</th>
                  <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-500 hidden md:table-cell">Subject & Message</th>
                  <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-500">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {submissions.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-20 text-center text-slate-400 font-bold italic">
                      No submissions found yet.
                    </td>
                  </tr>
                ) : (
                  submissions.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="p-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                            <User className="h-5 w-5" />
                          </div>
                          <span className="font-black text-slate-900">{item.full_name}</span>
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
                            <Mail className="h-4 w-4 text-slate-400" /> {item.email}
                          </div>
                          <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
                            <Phone className="h-4 w-4 text-slate-400" /> {item.phone}
                          </div>
                        </div>
                      </td>
                      <td className="p-6 hidden md:table-cell max-w-md">
                        <div className="space-y-2">
                          <div className="font-black text-slate-900 flex items-center gap-2">
                            <ShieldAlert className="h-4 w-4 text-blue-500" /> {item.subject}
                          </div>
                          <p className="text-sm text-slate-500 font-medium line-clamp-2 italic">
                            "{item.message}"
                          </p>
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="flex items-center gap-2 text-sm font-black text-slate-400">
                          <Calendar className="h-4 w-4" />
                          {new Date(item.submitted_at).toLocaleDateString(undefined, {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View Replacement for Message */}
          <div className="md:hidden space-y-4 px-2">
             <p className="text-center font-bold text-slate-400 text-xs uppercase tracking-widest flex items-center justify-center gap-2">
                <MessageSquare className="h-4 w-4" /> messages are hidden on mobile table - use desktop for full view
             </p>
          </div>
        </div>
      )}
    </div>
  );
};
