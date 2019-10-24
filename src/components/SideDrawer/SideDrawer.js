import React from 'react'
import { Link } from 'react-router-dom'

import './SideDrawer.css'

const SideDrawer = props => {

    let drawerClasses = 'side-drawer'

    if (props.show) {
        drawerClasses = 'side-drawer open'
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><Link to={`/new`}>Cadastro de OS</Link></li>
                <li><Link to={`/ordems/`}>OS não atendidas</Link></li>
                <li><Link to={`/ordems/`}>OS atendidas</Link></li>
            </ul>
            <ul>
                <li><Link to={`/new`}>Cadastro equipamento</Link></li>
                <li><Link to={`/lists`}>Equipamentos</Link></li>                
            </ul>
        </nav>
    )
}

export default SideDrawer