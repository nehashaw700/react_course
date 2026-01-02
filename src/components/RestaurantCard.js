const RestaurantCard = (props) => {
  // this is called destructuring
  const { resName, cusines, time, rating, image } = props;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-img"
        src= {
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          image
        }
      ></img>

      <h4 id = "resName"> {resName.length > 20 ? resName.slice(0, 20) + "...": resName}</h4>

      <div className="ratingTime">
      <div> <b> {rating} </b> </div>
      <div> <b>{time + ' - ' + (time+ 10) + " mins"}</b> </div>
      </div>
      
      <div className="cusines"> {cusines.length > 20 ? cusines.slice(0, 20) + "...": cusines} </div>
      
    </div>
  );
};

export default RestaurantCard;
