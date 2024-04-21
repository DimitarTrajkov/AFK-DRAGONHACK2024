import React from "react";
import SideNavigation from "../Components/SideNavigation";
import ChartElement from "../Components/ChartElement";

const Chart = () => {

  return (  
    <div className="container w-auto h-auto bg-[#E8F1F2]">
        <div className="container mx-auto">
          <div className="flex">
              <div className="w-56">
                <SideNavigation />
              </div>
              <div className="justify-center m-auto">
                <ChartElement/>
              </div>
            </div>
          </div>
        </div>
  )
};

export default Chart;