import React from 'react'
import '../styles/rocketPage.css'
import { Link } from "react-router-dom";
const RocketCard = ({ t }) =>{

    return(
            <div className="boxc">
                    <Link to={{pathname:"/RocketDetail/"+t.rocket_id, state:{id:t.rocket_id}}}>
                        
                        <div className="content" style={{ backgroundImage: `url(${t.flickr_images})` }}>
                                <h3>{t.rocket_name}</h3>
                              
                                <p>{t.description}</p>                             
                                
                        </div>
                        
                        
                    </Link>
                    
            </div>
            
    )
    
}

export default RocketCard