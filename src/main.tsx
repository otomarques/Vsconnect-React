import React from 'react'
import ReactDOM from 'react-dom/client'
// componentes
import Home from './pages/Home/';
import Footer from './components/Footer';
import Header from './components/Header';
import ListaDevs from './pages/ListaDevs';
import listaServicos from './pages/ListasServicos';



// estiliazaçao global
import "./index.css";
// rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <BrowserRouter>{/*indica que aplicaçao tera rotas*/}
      {/*HEADER*/}
      <Header />
      <Routes> {/*indica uma lista de rotas*/}
        <Route path='/' element={<Home />} /> {/*indica o caminho de componente e o nome da rota dele*/}
        {/* <Route path='perfil' element={<Perfil/>}/> */}

        <Route path='lista/servicos' element={<listaServicos}></Route>

        <Route path='lista/devs ' element={<ListaDevs />}> </Route>

      </Routes>

      <Footer />
    </BrowserRouter>


  </React.StrictMode>,
)
