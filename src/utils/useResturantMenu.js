import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useResturantMenu = (resId) =>{
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
  return resInfo;
}

export default useResturantMenu;