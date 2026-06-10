import express from 'express';
import { connectToDatabase } from './db/db.js';
import { Log } from '../logging_middleware/index.js';
import notificationRouter from './route/notification.route.js';
const app = express();

app.use('/api/notification', notificationRouter);

app.listen(5000, () => {
  Log('backend', 'info', 'stage_1', "Server Started Successfully");
})
