import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.mjs";
import contactRoutes from "./routes/contactRoutes.mjs";
import errorHandler from "./middleware/errorMiddleware.mjs";


dotenv.config();


const app = express();


// ================================
// DATABASE
// ================================

connectDB();


// ================================
// MIDDLEWARE
// ================================

app.use(
  cors({
    origin:
      process.env.CLIENT_URL ||
      "http://localhost:5173",

    credentials: true,
  })
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);


// ================================
// ROOT ROUTE
// ================================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message:
      "Kowsika J Portfolio API is running 🚀",
  });
});


// ================================
// CONTACT ROUTES
// ================================

app.use(
  "/api/contact",
  contactRoutes
);


// ================================
// ERROR HANDLER
// ================================

app.use(errorHandler);


// ================================
// SERVER
// ================================

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `🚀 Server running on http://localhost:${PORT}`
  );
});