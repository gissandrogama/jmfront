import React from 'react'
import { Link } from 'react-router-dom'

import './SideDrawer.css'

const SideDrawer = props => (
    <nav className="side-drawer">
        <ul>
            <li><Link to={`/`}>Ordem de Serviços</Link></li>
            <li><Link to={`/new`}>Cadastro</Link></li>
        </ul>
    </nav>
)

export default SideDrawer