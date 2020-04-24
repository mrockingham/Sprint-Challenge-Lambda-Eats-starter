import React from "react";
import{Route, Switch, Link} from 'react-router-dom'
import Pizza from './Pizza'

const App = () => {
  return (
    <div>
      <div className = 'Top-Background'>
        <div className = 'Top-Opacity'>
          <header className ='Main-header'>
            <h2>Lambda Eats</h2>
            <nav>

            </nav>
          </header>
            <h1 className= 'Main-Text'>Best Online Pizza Served Up With an ISA!!!</h1>
        </div>
      </div>

      <div className= 'Body'>
        <Switch>
          <Route path = '/' component ={Pizza}>

          </Route>
        </Switch>
      </div>
    </div> 
  );
};
export default App;
