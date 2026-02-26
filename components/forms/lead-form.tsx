'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

import { submitLead } from '@/features/lead/actions';
import { initialLeadFormState } from '@/features/lead/state';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="primary-button form-submit" disabled={pending} type="submit">
      {pending ? 'Отправляем...' : 'Хочу демо'}
    </button>
  );
}

export function LeadForm() {
  const [state, action] = useActionState(submitLead, initialLeadFormState);

  return (
    <form action={action} className="lead-form">
      <label htmlFor="name">Имя</label>
      <input id="name" name="name" required type="text" />

      <label htmlFor="company">Компания</label>
      <input id="company" name="company" required type="text" />

      <label htmlFor="email">Email</label>
      <input id="email" name="email" required type="email" />

      <label htmlFor="phone">Телефон</label>
      <input id="phone" name="phone" placeholder="+7 (___) ___-__-__" required type="tel" />

      <SubmitButton />

      {state.message ? (
        <p aria-live="polite" className={`form-message form-message-${state.status}`}>
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
