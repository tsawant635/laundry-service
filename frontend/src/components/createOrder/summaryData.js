import React from "react";

const SummaryData = ({item,setsubTotal}) => {
  // console.log(item);
  return (
    <div className="submit-data">
      <div className="summary-table">
        <h3 className="items-name">{item.name}</h3>
        <div>
          <div className="washes-names">
            {item.washes.map((type) => {
              return <p>{type.name},</p>;
            })}
          </div>
        </div>
        <div className="t-price">
          <h3 className="t-multi">
            {item.quantity}x{item.washprice} =
          </h3>
          <h3 className="t-amount">{item.subprice}</h3>
        </div>
      </div>
    </div>
  );
};

export default SummaryData;
