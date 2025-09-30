import express from "express";
import cors from "cors";

const app = express();

const PORT = 8003;

app.use(
  cors({
    origin: ["http://localhost:3002}", "http://localhost:3003"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Server Started!" });
});

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
