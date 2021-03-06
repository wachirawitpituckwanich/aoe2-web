import React, { useState, useEffect } from "react";
import FadeIn from "react-fade-in";
import Animation from "./anim";
import "../assets/css/CivDetails.css";
import axios from "axios";
import ReturnBtn from "./returnBtn";
import Error from './error'
const CivDetails = ({ match }) => {
  const civName = match.params.name;
  const [armyType, setArmyType] = useState([]);
  const [loading, setLoading] = useState(false);
  const [teamBonus, setTeamBonus] = useState("");
  const [civBonus, setCivBonus] = useState([]);
  const [noCiv, setNoCiv] = useState(false);
  const [imgSrc , setImgSrc] = useState('')
  useEffect(() => {
    try {
      var img = require(`../assets/images/${civName.toLowerCase()}.png`).default;
      setImgSrc(img)
    } catch (err){
      setNoCiv(true)
      return noCiv
    }
    if (!noCiv) {
    const loadData = async () => {
      setLoading(true);
      await axios.get("https://aoe2web-server.herokuapp.com/")
      .then( (response) => {
        const res = response.data.civilizations;
        // remove duplicates from response
        const result = res.filter(
        (arr, index, self) =>
          index === self.findIndex((t) => t.name === arr.name)
      );
      const civData = result.filter((result) => {
        if (result.name === civName) {
          return result;
        }
      });
      setArmyType(civData[0].army_type);
      setTeamBonus(civData[0].team_bonus);
      setCivBonus(civData[0].civilization_bonus);
      setLoading(false);
      })
      
    };
    loadData();
  }
  }, [civName]);
  return (
    <FadeIn>
      {noCiv ? (<Error/>) : (
        <div className="dataCtn">
        {loading ? (
          <Animation />
        ) : (
          <FadeIn>
            <div className="main-detail-ctn">
              <ReturnBtn />
              <div className="civImage">
                <img
                  src={imgSrc}
                  alt={`${civName}-emblem`}
                />
              </div>
              <div className="civDetails">
                <h1 className="civName">{civName}</h1>
                <h2>Army type</h2>
                <p>{armyType}</p>
                <h2>Team bonus</h2>
                <p>{teamBonus}</p>
                <h2>Civilization bonus</h2>
                <div className="list-ctn">
                  <ul>
                    {civBonus.map((data) => {
                      return <li key={data.id}>{data}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        )}
      </div>)}
    </FadeIn>
  );
};
export default CivDetails;
