import React from "react";
import listStyleCard from "./List.module.scss";

const List = () => {
  return (
    <div className={listStyleCard.listContainer}>
      <h1>List Title</h1>

      <div className={listStyleCard.listItemRow}>
        <div className={listStyleCard.listItemOne}>
          <div className={listStyleCard.circleDesignOne}>
            <h5>HA</h5>
          </div>

          <h4>List one</h4>
          <p>This is a list of this contianer. we are still learning</p>
        </div>

        <div className={listStyleCard.listItemTwo}>

          <div className={listStyleCard.circleDesignTwo}>
            <h5>HA</h5>
          </div>

          <h4>List one</h4>
          <p>This is a list of this contianer. we are still learning</p>
        </div>
      </div>
    </div>
  );
};

export default List;
