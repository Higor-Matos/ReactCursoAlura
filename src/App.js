import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react'
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome: 'Games',
      corPrimaria: '#50fa7b',
      corSecundaria: '#44475a'
    },
    {
      nome: 'Animes',
      corPrimaria: '#f1fa8c',
      corSecundaria: '#6272a4'
    },
    {
      nome: 'Desenhos',
      corPrimaria: '#50fa7b',
      corSecundaria: '#44475a'
    },
    {
      nome: 'Séries',
      corPrimaria: '#f1fa8c',
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
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time=>time.nome)} aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape/>
    </div>
  );
}

export default App;
