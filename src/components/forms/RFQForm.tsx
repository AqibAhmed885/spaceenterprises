'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, UploadCloud } from 'lucide-react';
import { productCategories } from '../../content/products';
import type { RFQInput } from '../../lib/validation/rfq';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function RFQForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RFQInput>();
  const [state, setState] = useState<FormState>('idle');
  const [reference, setReference] = useState('');
  const [attachment, setAttachment] = useState<File | undefined>();
  const submit = async (data: RFQInput) => {
    setState('loading');
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (typeof value === 'string' && value) formData.append(key, value);
    });
    if (attachment) formData.append('attachment', attachment);
    const response = await fetch('/api/rfq', {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      const result = (await response.json()) as { referenceNumber: string };
      setReference(result.referenceNumber);
      reset();
      setAttachment(undefined);
      setState('success');
    } else setState('error');
  };
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="border border-border bg-white p-5 sm:p-8"
      noValidate
    >
      <div className="grid gap-10">
        <fieldset>
          <legend className="text-xl font-semibold tracking-[-0.03em] text-brand">
            Contact information
          </legend>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <Field label="Full name" error={errors.name?.message}>
              <input
                {...register('name', { required: 'Full name is required.' })}
              />
            </Field>
            <Field label="Company name" error={errors.company?.message}>
              <input
                {...register('company', {
                  required: 'Company name is required.',
                })}
              />
            </Field>
            <Field
              label="Business email"
              type="email"
              error={errors.email?.message}
            >
              <input
                {...register('email', {
                  required: 'Business email is required.',
                })}
              />
            </Field>
            <Field label="Phone / WhatsApp">
              <input {...register('phone')} />
            </Field>
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-xl font-semibold tracking-[-0.03em] text-brand">
            Requirement
          </legend>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <Field label="Product / equipment" error={errors.product?.message}>
              <input
                {...register('product', {
                  required: 'Product or equipment is required.',
                })}
              />
            </Field>
            <Field label="Category">
              <select {...register('category')} defaultValue="">
                <option value="">Select a category</option>
                {productCategories.map((category) => (
                  <option key={category.slug} value={category.title}>
                    {category.title}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Quantity">
              <input {...register('quantity')} />
            </Field>
            <Field label="Preferred manufacturer / brand">
              <input {...register('brand')} />
            </Field>
            <Field label="Model / part number">
              <input {...register('partNumber')} />
            </Field>
            <Field label="Technical specifications" className="sm:col-span-2">
              <textarea rows={4} {...register('specifications')} />
            </Field>
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-xl font-semibold tracking-[-0.03em] text-brand">
            Delivery
          </legend>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            <Field label="Required delivery date">
              <input type="date" {...register('requiredDate')} />
            </Field>
            <Field label="Country">
              <input {...register('deliveryCountry')} />
            </Field>
            <Field label="City">
              <input {...register('deliveryCity')} />
            </Field>
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-xl font-semibold tracking-[-0.03em] text-brand">
            Additional information
          </legend>
          <div className="mt-6 grid gap-5">
            <Field label="Message / notes" className="sm:col-span-2">
              <textarea rows={5} {...register('message')} />
            </Field>
            <label className="grid gap-2 text-sm font-medium text-brand">
              <span>
                Upload RFQ / BOQ / specification{' '}
                <span className="font-normal text-muted">(optional)</span>
              </span>
              <span className="flex min-h-28 cursor-pointer items-center justify-center gap-3 border border-dashed border-border bg-surface px-5 text-sm text-muted transition hover:border-accent">
                <UploadCloud size={19} className="text-accent" />
                PDF, DOC, DOCX, XLS, XLSX, CSV, JPG or PNG up to 10 MB
                <input
                  type="file"
                  className="sr-only"
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.jpg,.jpeg,.png"
                  onChange={(event) => setAttachment(event.target.files?.[0])}
                />
              </span>
            </label>
          </div>
        </fieldset>
      </div>
      <div className="mt-10 flex flex-col gap-5 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted" aria-live="polite">
          {state === 'success'
            ? `Request received. Reference: ${reference}`
            : state === 'error'
              ? 'Something went wrong. Please try again or contact our team.'
              : 'We review every requirement and follow up with next steps.'}
        </p>
        <button
          disabled={state === 'loading'}
          className="inline-flex min-h-12 items-center justify-center gap-3 bg-brand px-6 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:cursor-wait disabled:opacity-60"
          type="submit"
        >
          {state === 'loading' ? 'Sending…' : 'Submit request for quotation'}
          <Send size={16} />
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
  className = '',
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
  type?: string;
}) {
  return (
    <label className={`grid gap-2 text-sm font-medium text-brand ${className}`}>
      <span>
        {label}
        {error && (
          <span className="ml-2 text-xs font-normal text-red-700">{error}</span>
        )}
      </span>
      {children}
    </label>
  );
}
