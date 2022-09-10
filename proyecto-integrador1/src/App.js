//app es nuestro componente principal de la aplicacion en react 

import React from "react";
import {Switch, Route} from 'react-router-dom'
import Header from "./components/Header/Header";
//traigo los screens
import Home from './screens/Home/Home'
import Details from "./screens/Details/Details";
import Categories from "./screens/Categories/Categories";
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
          <Route path='/categories' component={Categories}/>
          <Route path='/favorites' component={Favorites}/>
          <Route path='' component={NotFound}/>
        </Switch>
        </main>
      
      < Footer/> 
    </>
  );
 }
 
 export default App;
 