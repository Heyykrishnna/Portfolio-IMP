import { useState } from 'react';

interface ContactFormProps {
  variant?: 'default' | 'home';
}

export default function ContactForm({ variant: _variant = 'default' }: ContactFormProps) {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-12 border border-gold/30 text-center" style={{ background: '#050505', clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}>
        <p className="tag">Message Sent</p>
        <h3 className="heading-sm mt-4">Thank you for reaching out.</h3>
        <p className="body-sm mt-3">I'll be in touch within 24 hours.</p>
      </div>
    );
  }

  const inputClass = `
    w-full font-body text-sm text-cream outline-none transition-all duration-300
    placeholder:text-cream-dim placeholder:opacity-40
  `;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2.5">
          <label className="tag" htmlFor="firstName">First name</label>
          <input
            id="firstName" name="firstName" type="text"
            value={form.firstName} onChange={handleChange}
            placeholder="John" required
            className={inputClass}
            style={{
              background: '#080808',
              border: '1px solid #1e1e1e',
              padding: '14px 18px',
              clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
              color: '#f0ebe3',
              outline: 'none',
            }}
            onFocus={e => { e.currentTarget.style.borderColor = '#c9a87c'; e.currentTarget.style.background = '#0a0a0a'; }}
            onBlur={e => { e.currentTarget.style.borderColor = '#1e1e1e'; e.currentTarget.style.background = '#080808'; }}
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <label className="tag" htmlFor="lastName">Last name</label>
          <input
            id="lastName" name="lastName" type="text"
            value={form.lastName} onChange={handleChange}
            placeholder="Doe" required
            className={inputClass}
            style={{
              background: '#080808',
              border: '1px solid #1e1e1e',
              padding: '14px 18px',
              clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
              color: '#f0ebe3',
              outline: 'none',
            }}
            onFocus={e => { e.currentTarget.style.borderColor = '#c9a87c'; e.currentTarget.style.background = '#0a0a0a'; }}
            onBlur={e => { e.currentTarget.style.borderColor = '#1e1e1e'; e.currentTarget.style.background = '#080808'; }}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2.5">
          <label className="tag" htmlFor="email">Email</label>
          <input
            id="email" name="email" type="email"
            value={form.email} onChange={handleChange}
            placeholder="john@example.com" required
            className={inputClass}
            style={{
              background: '#080808',
              border: '1px solid #1e1e1e',
              padding: '14px 18px',
              clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
              color: '#f0ebe3',
              outline: 'none',
            }}
            onFocus={e => { e.currentTarget.style.borderColor = '#c9a87c'; e.currentTarget.style.background = '#0a0a0a'; }}
            onBlur={e => { e.currentTarget.style.borderColor = '#1e1e1e'; e.currentTarget.style.background = '#080808'; }}
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <label className="tag" htmlFor="phone">Phone no.</label>
          <input
            id="phone" name="phone" type="tel"
            value={form.phone} onChange={handleChange}
            placeholder="+91 00000 00000"
            className={inputClass}
            style={{
              background: '#080808',
              border: '1px solid #1e1e1e',
              padding: '14px 18px',
              clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
              color: '#f0ebe3',
              outline: 'none',
            }}
            onFocus={e => { e.currentTarget.style.borderColor = '#c9a87c'; e.currentTarget.style.background = '#0a0a0a'; }}
            onBlur={e => { e.currentTarget.style.borderColor = '#1e1e1e'; e.currentTarget.style.background = '#080808'; }}
          />
        </div>
      </div>

      <div className="pt-2">
        <button type="submit" className="btn-submit group">
          <span className="relative z-10 flex items-center gap-3">
            <span>Send Message</span>
            <svg
              width="16" height="16" viewBox="0 0 16 16" fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
      </div>
    </form>
  );
}
