import { getAgentTestimonials } from '@/features/landing/content';

function initialsFromName(name: string): string {
  const normalized = name.trim();
  if (!normalized) {
    return 'AG';
  }

  const parts = normalized.split(/\s+/).slice(0, 2);
  return parts
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
    .slice(0, 2);
}

export async function AgentVoices() {
  const testimonials = await getAgentTestimonials();

  return (
    <div className="testimonials-track" role="list" aria-label="Отзывы агентов">
      {testimonials.map((testimonial) => (
        <article className="testimonial-card" key={testimonial.quote} role="listitem">
          <div className="testimonial-head">
            <div className="testimonial-avatar" aria-hidden="true">
              {initialsFromName(testimonial.author)}
            </div>
            <div className="testimonial-person">
              <strong>{testimonial.author}</strong>
              <span>{testimonial.role ?? 'Агент'}</span>
            </div>
            <div className="testimonial-company">
              <span>{testimonial.companyMark ?? 'AG'}</span>
            </div>
          </div>
          <p>{testimonial.quote}</p>
          <div className="testimonial-company-name">{testimonial.company ?? 'Партнер SRG'}</div>
        </article>
      ))}
    </div>
  );
}

export function AgentVoicesFallback() {
  return (
    <div className="testimonials-track" aria-hidden="true">
      {Array.from({ length: 3 }, (_, index) => (
        <article className="testimonial-card testimonial-skeleton" key={`fallback-${index}`}>
          <div />
          <div />
        </article>
      ))}
    </div>
  );
}
