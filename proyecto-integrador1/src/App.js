//app es nuestro componente principal de la aplicacion en react 

import React from "react";
import {Switch, Route} from 'react-router-dom'
import Header from "./components/Header/Header";
//traigo los screens
import Home from './screens/Home/Home'
import Details from "./screens/Details/Details";
import AllTracks from "./screens/AllTracks/AllTracks";
import AllAlbums from "./screens/AllAlbums/AllAlbums";
import Favorites from "./screens/Favorites/Favorites";
import NotFound from "./screens/NotFound/NotFound";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
    <Header /> 
      <main>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/details/:id' component={Details}/>
          <Route path='/allTracks' component={AllTracks}/>
          <Route path='/allAlbums' component={AllAlbums}/>
          <Route path='/favorites' component={Favorites}/>
          <Route path='' component={NotFound}/>
        </Switch>
        </main>
      
      < Footer/> 
    </>
  );
 }
 
 export default App;
 