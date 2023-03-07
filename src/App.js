import React, {useState} from 'react'
import './App.css';
import ListOfGifs from './components/ListOfGifs';
//import Home from './components/Home';
import Detail from './pages/Detail'
import {Link, Route} from "wouter";
import Home from './pages/Home';
import StaticContext from './context/StaticContext';
import {GifsContextProvider} from './context/GifsContext'

export default function App(){
  
  return (
    <StaticContext.Provider value={{
      name:'midudev',
      suscribeteAlCanal:true}}>
      <div className="App">
        <section className="App-content">
          {/* <button onClick={()=>setKeyword('mapache')}>
            Cambiar keyword
          </button> */}
          <h1>App</h1>
          <GifsContextProvider>
            <Route path='/' component={Home}/>
            <Route path='/gif/:id' component={Detail}/>
            <Route path='/gif/:keyword' component={ListOfGifs}/>
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

