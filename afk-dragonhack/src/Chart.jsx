import React from "react";
import SideNavigation from "./SideNavigation";
import ChartElement from "./ChartElement";

const Chart = () => {
  
  return (
    <div className="container w-auto h-auto bg-[#E8F1F2]">
        <div className="container mx-auto">
          <div className="flex">
          <div className="w-60">
              <SideNavigation />
              </div>
            <div className="p-5 justify-center m-auto">
              <ChartElement/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Chart;
