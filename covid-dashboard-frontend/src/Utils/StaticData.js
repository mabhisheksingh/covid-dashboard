export const Global_DATA = {
  CaseReport: [
    "New_cases",
    "Cumulative_cases",
    "New_deaths",
    "Cumulative_deaths",
  ],
  CaseReportDefaultValue: [0, 0, 0, 0],
  WHO_REGION: "WHO_region",
  WHO_REGIONList: ["AFRO", "AMRO", "EMRO", "EURO", "SEARO", "WPRO"],
  WHO_REGIONListName: [
    "Africa",
    "Americas",
    "Eastern Mediterranean",
    "Europe",
    "South-East Asia",
    "Western Pacific",
  ],
  URL_END_POINT: "/getCovid19DataWHORegion/",
  CaseReportColorCode: {
    AFRO: { color: "rgb(10,113,213)" },
    AMRO: { color: "rgb(255,187,48)" },
    EMRO: { color: "rgb(0,174,143)" },
    EURO: { color: "rgb(200,214,91)" },
    SEARO: { color: "rgb(82,0,174)" },
    WPRO: { color: "rgb(193,37,146)" },
  },
};

export const Global_PER_DAY_DATA = {
  NEW_CASES:"New_cases",
  DEATH_CASES:"New_deaths",
  WHO_REGION: "WHO_region",
  DATE_REPORTED: "Date_reported",
  URL_END_POINT: "/getCovid19GlobalData",
  NewCaseReportColorCode: "rgb(10,113,213)",
  NewDeathReportColorCode: "rgb(199,113,215)",
};
export const COUNTRY_DATA = {
  NEW_CASES:"New_cases",
  DEATH_CASES:"New_deaths",
  WHO_REGION: "WHO_region",
  DATE_REPORTED: "Date_reported",
  URL_END_POINT: "/getCovid19DataCountry/",
  NewCaseReportColorCode: "rgb(10,113,213)",
  NewDeathReportColorCode: "rgb(199,113,215)",
};