import './App.scss';
import {Switch,Route} from "react-router-dom";
//Pages
import Main from './Pages/Main/Main';
import Chanell from "./Pages/Chanell/Chanell";
import VideoPage from "./Pages/Video/Video";
import Login from './Components/Login/Login';

//Route
import Public from './Routes/Public';



function App() {
  return (
    <div className="App">
        <Switch> 
            <Public path="/login" component={Login}  />
            <Route  path="/" component={Main}  exact />
            <Route  path="/chanell" component={Chanell} />
            <Route  path="/video"  component={VideoPage} />
        </Switch>
    </div>
  );
}

export default App;
