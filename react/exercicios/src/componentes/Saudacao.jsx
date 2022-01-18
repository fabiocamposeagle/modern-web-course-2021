import React, { Component } from 'react'

export default class Saudacao extends Component {
  // com state pode ser alterado oa valores
  // o props nao pode ser alterado
  state = {
      tipo: this.props.tipo,
      nome: this.props.nome
  }

  constructor(props) {
    super(props)
    this.setTipo = this.setTipo.bind(this)
  }

  setTipo(e) { 
      this.setState({ tipo: e.target.value })
    }
  
  setNome(e) {
    this.setState({ nome: e.target.value })
  }
      // nesse caso quero alterar a variavel tipo do stage(estado)
      // para receber e.target.value
      // this.props.tipo = e.target.value 
      //o target vai ser um input , quando digitar no input ele vai gerar um evento(e)
      // e quero mostar o value(o valor  )  o valor desse imput  
    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <input type="text" placeholder="Tipo..." 
                    value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder="Nome..." 
                    value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}