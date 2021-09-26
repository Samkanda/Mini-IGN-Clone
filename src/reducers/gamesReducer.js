const initState = {
    popular : [],
    newGames : [],
    upcoming : [],
    janGames : [],
    searched : []
}

const gamesReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_GAMES":
            return {...state, 
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames,
                janGames: action.payload.janGames,
            }
        default:
            return {...state}
    }
}

export default gamesReducer;