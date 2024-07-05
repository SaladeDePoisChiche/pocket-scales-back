
import { closeServer, createServer, startServer } from '../app/server/server';

let server: any;

// Global setup function
global.beforeAll((done) => {
  const app = createServer();
  server = startServer();
  done();
});

// Global teardown function
global.afterAll((done) => {
  closeServer(done); // Close the server after tests
});

export { server }