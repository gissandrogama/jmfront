import React, { Component } from 'react'

import api from '../services/api'

import './Visualize.css'

export default class Visualize extends Component {
    state = {
        equipamento: '',
        setor: '',
        data: '',
        descricao: '',
        solicitante: '',        
        status: '',
    }

    async componentDidMount() {

        const { id } = this.props.match.params

        const response = await api.get(`/ordem/${id}`)

        this.setState({
            equipamento: response.data.equipamento,
            setor: response.data.setor,
            data: response.data.data,
            descricao: response.data.descricao,
            solicitante: response.data.solicitante,            
            status: response.data.status,
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        console.log({
            equipamento: this.state.equipamento,
            setor: this.state.setor,
            data: this.state.data,
            descricao: this.state.descricao,
            solicitante: this.state.solicitante,
            data_atend: this.state.data_atend,
            status: true,
        })
    }

    handleChange = e => {
        this.setState({ [e.targe.data_atend]: e.targe.data_atend })
    }

    render() {
        return (
            <div className="visual">
                <article>
                    <label><strong>Equipamento: </strong></label>
                    <p>{this.state.equipamento}</p>
                    <label><strong>Setor: </strong></label>
                    <p>{this.state.setor}</p>
                    <label><strong>Data de Abertura:</strong></label>
                    <p>{this.state.data}</p>
                    <label><strong>Descrição:</strong></label>
                    <p>{this.state.descricao}</p>
                    <label><strong>Solicitante:</strong></label>
                    <p>{this.state.solicitante}</p>
                </article>
                <form id="new_ordem" onSubmit={this.handleSubmit}>
                    <label><strong>Data de atendimento:</strong></label>
                    <input
                        type="date"
                        name="data_atend"
                        onChange={this.handleChange}
                        value={this.state.data_atend}
                    />

                    <button type="submit">Atender</button>
                </form>
            </div>
        )
    }
}