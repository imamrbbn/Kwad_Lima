const {solvingBases} = require('../../hooks/solvingBases')

export function SOLVE_NUMBER(number){

    return (dispatch, getState) => {
        dispatch({type: "SET_LOADING", payload: true})
        let result = solvingBases(number)
        dispatch({type: "SET_RESULT", payload: result})   
        dispatch({type: "SET_LOADING", payload: false})

    }
}