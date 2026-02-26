export const runtime = 'nodejs';

export async function POST(request: Request) {
  const payload = await request.json();

  console.info('[SRG leads API]', payload);

  return Response.json({
    accepted: true,
  });
}
