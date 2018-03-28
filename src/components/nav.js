import React, { Component } from 'react';


class Nav extends Component {
  render() {
    return (
        <nav>
            <ul>
                <li><a href="#">The Cool <strong>Unicorn</strong></a></li>
                <div id="nav-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </ul>
            
            <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Documentation</a></li>
            </ul>
        </nav>
    );
  }
}

export default Nav;

