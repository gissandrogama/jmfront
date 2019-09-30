import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'
import logo from '../assets/logoapp.jpg'

export default function Header() {
  return (
    <header id="main-header">
      <nav className="menu_navigation">
        <div></div>
        <div><img src={logo} alt="logo JM Serviços" /></div>
        <div>
          <ul>
            <li><Link to={`/`}>Ordem de Serviços</Link></li>
            <li><Link to={`/new`}>Cadastro</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
