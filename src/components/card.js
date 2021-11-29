import React , {useState, useEffect} from 'react'
import './card.css'
import axios from 'axios'

const Carditem = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        const loadData = async () => {
            setLoading(true);
            const response = await axios.get('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
            setData(response.data.civilizations);
            setLoading(false);
        }
        loadData();
    }, [])
    return(
        <div className="card">
            <div className="card-img">
                {loading ? (<h1>Loading...</h1>) : (data.map(item => <p>{item.name}</p>))}
            </div>
        </div>
        
    )
}
export default Carditem;
/**{data.map((value,key) => {
    return(
        <p>{value}</p>
    );
})}*/