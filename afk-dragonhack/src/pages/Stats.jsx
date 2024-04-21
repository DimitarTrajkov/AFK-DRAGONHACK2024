import React from "react";
import GraphElement from "../Components/GraphElement";
import SideNavigation from "../Components/SideNavigation";
import StatsElement from "../Components/StatsElement";
import GraphElementPR from "../Components/GraphElementPR";
const Stats = () => {
  return (
    <div className="container w-auto h-screen overflow-y-hidden bg-[#E8F1F2]">
    <div className="container mx-auto">
      <div className="flex">
        <div className="w-56">
          <SideNavigation />
        </div>
        <div className="p-5 justify-between m-auto">
            <div className="flex flex-row gap-x-5 pt-0 pb-5 p-3">
                <StatsElement text="Production (kb/day)" percentage="13275" color="bg-[#006494]"/>
                <StatsElement text="Export (kb/day)" percentage="4632" color="bg-[#247BA0]"/>
                <StatsElement text="Import (kb/day)" percentage="6690" color="bg-[#0A2463]"/>
            </div>
            <div className="flex flex-col gap-y-4 gap-x-4 pl-3">
                <GraphElement text="Graph" percentage="90%" />
                <GraphElementPR text="Graph" percentage="90%" />           
            </div>
        </div>
        <div className="h-screen">
        <iframe
              scrolling="no"
              allowtransparency="true"
              frameBorder="0"
              src="https://www.tradingview-widget.com/embed-widget/timeline/?locale=en#%7B%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22regular%22%2C%22width%22%3A400%2C%22height%22%3A550%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22www.tradingview.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22timeline%22%2C%22page-uri%22%3A%22www.tradingview.com%2Fwidget-wizard%2Fen%2Fdark%2Ftimeline%2F%22%7D"
              title="timeline TradingView widget"
              lang="en"
              style={{
                userSelect: "none",
                boxSizing: "border-box",
                display: "block",
                height: "100%",
                width: 350
              }}
            />
        </div>
      </div>
    </div>
</div>
  );
};

export default Stats;
