export function SET_CATEOGRY(category) {
    return(dispatch, getState) => {
        dispatch({
            type: "SET_CATEOGRY",
            payload: category
        })
    }
}