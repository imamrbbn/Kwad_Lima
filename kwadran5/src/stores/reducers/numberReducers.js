const initState = {
    loading: false,
    error: false,
    number : null,
    result: null,
    category: null,
    categories: null
}

function sugokuReducer(state = initState, action) {

    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload
            }

        case "SET_ERROR":
            return {
                ...state,
                error: action.payload
            }    

        case "SET_NUMBER":
            return {
                ...state,
                number: action.payload
            }

        case "SET_RESULT":
            return {
                ...state,
                result: action.payload
            }

        case "SET_CATEOGRY":
            return {
                ...state,
                category: action.payload
            }

        case "SET_CATEGORIES":
            return {
                ...state,
                categories: action.payload
            }

        case "RESET":
            return {
                ...state,
                number: [],
                result: 'unsolved'
              }
            
        default:
            return state
    }
}

export default sugokuReducer