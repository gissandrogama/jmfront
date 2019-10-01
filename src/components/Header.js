import React from 'react'
import { Link } from 'react-router-dom'

import DrawerToggleButton from './SideDrawer/DrawerToggleButton'

import './Header2.css'
import logo from '../assets/logoapp.jpg'

const Header = props => {
  return (
    <header className="menu">
      <nav className="menu_navigation">
        <div className="menu_toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
        <div className="menu_logo"><img src={logo} alt="logo JM Serviços" /></div>
        <div className="spacer" />
        <div className="menu_navigation_items">
          <ul>
            <li><Link to={`/`}>Ordem de Serviços</Link></li>
            <li><Link to={`/new`}>Cadastro</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header