import express, { Request, Response } from 'express';

const server = express();

server.get('/', (req: Request, res: Response) => {
  res.send('Yo');
});

server.listen('3000');
console.log('Server listening on http://localhost:3000');
