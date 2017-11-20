import React from 'react';

import logo from '../assets/logike_white_trimmed.png';

const Header = () => {


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
            <a id="nav-burger" href="#"><i className="fa fa-navicon fa-2x" ></i></a>

            <ul>
              <li><a>Blog</a></li>
              <li><a><i className="fa fa-twitter" ></i></a></li>
              <li><a>Scolab</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )


};


export default Header;
