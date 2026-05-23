import ResturantCard from "./ResturantCard";
import restList from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("use effect called");
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4929968&lng=78.3911945&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();
    setListOfResturants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );
    setFilteredResturants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );
  };

  const filterRes = () => {
    const filterList = listOfResturants.filter((res) => res.info.avgRating > 4);
    setFilteredResturants(filterList);
  };

  if (filteredResturants.length === 0) {
    return (
      <div className="body">
        <button className="filter-btn" onClick={filterRes}>
          Top Rated Resturants
        </button>
        <Shimmer />
      </div>
    );
    ßßß;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              setFilteredResturants(
                listOfResturants.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()),
                ),
              );
            }}
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={filterRes}>
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {filteredResturants.map((res) => {
          return <ResturantCard resData={res} key={res.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
