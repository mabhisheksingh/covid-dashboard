import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


/**
 * This function is called when a GET request is made to the /covidData endpoint. It uses the Prisma
 * client to query the database for all the data in the whoCovidData table and sends it back to the
 * client.
 * @param req - The request object.
 * @param res - The response object.
 */
const findAllCovidData = async (req, res) => {
  console.log("Get..findAllCovidData");
  let data = await prisma.whoCovidData.findMany();
  res.send(data).status(200);
};

/**
 * This function is called by the client, and it calls the Prisma API to get all the data from the
 * database.
 * @param req - The request object.
 * @param res - The response object.
 */
const findAllCovid19Data = async (req, res) => {
  console.log("Get..findAllCovid19Data");
  let data = await prisma.whoCovid19Data.findMany({
    take: 20000,
  });
  res.send(data).status(200);
};

/**
 * It's a function that takes a country code as a parameter and returns the data for that country code
 * @param req - The request object.
 * @param res - The response object.
 */
const findCovid19DataByCountryCode = async (req, res) => {
  console.log("Get..findCovid19DataByCountry");
  let countryName = req.params.country;
  console.log("countryName ", countryName);
  let data = await prisma.whoCovid19Data.findMany({
    where: {
      Country_code: countryName,
    },
  });
  res.send(data).status(200);
};

/**
 * This function is supposed to return the sum of the values of the fields New_cases, Cumulative_cases,
 * New_deaths, Cumulative_deaths for each date in the Date_reported field.
 * @param req - The request object.
 * @param res - the response object
 */
const getCovid19GlobalData = async (req, res) => {
  console.log("Get getCovid19GlobalData");
  let data = await prisma.whoCovid19Data.groupBy({
    by: ['Date_reported'],
    _sum: {
      New_cases: true,
      Cumulative_cases: true,
      New_deaths: true,
      Cumulative_deaths: true,
    }

  });
  res.send(data).status(200);
};

const findCovid19DataByWHORegion = async (req, res) => {
  console.log("Get..findCovid19DataByWHORegion");
  let who_region = req.params.who_region;
  console.log("who_region ", who_region);
  let data = await prisma.whoCovid19Data.groupBy({
    by: ["WHO_region"],
    where: {
      WHO_region: who_region,
    },
    _sum: {
      New_cases: true,
      Cumulative_cases: true,
      New_deaths: true,
      Cumulative_deaths: true,
    },
  });
  res.send(data).status(200);
};

export default {
  findAllCovidData,
  findAllCovid19Data,
  findCovid19DataByCountryCode,
  findCovid19DataByWHORegion,
  getCovid19GlobalData,
};
