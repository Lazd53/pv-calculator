export const ADD_RESULTS_TO_STATE = "ADD_RESULTS_TO_STATE";
export const DELETE_RESULT = "DELETE_RESULTS";
export const SET_CURRENT_RESULT = "SET_CURRENT_RESULT";
export const CLEAR_RESULTS = "CLEAR_RESULTS";

function addResultsToState(returnedResults){
  return {
    type: ADD_RESULTS_TO_STATE,
    returnedResults
  }

}

export const  handleGetResults = (request) => {
  return (dispatch) => {
    return(
      fetch(request)
        .then( r => r.json())
        .then(data => {
        dispatch(addResultsToState(data))
      })
    )
    }
  }

export const setCurrentResult(id){
  return {
    type: SET_CURRENT_RESULT,
    id
  }
}
