import React from 'react'
import '../styles/launchPage.css'
const LaunchCard = ({ Launch }) =>{
    const { rocket, launch_success, links ,launch_year, mission_name} = Launch
    const link = links.wikipedia


    return(
        <div >
        
                <div><a className="linkt"href={link}>
                        <div className="content" style={{ backgroundImage: `url(${links.mission_patch_small})`}}>
                                <h3>{mission_name}</h3>
                        </div>
                </a></div>
        </div>
                
       
    )
}

export default LaunchCard