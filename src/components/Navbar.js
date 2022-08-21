import React, {useState, useEffect} from 'react';
//Styling and Animation
import styled from 'styled-components';
import {motion} from "framer-motion";
import {useDispatch, useSelector} from 'react-redux';
import {loadDetail, loadFilter} from '../actions/detailsAction';

// import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
// import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Navbar = ({setMonth, setCategory, selectedCategory, selectedMonth}) => {
    const dispatch = useDispatch();
    const [selectedButtonAll, setButtonAll] = useState("");
    const [selectedButtonFea, setButtonFea] = useState("b");
    const [selectedButtonPop, setButtonPop] = useState("b");
    const [year, setYear] = useState("");

    useEffect(() => {
        setButtonFea("b"); setButtonPop("b"); setButtonAll("a")
        if (selectedCategory === "All"){setButtonAll("a")}
        else if(selectedCategory=== "Featured"){ setButtonFea("a"); setButtonAll("b"); }
        else if(selectedCategory==="Popular"){ setButtonPop("a"); setButtonAll("b");  }
        setYear(new Date().getFullYear().toString().substring(2));
    }, [selectedCategory])
    return (
        <NavOuter>
            <NavInner>
                <h1>{selectedCategory} Releases</h1>
                <NavLinks>
                    <button id={selectedButtonAll} onClick={()=> {setCategory("All"); }}>All</button>
                    <button id={selectedButtonFea} onClick={()=> {setCategory("Featured");}}>Featured</button>
                    <button id={selectedButtonPop} onClick={()=> {setCategory("Popular"); }}>Popular</button>
                </NavLinks>
                
                <NavDate>
                    <button onClick={() => (setMonth("January"))}>JAN '{year}</button>
                    <button onClick={() => setMonth("Feburary")}>FEB '{year}</button>
                    <button onClick={() => setMonth("March")}>MAR '{year}</button>
                    <button onClick={() => setMonth("April")}>APR '{year}</button>
                    <button onClick={() => setMonth("May")}>MAY '{year}</button>
                    <button onClick={() => setMonth("June")}>JUN '{year}</button>
                    <button onClick={() => setMonth("July")}>JUL '{year}</button>
                    <button onClick={() => setMonth("August")}>AUG '{year}</button>
                    <button onClick={() => setMonth("September")}>SEPT '{year}</button>
                    <button onClick={() => setMonth("October")}>OCT '{year}</button>
                    <button onClick={() => setMonth("November")}>NOV '{year}</button>
                    <button onClick={() => setMonth("December")}>DEC '{year}</button>
                </NavDate>
            </NavInner>
        </NavOuter>
    )}

export default Navbar;

const NavOuter = styled(motion.div)`
    width: 100%;
    height: 13.5rem;
    background-color: rgb(246, 246, 248);
    box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px 0px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.08);
    width: 100%;
    top: 0px;
    display: block;
    h1{
        font-family: 'Maven Pro';
        font-size: 2.5rem;
        @media only screen and (max-width: 650px){
            font-size: 5vw;
        }
    }
`;

const NavInner = styled(motion.div)`
    padding-left: 12vw;
    padding-right: 10.5vw;
    padding-top: 1rem;
    @media(max-width: 1150px){padding-left: 5vw;}
`;
const NavDate = styled(motion.div)`  
    padding-right: 0rem;
    margin-top: 1rem;
    overflow-x: scroll;
    white-space:nowrap;
    ::-webkit-scrollbar { height: 7px; }
    /* Track */
    ::-webkit-scrollbar-track { background: #f1f1f1; }
    /* Handle */
    ::-webkit-scrollbar-thumb {background: #888; }
    button{
        display: inline-block;
        padding: .5rem 1rem .5rem 1rem;
        margin-right: 4.3rem;
        border: transparent;
        background-color: transparent;
        font-family: 'Maven Pro';
        font-size: 1.3rem;
        color: grey;
        &:hover{
            border-radius: .5rem;
            border: 1px solid #bf1313;
        }
        &:focus{
            background-color: #bf1313;
        border: 2px solid transparent;
        color: #ffffff;
        border-radius: .3rem;
        }
    }
`;
const NavLinks = styled(motion.div)`
padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(37, 38, 39, 0.15);
    h2{
        display: inline-block;
        font-size: 1.5rem;
        padding-top: 1rem;
        padding-right: 1rem;
    }
    button{
        text-decoration: none;
        box-sizing: border-box;
        border-radius: 50px;
        border: 1px solid #d1d5db;
        background-color: transparent;
        cursor: pointer;
        font-size: 1.5rem;
        padding: 1px 24px;
        text-align: center;
        margin-top: .5rem;
        margin-right: .5rem;
        @media only screen and (max-width: 700px){
            font-size: 1rem;
        }
    }
    #a{
        background-color: #bf1313;
        border: 2px solid transparent;
        color: #ffffff;
    }   
`;