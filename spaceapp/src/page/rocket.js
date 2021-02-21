import React, { useEffect, useState } from 'react'
import RocketCard from '../component/RocketCard'
import '../styles/rocketPage.css'

const Rocket = () => {
    const [rockets, setRockets] = useState([])
    
    useEffect(() =>{
        const fetchRockets = async () => {
            const response = await fetch("https://api.spacexdata.com/v3/rockets")
            const data = await response.json()
            setRockets(data)
        }
        fetchRockets()
    }
,[])
    return(
    <React.Fragment>   
        <div className="boxm">
            <div>
                <h1 className="head">Rocket</h1>
            </div>
            <div className="container">
                {rockets.map((rocket) =>{
                    return(
                        <RocketCard t={rocket}/>
                    )
                })}
            </div>
        </div>
    </React.Fragment>
    )
}

export default Rocket