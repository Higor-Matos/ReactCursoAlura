import CampoTexto from '../Banner/CampoTexto'
import Botao from '../Botao'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const times = [
        'Games',
        'Animes',
        'Desenhos',
        'Séries',
        'Filmes'
    ]
    return(
        <section className = "formulario">
            <form>
                <h2> Preencha os dados para criar o card do personagem </h2>
            <CampoTexto label="Nome" placeholder="Digite seu nome"/>
            <CampoTexto label="Origem" placeholder="Digite sua origem"/>
            <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
            <ListaSuspensa label="Time" itens = {times}/>
            <Botao texto="Criar Card"></Botao>
            </form>
        </section>
    )
}

export default Formulario