import React from "react";
import GraphElement from "./GraphElement";
import SideNavigation from "./SideNavigation";
import StatsElement from "./StatsElement";
const Stats = () => {
  return (
    <div className="container w-auto h-auto bg-[#E8F1F2]">
    <div className="container mx-auto">
      <div className="flex">
        <div className="w-60">
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
                <GraphElement text="Graph" percentage="90%" />
                <GraphElement text="Graph" percentage="90%" />
                <GraphElement text="Graph" percentage="90%" />
                <GraphElement text="Graph" percentage="90%" />
            </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default Stats;
