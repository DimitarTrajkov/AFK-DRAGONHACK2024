import React, { useState, useEffect } from "react";
import { Chart } from 'react-google-charts';

const options = {
  chart: {
    title: "Box Office Earnings in First Two Weeks of Opening",
    subtitle: "in millions of dollars (USD)",
    curveType: "function",
    legend: { position: "bottom" }
  },
};

const MyChart = ({ data }) => {
  return (
    <div >
      <Chart
        chartType="LineChart"
        width="520px"
        height="240px"
        data={data}
        options={options}
      />
    </div>
  );
};

const GraphElementPR = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/DATA2.json'); // Relative path to your JSON file
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>No available data</div>;
  }
  
  return (
    <div className="h-[240px] w-full gap-x-5 flex flex-row">
      <MyChart data={data} />
      <p className="h-full w-full bg-white rounded-xl p-8">This chart shows the <span className="font-bold">production of oil </span>mesured in thousand barrels per day for the 4 biggest country exportes to the USA</p>
    </div>
  );
};

export default GraphElementPR;
