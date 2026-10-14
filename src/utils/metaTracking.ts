/**
 * Meta Conversions API (CAPI) & Pixel deduplicated tracking utility.
 * Sends 'Lead' events to both the client-side Pixel / GTM and the server-side CAPI.
 */

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
  return match ? decodeURIComponent(match[3]) : null;
}

export function trackWhatsAppConversion(customEventName = 'Lead', customData: Record<string, any> = {}) {
  try {
    const eventId = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    const eventSourceUrl = typeof window !== 'undefined' ? window.location.href : 'https://warmiacademy.cl';
    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc');

    // 1. Client-side GTM DataLayer push with deduplication event_id
    if (typeof window !== 'undefined') {
      const win = window as any;
      win.dataLayer = win.dataLayer || [];
      win.dataLayer.push({
        event: 'whatsapp_click',
        event_name: customEventName,
        event_id: eventId,
        currency: 'CLP',
        value: 120000,
        content_name: 'Curso Lifting de Pestañas'
      });

      // 2. Client-side Meta Pixel direct call (with matching eventID for deduplication)
      if (typeof win.fbq === 'function') {
        win.fbq('track', customEventName, {
          currency: 'CLP',
          value: 120000,
          content_name: 'Curso Lifting de Pestañas'
        }, { eventID: eventId });
      }
    }

    // 3. Server-side Meta Conversions API (CAPI) call
    const payload = {
      eventName: customEventName,
      eventId,
      eventSourceUrl,
      fbp,
      fbc,
      customData
    };

    fetch('/api/conversions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true // Guarantees execution even if the user navigates to WhatsApp immediately
    }).catch(err => {
      console.warn('Meta CAPI background tracking error (non-blocking):', err);
    });

    return eventId;
  } catch (e) {
    console.warn('Tracking dispatch error (non-blocking):', e);
    return null;
  }
}

/**
 * Initializes global click listener to automatically intercept any WhatsApp link
 * and send deduplicated conversions to Meta Pixel & CAPI.
 */
export function initGlobalWhatsAppTracking() {
  if (typeof window === 'undefined') return;

  const handleClick = (e: MouseEvent) => {
    const target = (e.target as HTMLElement)?.closest('a');
    if (!target) return;

    const href = target.getAttribute('href') || '';
    if (href.includes('wa.me') || href.includes('whatsapp.com')) {
      trackWhatsAppConversion('Lead', {
        link_url: href,
        button_text: target.innerText?.trim()?.slice(0, 50) || 'WhatsApp'
      });
    }
  };

  document.addEventListener('click', handleClick, { capture: true });
}
