import { useState } from "react";

export default function Formulario() {

    // useState dados do cadastro
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [cidade, setCidade] = useState('')
    // useState Botão cadastrar
    const [btnCadastrar, setBtnCadastrar] = useState(true)
    // useState tabela
    const [vetor, setVetor] = useState([])
    const [indiceVetor, setIndiceVetor] = useState('')

    // Função selecionar usuário  
    const selecionar = (indice) => {
        setIndiceVetor(indice)

        setNome(vetor[indice].nome)
        setIdade(vetor[indice].idade)
        setCidade(vetor[indice].cidade)

        setBtnCadastrar(false)
    }

    // Função cadastrar usuário
    const cadastrar = () => {
        let obj = {
            nome,
            idade,
            cidade
        }
        setVetor([...vetor, obj])
        setNome('')
        setIdade('')
        setCidade('')
    }

    //Função alterar dados
    const alterar = () => {
        let obj = { nome, idade, cidade }
        let copiaVetor = [...vetor]
        copiaVetor[indiceVetor] = obj
        setVetor(copiaVetor)
        setNome('')
        setIdade('')
        setCidade('')

        setBtnCadastrar(true)
    }

    //Função excluir dados
    const excluir = () => {
        let copiaVetor = [...vetor]
        copiaVetor.splice(indiceVetor, 1)

        setVetor(copiaVetor)
        setNome('')
        setIdade('')
        setCidade('')
        setBtnCadastrar(true)
    }

    //Função cancelar 
    const cancelar = () => {
        setNome('')
        setIdade('')
        setCidade('')

        setBtnCadastrar(true)
    }

    return (
        <div>
            <form>
                <h2>Formulário de Cadastro</h2>
                <input
                    type="text"
                    placeholder="Nome"
                    className="form-control"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Idade"
                    className="form-control"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Cidade"
                    className="form-control"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                />

                {/* Botoes */}

                {
                    btnCadastrar
                        ?
                        <input type="button" value="Cadastrar" className="btn btn-primary" onClick={cadastrar} />
                        :
                        <div>
                            <input type="button" value="Alterar" className="btn btn-secondary" onClick={alterar} />
                            <input type="button" value="Excluir" className="btn btn-danger" onClick={excluir} />
                            <input type="button" value="Cancelar" className="btn btn-success" onClick={cancelar} />
                        </div>
                }
            </form>

            {/* Retorna dados do formulário */}
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Cidade</th>
                        <th>Selecionar</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        vetor.map((obj, indice) => (
                            <tr key={indice}>
                                <td>{indice + 1}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.idade}</td>
                                <td>{obj.cidade}</td>
                                <td>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => selecionar(indice)}>Selecionar
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

