import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";


const FooterPage = () => {
    return (
      <footer className="bg-[#f5f6fa] py-8 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-[#4b5563]">
          {/* Company Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer">Cahex Finance</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Medium</li>
              <li className="cursor-pointer">Brand Kit</li>
              <li className="cursor-pointer">Press Kit</li>
              <li className="cursor-pointer">Support</li>
            </ul>
          </div>
  
          {/* Our Network Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Network</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer">Products</li>
              <li className="cursor-pointer">Use Cases</li>
              <li className="cursor-pointer">Developers</li>
              <li className="cursor-pointer">Learn</li>
              <li className="cursor-pointer">Community</li>
            </ul>
          </div>
  
          {/* Legal Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer">Terms & Conditions</li>
              <li className="cursor-pointer">Airdrop Terms & Conditions</li>
              <li className="cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
  
          {/* Social Icons and Copyright */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-4">
              {/* Replace these with appropriate icons */}
              <span className="w-6 h-6 items-center justify-center flex cursor-pointer"><FaXTwitter/></span>
              <span className="w-6 h-6 items-center justify-center flex cursor-pointer"><FaLinkedinIn/></span>
              <span className="w-6 h-6 items-center justify-center flex cursor-pointer"><FaDiscord/></span>
              <span className="w-6 h-6 items-center justify-center flex cursor-pointer"><FaFacebookF/></span>
              <span className="w-6 h-6 items-center justify-center flex cursor-pointer"><FaTelegramPlane/></span>
            </div>
            <p className="text-sm text-center md:text-right">
              © 2024. All rights reserved by Network
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default FooterPage;
  