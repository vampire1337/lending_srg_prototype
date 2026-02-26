'use client';

import { useActionState, useState } from 'react';
import { useFormStatus } from 'react-dom';

import { updateLandingContent } from '@/features/landing/admin-actions';
import {
  initialLandingContentAdminState,
  type LandingContentAdminState,
} from '@/features/landing/admin-state';
import type { LandingContent } from '@/features/landing/types';

type ContentAdminFormProps = {
  initialContent: LandingContent;
};

function SaveButton() {
  const { pending } = useFormStatus();

  return (
    <button className="primary-button admin-submit" disabled={pending} type="submit">
      {pending ? 'Сохраняем...' : 'Сохранить контент'}
    </button>
  );
}

export function ContentAdminForm({ initialContent }: ContentAdminFormProps) {
  const [state, formAction] = useActionState<LandingContentAdminState, FormData>(
    updateLandingContent,
    initialLandingContentAdminState,
  );
  const [payload, setPayload] = useState(() => JSON.stringify(initialContent, null, 2));

  return (
    <form action={formAction} className="admin-form">
      <div className="admin-meta">
        <h2>JSON-контент лендинга</h2>
        <p>
          Измените тексты и сохраните. После сохранения главная страница автоматически обновится через
          серверную ревалидацию.
        </p>
      </div>

      <label className="admin-label" htmlFor="payload">
        Контент
      </label>
      <textarea
        className="admin-textarea"
        id="payload"
        name="payload"
        onChange={(event) => setPayload(event.target.value)}
        spellCheck={false}
        value={payload}
      />

      <div className="admin-actions">
        <SaveButton />
        {state.message ? (
          <p aria-live="polite" className={`form-message form-message-${state.status}`}>
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
