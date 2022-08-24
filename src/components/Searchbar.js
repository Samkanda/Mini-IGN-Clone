import React, {useState} from 'react';
//Styling and Animation
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {motion} from "framer-motion";
import logo from '../img/IGN-logo.png';
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
                <h3>Shows</h3>
                <h3>Store</h3>
                <h3>News</h3>
                <h3>Videos</h3>
                <h3>Reviews</h3>
                <h3>Guides</h3>
                <h3>Playlist</h3>
                <h3>Boards</h3>
                <SearchIcon className = "searchIcon"/>
                <button className = "signButton">Sign in</button>
                </Links>
            </NavContent>
        </NavOuter>
    )
}

export default Searchbar;
const NavOuter = styled(motion.div)`
    display:flex;
    padding: 0 11.5vw;
    height: 5rem;
    background-color: #283044;
    box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px 0px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.08);
    @media only screen and (max-width: 1150px){height: 6rem; padding: 0 3.5vw;}
`;

export const BurgerButton = styled.button`
  background-color: Transparent;
  color: white;
  display: none;
  border: none;
  .burgerButton{ width: 70px; height: 40px; } `;

const NavInner = styled(motion.div)`
    display:flex;
    align-items: center;
    flex:50%;
    img{
        width:8rem;
        margin-bottom: 4px;
        @media only screen and (max-width: 1150px){
            width:7rem;
        }
    }
`;

const Links = styled.div`
    display: flex;
    text-decoration:none;
    font-size: 25px;
    align-items: center;
    h3{
        font-size: 18px;
        padding: 8px;
        color: white ;
        margin: 0;
    }
    @media only screen and (max-width: 950px) {
        div {display: none;}
    }
    .searchIcon{ width: 2rem; color: white}

`;

const NavContent = styled.div`
    display:flex;
    align-items: center;
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
        background: #283044;
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-height: 500px;
        border: 1px solid rgba(0, 0, 0, 0.08);
      }}`;