
import './App.css';
import Widget2 from './component/Widget2'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Explore from './component/Explore'



function App() {
  return (
    <div className="App">
      <Router>
        

        <Switch>
          <Route exact path = "/" component={Widget2}/>
        
          <Route exact path = "/explore" component={Explore}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
