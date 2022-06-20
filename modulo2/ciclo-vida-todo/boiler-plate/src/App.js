import React from 'react'
import styled from 'styled-components'
import './styles.css'


const AppContainer = styled.div`
  display: flex;
  margin: 10px 0;
`

const TarefaList = styled.ul`
  padding: 0;
  width: 300px;
`

const Tarefa = styled.li`
  width: 210px;
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(),
          texto: 'Texto da primeira tarefa',
          completa: false
        },
        {
          id: Date.now(),
          texto: 'Texto da segunda tarefa',
          completa: false
        }
      ],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    const tarefas = localStorage.getItem("tarefas")
    if(tarefas) {
      const dadosTarefas = localStorage.getItem("tarefas")
      const dadosConvertidos = JSON.parse(dadosTarefas)
      this.setState({ tarefas: dadosConvertidos})
    }
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const novaListaDeTarefas = [...this.state.tarefas, novaTarefa]
    this.setState({ tarefas: novaListaDeTarefas, inputValue: "" })
  }

  selectTarefa = (id) => {
    const novaListaDeTarefas = this.state.tarefas.map((tarefa) => {
      if(id === tarefa.id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novaTarefa
      } else {
        return tarefa
      }
    })

    this.setState({ tarefas: novaListaDeTarefas})
  }

  apagarTarefa = (id) => {
    const novaListaDeTarefas = this.state.tarefas.filter((tarefa) => {
      return id !== tarefa.id
    })

    this.setState({ tarefas: novaListaDeTarefas })
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa, index) => {
            return (
              <AppContainer key={index}>
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                </Tarefa>
                <button onClick={() => this.apagarTarefa(tarefa.id)}>Apagar</button>
              </AppContainer>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
