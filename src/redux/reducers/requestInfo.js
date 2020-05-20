import {RESET_PANEL_REQUEST_VALUES, CHANGE_PANEL_VALUE} from '../actions/requestActions';

const requestSetupValues = {
  systemCapacity: 1,
  moduleType: 1,
  arrayType: 1,
  systemLosses: 14,
  azimuth: 0,
  tilt: 30,
  latitude: 0,
  longitude: 0
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
