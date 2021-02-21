import React from 'react'
import BoxNav from './boxNav'
import '../styles/component.css'
import Logo from '../image/logo.png'

const NavBar = () => {
    return (
        <>  
            
            <div className="navBar" >
                <BoxNav text={"Launches"} path="/launch" />
                <BoxNav text={"Rocket"} path="/rocket" />
                <BoxNav text={"Home"} path="/" />
                <div className="spa"></div>
                <div className="logo"><img src={Logo}/></div>        
            </div>
        </>
    )
}

export default NavBar