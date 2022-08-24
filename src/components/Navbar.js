import React, {useState, useEffect} from 'react';
//Styling and Animation
import styled from 'styled-components';
import {motion} from "framer-motion";
import {useDispatch, useSelector} from 'react-redux';
import {loadDetail, loadFilter} from '../actions/detailsAction';
import ArrowLeft from '@material-ui/icons/ArrowBackIos';
import ArrowRight from '@material-ui/icons/ArrowForwardIos';
const Navbar = ({setMonth, selectedCategory,selectedMonth }) => {
    const dispatch = useDispatch();
    const [year, setYear] = useState("");
    const monthArray = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'August', 'September', 'October', 'November', 'December']

    useEffect(() => {
        setYear(new Date().getFullYear().toString().substring(2));
    }, [selectedCategory])
    return (
        <NavOuter>
            <NavInner>
                <h1>{selectedCategory} Upcoming Games</h1>
                <NavDate>
                    {/* <button className='leftArrow'>
                        <ArrowLeft/>
                    </button> */}
                    <div className='monthButtons'>
                    {monthArray.map((month) => {
                        return(
                        <button id={month} style= {selectedMonth == month ? {background: "white", color: "#181c25"}:{}} onClick={() => (setMonth(month))}>{month.substring(0,3)} '{year}</button>
                    )})}
                    </div>
                    {/* <button className='rightArrow'>
                        <ArrowRight/>
                    </button> */}
                </NavDate>
            </NavInner>
        </NavOuter>
    )}

export default Navbar;

const NavOuter = styled(motion.div)`
    width: 100%;
    height: 12.5rem;
    background-color: #283044;
    box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px 0px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.08);
    width: 100%;
    top: 0px;
    display: block;
    h1{
        font-family: 'Maven Pro';
        font-size: 3rem;
        color: white;
        @media only screen and (max-width: 650px){
            font-size: 2rem;
        }
    }
`;

const NavInner = styled(motion.div)`
    padding-left: max(19px, 15%);
    padding-right: max(19px, 15%);
    padding-top: 2rem;
    @media(max-width: 1150px){padding-left: 2rem; padding-right: 2rem}
    @media(max-width: 545px){padding-left: 1rem; padding-right: 1rem}
`;
const NavDate = styled(motion.div)`  
    padding-right: 0rem;
    margin-top: 1rem;
    overflow-x: scroll;
    white-space:nowrap;
    display: flex;
    .leftArrow, .rightArrow{
        background: transparent;
        position: absolute;
    }
    .leftArrow{
        left: 2vw;
    }
    .rightArrow{
        right: 2vw;
    }
    ::-webkit-scrollbar { height: 7px; }
    /* Track */
    ::-webkit-scrollbar-track { background: #283044; }
    /* Handle */
    ::-webkit-scrollbar-thumb {background: whitesmoke; border-radius:  20px 20px;}
    .monthButtons{
        height: 48px;
    button:first-child{
        border-top-left-radius: 80px 80px;
        border-bottom-left-radius: 80px 80px;
    }
    button:last-child{
        border-top-right-radius: 80px 80px;
        border-bottom-right-radius: 80px 80px;
    }
}
    button{
        display: inline-block;
        padding: 10px 46px;
        margin-right: .3rem;
        border: transparent;
        background-color: #373F51;
        font-family: 'Maven Pro';
        font-size: 1rem;
        color: lightgray;
    }
`;