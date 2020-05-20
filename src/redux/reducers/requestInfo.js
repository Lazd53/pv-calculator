import {RESET_PANEL_REQUEST_VALUES, CHANGE_PANEL_VALUE} from '../actions/requestActions';

const requestSetupValues = {
  systemCapacity: 1,
  moduleType: null,
  losses: null,
  arrayType: 0,
  systemLosses: 14,
  azimuth: 0,
  tilt: 30,
}

function panelRequestInfo(state=requestSetupValues, action){
  switch (action.type){
    case RESET_PANEL_REQUEST_VALUES:
      return requestSetupValues;
    case CHANGE_PANEL_VALUE:
    const {changedObject} = action;
      return { ...state, changedObject };
    default:
      return state;
  }
}

export default panelRequestInfo;
