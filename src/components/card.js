import React from 'react'
import './card.css'
import celts from './Celts.png' 
const Carditem = () => {
    return(
        <div className="card">
            <div className="card-img">
                <img src={celts} alt="civ-emblem"></img>
            </div>
        </div>
        
    )
}
export default Carditem;