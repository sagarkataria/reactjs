import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () =>{

    const [resInfo , setResInfo] = useState(null);

    const {resId} = useParams();
   console.log(resId)
    useEffect(()=>{
      fetchMenu();
    },[]);

    const fetchMenu = async()=>{
         const data = await fetch(MENU_API+resId);
         const json = await data.json();
        //  console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info)
         setResInfo(json);
        //  console.log(resInfo)
        
    }
    
    
    // console.log(resInfo?.cards[2]?.card?.card?.info)
    
    // const {name} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info
    if(resInfo===null)return <Shimmer/>

    const {name,cuisines,cloudinaryImageId,costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards)
    console.log(resInfo)

    return (resInfo===null)?(<Shimmer/>):(
        <div className="menu">
           <div>
           <h1>{name}</h1>
            <p>{cuisines.join(",")} -  {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
            {itemCards.map((item)=>(
                <li key={item.card.info.id}>{item.card.info.name}</li>
            ))}
            </ul>
           </div>
        </div>
    )
}
export default RestaurantMenu;