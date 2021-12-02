import React from 'react'
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';
import './card.css'
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
                  console.log(data)
                  return data;
              } 
          }).map((data) =><FadeIn><Link to={`/${data.name}`}><div><img key={data.id} src={require(`../assets/images/${data.name.toLowerCase()}.png`).default} alt={`${data.name}-emblem`}></img><div className="name">{data.name}</div></div></Link></FadeIn>)
        )}
            </div>  
    )
}
export default Carditem;