import express, { Request, Response, NextFunction } from 'express';
import { createServer, startServer } from './app/server/server';


const app = createServer();
const server = startServer();

export default app;