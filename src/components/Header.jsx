import { useState } from 'react'

function Header() {

  return (
    <header className="header">
        <div className="container">
            <div className="header__inner">
                <a className='logo'>ShopFlowers</a>
                <nav className='menu'>
                    <ul className='menu__list'>
                        <li className='menu__list-item'><a className='menu__list-link' href='#'>Blog</a></li>
                        <li className='menu__list-item'><a className='menu__list-link' href='#'>New magasin</a></li>
                        <li className='menu__list-item'><a className='menu__list-link' href='#'>Informaision</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header