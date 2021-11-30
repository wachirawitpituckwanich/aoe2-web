import React from 'react'
import './card.css'
const Carditem = ({loading,data,searchTerm}) => {
    return(
            <div className="card-img">
            {loading ? (
          <h1>Loading..</h1>
        ) : (
          data.filter((data) => {
              if (searchTerm === "") {
                  return data;
              } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return(data)
              }
          }).map((data) =><div><img key={data.id} src={`${data.name.toLowerCase()}`}></img><div className="name" key={data.id}>{data.name}</div></div>)
        )}
            </div>  
    )
}
export default Carditem;
/***/