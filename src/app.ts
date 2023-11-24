import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { userRouter } from './modules/user/user.router';

// initialize express app
const app: Application = express();

// initialize express parser
app.use(express.json());
app.use(cors());

// initial response setup
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to CRUD API',
    data: null,
  });
});

// initialize routes
app.use('/api/users', userRouter);

// handle not found route error
app.all('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;
