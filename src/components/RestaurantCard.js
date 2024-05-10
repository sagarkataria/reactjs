import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const{resData}=props;
    const {name,cuisines,costForTwo,cloudinaryImageId} = resData?.info;
    return (
        <div className="res-card">
        <img className="res-logo" src={CDN_URL+cloudinaryImageId} alt=""/>
           <h3>{name}</h3>
           <h3>{cuisines.join(", ")}</h3>
           <h3>{costForTwo}</h3>
           {/* <h3>{resData.sla.deliveryTime} minutes</h3> */}
        </div>
    )
}

export default RestaurantCard;