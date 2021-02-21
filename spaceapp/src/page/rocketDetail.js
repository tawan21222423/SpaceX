import { useState, useEffect } from 'react';
import '../styles/detail.css'

const RocketDetail = (props) => {
    const [rockets, setRockets] = useState([])
    const rocket_id = props.location.state.id
    

    useEffect(
        () => {
            const fetchRockets = async () => {
                const response = await fetch(`https://api.spacexdata.com/v3/rockets/${rocket_id}`)
                const data = await response.json()
                setRockets(data)
            }        
            fetchRockets()
        }
    ,[])

   
    return (
    <div className="boxd">
        <div>
                <h1 className="headd">{rockets["rocket_name"]}</h1>  
        </div>
            <div className="detailbox">
                <p>{rockets['description']}</p>
                <p>First flight : {rockets["first_flight"]}</p>                                
                <p>Status : {rockets.active == true ? 'active' : 'inactive'}</p>
                <p>Success rate : {rockets['success_rate_pct']} </p>

                <p>Country : {rockets['country']}</p>
                <a>Wikipedia : <a className="link" href={rockets['wikipedia']}>{rockets['wikipedia']}</a></a>

            </div>
    </div>

    )
}

export default RocketDetail;