import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      console.log('API Data:',action.payload.data);
      //state.push is bad as we would be mutating the state, never do this, always return new state
      return [action.payload.data, ...state];
  }
  return state;
}
