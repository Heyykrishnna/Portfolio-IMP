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
      <div className="p-12 border border-black-border rounded-sm bg-black-mid text-center">
        <p className="tag">Message Sent</p>
        <h3 className="heading-sm mt-4">Thank you for reaching out.</h3>
        <p className="body-sm mt-3">I'll be in touch within 24 hours.</p>
      </div>
    );
  }

  const inputClass = `
    w-full px-[18px] py-3.5 bg-black-soft border border-black-border rounded-sm
    text-cream text-sm outline-none
    focus:border-gold transition-colors duration-300
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
            placeholder="John" required className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <label className="tag" htmlFor="lastName">Last name</label>
          <input
            id="lastName" name="lastName" type="text"
            value={form.lastName} onChange={handleChange}
            placeholder="Doe" required className={inputClass}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2.5">
          <label className="tag" htmlFor="email">Email</label>
          <input
            id="email" name="email" type="email"
            value={form.email} onChange={handleChange}
            placeholder="john@example.com" required className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <label className="tag" htmlFor="phone">Phone no.</label>
          <input
            id="phone" name="phone" type="tel"
            value={form.phone} onChange={handleChange}
            placeholder="+91 00000 00000" className={inputClass}
          />
        </div>
      </div>
      <button type="submit" className="btn-primary self-start !py-4 !px-10">
        Submit
      </button>
    </form>
  );
}
