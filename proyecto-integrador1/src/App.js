//app es nuestro componente principal de la aplicacion en react 

import React from "react";
import {Switch, Route} from 'react-router-dom'
import Header from "./components/Header/Header";

//importo (traigo) los screens
import Home from './screens/Home/Home'
import AlbumDetail from "./screens/AlbumDetail/albumDetail";
import TrackDetail from "./screens/TrackDetail/trackDetail";
import AllTracks from "./screens/AllTracks/AllTracks";
import AllAlbums from "./screens/AllAlbums/AllAlbums";
import Favorites from "./screens/Favorites/Favorites";
import NotFound from "./screens/NotFound/NotFound";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <React.Fragment>
    <Header /> 
      <main>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/albumDetail/:id' component={AlbumDetail}/>
          <Route path='/trackDetail/:id' component={TrackDetail}/>
          <Route path='/allTracks' component={AllTracks}/>
          <Route path='/allAlbums' component={AllAlbums}/>
          <Route path='/favorites' component={Favorites}/>
          <Route path='' component={NotFound}/>
        </Switch>
        </main>
      
      < Footer/> 
      </React.Fragment>
  );
 }
 
 export default App;
 