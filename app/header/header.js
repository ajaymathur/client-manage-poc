import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

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
            <div>
                <div onClick={() => this.toggleMenu()}>
                    <FontAwesome name="bars" className="menu-icon" />
                </div>
                <Menu
                    menuOpen={this.state.menuOpen}
                    closeMenu={() => this.toggleMenu.bind(this)}
                />
            </div>
        )
    }
}

export default Header;
