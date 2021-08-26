import './App.scss';
import {Switch,Route} from "react-router-dom"
//Pages
import Main from './Pages/Main/Main';
import Chanell from "./Pages/Chanell/Chanell";
import VideoPage from "./Pages/Video/Video"

//components




function App() {
  return (
    <div className="App">
        <Switch>
         <Route path="/" component={Main}  exact />
          <Route path="/chanell" component={Chanell} />
          <Route path="/video"  component={VideoPage} />
        
        </Switch>
    </div>
  );
}

export default App;
