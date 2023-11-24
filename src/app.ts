import express, { Application } from 'express';
import cors from 'cors';
import { userRouter } from './modules/user/user.router';

// initialize express app
const app: Application = express();

// initialize express parser
app.use(express.json());
app.use(cors());

// initialize routes
app.use('/api/users', userRouter);

export default app;
