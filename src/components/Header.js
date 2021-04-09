import React from "react";
import Typed from "react-typed";
const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Marquise Group</h1>
                 <Typed
                 className="typed-text"
                strings={[
                    'Built for Memories',
                    'Ready to Build Your Dream Home']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                   
                />
                <a href="#" className="btn-contact">Contact US</a>

            </div>
        </div>
    )
}

export default Header;
