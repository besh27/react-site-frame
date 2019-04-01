import React, { Component } from 'react'
import './Features.css';

class Features extends Component {
    render() {
        let heading = "Features";
        let subHeading = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        return (
          <div>
            <section>
              <div className="features-body">
                <div className="container">
                  <h1 className="title">
                    {heading}
                  </h1>
                  <div className="is-two-thirds column is=paddingless">
                    <h2 className="subtitle is-4">
                      {subHeading}
                    </h2>
                    <h2 className="subtitle is-4">
                      {subHeading}
                    </h2>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )
      }
}

export default Features;