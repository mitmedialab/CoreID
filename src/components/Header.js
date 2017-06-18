import React, { Component } from 'react';

import '../App.css';

export default class Header extends Component {

  render(){

    return (
	<header className="navbar">
	<div className="navbar-header">
	<a className="navbar-brand" href="#/app/dashboard">
	CoreID
      </a>
	</div>
	<div className="navbar-collapse"></div>

	</header>
    );
  }

}
