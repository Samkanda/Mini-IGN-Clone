import React, {useEffect, useState} from "react";
//Redux
import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';
//Styling and Animation
import styled from 'styled-components';
import {motion} from "framer-motion";
import Navbar from "../components/Navbar";
//Components
import Game from '../components/Game';

const Featured = ({selectedMonth, setMonth, setCategory, selectedCategory}) => {
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(loadGames())
  }, [dispatch]);

  const {upcoming} = useSelector((state) => state.games);
  const [selectedValue, setMonthValue] = useState("");
  useEffect(() => {
    if (selectedMonth === "January"){setMonthValue("2021-01")}
    else if (selectedMonth === "Feburary"){setMonthValue("2021-02")}
    else if  (selectedMonth === "March"){setMonthValue("2021-03")}
    else if  (selectedMonth === "April"){setMonthValue("2021-04")}
    else if  (selectedMonth === "May"){setMonthValue("2021-05")}
    else if  (selectedMonth === "June"){setMonthValue("2021-06")}
    else if  (selectedMonth === "July"){setMonthValue("2021-07")}
    else if  (selectedMonth === "August"){setMonthValue("2021-08")}
    else if  (selectedMonth === "September"){setMonthValue("2021-09")}
    else if  (selectedMonth === "October"){setMonthValue("2021-10")}
    else if  (selectedMonth === "November"){setMonthValue("2021-11")}
    else if  (selectedMonth === "December"){setMonthValue("2021-12")}
    else setMonthValue('');
}, [selectedMonth])
    return (
        <div>
        <Navbar setMonth = {setMonth} setCategory={setCategory} selectedCategory={selectedCategory}/>
            <GameList>
            <h2>{selectedMonth} Games</h2>
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
        </div>
    )}

export default Featured;

const GameList = styled(motion.div)`
    padding: 0rem 15rem;
    h2{
        padding: 2rem 0rem 1rem;
        font-family: 'Maven Pro';
        border-bottom: 2px solid rgba(0, 0, 0, 0.08);
        font-size: 2.5rem;
    }
`
const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;