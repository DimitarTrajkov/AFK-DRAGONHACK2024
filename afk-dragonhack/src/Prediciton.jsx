import React from "react";
import SideNavigation from "./SideNavigation";

const Prediction = () => {
  return (
    <div className="container w-full h-auto bg-[#E8F1F2]">
        <div className="container mx-auto">
          <div className="flex">
            <div className="flex-initial w-1/5">
              <SideNavigation />
            </div>
            <div className="p-5 justify-center m-auto">
                <div className="flex flex-row gap-x-4 p-5">
                <StatsElement text="Accuracy" percentage="90%" color="bg-[#006494]"/>
                <StatsElement text="Accuracy" percentage="90%" color="bg-[#247BA0]"/>
                <StatsElement text="Accuracy" percentage="90%" color="bg-[#0A2463]"/>
                <StatsElement text="Accuracy" percentage="90%" color="bg-[#022B3A]"/>
                </div>
                <div className="grid grid-cols-2 gap-y-4 gap-x-4 p-5">
                <GrpahElement text="Graph" percentage="90%" />
                <GrpahElement text="Graph" percentage="90%" />
                <GrpahElement text="Graph" percentage="90%" />
                <GrpahElement text="Graph" percentage="90%" />
                </div>
            </div>
          </div>
        </div>
      </div>

  );
};

const StatsElement = ({text, percentage, color}) => {
  
    return (
        <div className={`rounded-2xl text-[#E8F1F2] w-60 h-32 p-3 ${color ? color : "bg-[#247BA0]"}`}>
            <p className="text-left font-semibold text-sm">{text}</p>
            <p className="font-semibold text-right text-2xl pt-4 pr-5">{percentage}</p>
        </div>
    );
};


const GrpahElement = ({text, percentage}) => {
  
    return (
        <div className=" bg-[#247BA0]  h-[220px] w-full p-4">
            <p className="text-center">{text}</p>
        </div>
    );
};

export default Prediction;
