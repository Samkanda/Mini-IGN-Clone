//Components and pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import {Route} from 'react-router-dom';
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Searchbar/>
      <Route path={["/game/:id", "/"]}>
        <Home/>
      </Route>
    </div>
  );}

export default App;
