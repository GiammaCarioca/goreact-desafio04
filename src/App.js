import React from 'react';
import './styles/global';
import { Wrapper } from './styles/components';

import Header from './components/Header';
import Content from './components/Content';

const App = () => (
  <Wrapper>
    <Header />
    <Content />
  </Wrapper>
);

export default App;
