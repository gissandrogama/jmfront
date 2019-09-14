import React, { Component } from 'react'

import './Ordem.css'

class Ordems extends Component {
    render(){
        return(
            <div id="lista-ordem">
                <ul>
                    <li>Nome</li>
                    <li>Data</li>
                </ul>
                <div>
                    <button>Atender</button>
                </div>
            </div>
        )
    }
}

export default Ordems