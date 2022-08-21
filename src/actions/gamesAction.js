import axios from 'axios';
import {popularGamesURL, upcomingGamesURL, newGamesURL, genreGamesURL} from '../api';

//Action Creator

export const loadGames = (a, b) => async(dispatch) => {
    //FETCH AXIOS
    const popularData = await axios.get(popularGamesURL())
    const newGamesData = await axios.get(newGamesURL())
    const upcomingData = await axios.get(upcomingGamesURL(a, b))
    console.log(a)
    console.log(b)
    dispatch({
        type: "FETCH_GAMES",
        payload:{
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,
        }
    })
}

