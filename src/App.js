import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Sidebar from './components/sidebar'
import Routes from './routes'


function App() {
  return (
    <BrowserRouter>
      <Sidebar />      
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
