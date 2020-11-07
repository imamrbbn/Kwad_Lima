export function SET_LOADING(status) {
  return(dispatch, getState) => {
      dispatch({
          type: "SET_LOADING",
          payload: status
      })
  }
}