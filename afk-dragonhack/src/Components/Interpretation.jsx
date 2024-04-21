import React, { useState, useEffect } from "react";

function Interpretation() {
    const [data, setData] = useState([]);
    const [ca, setCA] = useState(0);
    const [sa, setSA] = useState(0);
    const [mx, setMX] = useState(0);
    const [iq, setIQ] = useState(0);
    const [percetage, setPercetage] = useState(0);
    const [direction, setDirection] = useState([]);
    const [shoud, setShoud] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:5000/get_data`);
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);
  
  
    useEffect(() => {
      setSA((data[0]-data[4])/data[4]*100)
      setMX((data[1]-data[5])/data[5]*100)
      setIQ((data[2]-data[6])/data[6]*100)
      setCA((data[3]-data[7])/data[7]*100)
    }, [data]);

    useEffect(() => {
      const value = ca*0.52+sa*0.1+mx*0.07+iq*0.04 - 1;
      setPercetage(value.toFixed(2));
      if( ca*0.52+sa*0.1+mx*0.07+iq*0.04 - 1 > 0){
          setDirection("UP");
          setShoud("should");
      }
      else{
          setDirection("DOWN");
          setShoud("shouldn't");
      }
    }, [sa, mx, iq, ca]);
  
  

    return (
      <div className="text-[#E8F1F2] bg-[#254E70] h-[300px] w-full rounded-2xl m-auto py-8 px-8 align-center">
          <p className="pb-2">CDF action will go <span className={`font-bold ${direction === "UP" ? "text-green-400" : "text-red-500"}`}>{direction} with {percetage}% certainty, you {shoud} buy this stock. </span></p>
          <p className="pb-2">*This current prediction was based on the 4 biggest exporters of oil to the USA.</p>
          <p>The formula used to get the predictions was <p className="text-sm italic font-bold py-2">0.52*(d_Canada) + 0.1(d_Mexico) + 0.07(d_Saudi_Arabia) + 0.04(d_Iraq)</p> where (d_Country) is the prediction of the oil change production of that county. </p>
      </div>
    );
  }

export default Interpretation;