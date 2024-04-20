import { useAuth0 } from "@auth0/auth0-react";
import GraphElement from "../Components/GraphElement";
import SideNavigation from "../Components/SideNavigation";
import NewsElement from "../Components/NewsElement";

const Prediction = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
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
                </div>
            </div>
            <NewsElement text="News" />
          </div>
        </div>
    </div>)
  );
};

export default Prediction;
