import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Favorites from './pages/Favorites'
import Trend from './pages/Trend'
import AboutMe from './pages/AboutMe'
import BuzzFeed from './pages/BuzzFeed'
import Twittertrend from './pages/Twittertrend'

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Favorites/:id" component={Favorites} />
        <Route exact path="/Trend" component={Trend} />
        <Route exact path="/Trend/BuzzFeed" component={BuzzFeed}/>
        <Route exact path="/Trend/Twittertrend" component={Twittertrend}/>
        <Route exact path="/AboutMe" component={AboutMe}/>
        <Route exact path="/Logout" component={Logout}/>
      </Switch>
    </div>
  </Router>
)

export default App;
