import React, { Component } from 'react';

import './App.css';

import BusinessList from './componensts/BusinessList/BusinessList';
import SearchBar from './componensts/SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;
