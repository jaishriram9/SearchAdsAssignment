import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import adsRouter from "./routes/adsRouter.js";
import companyRouter from "./routes/companyRoutes.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    credentials: true,
  })
);

app.use("/api/ads", adsRouter);
app.use("/api/company", companyRouter);

app.get("/", (req, res) => {
  return res.send("<h1>It WOrks</h1>");
});

app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ message: err.message });
});

mongoose
  .connect(process.env.MONGODB_URL || "mongodb://localhost/SearchApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((connection) => {
    console.log("connected to mongodb");

    app.listen(port, () => {
      console.log(`app is running on port : ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
