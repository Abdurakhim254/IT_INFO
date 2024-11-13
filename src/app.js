import express from "express";
import morgan from "morgan";
import { authRouter, userrouter, blogRouter,adminrouter, categoryrouter, articlerouter,commentrouter,courserouter } from "./routes/index.js";
import  rateLimit  from "express-rate-limit";


const app = express();

// const limitter = rateLimit({
//   windowMs: 60 * 1000,
//   limit: 2
// })


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));


// app.use(limitter);

app.use("/auth", authRouter);
app.use("/blog", blogRouter);
app.use("/category", categoryrouter);
app.use("/comment", commentrouter);
app.use("/course", courserouter);
app.use("/article", articlerouter);
app.use("/admin", adminrouter);
app.use("/api/v1/users", userrouter)


app.use((err, req, res, next) => {
  if (err) {
    return res.status(500).send(err.message);
  }
});

export default app