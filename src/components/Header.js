import React from 'react';

const Header = ({returnToMainMenu}) => {

// changes the class name to trigger CSS to open the nav bar
    const toggleNav = (event) => {
        let nav = event.target.parentElement.parentElement.parentElement;
        if (nav.className === "open-nav") {
            nav.className = "closed-nav";
            // resets the class name so that the CSS animation won't run every single time screen is downsized
            setTimeout(function () {
                nav.className = "";
            }, 500); //Must be longer or same as CSS anim length for selector: .closed-nav
        }
        else {
            nav.className = "open-nav";
        }
    };

    let img = './assets/logike_white_trimmed.png';

    return (
        <header>
            <nav>
                <div className="float-wrapper">
                    <div id="nav-logo" onClick={returnToMainMenu}>
                        <a title="Home">
                            <img src={img} alt="logike logo"/>
                        </a>
                    </div>
                    <a id="nav-burger" onClick={toggleNav}><i className="fa fa-navicon fa-2x"></i></a>

                    <ul>
                        <li><a href="https://www.scolab.com/">Scolab</a></li>
                        <li><a href="http://www.confusedretriever.com/">Blog</a></li>
                        <li><a href="https://twitter.com/jclahoot"><i className="fa fa-twitter"></i></a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )


};


export default Header;
