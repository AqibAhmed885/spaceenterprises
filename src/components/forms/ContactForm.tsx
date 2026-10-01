'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';
import type { ContactInput } from '../../lib/validation/contact';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>();
  const [message, setMessage] = useState('');
  const submit = async (data: ContactInput) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      reset();
      setMessage('Thanks — your inquiry has been received.');
    } else setMessage('Please check your details and try again.');
  };
  return (
    <form onSubmit={handleSubmit(submit)} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-brand">
          Name
          <input {...register('name', { required: 'Name is required.' })} />
          {errors.name && (
            <span className="text-xs text-red-700">{errors.name.message}</span>
          )}
        </label>
        <label className="grid gap-2 text-sm font-medium text-brand">
          Company
          <input {...register('company')} />
        </label>
        <label className="grid gap-2 text-sm font-medium text-brand">
          Email
          <input
            type="email"
            {...register('email', { required: 'Email is required.' })}
          />
          {errors.email && (
            <span className="text-xs text-red-700">{errors.email.message}</span>
          )}
        </label>
        <label className="grid gap-2 text-sm font-medium text-brand">
          Phone
          <input {...register('phone')} />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-brand">
        Subject
        <input {...register('subject')} />
      </label>
      <label className="grid gap-2 text-sm font-medium text-brand">
        Message
        <textarea
          rows={7}
          {...register('message', { required: 'Message is required.' })}
        />
        {errors.message && (
          <span className="text-xs text-red-700">{errors.message.message}</span>
        )}
      </label>
      <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted" aria-live="polite">
          {message}
        </p>
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center gap-3 bg-brand px-6 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          Send inquiry <Send size={16} />
        </button>
      </div>
    </form>
  );
}
