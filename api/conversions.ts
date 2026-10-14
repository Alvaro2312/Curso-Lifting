export default async function handler(req: any, res: any) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const pixelId = process.env.META_PIXEL_ID;
    const accessToken = process.env.META_CAPI_TOKEN;

    if (!pixelId || !accessToken) {
      console.warn('Meta CAPI: Missing META_PIXEL_ID or META_CAPI_TOKEN environment variables.');
      return res.status(200).json({ 
        success: false, 
        message: 'Variables META_PIXEL_ID o META_CAPI_TOKEN pendientes en Vercel.' 
      });
    }

    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const {
      eventName = 'Lead',
      eventId,
      eventSourceUrl,
      fbp,
      fbc,
      customData = {}
    } = body;

    const clientIp = (
      req.headers['x-forwarded-for'] ||
      req.socket?.remoteAddress ||
      ''
    ).toString().split(',')[0].trim();

    const userAgent = req.headers['user-agent'] || '';

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId || `capi_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
          event_source_url: eventSourceUrl || req.headers['referer'] || 'https://warmiacademy.cl',
          action_source: 'website',
          user_data: {
            client_ip_address: clientIp,
            client_user_agent: userAgent,
            ...(fbp ? { fbp } : {}),
            ...(fbc ? { fbc } : {})
          },
          custom_data: {
            currency: 'CLP',
            value: 120000,
            content_name: 'Curso Lifting de Pestañas',
            content_category: 'Educación y Estética',
            ...customData
          }
        }
      ]
    };

    const metaRes = await fetch(
      `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }
    );

    const result = await metaRes.json();
    return res.status(200).json({ success: true, result });
  } catch (err: any) {
    console.error('Error sending Meta CAPI event:', err);
    return res.status(500).json({ success: false, error: err?.message || String(err) });
  }
}
