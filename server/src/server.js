import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bugRoutes from "./routes/bugRoutes.js";
import { log } from "./utils/logger.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/bugs", bugRoutes);

// 404 handler (for undefined routes)
app.use(notFound);

// Error handler middleware (always last)
app.use(errorHandler);

// 🪲 Still keeping debug-friendly logging
mongoose
  .connect(process.env.MONGODB_URI || "")
  .then(() => log("✅ Connected to MongoDB"))
  .catch((err) => log("❌ Database connection failed:", err.message));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => log(`🚀 Server running on port ${PORT}`));

export default app;
