import React, { Component, PropTypes } from 'react';
import {IndexLink, Link } from 'react-router';

import styles from './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <h1>SPA center "Relax" <span>&reg;</span></h1>
            <ul className="header">
                <li><IndexLink to="/" activeClassName="active">HOME</IndexLink></li>
                <li><Link to="/stuff" activeClassName="active">STUFF</Link></li>
                <li><Link to="/contact" activeClassName="active">CONTACT</Link></li>
            </ul>
            <div className="content">
                {this.props.children}
            </div>
        </div>
    );
  }
}

export default App;