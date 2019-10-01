import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Backdrop from './components/Backdrop/Backdrop'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Header from './components/Header'
import Routes from './routes'


class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  draweToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  render(){
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
}

export default App;
