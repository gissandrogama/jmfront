import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import './Ordem.css'

class Ordems extends Component {
    state = {
        ordems: [],
    }

    async componentDidMount() {
        
        const response = await api.get(`/ordems`)
    
        this.setState({ ordems: response.data })
        
    }

    render() {

        const { ordems } = this.state

        return (
            <div id="ordem">
                <table>
                    <thead>
                        <tr>
                            <th>Equipamento</th>
                            <th>Data</th>
                            <th>Detalhe</th>
                        </tr>
                    </thead>
                        <tbody>
                    {ordems.map(ordem => (
                            <tr key={ordem._id}>
                                <td>{ordem.equipamento}</td>
                                <td>{ordem.data}</td>
                                <td>
                                    <Link to={`/visualize/${ordem._id}`}>Visualizar</Link>
                                </td>
                            </tr>
                    ))}
                        </tbody>
                </table>
            </div>
        )
    }
}

export default Ordems