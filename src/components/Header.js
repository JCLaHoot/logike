import React from 'react';

import logo from '../assets/logike_white_trimmed.png';

const Header = () => {

// changes the class name to trigger CSS to open the nav bar
const openNav = (event) => {
  let nav = event.target.parentElement.parentElement.parentElement;
  if(nav.className === "open-nav") {
    nav.className = "closed-nav";

  }
  else {
    nav.className = "open-nav";
  }
}

// TODO: make the nav responsive
  return (
    <div>
      <header>
        <nav>
          <div className="float-wrapper">
            <div id="nav-logo">
              <a rel="home" href="/" title="Home">
                <img src={logo}/>
              </a>
            </div>
            <a id="nav-burger" onClick={openNav}><i className="fa fa-navicon fa-2x" ></i></a>

            <ul>
              <li><a href="https://www.scolab.com/">Scolab</a></li>
              <li><a href="http://www.confusedretriever.com/">Blog</a></li>
              <li><a href="https://twitter.com/jclahoot"><i className="fa fa-twitter" ></i></a></li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )


};


export default Header;
