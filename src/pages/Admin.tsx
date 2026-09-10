import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/database';

type ContactMessage = Database['public']['Tables']['contact_messages']['Row'];

const Admin = () => {
  const [session, setSession] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loadingMessages, setLoadingMessages] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) fetchMessages();
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) fetchMessages();
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchMessages = async () => {
    setLoadingMessages(true);
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (data) setMessages(data);
    setLoadingMessages(false);
  };

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
        <div className="bg-surface-container-lowest p-space-xl rounded-xl border border-surface-container-highest max-w-md w-full shadow-sm">
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
      <header className="bg-surface-container-lowest border-b border-surface-container-highest p-space-md px-gutter flex justify-between items-center z-10 sticky top-0">
        <div className="flex items-center gap-space-sm">
          <h1 className="font-headline-md text-on-surface uppercase tracking-tight">Admin Dashboard</h1>
        </div>
        <button 
          onClick={handleLogout}
          className="px-space-md py-space-xs bg-surface border border-surface-container-highest rounded-lg hover:bg-surface-container transition-colors text-on-surface font-label-mono-sm uppercase"
        >
          Logout
        </button>
      </header>
      
      <main className="p-gutter flex-1 w-full max-w-[1160px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-space-xl py-space-2xl">
        
        {/* SIDEBAR FOR CRUD INSTRUCTIONS */}
        <div className="lg:col-span-1 space-y-space-lg">
          <div className="bg-surface-container-lowest border border-surface-container-highest p-space-xl rounded-xl">
            <h2 className="font-headline-sm text-on-surface mb-space-xs uppercase tracking-tight">Data Management</h2>
            <p className="font-body-sm text-secondary mb-space-md">
              To edit your portfolio data, use the Supabase Studio Dashboard.
            </p>
            <ul className="space-y-space-xs font-label-code text-secondary mb-space-lg">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Profile</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Experience</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Projects</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Skills</li>
            </ul>
            <a href="https://supabase.com/dashboard" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-space-sm rounded-lg bg-on-surface text-on-primary hover:bg-primary transition-colors font-headline-sm">
              Open Supabase
            </a>
          </div>
        </div>

        {/* MESSAGES LIST */}
        <div className="lg:col-span-2 space-y-space-md">
          <h2 className="font-headline-lg text-on-surface uppercase tracking-tight">Contact Messages</h2>
          
          {loadingMessages ? (
            <div className="p-space-xl text-center text-secondary font-body-sm">Loading messages...</div>
          ) : messages.length === 0 ? (
            <div className="bg-surface-container-lowest border border-surface-container-highest p-space-2xl rounded-xl text-center">
              <span className="material-symbols-outlined text-4xl text-tertiary mb-space-sm block">inbox</span>
              <p className="font-body-md text-secondary">No messages yet.</p>
            </div>
          ) : (
            <div className="space-y-space-md">
              {messages.map(msg => (
                <div key={msg.id} className="bg-surface-container-lowest border border-surface-container-highest p-space-lg rounded-xl flex flex-col gap-space-sm">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-sm border-b border-surface-container-highest pb-space-sm">
                    <div>
                      <div className="font-headline-sm text-on-surface">{msg.name}</div>
                      <a href={`mailto:${msg.email}`} className="font-label-mono-sm text-primary hover:underline">{msg.email}</a>
                    </div>
                    <div className="font-label-code text-tertiary text-xs">
                      {new Date(msg.created_at || '').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                  <div>
                    <div className="font-label-mono-sm text-secondary uppercase tracking-wider mb-1">Subject</div>
                    <div className="font-body-md font-medium text-on-surface mb-space-md">{msg.subject || 'No Subject'}</div>
                    <div className="font-label-mono-sm text-secondary uppercase tracking-wider mb-1">Message</div>
                    <div className="font-body-md text-secondary whitespace-pre-wrap">{msg.message}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
      </main>
    </div>
  );
};

export default Admin;
