import test from 'node:test';
import assert from 'node:assert/strict';
import { submitContact, CONTACT_ENDPOINT } from './contact.js';
const fields = { name: 'Prueba', company: 'Portfolio', email: 'pablojimenezjo2005@gmail.com', message: 'Prueba del formulario' };
test('envía los campos al servicio y espera una confirmación real', async () => {
  let request;
  const result = await submitContact(fields, { fetchImpl: async (url, options) => {
    request = { url, options };
    return { ok: true, json: async () => ({ success: 'true' }) };
  }});
  assert.equal(request.url, CONTACT_ENDPOINT);
  assert.equal(request.options.method, 'POST');
  const body = JSON.parse(request.options.body);
  for (const key of Object.keys(fields)) assert.equal(body[key], fields[key]);
  assert.equal(result.success, 'true');
});
test('no confirma un envío con respuesta HTTP fallida', async () => {
  await assert.rejects(submitContact(fields, { fetchImpl: async () => ({ ok: false }) }), /No se ha podido enviar/);
});
test('no confirma un envío rechazado por el servicio', async () => {
  await assert.rejects(submitContact(fields, { fetchImpl: async () => ({ ok: true, json: async () => ({ success: 'false' }) }) }), /no ha confirmado/);
});
test('conserva los errores de conexión para que la interfaz los gestione', async () => {
  await assert.rejects(submitContact(fields, { fetchImpl: async () => { throw new TypeError('offline'); } }), TypeError);
});
test('cancela un envío que no responde', async () => {
  await assert.rejects(submitContact(fields, { timeoutMs: 10, fetchImpl: (_, { signal }) => new Promise((_, reject) => {
    signal.addEventListener('abort', () => reject(Object.assign(new Error('timeout'), { name: 'AbortError' })));
  }) }), /ha tardado demasiado/);
});
