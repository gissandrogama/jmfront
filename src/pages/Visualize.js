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
        data_atend: '',
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
            data_atend: response.data.data_atend,
            status: response.data.status,
        })
    }

    render() {
        return (
            <div className="visual">
                <article>
                    <label><strong>Equipamento: </strong></label>
                    <p>Trator</p>
                    <label><strong>Data de Abertura:</strong></label>
                    <p>22/09/2019</p>
                    <label><strong>Descrição:</strong></label>
                    <p>Troca de caixa de marcha</p>
                    <label><strong>Solicitante:</strong></label>
                    <p>João</p>
                    <form id="new_ordem">
                        <label><strong>Data de atendimento:</strong></label>
                        <input
                            type="date"
                            name="data_atend"
                            onChange={this.handleChange}
                            value={this.state.url}
                        />
                    </form>
                </article>
            </div>
        )
    }
}