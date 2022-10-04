const express = require('express');
const { join } = require('path');

class Application {
  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.static(join(__dirname, 'public')));
  }

  listen(port) {
    this.app.post('/message', async (req, res) => {
      const {email, message} = req.body;

      if (!email || !message) {
        return res.status(400).json({message: 'Invalid request'});
      }

      const response = await fetch('https://discord.com/api/webhooks/1026646827111559168/j3Bgkc5MBDuOuaDa1xMf65IZL6n0xj0co9geG52XvDBzfZ49f0kz7G06vH1AuLxSlE1H', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: null,
          embeds: [
            {
              title: "New message",
              description: `From ${req.body.email}`,
              color: null,
              fields: [
                {
                  name: "Message",
                  value: message
                }
              ],
              timestamp: new Date().toISOString()
            }
          ],
          attachments: []
        })
      });

      response.ok ? res.status(200).json({message: 'Message sent'}) : res.status(500).json({message: 'Internal server error'});
    });

    this.app.get('/', (req, res) => {
      res.sendFile(join(__dirname, '..', 'build'));
    });
    
    this.app.get('*', (req, res) => {
      res.sendFile(join(__dirname, '..', 'build/index.html'));
    });

    this.app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  }
};

(async () => {
  const port = process.env.PORT || 3000;
  const server = new Application();
  server.listen(port)
})();


