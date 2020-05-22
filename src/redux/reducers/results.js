import {
  ADD_RESULTS_TO_STATE, DELETE_RESULT,
  SET_CURRENT_RESULT, CLEAR_RESULTS} from "../actions/resultsActions";

const initialState= {
  storedResults: [],
  currentResult: false,
}

function results(state=initialState, action){
  switch (action.type){
    case ADD_RESULTS_TO_STATE:
      const resultsLoc = state.storedResults.length
      const addState = {
        currentResult: resultsLoc,
        storedResults: [...state.storedResults, {...action.returnedResults, id:resultsLoc} ]
      }
      return addState;
    case DELETE_RESULT:
      let deleteState={}
      if (state.results.length === 1){
        deleteState.currentResult = false;
      } else {
        deleteState.currentResult -= 1
      }
      deleteState.storedResults = [state.filter(item => item.id!== action.deleteID)]
      return deleteState;
    case SET_CURRENT_RESULT:
      return {storedResults: [...state.storedResults], currentResult: action.id}
    default:
      return state;
  }
}

export default results;
