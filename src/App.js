import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';
import NavFooter from './components/NavFooter';

function App() {
  return (
    <div className='App'>
      <Header />
      <NavFooter />
    </div>
  );
}

export default App;
