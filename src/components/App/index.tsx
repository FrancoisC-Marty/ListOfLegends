import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import ChampList from '../ChampList';

import './style.scss';

const App = () => (
  <div className="app">
    <Header />
    <ChampList />
    <Footer />
  </div>
);

export default App;
