import React, { Componet } from 'react'
import { render } from 'react-dom'
import cheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import MenuItem from './MenuItem'

class Menu extends Componet {
    state = {
        menuOpen: false,
    }

    openMenu() {
        this.setState({ menuOpen: true })
    }

    closeMenu() {
        this.setState({ menuOpen: false })
    }

    render() {
        return (
            <di>
            <CheeseburgerMenu
                isOpen={this.state.menuOpen}
                closeCallback={this.closeMenu.bind(this)}>
                <MenuContent closeCallback={this.closeMenu.bind(this)} />
            </CheeseburgerMenu>

            <HamburgerMenu
                isOpen={this.state.menuOpen}
                menuClicked={this.openMenu.bind(this)}
                width={32}
                height={24}
                strokeWidth={3}
                rotate={0}
                color='black'
                borderRadius={0}
                animationDuration={0.5}
            />
            </di>
        )
    }
}