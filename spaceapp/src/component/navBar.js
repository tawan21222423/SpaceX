import React from 'react'
// import BoxNav from './boxNav'
import '../styles/component.css'
import Logo from '../image/logo.png'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <>  
            
            <div className="navBar" >
                <NavLink className="Nav" to="/launch">Launches</NavLink>
                <NavLink className="Nav" to="/rocket">Rocket</NavLink>
                <NavLink exact className="Nav" to="/">Home</NavLink>
                <div className="spa"></div>
                <div className="logo"><img src={Logo}/></div>        
            </div>
        </>
    )
}

export default NavBar