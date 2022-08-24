import axios from 'axios';
import {popularGamesURL, upcomingGamesURL, newGamesURL, genreGamesURL} from '../api';

//Action Creator

export const loadGames = (a, b, platform, genre) => async(dispatch) => {
    let platformArray = [{'PC': 4, 'Playstation 5' : 187, "Xbox One" : 1, "Nintendo Switch": 7 , "Xbox Series S/X": 1, 'Playstation ' : 18}]
    if (platform !== undefined) {
        console.log(platform)
        platform = platformArray[0][platform];
        console.log(platform)
        
    }

    //FETCH AXIOS
    const upcomingData = await axios.get(upcomingGamesURL(a, b, platform, genre))
    console.log(genre !== "all genres" ? "activate" : "stop")
    dispatch({
        type: "FETCH_GAMES",
        payload:{
            upcoming: upcomingData.data.results,
        }
    })
}

