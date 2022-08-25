import React, {useEffect, useState} from "react";
//Redux
import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';
import { useLocation } from "react-router";
import { getGenres, getPlatforms } from "../actions/axios";

//Styling and Animation
import styled from 'styled-components/macro';
import {motion} from "framer-motion";
import Navbar from "../components/Navbar";
//Components
import Game from '../components/Game';
import GameDetail from "../components/GameDetail";
import { getCurrentMonth } from "../api";

const All = ({setMonth, setCategory, selectedMonth}) => {
    //Use States
    const [year, setYear] = useState(new Date().getFullYear().toString());
    const [genres, setGenres] = useState([])
    const [platforms, setPlatforms] = useState([])
    const {upcoming, popular} = useSelector((state) => state.games); 
    const [selectedValue, setMonthValue] = useState(getCurrentMonth());
    const [selectedPlatform, setSelectedPlatform] = useState();
    const [selectedGenre, setSelectedGenre] = useState('all genres');
    
    

    //get the current location
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const dispatch = useDispatch();

    //Axios Functions
    async  function  fetchData(){
        const request = await getGenres();
        setGenres(request.data.results)
        const request2 = await getPlatforms();
        setPlatforms(request2.data.results);
    }

    useEffect(() => {
        fetchData()
    }, []);

    useEffect(() => {
        if(selectedGenre == "All Genres"){setSelectedGenre('All Genres')}
        if(selectedPlatform == "All Genres"){setSelectedPlatform(null)}
        dispatch(loadGames(`${year}-${selectedValue}-01`, `${year}-${selectedValue}-28`, selectedPlatform, selectedGenre))
        console.log(selectedPlatform)
    }, [dispatch, selectedValue, year,selectedGenre , selectedPlatform]);

  useEffect(() => {
    if (selectedMonth === "January"){setMonthValue('01')}
    else if (selectedMonth === "Feburary"){setMonthValue('02')}
    else if  (selectedMonth === "March"){setMonthValue('03')}
    else if  (selectedMonth === "April"){setMonthValue('04')}
    else if  (selectedMonth === "May"){setMonthValue('05')}
    else if  (selectedMonth === "June"){setMonthValue('06')}
    else if  (selectedMonth === "July"){setMonthValue('07')}
    else if  (selectedMonth === "August"){setMonthValue('08')}
    else if  (selectedMonth === "September"){setMonthValue('09')}
    else if  (selectedMonth === "October"){setMonthValue('10')}
    else if  (selectedMonth === "November"){setMonthValue('11')}
    else if  (selectedMonth === "December"){setMonthValue('12')}
    else setMonthValue(getCurrentMonth());
}, [selectedMonth])

    return (
        <div>
        <Navbar setMonth = {setMonth} setCategory={setCategory} selectedMonth={selectedMonth}/>
        <GameList>
            {path && <GameDetail/> }
            <div className="PageContainer">
            <h2>{selectedMonth} {year}</h2>
            <div className="selectContainer">
                <select  onChange={(e) => setSelectedPlatform(e.target.value)}>
                    <option>
                        All Platforms
                    </option>
                    {platforms.length > 0 ? platforms.map((platform) => {
                        return(
                            <option>
                                {platform.name}
                            </option>
                        )
                    }): null}
                </select>
                <select  onChange={(e) => setSelectedGenre(e.target.value.toLowerCase())}>
                    <option>All Genres</option>
                    { genres.length > 0 ? genres.map((genre) => {
                        return(
                            <option>
                                {genre.name}
                            </option>
                        )
                    }): null}
                </select>
            </div>
            </div>
            <Games>
                {upcoming.map(game =>(
                    <Game name={game.name} 
                    released={game.released} 
                    id={game.id}
                    image={game.background_image}
                    platforms={game.platforms}
                    key={game.id}/>
                ))}
            </Games>
        </GameList>
        </div>
    )
}

export default All;

const GameList = styled(motion.div)`
    background-color: #202634;
    padding-left: max(19px, 15%);
    padding-right: max(19px, 15%);
    padding-bottom: 12rem;
    @media(max-width: 1150px){padding-left: 2rem; padding-right: 2rem}
    @media only screen and (max-width: 650px){
        padding: 0rem 1rem;
    }
    h2{
        font-family: 'Maven Pro';
        font-size: 1.5rem;
        color: white;
    }
    .PageContainer{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 40px;
        border-bottom: 2px solid rgba(138, 147, 153, 0.5);
        padding: 2rem 0rem 1rem;
        justify-content: space-between;
        @media(max-width: 545px){flex-direction:column}
    }
    .selectContainer{
        select{
            background: #181C25;
            color: white;
            margin-right: 10px;
            width: 162px;
            padding: 10px;
            border-radius: 7px;
            -webkit-appearance:none;
            -moz-appearance:none;
            appearance:none;
            border-color: #bbc4c4;
        }
        @media(max-width: 545px){display: flex}
    }
`
const Games = styled(motion.div)`
    min-height: 50vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(305px, 1fr)); 
    grid-column-gap: 1rem;
    grid-row-gap: 5rem;
    @media only screen and (max-width: 650px){
        justify-self: center;
        justify-items: center;
        justify-content: center;
    }
`;