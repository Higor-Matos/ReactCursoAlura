import CampoTexto from '../Banner/CampoTexto'
import Botao from '../Botao'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [origem, setOrigem] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
   

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            origem,
            imagem,
            time
        })
        setNome('')
        setOrigem('')
        setImagem('')
        setTime('')
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
            <ListaSuspensa 
                obrigatorio={true}
                label="Time" 
                itens = {props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
            />
            <Botao texto="Criar Card"></Botao>
            </form>
            
        </section>
    )
}

export default Formulario