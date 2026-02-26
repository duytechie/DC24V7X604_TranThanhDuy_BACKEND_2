import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import contactsRoute from "./app/routes/contact.route.js";
import authRoute from "./app/routes/auth.route.js";
import ApiError from "./app/api-error.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

app.use("/api/contacts", contactsRoute);
app.use("/api/auth", authRoute);

// handle 404 error
app.use((req, res, next) => {
  return next(new ApiError(404, "Resource not found"));
});

// define error-handling middleware last, after other app.use() and routes calls
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});

export default app;
