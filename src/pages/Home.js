import React, {useState} from "react";
import All from "../pages/All";

const Home = () => {
  const d = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
  console.log(monthNames[d.getMonth()])

  const [selectedMonth, setMonth] = useState(monthNames[d.getMonth()]);
  const [selectedCategory, setCategory] = useState("All");

  

 return( 
  <All selectedMonth= {selectedMonth} setMonth = {setMonth} setCategory={setCategory} selectedCategory={selectedCategory}/>
  )
}
    
export default Home;
