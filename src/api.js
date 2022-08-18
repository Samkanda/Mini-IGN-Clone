//Base URL
const base_url = "https://api.rawg.io/api/"

//Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10){
        return `0${month}`;
    } else {
        return month;
    }
};

const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10){
        return `0${day}`;
    } else {
        return day;
    }
};

// //Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
let genre="action";


//Popular Games
const popular_games = `games?key=88002727090249d293f5a117d1d3d855&dates=${lastYear},${currentDate}&ordering=-rating&page_size=30`;
const upcoming_games = `games?key=88002727090249d293f5a117d1d3d855&dates=${currentYear},${nextYear}&ordering=-added&page_size=30`;
const newGames = `games?key=88002727090249d293f5a117d1d3d855&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
const genre_games = `https://api.rawg.io/api/genres`;


export const genreGamesURL = () => `${base_url}${genre_games}`;

export const filteredGameURL = (filterLastYear,filterCurrentYear) => `
${base_url}games?key=88002727090249d293f5a117d1d3d855&dates=${filterLastYear},${filterCurrentYear}&ordering=-rating&page_size=30`;


export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}.json?&key=88002727090249d293f5a117d1d3d855`;
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?&.json?&key=88002727090249d293f5a117d1d3d855`;