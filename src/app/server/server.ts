import express, { Request, Response, NextFunction, Application} from 'express';

import router from './routes';

let app: Application;
let server: any;
const port = 3000;

function createServer(): Application {
  app = express();
  
  app.use('/', router);
  app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello, server is running!');
  });

  return app;
}

function startServer(): any {
  server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
  return server;
}

function closeServer(done: any): void {
  server.close(done);
}

export { createServer, startServer, closeServer };