import React, { Component } from 'react';
import './App.css';

import Comentario from './components/Comentario';

class App extends Component {

  state = {
    comentarios: [
      {
        nome: 'João',
        email: 'joao@mail.com',
        data: new Date(2020, 3, 19),
        mensagem: 'Olá, tudo bem?'
      },
      {
        nome: 'Maria',
        email: 'maria@mail.com',
        data: new Date(2020, 3, 19),
        mensagem: 'Olá, sim'
      }
    ],
    novoComentario:{
      nome: '',
      email: '',
      mensagem: ''
    }
  }

  adicionarComentarios = evento => {
    evento.preventDefault();
    const novoComentario = {...this.state.novoComentario, data: new Date()}
    this.setState({
      comentarios: [ ...this.state.comentarios, novoComentario],
      novoComentario: { nome: '', email: '', mensagem: ''}
    })
  }

  removerComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter(c => c !== comentario)
    
    this.setState({ comentarios: lista })
  }

  digitalcao = evento =>{
    const {name, value} = evento.target;
    this.setState({ novoComentario:{...this.state.novoComentario, [name]: value} })
  }


  render(){
    return (
      <div className="App">
        <h1>Terceiro Projeto</h1>
        {this.state.comentarios.map((comentario, indice) =>(
          <Comentario 
            key={indice}
            nome={comentario.nome} 
            email={comentario.email} 
            data={comentario.data}
            onRemove={this.removerComentario.bind(this, comentario)}>
            {comentario.mensagem}
          </Comentario>
        ))}

        <form method="post" onSubmit={this.adicionarComentarios} className="Novo-Comentario">
          <h2>Adicionar Comentario</h2>
          <div>
            <input 
              type="text" 
              name="nome" 
              value={this.state.novoComentario.nome}
              onChange={this.digitalcao}
              required
              placeholder="Digite seu nome"/>
          </div>
          <div>
            <input 
              type="email" 
              name="email" 
              value={this.state.novoComentario.email}
              onChange={this.digitalcao}
              required
              placeholder="Digite seu email"/>
          </div>
          <div>
            <textarea 
              name="mensagem" 
              value={this.state.novoComentario.mensagem}
              onChange={this.digitalcao}
              required
              rows="4" />
          </div>
          <button type="submit">Adicionar um comentário</button>
        </form>
      </div>
    );
  }
}

export default App;
