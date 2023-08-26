//estilização
import "./style.css";

//components
import CardServicos from "../../components/CardServico/";

//hooks
import { useEffect, useState } from "react";

import api from "../../utils/api"

function ListaServicos() {

    //STATE Servicos
    const [servicos, setServicos] = useState<any[]>([
        {
            titulo: "Desenvolvimento de site institucional - Gateway de Pagamento / Fintech",
            descricao: "Desenvolver um site responsivo que seja utilizado como uma plataforma de apresentação do nosso gateway de pagamento. O objetivo principal deste projeto é criar um site atraente e informativo, que demonstre as funcionalidades e benefícios do nosso gateway de pagamento para potenciais clientes.",
            proposta: 1300,
            techs: [
                "HTML",
                "CSS",
                "REACT"
            ]
        },
        {
            titulo: "Bot telegram Pagamento",
            descricao: "Preciso fazer um código em python para um bot do telegram. O bot será para solicitação de pagamento.",
            proposta: 2400,
            techs: [
                "PYTHON"
            ]
        },
        {
            titulo: "Caixa Rápido",
            descricao: "Preciso fazer um software que permita ao usuário fazer o upload de seu extrato bancário em formato( ofx). Dentro do software o mesmo poderá categorizar todas as suas receitas e despesas, tendo categorias sugeridas pelo software e permitindo também personalizações. Após o lançamento de vários extratos o software irá entender que são lançamentos parecidos e fará a categorização de maneira automática, cabendo ao usuário somente categorizar as receitas e despesas que não se repetem. Após a categorização o software irá emitir gráficos e relatórios baseados na categorização das contas.",
            proposta: 1200,
            techs: [
                "PYTHON"
            ]
        }
    ]);




    const [techDigitado, setTechDigitado] = useState<string>("");

    //função onde pega o que o usuario digitou
    function verificarCampoTech(event: any) {
        if (event.target.value === "") {
            listarServicos();
        }
        setTechDigitado(event.target.value);
    }

    function buscarServicoPorTech(event: any) {
        //não recarrega a pagina
        event.preventDefault();

        //filtrar devs pela Tech digitada no campo buscar
        const servicosFiltrados = servicos.filter((servico: any) => servico.techs.includes(techDigitado.toLocaleUpperCase()));

        if (servicosFiltrados.length === 0) {
            alert("Nenhum servico para essa Tech :(")
        } else {
            //atribui valor de Serviço filtrado, ao state ListaServicosFiltrados 
            setServicos(servicosFiltrados)
        }


    }
    function listarServicos() {
        api.get("servicos")
            .then((response: any) => {
                console.log(response);
                setServicos(response.data)
            }


            )
            .catch((error: any) => {
                console.log("Erro  ao realizar uma requisiçao", error);
            })
    }




    useEffect(() => {

        listarServicos();
    }, [])
    ///****
    return (
        <>
            <main id="main_listaservicos">
                <div className="container container_lista_servicos">
                    <div className="lista_servicos_conteudo">
                        <h1>Lista de Serviços</h1>
                        <hr />
                        <form method="post" onSubmit={buscarServicoPorTech}>
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar Serviços</label>
                                <div className="campo-label">
                                    <input
                                        type="search"
                                        name="campo-busca"
                                        id="busca"
                                        placeholder="Buscar Serviços por tecnologias..."
                                        autoComplete="off"
                                        onChange={verificarCampoTech}
                                    />
                                    <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>
                                {
                                    servicos.map((servico: any, indice: number) => {
                                        return <li key={indice}>
                                            <CardServicos
                                                id={servico.id}
                                                nome={servico.nome}
                                                valor={servico.valor}
                                                descricao={servico.descricao}
                                                listaTechs={servico.techs}
                                            />
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}

export default ListaServicos;