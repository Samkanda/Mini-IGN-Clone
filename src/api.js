//Base URL
const base_url = "https://api.rawg.io/api/";
const key = "88002727090249d293f5a117d1d3d855";

//Getting the date
export const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10){
        return `0${month}`;
    } else {
        return month;
    }
};

export const lastDayOfMonth = (year, month) => {
    return new Date((new Date(year, month, 1)) - 1);
  }

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

//Popular Games

export const filteredGameURL = (filterLastYear,filterCurrentYear) => `
    ${base_url}games?key=${key}&dates=${filterLastYear},
    ${filterCurrentYear}&ordering=-rating&page_size=30`;


export const upcomingGamesURL = (a, b, platform, genre) => `${base_url}games?key=${key}&${genre == "all genres" ? ``: `genres=${genre}`}&${platform? `platforms=${platform}`: ""}&dates=${a},${b}&ordering=-added&page_size=30`;
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}.json?&key=${key}`;
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?&.json?&key=${key}`;
//export const upcomingGamesURL = (a, b, platform, genre) => `${base_url}games?key=${key}&genres=51&dates=${a},${b}&ordering=-added&page_size=30`;
// ${7 == 6 ? `&platforms=${187}`: ""}