import React from "react";

const Header = () => {


// TODO: make the nav responsive
  return (
    <div>
      <header>
        <div id="logo">
          <a rel="home" href="/" title="Home">...site title or logo...</a>
        </div>
        <nav>
          <ul>
            <li><a>Blog</a></li>
            <li><a>Twitter</a></li>
            <li><a>Scolab</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )


};


export default Header;
