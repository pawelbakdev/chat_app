import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes/index.js';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware.js';
import connectDB from './utils/database.js';
import initSocketServices from './utils/socketService.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

await connectDB();
initSocketServices(server);
