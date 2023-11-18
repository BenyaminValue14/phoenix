'use client'
import React, {useState} from 'react';

const Header = () => {

    const [isActive, setIsActive] =  useState(false);
    const handleActive = () => {
        setIsActive(!isActive);
    }
  return (
    <>    
    <div id="main-header" className={`main-header place-center ${isActive ? 'is-active' : ''}`}>
        <nav className="nav container">
            <a href="#description" className="title">Benyaroot</a>
            <div className="right place-center">
                <ul id="main-menu" className="main-menu">
                    <li className="item">
                        <a href="#description" className="link">Descripción</a>
                    </li>
                    <li className="item">
                        <a href="#why-mac" className="link">Quién soy?</a>
                    </li>
                    <li className="item">
                        <a href="#specifications" className="link">Blog</a>
                    </li>
                </ul>
                <button id="menu-button" onClick={handleActive} className="menu-button"></button>
                {/*<a href="#" className="button tiny">Comprar</a>*/}
            </div>
        </nav>
    </div>
    <div className="main-overlay" id="main-overlay"></div>
    </>
  )
}

export default Header