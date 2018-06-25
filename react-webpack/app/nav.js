import React from 'react';
import {NavLink} from 'react-router-dom';
import './css/nav.css';

const NavBar = () => (
    <div>
        <div>
            <NavLink exact className="blue" to='/' >Terry</NavLink> |&nbsp;
            <NavLink to='/Terry1' activeClassName="bbb" >Terry1</NavLink> |&nbsp;
            <NavLink to='/Terry2/ILoveWeb/HelloTerry' activeClassName="bbb" >Terry2 </NavLink> |&nbsp;
            <NavLink to='/react' activeClassName="active" >404page</NavLink>
            <NavLink to='/Terry3' activeClassName="active" >Redirrct</NavLink>
        </div>
    </div>
)

export default NavBar;