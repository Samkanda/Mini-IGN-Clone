import React from 'react';
//Styling and Animation
import styled from 'styled-components';
import {motion} from "framer-motion";
//Reducx
import {useDispatch} from 'react-redux';
import {loadDetail} from '../actions/detailsAction';
import PlayStation from '../img/playstation.svg';
import Nintendo from '../img/nintendo.svg';
import PC from '../img/windows.png';
import Xbox from '../img/xbox.svg';
import { Link } from 'react-router-dom';
import {smallImage} from '../util';


const Game = ({name, released, image, id, platforms}) => {
    const platformArray = ["PlayStation 5", "Nintendo", "PC", "Xbox One" ]
    const platformArray2 = [PlayStation,Nintendo , PC, Xbox]
    //Load Detail Handler
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadDetail(id))
    }
    return (
        <StyledGame onClick={loadDetailHandler}>
            <Link className='linkContainer' to={`/game/${id}`}>
            <LeftSide>
            <img src={smallImage(image, 640)} alt={name}></img>
            </LeftSide>
            <RightSide>
                <div className='shownDetails'> 
                    <p>{released}</p>
                    <h3>{name}</h3>
                </div>
            <div className='hiddenDetails'>
                <div className='icons'>
                    { platforms ? platforms.map((platform, i) => (
                        platformArray.map((device, a) => {
                            if(platform.platform.name.includes(device)){
                                return(
                                <img src={platformArray2[a]}></img>
                                )
                            }
                        })
                    )) : null}
                </div>
            <p>Rating: 5</p>
            <p>Genres: Action, Fantasy</p>
            </div>
            </RightSide>
            
            </Link>
        </StyledGame>
    )};

const StyledGame = styled(motion.div)`
    border-radius: 1rem;
    cursor: pointer;
    @media(max-width: 545px){
        min-width: 21rem;
    }
    h3, p{
            padding: 0;
            margin: 0;
            color: #ccc;  
        }
    img{
        width: 100%;
        height: 18vh;
        object-fit: cover;
    }
    .linkContainer{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        height: 100%;
    }
`;

const LeftSide = styled(motion.div)`
    text-align: center;
    img{transition: height .4s;}
    img:hover{
            height: 20vh;
        }
`;

const RightSide = styled(motion.div)`
    box-shadow: 0px 5px 20px rgba(0,0,0,.3);
    border-radius: 10px ;
    text-align: left;
    .shownDetails{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    
    padding: 10px 10px;
    
    p{
        font-size: 16px;
    }
    h3{
        font-size: 20px;
        padding-top: 10px;
        font-weight: 700;
    }
    .hiddenDetails{
        opacity: 0%;
        position: absolute;
        p{
            font-size: 13px;
        }
    }
    .icons{
        display: flex;
        padding: 20px 0 5px 0;
        img{
            height: 15px;
            width: auto;
            margin-right: 5px;
        }
    }
    min-height: 90px;
    transition: min-height .4s;
    :hover{
        min-height: 170px;
        .hiddenDetails{
        opacity: 100%;
        visibility: unset ;
        transition: opacity .6s;

    }
    }
`
export default Game
