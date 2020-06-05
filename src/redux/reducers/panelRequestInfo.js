import {
  RESET_PANEL_REQUEST_VALUES,
  CHANGE_PANEL_VALUE,
  CHANGE_COORD} from '../actions/requestActions';

const requestSetupValues = {
  system_capacity: 1,
  module_type: 1,
  array_type: 1,
  losses: 14,
  azimuth: 0,
  tilt: 30,
  lat: 37.775,
  lon: -122.419,
  currentCity: "sanFrancisco"
}

function panelRequestInfo(state=requestSetupValues, action){
  switch (action.type){
    case RESET_PANEL_REQUEST_VALUES:
      return requestSetupValues;
    case CHANGE_PANEL_VALUE:
    const {key, value} = action;
      return { ...state, [key]:value };
    case CHANGE_COORD:
      return { ...state,
        currentCity: action.currentCity,
        lat: action.lat,
        lon: action.lon
      }
    default:
      return state;
  }
}

export default panelRequestInfo;
