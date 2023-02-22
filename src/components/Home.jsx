import React, { useEffect,useState } from "react";
import ControlledCarousel from "./Carousel";
import { Card } from "./Card";
import img1 from "../Images/Group 18615.png";
import img2 from "../Images/g3784.png";
import img3 from "../Images/svgexpor.png";
import img4 from "../Images/Path 13025.png";
import img5 from "../Images/gift.png";
import img6 from "../Images/discount.png";
import { BestSaller } from "./BestSaller";
import { GetAPI } from './../api/Api';

export const Home = () => {
  const [data1,setData1]=useState([])
  const [data2,setData2]=useState([])
  const GetData= async ()=>{
const dataApi1= await GetAPI()

setData1(dataApi1.data.data1)
setData2(dataApi1.data.data2)
  }

  useEffect(() => {
    GetData();
  }, []);
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <ControlledCarousel />
        </div>
      </div>
      <div className="d-flex d-md-block justify-content-center  ">
      <div className=" d-block d-md-flex  justify-content-between text-center">
        {data.map((x,index) => {
          return <Card img={x.img} title={x.title}  key={index}/>;
        })}
      </div> 
      </div>
     
      
    </div>
    <div>
    <BestSaller background="white" arrow="true" title="المنتجات الأكثر مبيعا لمنتجات التمور" data={data1}/>
    <BestSaller  title="المنتجات الأكثر مبيعا بمشتقات التمور" data={data2}/>
    <BestSaller background="white"  title="المنتجات الأكثر مبيعا للهدايا"  data={data1}/>
    <BestSaller title="المنتجات الأكثر مبيعا بالعروض"  data={data2}/>
  </div>
  </>
  );
};











const data = [
  { img: img1, title: "منتجات التمور" },
  {
    img: img2,
    title: "مشتقات التمور",
  },
  {
    img: img3,
    title: "مناصيف و بسر",
  },
  {
    img: img4,
    title: "باقات مختارة",
  },
  {
    img: img5,
    title: "الهدايا",
  },
  {
    img: img6,
    title: "العروض",
  },
];
