import React from 'react';
//Styling and Animation
import styled from 'styled-components';
import {motion} from "framer-motion";
//Reducx
import {useDispatch} from 'react-redux';
import {loadDetail} from '../actions/detailsAction';
import { Link } from 'react-router-dom';
import {smallImage} from '../util';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';


const Game = ({name, released, image, id}) => {
    //Load Detail Handler
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadDetail(id))
    }
    return (
        <StyledGame onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
            <LeftSide>
            <img src={smallImage(image, 640)} alt={name}></img>
            </LeftSide>
            <RightSide>
            <h3>{name}</h3>
            <p>{released}</p>
            </RightSide>
            
            </Link>
        </StyledGame>
    )};

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
    border-radius: 1rem;
    cursor: pointer;
    max-width: 25rem;
    max-height: 18rem;
    h3{
            padding: 1.1rem;
        }
    img{
        width: 100%;
        height: 18vh;
        object-fit: cover;
    }
`;

const LeftSide = styled(motion.div)`
    text-align: center;
`;

const RightSide = styled(motion.div)`
text-align: center;
`
export default Game
