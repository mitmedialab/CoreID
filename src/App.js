import React, { Component } from 'react';

// Claims
import claims from '../data/claims.json'
import documents from '../data/documents.json'

import logo from './logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
        <h1>Core Identity</h1>
        <h2>Dashboard</h2>
        <h2>Profile</h2>
        <h2>Login</h2>
        <h2>Identity Attributes</h2>
        <h2>Documents</h2>
        </div>
    )
  }
}

export default App;
