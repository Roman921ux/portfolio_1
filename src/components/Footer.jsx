import { useState } from 'react'

function Footer() {

  return ( 
    <footer className="footer">
        <div className="container">
          <div className="footer__input">
            <div className="title">Get emails you`ll love.</div>
            <div className="input">
              <input placeholder='Your email ...'/>
              <button>Send</button>
            </div>
            <div className="text">C 2023 Event nothing dfewr</div>
          </div>
          <nav className='footer__menu'>
            <ul className='footer__menu-list'>
              <li className='footer__menu-item'><a className='footee__menu-link footee__menu-active'>Libs</a></li>
              <li className='footer__menu-item'><a className='footee__menu-link'>AboutIt</a></li>
              <li className='footer__menu-item'><a className='footee__menu-link'>F&Q</a></li>
              <li className='footer__menu-item'><a className='footee__menu-link'>Our product</a></li>
              <li className='footer__menu-item'><a className='footee__menu-link'>Corder</a></li>
              <li className='footer__menu-item'><a className='footee__menu-link'>Temblor</a></li>
              <li className='footer__menu-item'><a className='footee__menu-link'>Corectly</a></li>
            </ul>
            <ul className='footer__menu-list'>
            <li className='footer__menu-item'><a className='footee__menu-link footee__menu-active'>Feature</a></li>
              <li className='footer__menu-item'><a className='footee__menu-link'>Fortborder</a></li>
              <li className='footer__menu-item'><a className='footee__menu-link'>One desreds</a></li>
              <li className='footer__menu-item'><a className='footee__menu-link'>Portren</a></li>
              <li className='footer__menu-item'><a className='footee__menu-link'>Logs</a></li>
            </ul>
          </nav>
          <div className="footer__icon">
            <a className='icon'></a>
            <a className='icon'></a>
            <a className='icon'></a>
          </div>
        </div>
    </footer>
  )
}

export default Footer