import React, { Component } from 'react';
import loading from "./../loading.svg"
import "./App.css"

class Spinner extends Component {
  render() {
    return (
      <div className="container text-center spin">
        <img src={loading} alt="Loading Next News Page" className="loading my-3" />
        </div>
    );
  }
}

export default Spinner;
