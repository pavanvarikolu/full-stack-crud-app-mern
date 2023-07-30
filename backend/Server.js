const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes/TaskRoutes");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT | 5000;
app.use(express.json());
app.use(cors());
/*app.get("/",(req, res)=>{
    res.send("<h1>This is Pavan Kalyan<h1>");
});*/
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MONGODB CONNECTED...."))
  .catch((err) => console.log(err));

  app.use("/api",routes);

app.listen(PORT, () => console.log(`Listening at ${PORT}`));
