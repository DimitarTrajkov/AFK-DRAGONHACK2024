import React, { useState, useEffect } from "react";

function StockInterpretation() {
  const [data, setData] = useState([]);
  const [ca, setCA] = useState([]);
  const [sa, setSA] = useState([]);
  const [mx, setMX] = useState([]);
  const [iq, setIQ] = useState([]);


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
    setSA(((((data[0]-data[4])/data[4])-2)*100-40).toFixed(2))
    setMX(((((data[1]-data[5])/data[5])-2.2)*100).toFixed(2)) 
    setIQ(((data[2]-data[6])/data[6]*100 + 30).toFixed(2))
    setCA(((data[3]-data[7])/data[7]*100+ 30).toFixed(2))
  }, [data]);


  return (
    <div className="text-[#13293D] bg-[#FFFFFF] h-[300px] w-full rounded-2xl m-auto p-4">
        <div>
            <ul className="text-xl px-2 py-3">
                <li className="font-semibold text-sm uppercase flex flex-row justify-between px-4 py-2 mb-5 rounded-lg bg-[#E1E5F2]">
                    <div>biggest exporters</div>
                    <div>export prediction</div>
                </li>
                <CountryData name="CANADA" percentage={ca}/> 
                <CountryData name="MEXICO" percentage={mx}/> 
                <CountryData name="SAUDI ARABIA" percentage={sa}/> 
                <CountryData name="IRAQ" percentage={iq}/> 
            </ul>
        </div>
    </div>
  );
}

const CountryData = ({name, percentage}) => {
  
    return (
        <li className="flex flex-row justify-between p-2 px-6">
            <div className="text-base font-semibold flex flex-row gap-x-2">
               {name}</div>
            <div className={`text-base font-semibold px-2 py-0.5 rounded-lg ${percentage > 0 ? "bg-green-200" : "bg-red-200"}`}>{percentage}%</div>
           
        </li>
    );
};

export default StockInterpretation;