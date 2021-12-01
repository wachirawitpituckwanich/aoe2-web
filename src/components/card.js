import React from 'react'
import './card.css'
import { Link, BrowserRouter as Router, withRouter } from 'react-router-dom';
const Carditem = ({loading,data,searchTerm}) => {
    return(
            <div className="card-img">
            {loading ? (
          <h1>Loading..</h1>
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