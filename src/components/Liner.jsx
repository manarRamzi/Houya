import React from "react";

export const Liner = (props) => {
  return (
    <div className=" d-block d-md-flex  liner  align-items-center  justify-content-center  ">
      <p className="title my-0 ml-2"> {props.title} </p>
      <div className="w-100 m-2">
        <hr width="99%" className="hr1"/>
        <hr width="50%" className="hr2" />
      </div>
      <button className=" d-flex   justify-content-center py-2  ">عرض الكل</button>
    </div>
  );
};
