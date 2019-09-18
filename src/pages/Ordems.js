import React, { Component } from 'react'
import api from '../services/api'

import './Ordem.css'

class Ordems extends Component {
    state = {
        ordems: [],
    }

    componentDidMount() {
        this.loadOrdems()
    }

    loadOrdems = async e => {
        const response = await api.get(`/ordems`)

        this.setState({ordems: response.data })
    }

    render() {

        const { ordems } = this.state

        return ( 
            <table>           
                <thead>
                    <tr>
                        <th>Equipamento</th>
                        <th>Data</th>
                        <th>Detalhe</th>
                    </tr>
                </thead>
                { ordems.map( ordem => (
                <tbody>
                    <tr>
                        <td>{ordem.equipamento}</td>
                        <td>{ordem.data}</td>
                        <td>
                            <button>Visualizar</button>
                        </td>
                    </tr>
                </tbody>
                ))}
            </table>            
        )
    }
}

export default Ordems