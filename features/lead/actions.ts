'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

import type { LeadFormState } from '@/features/lead/state';

type LeadPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  createdAt: string;
};

function normalizeValue(value: FormDataEntryValue | null): string {
  if (typeof value !== 'string') {
    return '';
  }

  return value.trim();
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string): boolean {
  return /^[+()\d\s-]{7,}$/.test(phone);
}

export async function submitLead(
  _prevState: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const payload: LeadPayload = {
    name: normalizeValue(formData.get('name')),
    company: normalizeValue(formData.get('company')),
    email: normalizeValue(formData.get('email')),
    phone: normalizeValue(formData.get('phone')),
    createdAt: new Date().toISOString(),
  };

  if (!payload.name || !payload.company || !payload.email || !payload.phone) {
    return {
      status: 'error',
      message: 'Заполните все поля формы.',
    };
  }

  if (!validateEmail(payload.email)) {
    return {
      status: 'error',
      message: 'Проверьте формат email.',
    };
  }

  if (!validatePhone(payload.phone)) {
    return {
      status: 'error',
      message: 'Проверьте формат телефона.',
    };
  }

  try {
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;

    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Webhook request failed with status ${response.status}`);
      }
    }

    console.info('[SRG lead captured]', payload);

    revalidateTag('landing-content-source', 'max');
    revalidateTag('landing-testimonials-source', 'max');
    revalidatePath('/');

    return {
      status: 'success',
      message: 'Заявка отправлена. Мы свяжемся с вами в ближайшее время.',
    };
  } catch (error) {
    console.error('[SRG lead capture failed]', error);

    return {
      status: 'error',
      message: 'Не удалось отправить заявку. Повторите попытку через несколько минут.',
    };
  }
}
