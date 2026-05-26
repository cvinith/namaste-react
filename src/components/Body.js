import ResturantCard from "./ResturantCard";
import restList from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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

  if (onlineStatus === false) return <h1>You are offline</h1>;

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
          return (
            <Link key={res.info.id} to={"/restaurants/"+res.info.id}>
              <ResturantCard resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
