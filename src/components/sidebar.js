import React from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

export default props => {
    return (
            <Menu>
                <Link to={`/`}>
                    Ordem de Serviços
                </Link>   
            </Menu>
        )
}