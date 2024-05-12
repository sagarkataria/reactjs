import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRestraunt,setListOfRestraunt] = useState([]);
    const [filteredRestraunt,setFilteredRestraunt] = useState([]);
    const [searchText , setSearchText] = useState("")

    console.log('body rendered')


    useEffect(()=>{
        fetchData();
    },[]);

   const fetchData = async() =>{
     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

     const json = await data.json();

     console.log(json);
     // optional chainig 
    setListOfRestraunt(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestraunt(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   }

  // conditional Rendering 

//    if(listOfRestraunt.length===0){
//     return <Shimmer/>;
//    }

    return listOfRestraunt.length===0?( <Shimmer/>):(
        <div className="body">
            <div className="filter">
                <div className="search">
                 <input type="text" className="search-box" value={searchText}
                    onChange= {(e)=>{
                       setSearchText(e.target.value)
                    }}
                 />
                 <button className="search-btn"
                 onClick={()=>{
                   console.log(searchText)
                  const filterRestaurant = listOfRestraunt.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                  setFilteredRestraunt(filterRestaurant);
                 }}
                 >
                 Search
                 </button>
                </div>
                <button 
                className="filter-btn" 
                onClick={()=>{
                    const filterData = listOfRestraunt.filter(
                        (res) => res.info.avgRating>4
                    )
                    console.log(filterData)
                    setListOfRestraunt(filterData)
                }}
                >
                Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
              {
                filteredRestraunt.map((restaurant) => (
                <Link key={restaurant.info.id} to ={"/restaurants/"+restaurant.info.id} >
                <RestaurantCard resData={restaurant}/>
                </Link>
                ))}   
            </div>
        </div>
    )
}

export default Body;