import React, {useState} from 'react';
//Styling and Animation
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {motion} from "framer-motion";
import logo from '../img/logo.png';
const Searchbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    return (
        <NavOuter>
            <NavInner>
            <img src={logo} alt={'name'}></img>
            </NavInner>
            <NavContent>
            <BurgerButton onClick={() => setShowLinks(!showLinks)}><MenuIcon className="burgerButton"/></BurgerButton>
                <Links id={showLinks ? "hidden" : ""}>
                <h3>Store</h3>
                <h3>News</h3>
                <h3>Videos</h3>
                <h3>Reviews</h3>
                <h3>Boards</h3>
                <SearchIcon class = "searchIcon"/>
                <button class = "signButton">Sign in</button>
                </Links>
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
    h3{font-size:1.5rem; display: inline-block;}
    @media only screen and (max-width: 1150px){height: 6rem}
`;

export const BurgerButton = styled.button`
  background-color: Transparent;
  margin-top: .8rem;
  display: none;
  border: none;
  .burgerButton{ width: 70px; height: 40px; } `;

const NavInner = styled(motion.div)`
    display:flex;
    flex:50%;
    padding-left: 12vw;  
    @media only screen and (max-width: 1150px){padding-left: 11vw;}
    img{
        @media only screen and (max-width: 1150px){
            width:9rem;
            height: 5rem;
            margin-top: .8rem;
        }
    }
`;

const Links = styled.div`
    display: flex;
    max-height: 80px;
    text-decoration:none;
    color: #7510F7;
    font-size: 25px;
    h3{margin-left: 10px; text-decoration: none;}
    .searchIcon{ width: 2rem;}
    @media only screen and (max-width: 1150px){
        h3{
            padding-left: 0rem;
            margin-left: 1rem;
            font-size: 1rem;
        }
    }
`;

const NavContent = styled.div`
    display:flex;
    padding: 1rem;
    padding-right: 12vw;
    input{margin: 1rem;}   
    .signButton{
        margin-top: 1rem;
        margin-bottom: 1rem;
        background-color: #bf1313;
        color: white;
        font-family: 'Maven Pro'; 
        font-size: 17px;
        white-space: nowrap;
        text-align: center;
        border: #bf1313;
        border-radius: .5rem;
        margin-left: 1rem;
        padding: 0rem 2rem 0rem 2rem;
    }
    #hidden h3{ display: flex; margin: 1px;}
    #hidden input{ display: flex; padding: 1rem; margin-bottom: 1rem;}
    @media only screen and (max-width: 950px) {
      justify-content: flex-end;
      padding-left: 1rem;
      button{ display:flex; }
      h3, input, .signButton{ display: none;}
      #hidden{
        display: flex;
        position: absolute;
        left: 0px;
        top: 90px;
        width: 100%;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-height: 500px;
        border: 1px solid rgba(0, 0, 0, 0.08);
      }}`;