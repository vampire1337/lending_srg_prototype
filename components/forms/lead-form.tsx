'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

import { InputFieldIcon } from '@/components/landing/content-icons';
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
      <div className="lead-field">
        <label htmlFor="name">Имя</label>
        <div className="lead-input-shell">
          <span className="lead-input-icon" aria-hidden="true">
            <InputFieldIcon kind="name" />
          </span>
          <input id="name" name="name" required type="text" />
        </div>
      </div>

      <div className="lead-field">
        <label htmlFor="company">Компания</label>
        <div className="lead-input-shell">
          <span className="lead-input-icon" aria-hidden="true">
            <InputFieldIcon kind="company" />
          </span>
          <input id="company" name="company" required type="text" />
        </div>
      </div>

      <div className="lead-field">
        <label htmlFor="email">Email</label>
        <div className="lead-input-shell">
          <span className="lead-input-icon" aria-hidden="true">
            <InputFieldIcon kind="email" />
          </span>
          <input id="email" name="email" required type="email" />
        </div>
      </div>

      <div className="lead-field">
        <label htmlFor="phone">Телефон</label>
        <div className="lead-input-shell">
          <span className="lead-input-icon" aria-hidden="true">
            <InputFieldIcon kind="phone" />
          </span>
          <input id="phone" name="phone" placeholder="+7 (___) ___-__-__" required type="tel" />
        </div>
      </div>

      <label className="consent-row">
        <input name="consent" required type="checkbox" value="yes" />
        <span>Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.</span>
      </label>

      <SubmitButton />

      {state.message ? (
        <p aria-live="polite" className={`form-message form-message-${state.status}`}>
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
