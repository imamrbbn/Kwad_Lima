export function SET_NUMBER(number) {
    return(dispatch, getState) => {
        dispatch({
            type: "SET_NUMBER",
            payload: number
        })
    }
}