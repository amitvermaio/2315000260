import 'dotenv/config';
import mongoose from "mongoose";
import { Log } from '../../logging_middleware';

export async function connectToDatabase() {
  try {
    const mongodbUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/stage_1';
    await mongoose.connect(mongodbUri);
    Log('backend', 'info', 'db', `Connected To Database!`);
  } catch (error) {
    Log('backend', 'fatal', 'db', error.message);
  }
}