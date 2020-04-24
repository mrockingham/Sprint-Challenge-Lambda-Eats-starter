import React from "react";
import{Route, Switch, Link} from 'react-router-dom'
import Pizza from './Pizza'
import NewPizza from './NewPizza'


const App = () => {
  return (
    <div>
      <div className = 'Top-Background'>
        
        <div className = 'Top-Opacity'>
          <header className ='Main-Header'>
            <h2>Lambda Eats</h2>
            <nav>

            </nav>
          </header>
            <h1 className= 'Main-Text'>Best Online Pizza Served Up With an ISA!!!</h1>
            <button>Create Pizza</button>
        </div>
      </div>

      <div className= 'Body'>
        <Switch>

          <Route path = '/Pizza' component ={NewPizza}>

          </Route>
          <Route path = '/' component ={Pizza}>

          </Route>
        </Switch>
      </div>
    </div> 
  );
};
export default App;
