export function SET_ERROR(error) {
  return(dispatch, getState) => {
      dispatch({
          type: "SET_ERROR",
          payload: error
      })
  }
}