export default function StatsElement({text, percentage, color}) {
  
    return (
        <div className={`rounded-2xl text-[#E8F1F2] w-[245px] h-28 p-3 ${color ? color : "bg-[#247BA0]"}`}>
            <p className="text-left font-semibold text-sm">{text}</p>
            <p className="font-semibold text-5xl pt-4 p-5">{percentage}</p>
        </div>
    );
};