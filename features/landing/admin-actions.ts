'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

import { saveLandingContent } from '@/features/landing/store';
import { isLandingContent } from '@/features/landing/store';
import type { LandingContentAdminState } from '@/features/landing/admin-state';

function parsePayload(payload: FormDataEntryValue | null): unknown {
  if (typeof payload !== 'string') {
    throw new Error('В форме отсутствует JSON-контент.');
  }

  if (!payload.trim()) {
    throw new Error('JSON-контент пустой.');
  }

  return JSON.parse(payload) as unknown;
}

export async function updateLandingContent(
  _prevState: LandingContentAdminState,
  formData: FormData,
): Promise<LandingContentAdminState> {
  try {
    const parsed = parsePayload(formData.get('payload'));

    if (!isLandingContent(parsed)) {
      return {
        status: 'error',
        message: 'Неверная структура JSON. Используйте актуальный формат из формы.',
      };
    }

    await saveLandingContent(parsed);

    revalidateTag('landing-content-source', 'max');
    revalidatePath('/');
    revalidatePath('/admin/content');

    return {
      status: 'success',
      message: 'Контент сохранён и опубликован на лендинге.',
    };
  } catch (error) {
    if (error instanceof SyntaxError) {
      return {
        status: 'error',
        message: 'JSON содержит синтаксическую ошибку. Проверьте запятые и кавычки.',
      };
    }

    return {
      status: 'error',
      message: error instanceof Error ? error.message : 'Не удалось сохранить контент.',
    };
  }
}
