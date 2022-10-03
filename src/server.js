const { json, static, express } = require('express');
const { join } = require('path');

class Application {
  constructor() {
    this.app = express();
    this.app.use(json());
    this.app.use(static(join(__dirname, 'public')));
  }

  listen(port) {
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


