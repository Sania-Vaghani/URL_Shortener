import express from "express";
import {shortenedRoutes} from './routes/shortener.routes.js'

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(shortenedRoutes) // express router

const port = 1234;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});