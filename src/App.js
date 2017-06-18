import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Index from './components/Index.js';
import Sandbox from './components/Sandbox.js';

class App extends Component {
  render() {
    return (
        <Router>
        <div>
        <Route exact path='/' component={Index} />
        <Route path='/sandbox' component={Sandbox} />
        </div>
      </Router>
    )
  }

}

export default App;
