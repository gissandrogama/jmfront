import React, { Component } from 'react'

import './Ordem.css'

class Ordems extends Component {
    render() {
        return ( 
            <table>           
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Data</th>
                        <th>ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Trator</td>
                        <td>22/08/2019</td>
                        <td>
                            <button>Atender</button>
                            <button>Visualizar</button>
                        </td>
                    </tr>
                </tbody>
            </table>            
        )
    }
}

export default Ordems