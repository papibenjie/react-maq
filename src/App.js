import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { MultiRoute } from './components/route/MultiRoute/MultiRoute';
import { Home as PokeHome } from './pages/pokemon/Home'
import { Pokedex } from './pages/pokemon/Pokedex'
import { TeamBuilder } from './pages/pokemon/TeamBuilder'
import { Simulator } from './pages/pokemon/Simulator'
import { Home as MainHome } from './pages/home/Home'
import { Layout as PokeLayout } from './layout/pokemon/layout'
import { Layout as HomeLayout } from './layout/home/layout'

function App() {
  return (
    <Router>
      <MultiRoute routes={[
        {path: '/pokemon', page: <PokeLayout><PokeHome /></PokeLayout>},
        {path: '/pokemon/pokedex', page: <PokeLayout><Pokedex /></PokeLayout>},
        {path: '/pokemon/team-builder', page: <PokeLayout><TeamBuilder /></PokeLayout>},
        {path: '/pokemon/simulator', page: <PokeLayout><Simulator /></PokeLayout>},
        {path: '/', page: <HomeLayout><MainHome /></HomeLayout>},
      ]}></MultiRoute>
    </Router>
  );
}

export default App;
