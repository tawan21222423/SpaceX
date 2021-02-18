import React, { useEffect, useState } from 'react'
import '../styles/stylesPages.css'
import {fetchData} from '../tools/fetch'
import MissionCard from '../component/MissionCard'


const Home = () => {
    const [Info, setInfo] = useState({})
    const [Miss, setMiss] = useState([])
    
    const info = "https://api.spacexdata.com/v3/info"
    const mis = "https://api.spacexdata.com/v3/missions"

    useEffect(() => {
        fetchData(info, setInfo)
        fetchData(mis, setMiss)
    }, [])
    
    return (
        <React.Fragment>
            <div className="boxm">
                    <div>
                        <h1 className="head">Company Info</h1>
                    </div>
                <div className="infoBox">
                    <p id="detail">
                        {Info.summary}
                    </p>             
                </div>

                <div>
                        <h1 className="head2">Mission Code and Detail</h1>
                    </div>
                <div className="miss">
                    <div id="displayCard">
                        {Miss.map((mission) => (<MissionCard key={mission.id} mission={mission} />))}
                    </div>            
                </div>    
            </div>  
        </React.Fragment>
      )
}

export default Home