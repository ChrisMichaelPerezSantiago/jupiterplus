import React , { useState } from 'react';
require('./styles.css');


const Footer: React.FC = () => {
  let year: number = new Date().getFullYear();
  
  return(
    <footer id="colophon" className="site-footer site__footer--v1 desktop-footer dark" role="contentinfo">
      <div className="footer-bottom-bar">
        <div className="container">
          <div className="footer-bottom-bar-inner">
            <div className="site-footer__info site-info"> 
              Copyright &copy; {year}, Jupiter+. Todos los derechos reservados
            </div>
            <ul id="menu-footer-quick-links" className="footer-quick-links nav">
              <li id="menu-item-5251" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5251">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;