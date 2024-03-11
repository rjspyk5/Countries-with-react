import { Countries } from "./Components/Countries/Countries";
import { Navbar } from "./Components/Navbar/Navbar";
import dataContext from './Components/Context/Context'
import { useEffect, useState } from "react";
function App() {
  const [countryData, setcountryData] = useState([])
  useEffect(() => {
    const fetchData=async()=>{
      const promisedData=await fetch("https://restcountries.com/v3.1/all");
      const data=await promisedData.json();
      setcountryData(data);
    }
    fetchData();
 
  }, [setcountryData])
  return (
    <dataContext.Provider value={countryData}>
    <div>
      <Navbar></Navbar>
      <Countries></Countries>
    </div>
    </dataContext.Provider>
  );
}
export default App;
