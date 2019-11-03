import React from 'react';
import './header.css';

const Header = () => {
    return(
        <section className="header">
            <div className="container">
                <div className="row header__r">
                    <div className="col-md-3">
                        <div className="header__logo">
                            StarDB
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="header__nav text-green">
                            <ul>
                                <li>People</li>
                                <li>Planets</li>
                                <li>Starships</li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
       </section>
    )
};

export default Header;