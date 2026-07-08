import express from 'express';
import cors from 'cors';
import { animeRouterObject } from './routes/anime.routes';
import { userRouterObject } from './routes/auth.routes';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(cookieParser());
app.use("/animes",animeRouterObject);
app.use("/authent", userRouterObject);

export {app};
