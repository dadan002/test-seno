import Header from "./header/header";
import HeaderMobile from "./header/mob/headermob";
import Nav from "./nav/nav";
import Navtel from "./nav/navtel.jsx";
import Pub from "./pub/pub";
import Footer from "./footer/footer";
import Sec from "./section/section";
import Produits from "./produit/produit";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import affiche from "./logic/affichage.js";
import './App.css';
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
function Home() {
  const [state, setState] = useState({}); // ou valeur initiale adaptée
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  // handleClick adapté en fonctionnel
  const handleClick = (a) => {

    affiche(a)

  };
  return (
    <div>
      {isDesktop && <Header />}
      {isMobile && <HeaderMobile onClick={handleClick}/>}
      <hr />
      {isDesktop && <Nav />}
      {isDesktop && <hr />}
      <Pub />
      <Sec title="Nos nouvelle collection" dos="sec1"/>
      <br />
      <hr className="sep_sec" />
      <Sec title="Top vente" dos="sec2"/>
      <br />
      <hr className="sep_sec"/>
      <Sec title="Nos classique" dos="sec3"/>
      <br /><br />
      <Footer />
      <Navtel onClick={handleClick}  />

  </div>
  );
}

function Produit() {
  const [state, setState] = useState({}); // ou valeur initiale adaptée
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  // handleClick adapté en fonctionnel
  const handleClick = (a) => {

    affiche(a)

  };
  return (
    <div>
      {isDesktop && <Header />}
      {isMobile && <HeaderMobile  onClick={handleClick}/>}
      <hr />
      {isDesktop && <Nav />}
      {isDesktop && <hr />}
      <Produits />
      
      
      <Footer />
      <Navtel onClick={handleClick}  />
  </div>
  );
}
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Produit" element={<Produit />} />
      </Routes>
    </Router>
  );
}
export default App;
