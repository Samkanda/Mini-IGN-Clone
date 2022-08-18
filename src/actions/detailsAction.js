import axios from 'axios';
import { gameDetailsURL, gameScreenshotURL, filteredGameURL} from '../api';

export const loadDetail = (id) => async (dispatch) => {
    dispatch({
        type: "LOADING_DETAIL",
    });

    const detailData = await axios.get(gameDetailsURL(id))
    const screenData = await axios.get(gameScreenshotURL(id))


    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screen: screenData.data,

        },
    });
}

export const loadFilter = (lastYear, currentYear) => async (dispatch) => {
    dispatch({
        type: "LOADING_DETAIL",
    });

    const detailData = await axios.get(filteredGameURL(lastYear,currentYear ))

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
        },
    });
    console.log(await axios.get(filteredGameURL(lastYear,currentYear )))
}


