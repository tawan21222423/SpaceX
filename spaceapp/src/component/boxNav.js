import React from 'react'
import "../styles/component.css"
import {NavLink} from 'react-router-dom'

const BoxNav = ({text, path}) => {
    return (
        <NavLink className="Nav" to={path} activeClassName="active">
            <p>{text}</p>
        </NavLink>
    )
}

export default BoxNav