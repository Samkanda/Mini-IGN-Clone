import React, {useEffect} from "react";
//Redux
import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';
//Styling and Animation
import styled from 'styled-components';
import {motion} from "framer-motion";
import Navbar from "../components/Navbar";
//Components
import Game from '../components/Game'

const New = ({selectedMonth, setMonth, setCategory, selectedCategory}) => {
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(loadGames())
  }, [dispatch]);

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  //Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10){
        return monthNames[month - 1];
    } else {
        return month;
    }
};

  const {newGames} = useSelector((state) => state.games);
    return (
        <div>
        <Navbar setMonth = {setMonth} setCategory={setCategory} selectedCategory={selectedCategory}/>
            <GameList>
            <h2>{getCurrentMonth()} Games</h2>
            <Games>
                {newGames.map(game => (
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

export default New

const GameList = styled(motion.div)`
    padding: 0rem 15rem;
    @media only screen and (max-width: 650px){
        padding: 0rem 1rem;
    }
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
    @media only screen and (max-width: 650px){
        justify-self: center;
        justify-items: center;
        justify-content: center;
    }
`;