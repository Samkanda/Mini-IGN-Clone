import React, {useState} from "react";
//Components
import Featured from "../pages/Featured";
import All from "../pages/All";
import Popular from '../pages/Popular'

const Home = () => {
   
  const [selectedMonth, setMonth] = useState("All");
  const [selectedCategory, setCategory] = useState("All");
  
if(selectedCategory === "Featured") {return (<Featured selectedMonth= {selectedMonth} setMonth = {setMonth} setCategory={setCategory} selectedCategory={selectedCategory}/>)}
else if(selectedCategory === "Popular"){return (<Popular selectedMonth= {selectedMonth} setMonth = {setMonth} setCategory={setCategory} selectedCategory={selectedCategory}/>)}
else{ return( <All selectedMonth= {selectedMonth} setMonth = {setMonth} setCategory={setCategory} selectedCategory={selectedCategory}/>)}}
    
export default Home;
