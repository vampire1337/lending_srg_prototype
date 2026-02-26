export const runtime = 'edge';

export async function GET() {
  return Response.json({
    status: 'ok',
    runtime: 'edge',
    checkedAt: new Date().toISOString(),
  });
}
