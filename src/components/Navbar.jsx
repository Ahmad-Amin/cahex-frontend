import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
  
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-[#f5f6fa] fixed w-full z-20">
      <div className="text-4xl text-[#2a3e5f] tracking-wide font-impact">CAHEX</div>

      <div className="flex items-center justify-center">
        <div className="absolute bg-[#313d4f] h-4 lg:w-1/12 w-1/6">

        </div>
      <div className="flex rounded-full gap-1 z-10">
        <button className="w-24 py-2 bg-[#313d4f] text-white rounded-full font-manrope text-sm">API</button>
        <button className="w-24 py-2 bg-[#313d4f] text-white rounded-full font-manrope text-sm">Use Case</button>
        <button className="w-24 py-2 bg-[#313d4f] text-white rounded-full font-manrope text-sm">About Us</button>
      </div>
      </div>

      <button
        className="px-6 py-2 bg-[#313d4f] text-white rounded-full border border-transparent
          hover:border-gray-500 hover:bg-gradient-to-r from-blue-500 to-green-500 font-jakarta"
          onClick={() => navigate("/merchant/signin")}
>
        Get Started
      </button>
    </nav>
  );
}
