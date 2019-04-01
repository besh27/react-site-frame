import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  componentWillUnmount(){
    this.state.itToggleOn = false;
  }

  render() {
    let isToggleOn = this.state.isToggleOn;
    let menuActive = this.state.isToggleOn ? isToggleOn : 'is-active';

    return (
      <div className="navbar has-shadow">
        <div className="container">
          <div className="navbar-left navbar-brand">
            <a href="#" className="navbar-item">My Company</a>
          </div>
          <span className={'navbar-burger '+menuActive} onClick={this.handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </span>

          <div className={'navbar-end navbar-menu '+menuActive}>
            <Link to="/" className="navbar-item r-item">Home</Link>
            <Link to="/features" className="navbar-item r-item">Features</Link>
            <Link to="/faq" className="navbar-item r-item">FAQ</Link>
            <div className="navbar-item">
              <p className="control">
                <a className="button is-primary is-outlined">
                  <span className="icon">
                    <i className="fa fa-download"></i>
                  </span>
                  <span>JOIN NOW</span>
                </a>
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Header;