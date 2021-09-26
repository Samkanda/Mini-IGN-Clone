import axios from 'axios';
import {popularGamesURL, upcomingGamesURL, newGamesURL, JanGamesURL} from '../api';

//Action Creator

export const loadGames = () => async(dispatch) => {
    //FETCH AXIOS
    const popularData = await axios.get(popularGamesURL())
    const newGamesData = await axios.get(newGamesURL())
    const upcomingData = await axios.get(upcomingGamesURL())
    const janData = await axios.get(JanGamesURL())

    dispatch({
        type: "FETCH_GAMES",
        payload:{
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,
            janGames: janData.data.results,
        }
    })
}