'use client'
import { useState } from 'react';

export default function Navigation() {


  const [isActive, setIsActive] = useState(false);
  const handleActive = () => {
    setIsActive(!isActive);
  }
  const overlayActive = () => {
    if (isActive) setIsActive(false);
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
              <li className='item'>
                <div style={{width:130 + 'px'}}></div>
              </li>
            </ul>
            <button type='button' id="menu-button" onClick={handleActive} className="menu-button"></button>
            {/*<a href="#" className="button tiny">Comprar</a>*/}



            
          </div>
        </nav>
      </div>
      <div className="main-overlay" onClick={overlayActive}></div>
    </>
  )
  //return (
  //  
  //    <nav className="container flex justify-between p-2 text-white">
  //      <div>
  //        <NavigationLink href="/">{t('home')}</NavigationLink>
  //        <NavigationLink href="/pathnames">{t('pathnames')}</NavigationLink>
  //      </div>
  //      <LocaleSwitcher />
  //    </nav>
  //  
  //);
}