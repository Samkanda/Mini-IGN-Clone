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

const All = ({setMonth, setCategory, selectedMonth}) => {
    //Use States
    const [year, setYear] = useState("");
    const [genres, setGenres] = useState([])
    const [platforms, setPlatforms] = useState([])
    const {upcoming, popular, newGames} = useSelector((state) => state.games); 
    const [selectedValue, setMonthValue] = useState("");

    //get the current location
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const dispatch = useDispatch();

    //Axios Functions
    async  function  fetchData(){
        const request = await getGenres();
        setGenres(request.data.results)
        const request2 = await getPlatforms()
        setPlatforms(request2.data.results)
    }

    useEffect(() => {
        setYear(new Date().getFullYear().toString());
        fetchData()
        dispatch(loadGames())
  }, [dispatch]);

  
  useEffect(() => {
    if (selectedMonth === "January"){setMonthValue(`${year}-01`)}
    else if (selectedMonth === "Feburary"){setMonthValue(`${year}-02`)}
    else if  (selectedMonth === "March"){setMonthValue(`${year}-03`)}
    else if  (selectedMonth === "April"){setMonthValue(`${year}-04`)}
    else if  (selectedMonth === "May"){setMonthValue(`${year}-05`)}
    else if  (selectedMonth === "June"){setMonthValue(`${year}-06`)}
    else if  (selectedMonth === "July"){setMonthValue(`${year}-07`)}
    else if  (selectedMonth === "August"){setMonthValue(`${year}-08`)}
    else if  (selectedMonth === "September"){setMonthValue(`${year}-09`)}
    else if  (selectedMonth === "October"){setMonthValue(`${year}-10`)}
    else if  (selectedMonth === "November"){setMonthValue(`${year}-11`)}
    else if  (selectedMonth === "December"){setMonthValue(`${year}-12`)}
    else setMonthValue('');
}, [selectedMonth])
    return (
        <div>
        <Navbar setMonth = {setMonth} setCategory={setCategory}/>
        <GameList>
            {path && <GameDetail/> }
            <div className="PageContainer">
            <h2>{selectedMonth} {year}</h2>
            <div className="selectContainer">
                <select>
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
                <select>
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
                {upcoming.filter(game => game.released.includes(selectedValue)).map(game =>(
                    <Game name={game.name} 
                    released={game.released} 
                    id={game.id}
                    image={game.background_image}
                    key={game.id}/>
                ))}
            </Games>
        </GameList>
        <GameList>
        <h2>Popular Games</h2>
        <Games>
            {popular.filter(game => game.released.includes(selectedValue)).map(game =>(
                <Game name={game.name} 
                released={game.released} 
                id={game.id}
                image={game.background_image}
                key={game.id}/>
            ))}
        </Games>
        </GameList>
        </div>
    )
}

export default All;

const GameList = styled(motion.div)`
    padding: 0rem 12vw;
    @media only screen and (max-width: 650px){
        padding: 0rem 1rem;
    }
    h2{
        font-family: 'Maven Pro';
        font-size: 1.5rem;
    }
    .PageContainer{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 40px;
        border-bottom: 2px solid rgba(0,0,0,0.08);
        padding: 2rem 0rem 1rem;
        justify-content: space-between;
        @media(max-width: 500px){flex-direction:column}
    }
    .selectContainer{
        select{
            margin-right: 10px;
            width: 162px;
            padding: 10px;
            border-radius: 7px;
            -webkit-appearance:none;
            -moz-appearance:none;
            appearance:none;
            border-color: #bbc4c4;
        }
    }
`
const Games = styled(motion.div)`
    min-height: 50vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
    grid-column-gap: 1rem;
    grid-row-gap: 5rem;
    @media only screen and (max-width: 650px){
        justify-self: center;
        justify-items: center;
        justify-content: center;
    }
`;