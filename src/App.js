import React, { Component } from 'react';
import './App.css';
import TrailContainer from './TrailContainer/trailContainer';
import NavBarContainer from './NavBarContainer/Navbar'
import LogIn from './LogInContainer/LogIn'
import { Route, Switch } from 'react-router-dom';
import AddTrail from './AddTrail/addTrail';
import EditTrail from './EditTrail/editTrail';

const My404 = () => {
  return (
    <div>
      You're Lost
    </div>
    )
};
//add trail route path has no state to lift up. Addtrail is breaking because of this.
class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBarContainer />
      <main>
      <Switch>
        <Route exact path="/login" component={ LogIn } />
        <Route exact path="/" component={ TrailContainer } />
        <Route exact path="/addTrail" component={ AddTrail } />
        <Route exact path="/editTrail" component={ EditTrail } />
        <Route component={My404} />
      </Switch>
        </main>
      </div>
    );
  }
}

export default App;
