export default function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const body = req.body || {};
    console.log('Lead captured', body);
    res.statusCode = 200;
    res.end(JSON.stringify({ ok: true }));
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end(JSON.stringify({ error: 'Internal error' }));
  }
}
