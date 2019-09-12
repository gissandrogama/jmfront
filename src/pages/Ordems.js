import React, { Component } from 'react'

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