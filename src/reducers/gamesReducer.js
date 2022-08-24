const initState = {
    upcoming : [],
    searched : []
}

const gamesReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_GAMES":
            return {...state, 
                upcoming: action.payload.upcoming,
            }
        default:
            return {...state}
    }
}

export default gamesReducer;