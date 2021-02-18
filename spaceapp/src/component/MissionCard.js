import React from 'react'


const MissionCard = ({mission}) => {
    const {mission_name, wikipedia, mission_id} = mission
    const link = wikipedia
    return (
        <div className="card">

            <div className="boxCardTitle">
                {mission_id}
            </div>

            <div className="textCard">
                <a className="linkt" href={link}>
                    {mission_name}
                </a>
            </div>
        </div>
    )
}

export default MissionCard