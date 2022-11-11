import React from "react";
import itemStyle from "./Item.module.scss";

const Item = () => {
  return (
    <div className={itemStyle.ItemContainer}>
      <h3>Item List</h3>

      <div className={itemStyle.itemList}>
        <div className={itemStyle.ItemCard}>
          <h6>This is first item title</h6>
          <p>We are working on this item. But not sure when we will do it</p>

          <button className={itemStyle.ItemButtonDesign}>View Details</button>
        </div>

        <div className={itemStyle.ItemCard}>
          <h6>This is first item title</h6>
          <p>We are working on this item. But not sure when we will do it</p>
          <button className={itemStyle.ItemButtonTwo}>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
