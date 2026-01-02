import { useState } from "react";

const RestaurantCategory = ({data, showResItems, setShowIndex}) => {

    const [toggleResItems, setToggleResItems] = useState(false);

    const onCategoryClick = () => {
        setShowIndex();
        setToggleResItems(!toggleResItems);
    }

    return (
        <div className="res-category" onClick={onCategoryClick}>
            <div className="res-category-title" >
                <span> <b>{data?.title} ({data?.itemCards.length}) </b></span>
                <span> {"-->"} </span>
            </div>

            {console.log("item cards: ", data?.itemCards)}

            {showResItems && toggleResItems && <div>
                <ul>
                    {data?.itemCards.map((itemCard) => {
                        return (
                            <li key = {itemCard?.card?.info?.id}> {itemCard?.card?.info?.name}  </li>
                        )
                    })
                    }
                </ul>
            </div>}
        </div>
    )
}

export default RestaurantCategory;