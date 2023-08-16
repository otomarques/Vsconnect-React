
// imagens 
import imgLogo from "../../assets/images/logo.svg";
import imgDev from "../../assets/images/dev.png";
import iconface from "../../assets/images/facebook.svg";

import iconInsta from "../../assets/images/instagram.svg";
import iconLink from "../../assets/images/linkedin.svg";


//estilizaÇao
import "./style.css";

//Rotas
import { Link } from "react-router-dom"; 


function Footer() {

    return (
        //codigo do footer
        <footer className={location.pathname == "/" ? "footer_background_image" : "footer_background_color"}>
            <div className="container rodape">
                {
                    location.pathname == "/" ? <div className="span_dicas">
                        <img src={imgDev} alt="" />
                        <div className="span_dicas_texto">
                            <p>Temos algumas dicas para o seu serviço ou freela ser um sucesso, acesse nossa página de
                                recomendações para saber mais.</p>
                            <Link className="botao botao_dicas" to={"#"}>mais dicas</Link>
                        </div>
                    </div> : ""
                }
                <div className="rodape_conteudo">
                    <div className="rodape_conteudo_paginas">
                        <h2>Páginas</h2>
                        <ul>
                            <li>
                                <Link to={"#"}>Login</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Listar Serviços</Link>
                            </li>
                            <li>
                                <Link to={"lista/devs"}>Lista Desenvolvedores</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Cadastrar Cliente</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Cadastrar Desenvolvedor</Link>
                            </li>
                        </ul>
                    </div>
                    <img src={imgLogo} alt="" />
                    <div className="rodape_conteudo_contatos">
                        <h2>Contatos</h2>
                        <div>
                            <Link to={"/"}><img src={iconface} alt=""/></Link>
                            <Link to={"/"}><img src={iconInsta} alt=""/></Link>
                            <Link to={"/"}><img src={iconLink} alt=""/></Link>
                            

                           


                            
                           
                        </div>
                        <a href="mailto:">contato@vsconnect.com</a>
                    </div>
                </div>
                <p>todos os direitos reservados ©.</p>
            </div>
        </footer>

    );

}

export default Footer;