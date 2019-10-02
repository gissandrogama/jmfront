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

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let sideDrawer
    let backdrop

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <BrowserRouter>
        <div style={{ height: '100%' }}>
          <Header drawerClickHandler={this.drawerToggleClickHandler} />
          {sideDrawer}
          {backdrop}
          <main style={{ marginTop: '64px' }}>
            <Routes />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
