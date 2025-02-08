import { useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";

export default function Success() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#2a3e5f] font-jakarta">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-2/6">
        <div className="flex flex-row justify-between">
          <h1 className="font-extrabold text-[#2a3e5f]">CAHEX</h1>
        </div>
        
        
        <div className="w-full flex flex-col items-center justify-center py-10">
        <div>
            <div className="bg-[#9ac29b] w-28 h-28 rounded-full flex items-center justify-center">
                <div className="bg-[#002e96] w-24 h-24 rounded-full text-white flex items-center justify-center">
                    <TiTick size={100}/>
                </div>
            </div>
        </div>
        <h2 className="text-2xl font-semibold mt-5">Your submission has been approved</h2>
        </div>

        

        <button
          className="w-full bg-[#2a3e5f] text-white py-2 rounded-md hover:bg-[#131c2c]"
          onClick={() => navigate("/merchant/dashboard")}
        >
          Countinue
        </button>

      </div>
    </div>
  );
}
