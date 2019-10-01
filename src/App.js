import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import SideDrawer from './components/SideDrawer/SideDrawer'
import Header from './components/Header'
import Routes from './routes'


function App() {
  return (
    <div style={{height: '100%'}}>      
    <BrowserRouter>
      <Header />
      <SideDrawer />
      <main style={{marginTop: '64px'}}>
        <Routes />
      </main>
    </BrowserRouter>
    </div>
  );
}

export default App;
