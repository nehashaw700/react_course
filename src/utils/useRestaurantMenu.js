import { useState, useEffect } from "react";
import restaurantListData from "./mockData";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState([]);
    
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const resInfo = await restaurantListData.filter((el) => {
            return el?.info.id === resId;
        })

        await setResInfo(resInfo);
    }
    
    return resInfo;
}

export default useRestaurantMenu;