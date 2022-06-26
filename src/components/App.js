/* eslint-disable no-undef */
import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import News from "./News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

class App extends Component {
  // name = prompt("What is your name")
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  pageSize = 6;
  render() {
    return (
      <Router>
        <div>
          <Navbar></Navbar>
          <LoadingBar color="#f11946" progress={this.state.progress} height={3} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                  headline="Top Headlines"
                  active="active"
                />
              }
            />

            <Route
              path="/business"
              exact
              element={
                <News
                  // eslint-disable-next-line no-undef
                  setProgress={this.setProgress}
                  key="business"
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                  headline="Business News"
                  active="active"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key="sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                  headline="Sports News"
                  active="active"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                  headline="entertainment News"
                  active="active"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key="technology"
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                  headline="Technology News"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key="science"
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                  headline="Science News"
                />
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
