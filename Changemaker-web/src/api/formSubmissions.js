const API_BASE = String(import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');

class FormSubmissionError extends Error {
  constructor(message, { status, body } = {}) {
    super(message);
    this.name = 'FormSubmissionError';
    this.status = status;
    this.body = body;
  }
}

async function parseJsonSafe(response) {
  const text = await response.text().catch(() => '');
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return { message: text };
  }
}

function messageFromBody(body, fallback) {
  if (!body || typeof body !== 'object') return fallback;
  return (
    body.message ||
    body.error ||
    body.errorMessage ||
    (typeof body.errors === 'string' ? body.errors : null) ||
    fallback
  );
}

async function publicPost(path, body) {
  if (!API_BASE) {
    throw new FormSubmissionError('Form submissions API is not configured.');
  }

  const response = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await parseJsonSafe(response);

  if (!response.ok) {
    throw new FormSubmissionError(
      messageFromBody(data, `Request failed (${response.status})`),
      { status: response.status, body: data },
    );
  }

  if (data && typeof data === 'object' && data.success === false) {
    throw new FormSubmissionError(messageFromBody(data, 'Submission failed.'), {
      status: response.status,
      body: data,
    });
  }

  return data;
}

/**
 * Submit a public form.
 * POST /public/form-submissions
 */
export async function submitFormSubmission(body) {
  return publicPost('/public/form-submissions', body);
}

export { FormSubmissionError };
