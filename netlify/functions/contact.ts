type NetlifyEvent = {
  httpMethod?: string;
  body?: string | null;
  headers?: Record<string, string | undefined>;
};

type NetlifyResponse = {
  statusCode: number;
  headers?: Record<string, string>;
  body: string;
};

const json = (statusCode: number, body: Record<string, string>): NetlifyResponse => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body)
});

export default async function handler(event: NetlifyEvent): Promise<NetlifyResponse> {
  if (event.httpMethod !== 'POST') return json(405, { error: 'Método no permitido' });

  const form = new URLSearchParams(event.body || '');
  const name = form.get('name')?.trim();
  const email = form.get('email')?.trim();
  const service = form.get('service')?.trim() || 'Consulta general';
  const message = form.get('message')?.trim() || 'Sin observaciones';

  if (!name || !email) return json(400, { error: 'Faltan nombre y correo electrónico' });

  const primaryEmail = process.env.CONTACT_EMAIL;
  const webEmail = process.env.WEB_DEVELOPMENT_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;
  const sender = process.env.EMAIL_FROM;

  if (!primaryEmail || !apiKey || !sender) return json(500, { error: 'El servicio de correo no está configurado' });

  const recipients = [primaryEmail];
  const isWebService = /web|desarrollo|informatica|informática/i.test(service);
  if (isWebService && webEmail) recipients.push(webEmail);

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: sender,
      to: recipients,
      reply_to: email,
      subject: `Nuevo contacto JNSTUDIO · ${service}`,
      text: `Nombre: ${name}\nEmail: ${email}\nServicio: ${service}\n\n${message}`
    })
  });

  if (!response.ok) return json(502, { error: 'No se pudo enviar el mensaje' });
  return json(200, { message: 'Mensaje enviado correctamente' });
}
