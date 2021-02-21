import React, { useEffect, useState } from 'react'
import { fetchData } from '../tools/fetch'
import LaunchCard from '../component/LaunchCard'
import '../styles/launchPage.css'
import Checkbox from '@material-ui/core/Checkbox';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
// import InfiniteScroll from 'react-infinite-scroll-component';

const Launch = () => {
    const [Launchs, setLaunchs] = useState([])
    const [year, setyear] = useState()
    const [rocketname, setrocketname] = useState()
    const [launchsuccess, setlaunchsuccess] = useState(false)
    const [firsttime, setfirsttime] = useState(false)
    const optionsyear = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];
    const optionsname = ['Falcon 1', 'Falcon 9', 'Falcon Heavy' ];
    

    useEffect(() =>{
        
        const fetchLaunchs = async () => {
            const response = await fetch('https://api.spacexdata.com/v3/launches')
            const data = await response.json()
            setLaunchs(data)
            
        }
        fetchLaunchs()
    }, [])
    const handleChangeyear =(e)=>{
        setyear(e.value)
        setfirsttime(true)
    }
    const handleChangerocketname =(e)=>{
        setrocketname(e.value)
        setfirsttime(true)
    }
    const handleChangesuccess =(e)=>{
        setlaunchsuccess(e.target.checked)
        setfirsttime(true)
    }

    return(
    <>        
        <div className="boxm">
            <div>
                <h1 className="head">Launch</h1>
            </div>
            
            <div class="container">
            <label>
                    {/* launchyear:<input type="text" onChange={handleChangeyear} /> */}
                    <label><Dropdown options={optionsyear} onChange={handleChangeyear} placeholder="Select year"/></label>
                    <label><Dropdown options={optionsname} onChange={handleChangerocketname} placeholder="Select Rocket Name"/></label>
                    <label>success:<Checkbox checked={launchsuccess} onChange={handleChangesuccess}inputProps={{ 'aria-label': 'primary checkbox' }}/></label><br/>
                    
            </label><br/>           
                {firsttime?Launchs.map((Launch) =>{
                    return(Launch.launch_year == year && Launch.rocket.rocket_name == rocketname && Launch.launch_success == launchsuccess  || Launch.rocket.rocket_name == rocketname && Launch.launch_success == launchsuccess || Launch.launch_year == year  && Launch.launch_success == launchsuccess ?<LaunchCard h={Launch}/>:true)
                    }):

                    Launchs.map((Launch) =>{return(<LaunchCard h={Launch}/>)})
                    
                    }
                    
            
            </div>
            
        </div>      
    </>
    )
}

export default Launch