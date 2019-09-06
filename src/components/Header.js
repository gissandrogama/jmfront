import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'
import logo from '../assets/logoapp.jpg'

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <img src={logo} alt="logo JM Serviços" />
        <nav>
            <ul>
                <li><Link to={`/`}>Ordem de Serviços</Link></li>
                <li><Link to={`/new`}>Cadastro</Link></li>
            </ul>
        </nav>        
      </div>
    </header>    
  )
}
