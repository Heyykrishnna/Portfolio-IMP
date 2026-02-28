import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  variant?: 'default' | 'home';
}

const SERVICE_OPTIONS = [
  'Web Design',
  'Branding',
  'Strategy',
  'UI/UX Design',
  'Full Stack Dev',
  'Other',
];

type Fields = {
  name: string;
  email: string;
  budget: string;
  message: string;
};

function FloatingField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  required,
  placeholder,
}: {
  id: keyof Fields;
  label: string;
  type?: string;
  value: string;
  onChange: (k: keyof Fields, v: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative group">
      <label
        htmlFor={id}
        className="absolute left-0 pointer-events-none font-body font-medium select-none transition-all duration-300"
        style={{
          top: isActive ? '0px' : '18px',
          fontSize: isActive ? '10px' : '14px',
          letterSpacing: isActive ? '0.18em' : '0.02em',
          textTransform: isActive ? 'uppercase' : 'none',
          color: focused ? '#c9a87c' : isActive ? 'rgba(232,224,212,0.45)' : 'rgba(232,224,212,0.35)',
        }}
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={focused ? placeholder : ''}
        required={required}
        autoComplete="off"
        onChange={e => onChange(id, e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full pt-6 pb-3 bg-transparent font-body text-[15px] outline-none text-cream transition-colors duration-300"
        style={{ letterSpacing: '-0.01em', caretColor: '#c9a87c' }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-px transition-all duration-300"
        style={{ background: focused ? '#c9a87c' : 'rgba(232,224,212,0.12)' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gold"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'left', width: '100%' }}
      />
    </div>
  );
}

function FloatingTextarea({
  value,
  onChange,
}: {
  value: string;
  onChange: (k: keyof Fields, v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative group mt-2">
      <label
        htmlFor="message"
        className="absolute left-0 pointer-events-none font-body font-medium select-none transition-all duration-300"
        style={{
          top: isActive ? '0px' : '18px',
          fontSize: isActive ? '10px' : '14px',
          letterSpacing: isActive ? '0.18em' : '0.02em',
          textTransform: isActive ? 'uppercase' : 'none',
          color: focused ? '#c9a87c' : isActive ? 'rgba(232,224,212,0.45)' : 'rgba(232,224,212,0.35)',
        }}
      >
        Message
      </label>
      <textarea
        id="message"
        name="message"
        value={value}
        placeholder={focused ? 'Tell me about your project...' : ''}
        rows={4}
        onChange={e => onChange('message', e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full pt-6 pb-3 bg-transparent font-body text-[15px] outline-none text-cream resize-none transition-colors duration-300"
        style={{ letterSpacing: '-0.01em', caretColor: '#c9a87c' }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-px transition-all duration-300"
        style={{ background: focused ? '#c9a87c' : 'rgba(232,224,212,0.12)' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gold"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'left', width: '100%' }}
      />
    </div>
  );
}

export default function ContactForm({ variant = 'default' }: ContactFormProps) {
  const [fields, setFields] = useState<Fields>({
    name: '',
    email: '',
    budget: '',
    message: '',
  });
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const handleChange = (k: keyof Fields, v: string) => {
    setFields(prev => ({ ...prev, [k]: v }));
  };

  const toggleService = (s: string) => {
    setSelected(prev =>
      prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fields.name.trim() || !fields.email.trim() || !fields.message.trim()) {
      setError('Please fill in all required fields (Name, Email, Message).');
      return;
    }
    if (!isHome && !fields.budget.trim()) {
      setError('Please enter an estimated project budget.');
      return;
    }
    if (selected.length === 0) {
      setError('Please select at least one service.');
      return;
    }

    setSubmitting(true);
    
    try {
      const { error: supabaseError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: fields.name,
            email: fields.email,
            budget: fields.budget,
            message: fields.message,
            services: selected,
            source: variant
          }
        ]);
        
      if (supabaseError) throw new Error('Failed to save to database: ' + supabaseError.message);
      if (
        !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
        !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
        !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ) {
         throw new Error('EmailJS variables are missing. Data saved, but email not sent.');
      }
      
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: fields.name,
          from_email: fields.email,
          budget: fields.budget,
          services: selected.join(', '),
          message: fields.message,
          reply_to: fields.email,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        }
      );

      setSubmitted(true);
    } catch (err: any) {
      const errorMsg = err?.text || err?.message || 'Something went wrong. Please try again.';
      setError(`Error: ${errorMsg}`);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="py-16 flex flex-col items-start gap-6"
      >
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.15 }}
            className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a87c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </motion.div>
          <span className="tag text-gold">Message Received</span>
        </div>
        <h3
          className="font-display font-semibold text-cream"
          style={{ fontSize: 'clamp(24px, 3vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.2 }}
        >
          Thank you,<br />I'll be in touch soon.
        </h3>
        <h3
          className="font-display font-semibold text-cream"
          style={{ fontSize: 'clamp(24px, 3vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.2 }}
        >
          Check the MailBox for further details.
        </h3>
        <p className="body-sm opacity-50">Usually within 24 hours.</p>
      </motion.div>
    );
  }

  const isHome = variant === 'home';

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <p
          className="font-body text-[11px] font-medium uppercase tracking-[0.2em]"
          style={{ color: 'rgba(232,224,212,0.4)' }}
        >
          I need help with
        </p>
        <div className="flex flex-wrap gap-2">
          {SERVICE_OPTIONS.map(s => {
            const active = selected.includes(s);
            return (
              <button
                key={s}
                type="button"
                onClick={() => toggleService(s)}
                className="relative px-4 py-2 text-[11px] font-medium uppercase tracking-[0.15em] rounded-sm transition-all duration-300 outline-none"
                style={{
                  border: `1px solid ${active ? '#c9a87c' : 'rgba(232,224,212,0.12)'}`,
                  color: active ? '#c9a87c' : 'rgba(232,224,212,0.45)',
                  background: active ? 'rgba(201,168,124,0.07)' : 'transparent',
                  letterSpacing: '0.15em',
                }}
              >
                {active && (
                  <motion.span
                    layoutId="chip-bg"
                    className="absolute inset-0 rounded-sm"
                    style={{ background: 'rgba(201,168,124,0.07)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{s}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <FloatingField
          id="name"
          label="Full Name"
          value={fields.name}
          onChange={handleChange}
          required
          placeholder="Virat Kohli"
        />
        <FloatingField
          id="email"
          label="Email Address"
          type="email"
          value={fields.email}
          onChange={handleChange}
          required
          placeholder="hello@example.com"
        />
      </div>

      {!isHome && (
        <FloatingField
          id="budget"
          label="Project Budget"
          value={fields.budget}
          onChange={handleChange}
          placeholder="$5,000 – $10,000"
        />
      )}

      <FloatingTextarea value={fields.message} onChange={handleChange} />

      {error && (
        <motion.p 
          initial={{ opacity: 0, height: 0 }} 
          animate={{ opacity: 1, height: 'auto' }} 
          className="text-red-400 text-sm font-body -mt-2"
        >
          {error}
        </motion.p>
      )}

      <div className="pt-2 flex items-center justify-between gap-4 flex-wrap">
        <p className="body-sm opacity-70 text-[11px]">
          No spam. Just honest conversation.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="group relative flex items-center gap-4 overflow-hidden"
          style={{
            padding: '14px 28px',
            background: submitting ? 'rgba(201,168,124,0.08)' : '#c9a87c',
            color: submitting ? '#c9a87c' : '#0a0a0a',
            fontFamily: 'inherit',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            border: '1px solid #c9a87c',
            borderRadius: '2px',
            cursor: submitting ? 'not-allowed' : 'pointer',
            transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
          }}
          onMouseEnter={e => {
            if (!submitting) {
              (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
              (e.currentTarget as HTMLButtonElement).style.color = '#c9a87c';
            }
          }}
          onMouseLeave={e => {
            if (!submitting) {
              (e.currentTarget as HTMLButtonElement).style.background = '#c9a87c';
              (e.currentTarget as HTMLButtonElement).style.color = '#0a0a0a';
            }
          }}
        >
          <AnimatePresence mode="wait">
            {submitting ? (
              <motion.span
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                {[0, 1, 2].map(i => (
                  <motion.span
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 0.9, delay: i * 0.2 }}
                    className="inline-block w-1.5 h-1.5 rounded-full bg-current"
                  />
                ))}
              </motion.span>
            ) : (
              <motion.span
                key="text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-3"
              >
                <span>Send Message</span>
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </form>
  );
}
