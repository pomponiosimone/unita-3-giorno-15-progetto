import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import TopBar from './components/TopBar';
import ListMusic from './components/ListMusic';
import Player from './components/PlayerMusic';

import './App.css'; 

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            <TopBar />
            <main className="col-12 col-md-9 offset-md-3 mainPage">
              <div className="row">
                <div className="col-10">
                  <ListMusic genre="rock" artistName="queen" />
                  <ListMusic genre="pop" artistName="katyperry" />
                  <ListMusic genre="hiphop" artistName="eminem" />
                </div>
              </div>
            </main>
          
          </div>
          <Player/>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;