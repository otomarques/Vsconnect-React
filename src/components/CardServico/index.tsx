//estilização
import "./style.css";
import { Link } from "react-router-dom";

function CardServico(props: any) {
    return <div className="servico">
        <div className="topo_servico">
        <Link to={"/VisualizarServico/" + props.id}><h3>{props.nome}</h3></Link> 
            {/* <h3>{props.nome}</h3> */}
            <span>R$ {props.valor}</span>
        </div>
        <p>{props.descricao}</p>
        <div className="techs">
            {
                props.listaTechs.map((tech: string, indice: number) => {
                    return <span key={indice}>{tech}</span>
                })
            }
        </div>
    </div>
}

export default CardServico;