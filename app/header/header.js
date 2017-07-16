import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './header.scss';

import Menu from '../menu/menu';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
        }
    }
    toggleMenu() {
        this.setState({
            menuOpen: !this.state.menuOpen,
        })
    }
    render() {
        return (
            <header>
                <div className="menu-icon-contaner"
                     onClick={() => this.toggleMenu()}>
                    <FontAwesome name="bars" className="menu-icon" />
                </div>
                <div className="heading-contaner">
                    <h1>Local Search</h1>
                </div>
                <Menu
                    menuOpen={this.state.menuOpen}
                    closeMenu={() => this.toggleMenu.bind(this)}
                />
            </header>
        )
    }
}

export default Header;
