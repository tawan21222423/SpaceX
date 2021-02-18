import React from 'react'
import '../styles/rocketPage.css'
const RocketCard = ({ rocket }) =>{
    const { flickr_images, rocket_name, description, wikipedia } = rocket
    const link = wikipedia

    return(
            <div>
                <a className="linkt"href={link}>
                    <div className="content" style={{ backgroundImage: `url(${flickr_images})` }}>
                            <h3>{rocket_name}</h3>
                            <p>{description}</p>
                    </div>
                    </a>
            </div>
    )
}

export default RocketCard