import { useState, useEffect } from 'react';
import '../styles/detail.css'

const LaunchDetail = (p) => {
    const [Launchs, setLaunchs] = useState([])
    const flight_number = p.location.state.id
    console.log(Launchs['ships'])
    

    useEffect(
        () => {
            const fetchLaunchs = async () => {
                const response = await fetch(`https://api.spacexdata.com/v3/launches/${flight_number}`)
                const data = await response.json()
                setLaunchs(data)
            }        
            fetchLaunchs()
        }
    ,[])

   
    return (
    <div className="boxd">
        <div>
                <h1 className="headd">{Launchs["mission_name"]}</h1>  
        </div>
            <div className="detailbox">
                <p>{Launchs['details']}</p>
                <p>Launch year : {Launchs["launch_year"]}</p>  
                <p>Launch date : {Launchs["launch_date_local"]}</p>
                <p>Launch success : {Launchs.launch_success == true ? 'Success' : 'Fail'}</p>                              
            </div>
    </div>

    )
}

export default LaunchDetail;