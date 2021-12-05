import React from 'react'
import '../assets/css/card.css'
import { Link } from 'react-router-dom';
import Animation from './anim'
const Carditem = ({loading,data,searchTerm}) => {
    return(
            <div className="card-img">
            {loading ? (
          <Animation/>
        ) : (
            // load local image dynamically
          data.filter((data) => {
              if (searchTerm === "") {
                  return data;
              } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return data;
              }
          }).map((data) =><Link to={`/${data.name}`}><div><img key={data.id} src={require(`../assets/images/${data.name.toLowerCase()}.png`).default} alt={`${data.name}-emblem`}></img><div className="name">{data.name}</div></div></Link>)
        )}
            </div>  
    )
}
export default Carditem;