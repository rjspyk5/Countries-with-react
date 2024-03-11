import React, { useContext } from "react";
import { CardComponent } from "../Card/Card";
import dataContext from "../Context/Context";



export const Countries = () => {
  const first = useContext(dataContext);
  return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
    {first && first.map((el,iDx)=>{
      const {name:{common:naam},population,flags:{png:flag}}=el;
    
    return <CardComponent key={iDx} name={naam} flag={flag} />})}
 
  </div>);
};
