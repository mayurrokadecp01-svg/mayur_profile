import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const Admin = () => {
  const [session, setSession] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (!session) {
    return (
      <div className="min-h-screen bg-surface-container flex items-center justify-center p-gutter">
        <div className="bg-surface-container-lowest p-space-xl rounded-xl border border-surface-container-highest max-w-md w-full">
          <h1 className="font-headline-lg text-on-surface mb-space-sm">Admin Login</h1>
          <p className="font-body-md text-secondary mb-space-lg">
            Please login to access the admin dashboard.
          </p>
          <form onSubmit={handleLogin} className="space-y-space-md">
            <div>
              <label className="block font-label-mono-sm text-tertiary mb-space-2xs">Email</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-surface-bright border border-surface-container-highest rounded-lg px-space-md py-space-sm font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block font-label-mono-sm text-tertiary mb-space-2xs">Password</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-surface-bright border border-surface-container-highest rounded-lg px-space-md py-space-sm font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            {error && <div className="text-error font-body-sm">{error}</div>}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-primary text-on-primary py-space-sm rounded-lg font-headline-sm hover:bg-primary-container hover:text-on-primary-container transition-colors disabled:opacity-50"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <header className="bg-surface-container-lowest border-b border-surface-container-highest p-space-md flex justify-between items-center">
        <h1 className="font-headline-md text-on-surface">Admin Dashboard</h1>
        <button 
          onClick={handleLogout}
          className="px-space-md py-space-xs bg-surface-container border border-surface-container-highest rounded hover:bg-surface-container-high transition-colors text-on-surface font-body-sm"
        >
          Logout
        </button>
      </header>
      <main className="p-gutter flex-1">
        <div className="max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          <div className="bg-surface-container-lowest border border-surface-container-highest p-space-lg rounded-xl">
            <h2 className="font-headline-sm text-on-surface mb-space-sm">Data Management</h2>
            <p className="font-body-sm text-secondary mb-space-md">
              Manage your portfolio content directly from the Supabase dashboard for now, or build out these forms later.
            </p>
            <ul className="space-y-space-xs font-label-code text-primary">
              <li>• Profile</li>
              <li>• Experience</li>
              <li>• Projects</li>
              <li>• Skills</li>
              <li>• Contact Messages</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
