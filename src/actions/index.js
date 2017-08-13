import axios from 'axios';

const API_KEY= "b1413b70bc1fd163763e0acbae76c378";
//those are back ticks not quotes
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`  ;
export const FETCH_WEATHER = 'FETCH_WEATHER';

//actioncreators always return an actions
//action is an object that always have a type
//actioncreator will have argument city passed
export function fetchWeather(city){

  const url = `${ROOT_URL}&q=${city},us`;

  //axios is like ajax request
  //returns a promise
  const request = axios.get(url);
  console.log("request:", request);

  return ({
    type: FETCH_WEATHER,
    //payload contains data that describes this particular action
    payload: request
  });
}
