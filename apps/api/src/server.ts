import app from "./app";
import { env } from "./config/env";
import { connectDB } from "./config/db";

async function start() {
  try {
    await connectDB();
    app.listen(env.PORT, () => {
      console.log(`server is running on port ${env.PORT}`);
    });
  } catch (error) {
    console.error("failed to start server ", error);
    process.exit(1);
  }
}

start();