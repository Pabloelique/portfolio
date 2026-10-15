export const CONTACT_ENDPOINT = 'https://formsubmit.co/ajax/pablojimenezjo2005@gmail.com';

export async function submitContact(fields, { fetchImpl = fetch, timeoutMs = 20000 } = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetchImpl(CONTACT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        ...fields,
        _subject: 'Nuevo contacto desde el portfolio de Pablo Jiménez',
        _template: 'table',
      }),
    });
    if (!response.ok) throw new Error('No se ha podido enviar el mensaje. Inténtalo de nuevo o escríbeme por correo.');
    const result = await response.json();
    if (result.success !== true && result.success !== 'true') {
      throw new Error('El servicio no ha confirmado el envío. Inténtalo de nuevo o escríbeme por correo.');
    }
    return result;
  } catch (error) {
    if (error.name === 'AbortError') throw new Error('El envío ha tardado demasiado. Inténtalo de nuevo o escríbeme por correo.');
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}
