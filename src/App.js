import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react'
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Games',
      corPrimaria: '#50fa7b',
      corSecundaria: '#44475a'
    },
    {
      nome: 'Animes',
      corPrimaria: '#ffb86c',
      corSecundaria: '#6272a4'
    },
    {
      nome: 'Desenhos',
      corPrimaria: '#50fa7b',
      corSecundaria: '#44475a'
    },
    {
      nome: 'Séries',
      corPrimaria: '#ffb86c',
      corSecundaria: '#6272a4'
    },
    {
      nome: 'Filmes',
      corPrimaria: '#50fa7b',
      corSecundaria: '#44475a'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) =>{
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}
    </div>
  );
}

export default App;
