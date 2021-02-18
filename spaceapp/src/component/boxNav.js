import React from 'react'
import "../styles/component.css"
import {Link} from 'react-router-dom'

const BoxNav = ({text, path}) => {
    return (
        <Link className="Nav" to={path} activeClassName="active">
            <p>{text}</p>
        </Link>
    )
}

export default BoxNav