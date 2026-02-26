import { ContentAdminForm } from '@/components/admin/content-admin-form';
import { getLandingContent } from '@/features/landing/content';

export const runtime = 'nodejs';

export default async function AdminContentPage() {
  const content = await getLandingContent();

  return (
    <main className="admin-page">
      <section className="section">
        <div className="container admin-shell">
          <header className="admin-header">
            <p className="hero-kicker">SRG CMS</p>
            <h1>Админка контента лендинга</h1>
            <p>
              Маршрут без авторизации для внутреннего редактирования текста. Формат: полный JSON объекта
              контента.
            </p>
          </header>
          <ContentAdminForm initialContent={content} />
        </div>
      </section>
    </main>
  );
}
