import mongoose from "mongoose";
import { env } from "./env";
import "dotenv/config";

export async function connectDB(): Promise<void> {
  await mongoose.connect(env.MONGO_URL);
  console.log("connectDB called from:", __filename);
  console.log("MongoDB connected");
}  