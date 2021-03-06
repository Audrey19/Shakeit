import React, { Component } from 'react';

import './App.css';
import logo from './logo.svg';

import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navbar/Navigation';
import Home from './components/Home/index';
import CocktailList from './components/cocktailList/index';
import Ingredients from './components/PageIngredient/index';
import Recette from './components/Recette/index';
import Popup from './components/Popup';


class App extends Component {
    render() {
        return (

            <div className="App">

            <img src={logo} className="logos" alt="logo"/>  
                <Popup />
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/cocktailList" component={CocktailList} />
                    <Route exact path="/cocktaillist/:strIngredient1" component={CocktailList} />
                    <Route path="/ingredients" component={Ingredients} />
                    <Route path="/recette/:idDrink" component={Recette} />
                </Switch>
            </div>
        );
    }
}

export default App;
