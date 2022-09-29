import CampoTexto from '../Banner/CampoTexto'
import Botao from '../Botao'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from 'react'

const Formulario = () => {

    const times = [
        'Games',
        'Animes',
        'Desenhos',
        'Séries',
        'Filmes'
    ]

    const [nome, setNome] = useState('')
    const [origem, setOrigem] = useState('')
    const [imagem, setImagem] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('Form foi submetido =>', nome, origem, imagem);
    }

    return(
        <section className = "formulario">
            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados para criar o card do personagem </h2>
            <CampoTexto  
                obrigatorio={true}
                label="Nome" 
                placeholder="Digite seu nome"
                valor={nome}
                aoAlterado={valor => setNome(valor)}
            />
            <CampoTexto 
                obrigatorio={true} 
                label="Origem" 
                placeholder="Digite sua origem"
                valor={origem}
                aoAlterado={valor => setOrigem(valor)}
            />
            <CampoTexto 
                obrigatorio={true}
                label="Imagem" 
                placeholder="Digite o endereço da imagem"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
            />
            <ListaSuspensa obrigatorio={true}label="Time" itens = {times}/>
            <Botao texto="Criar Card"></Botao>
            </form>
        </section>
    )
}

export default Formulario