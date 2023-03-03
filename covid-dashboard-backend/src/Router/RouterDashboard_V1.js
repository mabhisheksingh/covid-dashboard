import express from "express";
const router = express.Router()

import dashBoardController from "../Controller/ControllerDashboard.js"


router.get("/get",(request,response)=>{
    console.log("Testing");
    response.send("Testing passed").status(200);
});


/* A route that is being defined. */
router.get("/get_who_covid_data", dashBoardController.findAllCovidData )//only for testing purpose
router.get("/getAllCovid19Data", dashBoardController.findAllCovid19Data ) //only for testing purpose
router.get("/getCovid19GlobalData", dashBoardController.getCovid19GlobalData )
router.get("/getCovid19DataCountry/:country", dashBoardController.findCovid19DataByCountryCode )
router.get("/getCovid19DataWHORegion/:who_region", dashBoardController.findCovid19DataByWHORegion )

export default router;