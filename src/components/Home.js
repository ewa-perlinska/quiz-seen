import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => (
  <Fragment>
    <Helmet>
      <title> ~ SEEN ~ </title>
    </Helmet>
    <div id="home">
      <section>
        <div> Yo</div>
        <h1>Seen quiz</h1>
        <div className="description-button-container">
          <ul>
            <li>
              <Link to="/description">description</Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Fragment>
);
export default Home;
