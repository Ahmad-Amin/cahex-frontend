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
              <li>Cahex Finance</li>
              <li>Blog</li>
              <li>Medium</li>
              <li>Brand Kit</li>
              <li>Press Kit</li>
              <li>Support</li>
            </ul>
          </div>
  
          {/* Our Network Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Network</h3>
            <ul className="space-y-2">
              <li>Products</li>
              <li>Use Cases</li>
              <li>Developers</li>
              <li>Learn</li>
              <li>Community</li>
            </ul>
          </div>
  
          {/* Legal Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>Terms & Conditions</li>
              <li>Airdrop Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
  
          {/* Social Icons and Copyright */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-4">
              {/* Replace these with appropriate icons */}
              <span className="w-6 h-6 items-center justify-center flex"><FaXTwitter/></span>
              <span className="w-6 h-6 items-center justify-center flex"><FaLinkedinIn/></span>
              <span className="w-6 h-6 items-center justify-center flex"><FaDiscord/></span>
              <span className="w-6 h-6 items-center justify-center flex"><FaFacebookF/></span>
              <span className="w-6 h-6 items-center justify-center flex"><FaTelegramPlane/></span>
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
  