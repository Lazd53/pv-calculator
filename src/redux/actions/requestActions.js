export const RESET_PANEL_REQUEST_VALUES = "RESET_PANEL_REQUEST_VALUES"
export const CHANGE_PANEL_VALUE = "CHANGE_PANEL_VALUE"
export const CHANGE_COORD = "CHANGE_COORD"

export function resetRequestValues(){
  return { type: RESET_PANEL_REQUEST_VALUES}
}

export function changePanelValue(key, value){
  return {
    type: CHANGE_PANEL_VALUE,
    key,
    value
  }
}

export function changeCoordinates( coordObj ){
  let currentCity = coordObj.currentCity
  return {
    type: CHANGE_COORD,
    cityId: coordObj.cityId,
    cityName: coordObj.cityName,
    lat: coordObj.lat,
    lon: coordObj.lon
  }
}
