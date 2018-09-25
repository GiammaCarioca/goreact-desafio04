import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles/global';
import { Wrapper } from './styles/components';

import Header from './components/Header';

import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <Wrapper>
      <Header />
      <Routes />
    </Wrapper>
  </BrowserRouter>
);

export default App;
