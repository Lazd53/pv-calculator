import {RESET_PANEL_REQUEST_VALUES, CHANGE_PANEL_VALUE} from '../actions/requestActions';

const requestSetupValues = {
  system_capacity: 1,
  module_type: 1,
  array_type: 1,
  losses: 14,
  azimuth: 0,
  tilt: 30,
  lat: 38,
  lon: -122
}

function panelRequestInfo(state=requestSetupValues, action){
  switch (action.type){
    case RESET_PANEL_REQUEST_VALUES:
      return requestSetupValues;
    case CHANGE_PANEL_VALUE:
    const {key, value} = action;
      return { ...state, [key]:value };
    default:
      return state;
  }
}

export default panelRequestInfo;
