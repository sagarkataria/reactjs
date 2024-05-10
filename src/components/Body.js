import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
   
    const[listOfRestraunt] = useState([]);

    return (
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn" 
                onClick={()=>{
                    console.log('click')
                }}
                >
                Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
              {
                resList?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(restaurant=><RestaurantCard resData={restaurant}/>)
              }   
            </div>
        </div>
    )
}

export default Body;