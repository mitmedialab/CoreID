import React, { Component } from 'react';

// Claims
import claims from '../data/claims.json'
import documents from '../data/documents.json'

console.log(claims, documents)

import logo from './logo.svg';

import './App.css';

class App extends Component {
  renderClaim (claim) {
    return (
        <h3><tt>{JSON.stringify(claim.payload)}</tt></h3>
    )
  }

  renderClaims () {
    return (
        <div className='claims-container'>
        { claims.payload.map(claim => this.renderClaim(claim)) }
        </div>
    )
  }

  renderDocument (document) {
    return (
        <h3>{document.title}</h3>
    )
  }

  renderDocuments () {
    return (
        <div className='documents-container'>
        { documents.payload.map((document) => this.renderDocument(document)) }
        </div>
    )
  }

  render() {
    return (
        <div className="App">
        <h1>Core Identity</h1>
        <h2>Dashboard</h2>
        <h2>Profile</h2>
        <h2>Login</h2>
        <h2>Identity Attributes / Claims</h2>
        { this.renderClaims() }
        <h2>Documents</h2>
        { this.renderDocuments() }
        </div>
    )
  }
}

export default App;
