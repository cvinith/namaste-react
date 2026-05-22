import ResturantCard from "./ResturantCard";
import restList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState(restList);

  const filterRes = () =>{
    const filterList = restList.filter((res)=>res.info.avgRating>4);
    setListOfResturants(filterList);

  }
  return (
    <div className="body">
      <button className="filter-btn" onClick={filterRes}>Top Rated Resturants</button>
      <div className="res-container">
        {listOfResturants.map((res) => {
          return <ResturantCard resData={res} key={res.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;