import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const ResturantMenu = () => {
  const {resId} = useParams();  
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchItemList();
  }, []);
  const fetchItemList = async () => {
    const data = await fetch(
      MENU_URL+resId,
    );
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } = resInfo.cards[2].card.card.info;
  const menuItems =
    resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(" ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>

      <ul>
        {menuItems.map((item) => {
          return <li key = {item.card.info.id}> {item.card.info.name} : Rs { item.card.info.price/100 || item.card.info.finalPrice/100 }</li>;
        })}
      </ul>
    </div>
  );
};

export default ResturantMenu;
