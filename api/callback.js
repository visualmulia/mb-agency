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
        <title>Authorizing...</title>
      </head>
      <body>
        <script>
          (function() {
            const token = "${token}";
            const provider = "${provider}";
            const message = 'authorization:' + provider + ':success:' + JSON.stringify({ token: token, provider: provider });

            if (window.opener) {
              window.opener.postMessage(message, '*');
              setTimeout(function() {
                window.close();
              }, 300);
            }
          })();
        </script>
        <p style="font-family: sans-serif; text-align: center; margin-top: 2rem;">Authorized successfully! Closing window...</p>
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
