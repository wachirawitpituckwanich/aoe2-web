import React, { useState, useEffect } from "react";
import "../assets/css/Search-bar.css";
import axios from "axios";
import Carditem from "./card";
const Searchbar = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const response = await axios.get("https://aoe2web-server.herokuapp.com/");
      const res = response.data.civilizations;
      // remove duplicates from response
      const result = res.filter(
        (arr, index, self) =>
          index === self.findIndex((t) => t.name === arr.name)
      );
      setData(result);
      setLoading(false);
    };
    loadData();
  }, []);
  return (
    <div className="search">
      <div className="searchInput">
        <input
          id="searchBar"
          type="text"
          placeholder="Search your favorite civ!"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></input>
      </div>
      <div className="card-ctn">
        <Carditem loading={loading} data={data} searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default Searchbar;
