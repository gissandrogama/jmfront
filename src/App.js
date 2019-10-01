import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Backdrop from './components/Backdrop/Backdrop'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Header from './components/Header'
import Routes from './routes'


function App() {
  return (
    <BrowserRouter>
    <div style={{height: '100%'}}>      
      <Header />
      <SideDrawer />
      <Backdrop />
      <main style={{marginTop: '64px'}}>
        <Routes />
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
