import React from 'react';
import './CivDetails.css'
const CivDetails = ({match}) => {
    const civName = match.params.name
    
    return(
        <div className="main-detail-ctn">
            <div className="civImage">
                <img src={require(`../assets/images/${civName.toLowerCase()}.png`).default} alt={`${civName}-emblem`}/>
            </div>
            <div className="civDetails">
                <h2>Civilization name</h2>
                <h2>Army type</h2>
                <h2>Unique unit</h2>
                <h2>Unique tech</h2>
                <h2>Civilization bonus</h2>
                <h2>Team bonus</h2>
            </div>
        </div>
    )
    
}
export default CivDetails;