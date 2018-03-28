import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
        <header>
          <h1>Want To Be An <em>Unicorn?</em></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus ornare justo et faucibus. Pellentesque hendrerit, nunc ac tincidunt egestas, dui urna rhoncus felis.</p>
          <button type="button">Download Now</button>
          <button type="button">Sign In</button>
          <img className="unicorn1" src="./unicorn1.png" alt="Want to be an unicorn?"/>
        </header>
    );
  }
}

export default Header;

