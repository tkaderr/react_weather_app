import FETCH_WEATHER from '../actions/index';

export default function (state = [], action){
  switch (action.type){
    case FETCH_WEATHER: //concat sets a new array/state
      //return state.concat([action.payload.data]);
      //return a new array with the new data and add in the old data (deconstruct from old state)
      return [ action.payload.data, ...state ];
  }
  return state;
}
