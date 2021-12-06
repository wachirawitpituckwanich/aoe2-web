import React, { useState, useEffect } from "react";
import FadeIn from 'react-fade-in';
import Animation from './anim'
import "../assets/css/CivDetails.css";
import axios from "axios";
import ReturnBtn from "./returnBtn";
const CivDetails = ({ match }) => {
  const civName = match.params.name
  const [armyType, setArmyType] = useState([]);
  const [loading, setLoading] = useState(false);
  const [teamBonus, setTeamBonus] = useState('');
  const [civBonus,setCivBonus] = useState([]);
  const [uniqueUnitName, setUU] = useState([]);
  const [uniqueTech, setUT] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"
      );
      const res = response.data.civilizations
      // remove duplicates from response
      const result = res.filter((arr, index, self) => index === self.findIndex((t) => (t.name === arr.name)))
      const civData = result.filter((result)=> {
          if(result.name === civName){
            return result
          }
      })
      let civUU = [];
      let promisesUU = [];
      for(let i = 0; i < civData[0].unique_unit.length; i++) {
        if(civData[0].unique_unit.length == 0){
          civUU.push('No data')
        } else {
          promisesUU.push(
            axios.get(civData[0].unique_unit[i]).then(resp =>{
              let unitName = resp.data.name;
              civUU.push(unitName)
            })
          )
        }
      }
      let civUT = [];
      let promisesUT = [];
      for(let i = 0; i < civData[0].unique_tech.length; i++) {
        promisesUT.push(
          axios.get(civData[0].unique_tech[i]).then(resp =>{
            let techName = resp.data.name;
            civUT.push(techName)
          })
        )
      }
      Promise.all(promisesUU).then(() => {
        setUU(civUU)
      });
      Promise.all(promisesUT).then(() => {
        setUT(civUT)
      });
      setArmyType(civData[0].army_type)
      setTeamBonus(civData[0].team_bonus)
      setCivBonus(civData[0].civilization_bonus)
      setLoading(false);
    };
    loadData();
  }, [civName]);
  return (
    <FadeIn>
    <div className="dataCtn">
      {loading ? (
        <Animation/>
      ) : (
        <FadeIn>
        <div className="main-detail-ctn">
          <ReturnBtn/>
          <div className="civImage">
            <img
              src={
                require(`../assets/images/${civName.toLowerCase()}.png`).default
              }
              alt={`${civName}-emblem`}
            />
          </div>
          <div className="civDetails">
            <h1 className="civName">{civName}</h1>
            <h2>Army type</h2>
            <p>{armyType}</p>
            <h2>Unique unit</h2>
            <div className="list-ctn">
              {uniqueUnitName == "" ? ('No data') : (uniqueUnitName.map((data) =>{
                return <p>{data}</p>
              }))} 
            </div>
            <h2>Unique tech</h2>
            {uniqueTech == "" ? ('No data') : (uniqueTech.map((data) =>{
                return <p>{data}</p>
              }))}
            <h2>Team bonus</h2>
            <p>{teamBonus}</p>
            <h2>Civilization bonus</h2>
            <div className="list-ctn">
              <ul>
              {civBonus.map((data) =>{
                return <li key={data.id}>{data}</li>
              })} 
              </ul>
            </div>
          </div>
        </div>
        </FadeIn>
      )}
    </div>
    </FadeIn>
  );
};
export default CivDetails;

