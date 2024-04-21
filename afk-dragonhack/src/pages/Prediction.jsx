import { useAuth0 } from "@auth0/auth0-react";
import SideNavigation from "../Components/SideNavigation";
import ShipDataElement from "../Components/ShipDataElement";
import ShipMap from "../Components/ShipMap";
import Interpretation from "../Components/Interpretation";
import StockInterpretation from "../Components/StockInterpretation";

const Prediction = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
    <div className="container w-auto h-full bg-[#E8F1F2] overflow-y-hidden">
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-60">
              <SideNavigation />
            </div>
            <div className="px-12 justify-center m-auto">
                <div className="grid grid-cols-2 gap-y-5 gap-x-7">
                  <Interpretation />
                  <StockInterpretation  />
                  <ShipDataElement />
                  <ShipMap />
                </div>
            </div>
          </div>
        </div>
    </div>)
  );
};

export default Prediction;
