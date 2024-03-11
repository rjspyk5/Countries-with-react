import React, { useContext, useState } from "react";
import { CardComponent } from "../Card/Card";
import dataContext from "../Context/Context";



export const Countries = () => {
  const first = useContext(dataContext);
  const [visitedCountry, setvisitedCountry] = useState([])
  
  return (
  <div className="grid grid-cols-1 mx-5 md:grid-cols-2 lg:grid-cols-4 gap-10">
    {first && first.map((el,iDx)=>{
      console.log(el);
      const {name:{common:naam},population,flags:{png:flag}}=el;
     return <CardComponent key={iDx} name={naam} flag={flag} capital={el?.capital} />})}
 
  </div>);
};
