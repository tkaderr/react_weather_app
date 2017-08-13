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

  return ({
    type: FETCH_WEATHER,
    //payload contains data that describes this particular action
    //when you pass the action(which is a promise as a payload property), redux-promise handles that request and stops the action. Once the request finishes, dispactch a new action of the same type but with a payload of the resolved request
    //basically unwraps the promise
    //useful because we dont want to have the reducer deal with a promise. We want a rsolved promise passed to reducer
    payload: request
  });
}
