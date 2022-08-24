import axios from 'axios';

export async function getGenres() {
    const aa = await axios.get("https://api.rawg.io/api/genres?key=88002727090249d293f5a117d1d3d855&dates")
    console.log(aa)
    return aa
}

export async function getPlatforms() {
    const aa = await axios.get("https://api.rawg.io/api/platforms?key=88002727090249d293f5a117d1d3d855&dates&page_size=6")
    console.log(aa)
    return aa
}




    


