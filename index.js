import express from "express";
import routes from "./routes/index.js"

const app = express();

app.listen(3000, () => {
    console.log("Listening")
})

const router = express.Router();

routes.forEach((routerFn, index) => {
    console.log(routerFn);
    routerFn(router);
})

app.set('view engine', 'ejs');

app.use("/api", router);