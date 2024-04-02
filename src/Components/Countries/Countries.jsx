import React, { useContext, useState } from "react";
import { CardComponent } from "../Card/Card";
import dataContext from "../Context/Context";

export const Countries = () => {
  const first = useContext(dataContext);
  const [visitedCountry, setvisitedCountry] = useState([]);
  const handleVisitedCountry = (newCountry) => {
    setvisitedCountry([...visitedCountry, newCountry]);
  };

  return (
    <>
      <div>
        {visitedCountry.length > 0 && (
          <h1 className="text-center font-bold">
            Total visited Country{visitedCountry.length}
          </h1>
        )}
      </div>
      <div className="grid grid-cols-1 mx-5 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {first &&
          first.map((el, iDx) => {
            const {
              name: { common: naam },
              population,
              flags: { png: flag },
            } = el;
            return (
              <CardComponent
                key={iDx}
                name={naam}
                flag={flag}
                capital={el?.capital}
                handleVisitedCountry={handleVisitedCountry}
              />
            );
          })}
      </div>
    </>
  );
};
