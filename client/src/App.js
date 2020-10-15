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
                <React.Fragment>
                  <div className="landing-background">
                    <div>
                      <div className="landing-box">
                        <h1>Welcome to Pantry Sorter!</h1>
                        <h5>Head on over to the Pantry to get started!</h5>
                        <a className="landing-anchor" href="/pantry"><button className="landing-button">Pantry</button></a>
                      </div>
                    </div>

                  </div>

                </React.Fragment>
              )} />

              <Route path="/pantry" render={props => (
                <React.Fragment>
                  <FoodItemList />
                  <AddFoodItem />
                </React.Fragment>
              )} />

              <Route path="/favourites" render={props => (
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
