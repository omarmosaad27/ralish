import React from 'react'
import Navbar from './components/navbar/Navbar'
import {HashRouter as Router,Route, Switch} from 'react-router-dom' 
import Home from './components/pages/homepage/Home'
import Services from './components/pages/services/Services'
import Products from './components/pages/products/Products'
import SignUp from './components/pages/signup/SignUp'
const App = () => {
  

  return (
    <Router>
        <div className="App">
            <Navbar/>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/Services"  component={Services}></Route>
              <Route path="/Products"  component={Products}></Route>
              <Route path="/SignUp"  component={SignUp}></Route>
            </Switch>
        </div>
    </Router>
    
  )
}

export default App
