import GraphElement from "./GraphElement";
import SideNavigation from "./SideNavigation";

const Prediction = () => {
  return (
    <div className="container w-auto h-auto bg-[#E8F1F2]">
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-60">
              <SideNavigation />
            </div>
            <div className="p-5 justify-center m-auto w-full">
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

export default Prediction;
