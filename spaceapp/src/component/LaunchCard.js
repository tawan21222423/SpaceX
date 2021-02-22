import React from 'react'
import '../styles/launchPage.css'
import { Link } from "react-router-dom";
const LaunchCard = ({ h} ) =>{

    return(
        <div className="boxc">
                <Link to={{pathname:"/LaunchDetail/"+ h.flight_number, state:{id:h.flight_number}}}>
                        <div className="boxc"><a>
                                <div className="content" style={{ backgroundImage: `url(${h.links.mission_patch_small})`}}>
                                        <h3>{h.mission_name}</h3>
                                </div>
                        </a></div>
                </Link>
        </div>
                
       
    )
}

export default LaunchCard