import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
            <div>
                <footer className="footer is-primary">
                    <div className="container"> 
                        <div className="columns">
                            <div className="columns">
                                <p>My Company<br/>
                                   123 Example Road<br/>
                                   Chicago IL, 601515</p>
                            </div>
                            <div className="column has-text-right">
                                <a className="icon" href="#">
                                    <span className="icon">
                                        <i className="fa fa-facebook"></i>
                                    </span>
                                </a>
                                <a className="icon" href="#">
                                    <span className="icon">
                                        <i className="fa fa-twitter"></i>
                                    </span>
                                </a>
                                <a className="icon" href="#">
                                    <span className="icon">
                                        <i className="fa fa-linkedin"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
    );
};

export default Footer;