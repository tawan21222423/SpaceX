import React, { useEffect, useState } from 'react'
import { fetchData } from '../tools/fetch'
import RocketCard from '../component/RocketCard'
import '../styles/rocketPage.css'

const Rocket = () => {
    const [rockets, setRockets] = useState([])
    
        useEffect(() =>{
            const fetchrocket = async () => {
                const response = await fetch('https://api.spacexdata.com/v3/rockets')
                const data = await response.json()
                setRockets(data)
            }
            fetchrocket()
        }, [])

    return(
    <>   
        <div className="boxm">
            <div>
                <h1 className="head">Rocket</h1>
            </div>
            <div class="container">
                {rockets.map((rocket) =>{
                    return(
                        <RocketCard rocket={rocket}/>
                    )
                })}
            </div>
        </div>
    </>
    )
}

export default Rocket