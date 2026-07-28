export default async function handler(req, res) {
  const { code } = req.query;
  const clientId = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;

  if (!code) {
    return res.status(400).send('Missing code query parameter');
  }

  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const data = await response.json();

    if (data.error) {
      return res.status(400).send(`GitHub OAuth Error: ${data.error_description || data.error}`);
    }

    const token = data.access_token;
    const provider = 'github';

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Authorizing MB Agency CMS...</title>
      </head>
      <body style="font-family: system-ui, sans-serif; text-align: center; padding: 2rem; background: #FAFAFA; color: #0F172A;">
        <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Authorized Successfully! ✨</h3>
        <p style="font-size: 0.9rem; color: #64748B;">Connecting to MB Agency Dashboard...</p>
        <script>
          (function() {
            const token = "${token}";
            const provider = "github";
            const payload = JSON.stringify({ token: token, provider: provider });

            function doPost() {
              if (window.opener) {
                try {
                  window.opener.postMessage("authorizing:github", "*");
                  window.opener.postMessage("authorization:github:success:" + payload, "*");
                } catch(e) {
                  console.error("postMessage error:", e);
                }
              }
            }

            doPost();

            let attempts = 0;
            const interval = setInterval(function() {
              attempts++;
              doPost();
              if (attempts >= 10) {
                clearInterval(interval);
                setTimeout(function() {
                  window.close();
                }, 400);
              }
            }, 200);
          })();
        </script>
      </body>
      </html>
    `;

    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(html);
  } catch (error) {
    console.error('OAuth Callback Error:', error);
    return res.status(500).send('Authentication failed');
  }
}
