import React, { Component } from 'react'
import './Home.css';

class Home extends Component {
  render() {

    let heading = "Soaring to new heights";
    let subHeading = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    return (
      <div>
        <section>
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                {heading}
              </h1>
              <div className="is-two-thirds column is=paddingless">
                <h2 className="subtitle is-4">
                  {subHeading}
                </h2>
              </div>
              <a className="button is-large is-primary" id="learn">Learn More</a>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home;