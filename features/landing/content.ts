import { DEFAULT_TESTIMONIALS } from '@/features/landing/content-seed';
import { loadLandingContent } from '@/features/landing/store';
import type { LandingContent, Testimonial } from '@/features/landing/types';

function toDataUrl<T>(payload: T): string {
  return `data:application/json,${encodeURIComponent(JSON.stringify(payload))}`;
}

export async function getLandingContent(): Promise<LandingContent> {
  const payload = await loadLandingContent();
  const response = await fetch(toDataUrl(payload), {
    cache: 'force-cache',
    next: {
      revalidate: 43200,
      tags: ['landing-content-source'],
    },
  });

  return response.json() as Promise<LandingContent>;
}

export async function getAgentTestimonials(): Promise<Testimonial[]> {
  const response = await fetch(toDataUrl(DEFAULT_TESTIMONIALS), {
    cache: 'force-cache',
    next: {
      revalidate: 43200,
      tags: ['landing-testimonials-source'],
    },
  });

  return response.json() as Promise<Testimonial[]>;
}
