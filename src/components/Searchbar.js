import React from 'react'
//Styling and Animation
import styled from 'styled-components';
import {motion} from "framer-motion";
import logo from '../img/logo.png';
const Searchbar = () => {
    return (
        <NavOuter>
            <NavInner>
            <img src={logo} alt={'name'}></img>
            </NavInner>
            <NavContent>
                <h3>Store</h3>
                <h3>News</h3>
                <h3>Videos</h3>
                <h3>Reviews</h3>
                <input type="text" placeholder="Search.."></input>
                <button>Sign in</button>
            </NavContent>
        </NavOuter>
    )
}

export default Searchbar;

const NavOuter = styled(motion.div)`
    display:flex;
    width: 100%;
    height: 7rem;
    background-color: white;
    box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px 0px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.08);
    width: 100%;
    h3{
        font-size:1.5rem;
        display: inline-block;
    }
`;
const NavInner = styled(motion.div)`
    display:flex;
    flex:50%;
    padding-left: 12vw;  
    img{
        width:11rem;
    }
`;
const NavContent = styled(motion.div)`
    display:flex;
    padding: 1rem;
    padding-right: 12vw;
    input{
       margin: 1rem;
    }   
    button{
        margin-top: 1rem;
        margin-bottom: 1rem;
        width: 6rem;
        background-color: #bf1313;
        color: white;
        font-family: 'Maven Pro'; 
        border: #bf1313;
        border-radius: .5rem;
    }
`;