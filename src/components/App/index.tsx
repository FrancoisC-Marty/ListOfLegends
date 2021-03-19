import React from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import Content from '../Content';

import './style.scss';

const App = () => (
  <div className="app">
    <AnimateSharedLayout type="crossfade">
      <Header />
      <Router>
        <Route path={['/:id', '/']} exact component={Content} />
      </Router>
      <Footer />
    </AnimateSharedLayout>
  </div>
);

export default App;
