// Create new file scripts/heroku-start.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
// Your static pre-build assets folder
app.use(express.static(path.join(__dirname, '..', 'build')));
// Root Redirects to the pre-build assets
app.post('/message', async (req, res) => {
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

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, '..', 'build'));
});
// Any Page Redirects to the pre-build assets folder index.html that // will load the react app
app.get('*', function(req,res){
  res.sendFile(path.join(__dirname, '..', 'build/index.html'));
});
app.listen(port, ()=>{
  console.log("Server is running on port: ", port)
})