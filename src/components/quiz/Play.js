import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

class Play extends Component {
  // constructor(props) {
  //   super(props);
  // }

  increaseCount = () => {
    this.setState({
      counter: 5,
    });
  };

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Quiz Page</title>
        </Helmet>
        <div className="questions">
          <h5>What year google was found?</h5>
          <div className="option-container">
            <p className="option">1997</p>
            <p className="option">1998</p>
          </div>
          <div className="option-container">
            <p className="option">1999</p>
            <p className="option">2000</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Play;
