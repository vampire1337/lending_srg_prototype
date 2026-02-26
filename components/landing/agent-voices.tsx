import { getAgentTestimonials } from '@/features/landing/content';

export async function AgentVoices() {
  const testimonials = await getAgentTestimonials();

  return (
    <div className="testimonials-track" role="list" aria-label="Отзывы агентов">
      {testimonials.map((testimonial) => (
        <article className="testimonial-card" key={testimonial.quote} role="listitem">
          <p>{testimonial.quote}</p>
          <span>{testimonial.author}</span>
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
