import {  Global_PER_DAY_DATA ,COUNTRY_DATA} from "../Utils/StaticData";
export const getCovid19DataPerDay = async (setUseStateVariable) => {
  let url = import.meta.env.VITE_BASE_URL + Global_PER_DAY_DATA.URL_END_POINT;
  let res = await fetch(url)
    .then((response) => response.json())
    .then((d) => d);
  setUseStateVariable(res);
}

export const getCovid19DataByCountry = async (countryCode,setUseStateVariable) => {
  // countryCode =  countryCode ?  countryCode : 'IN' // default search for India
  let url = import.meta.env.VITE_BASE_URL + COUNTRY_DATA.URL_END_POINT+ countryCode;
  console.log(url)
  let res = await fetch(url)
    .then((response) => response.json())
    .then((d) => d);

    console.log( "res", res)
  /* A callback function that is passed to the function as a parameter. */
  setUseStateVariable(res);
};
