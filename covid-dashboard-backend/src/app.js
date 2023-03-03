import "dotenv/config";
import express from "express";
import cors from "cors";
import RouterDashboard_V1 from "./Router/RouterDashboard_V1.js";
import RouterDashboard_V2 from "./Router/RouterDashboard_V2.js";
const app = express();
const PORT = process.env.PORT || 9092;

//TODO Enable cors

app.use( cors());

//** version 1 for Dashboard */
app.use("/V1", RouterDashboard_V1);

//** V2 will use in future for any new major update
// app.use("/V2", RouterDashboard_V2);

const listen = app.listen(PORT, (err) => {
    if(err) console.error(err);
  console.log("Listing on Port : "+listen.address().port);
});

//always put this code in last to handle all exception
app.use((err, req, res, next) => {
  if (!err) {
    return next();
  }

  res.status(500);
  res.send("500: Internal server error");
});
