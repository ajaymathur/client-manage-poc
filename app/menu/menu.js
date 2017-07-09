import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './menu.scss';

class Menu extends Component{
    render() {
        return (
            <div className={this.props.menuOpen ? "displayed" : "hidden"}>
                <div className="back-drop" onClick={this.props.closeMenu()}>
                </div>
                <nav className="menu-navigation">
                    <ul className="menu-header">
                        <li><Link to='/'>create client</Link></li>
                        <li><Link to='/search'> search client</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Menu;
