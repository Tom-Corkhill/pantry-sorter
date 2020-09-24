import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { FoodItemList } from './components/FoodItemList';
import { AddFoodItem } from './components/AddFoodItem';
import { FavouriteItemList } from './components/FavouriteItemList';
import { AddFavouriteItem } from './components/AddFavouriteItem';

import { GlobalProvider } from './context/GlobalState';


import './App.css';

function App() {
  return (
        <GlobalProvider>
          <Router>
            <Header />
              <Route exact path="/" render={props => (
                <React.Fragment></React.Fragment>
              )} />

              <Route path="/pantrys" render={props => (
                <React.Fragment>
                  <FoodItemList />
                  <AddFoodItem />
                </React.Fragment>
              )} />

              <Route path="/favouritess" render={props => (
                <React.Fragment>
                  <FavouriteItemList />
                  <AddFavouriteItem />
                </React.Fragment>
              )} />

          </Router>
        </GlobalProvider>
  );
}

export default App;
