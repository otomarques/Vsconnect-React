//estilização
import "./style.css";

//rotas
import { Link, useParams } from "react-router-dom";

//hooks
import { useEffect, useState } from "react";

import api from "../../utils/api";


function VisualizarServico() {

    const { idservicos } = useParams();

    const [nome, setNome] = useState<string>("");
    const [valor, setValor] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [listaSkills, setListaSkills] = useState<string[]>([]);


    function buscarServicoPorID() {

        // estrutura basica para consumir api
        api.get("servicos/" + idservicos)
            .then((response: any) => {
                console.log(response);

                setNome(response.data.nome);
                setValor(response.data.valor);
                setDescricao(response.data.descricao);
                setListaSkills(response.data.techs);


            })
    }


    useEffect(() => {
        buscarServicoPorID();
    }, []);


    return (
        <main id="main_visualizarservico">
            <div className="container">
                <h1>Serviço</h1>
                <div className="servico">
                    <div className="topo_servico">
                        <h2>{nome}</h2>
                        <span>{valor}</span>
                    </div>
                    <p>{descricao}</p>
                    <div className="lista_skills">
                        {listaSkills.map((tech: string, index: number) => {
                            return <span key={index}>{tech}</span>
                        })}
                    </div>
                </div>
            </div>

        </main>);
}

export default VisualizarServico;