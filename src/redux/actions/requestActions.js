export const RESET_PANEL_REQUEST_VALUES = "RESET_PANEL_REQUEST_VALUES"
export const CHANGE_PANEL_VALUE = "CHANGE_PANEL_VALUE"

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
