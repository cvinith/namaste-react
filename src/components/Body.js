import ResturantCard from "./ResturantCard";
import restList from "../utils/mockdata"

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restList.map((res) => {
          return <ResturantCard resData={res} key={res.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;