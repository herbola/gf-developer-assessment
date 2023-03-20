import express from "express";
import router from "./lib/router.js";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000);
