import liberia from "../icons/liberia.png"
import singapore from "../icons/singapore.png"
import marshall_islands from "../icons/mi.png"
import djibouti from "../icons/djibouti.png"
export default function ShipDataElement() {
  
    return (
        <div className="text-[#13293D] bg-[#FFFFFF] h-[330px] w-full rounded-2xl m-auto p-2">
            <div>
        <ul className="text-xl px-2 py-3">
            <li className="font-semibold text-sm uppercase flex flex-row justify-between px-4 py-2 mb-5 rounded-lg bg-[#E1E5F2]">
                <div>Ship name</div>
                <div>Tracking status</div>
            </li>
            <ShipData name="KATSUYAMA" status="On time" flag={marshall_islands}/>            
            <ShipData name="CRYSTAL SUNRISE" status="Late" time="2 days" flag={singapore}/>
            <ShipData name="LIGERA" status="Late" time="6h" flag={djibouti}/>
            <ShipData name="RED MOON" status="On time"  flag={liberia}/>
            <ShipData name="HIGH WIND" status="On time" flag={liberia}/>
        </ul>
    </div>
        </div>
    );
};

const ShipData = ({name, status, time, flag}) => {
  
    return (
        <li className="flex flex-row justify-between p-2 px-6">
            <div className="text-base font-semibold flex flex-row gap-x-2">
                
            <img src={flag} alt="flag" className="w-6 h-6"/>{name}</div>
            {
                status === "On time" ? <div className="text-base font-semibold px-2 py-0.5 rounded-lg bg-green-200">{status}</div> : <div className="text-base font-semibold px-2 py-0.5 rounded-lg bg-red-300">{status}: {time}</div>
            }
          
        </li>
    );
  };