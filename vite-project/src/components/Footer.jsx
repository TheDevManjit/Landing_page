import { FaFacebookF, FaInstagram, FaXTwitter, FaGithub, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center p-6">
      <div className="flex justify-center space-x-6 text-sm mb-4">
        <a href="#" className="hover:text-white">About</a>
        <a href="#" className="hover:text-white">Blog</a>
        <a href="#" className="hover:text-white">Jobs</a>
        <a href="#" className="hover:text-white">Press</a>
        <a href="#" className="hover:text-white">Accessibility</a>
        <a href="#" className="hover:text-white">Partners</a>
      </div>

      <div className="flex justify-center space-x-6 text-lg mb-4">
        <a href="#" className="hover:text-white"><FaFacebookF /></a>
        <a href="#" className="hover:text-white"><FaInstagram /></a>
        <a href="#" className="hover:text-white"><FaXTwitter /></a>
        <a href="#" className="hover:text-white"><FaGithub /></a>
        <a href="#" className="hover:text-white"><FaYoutube /></a>
      </div>

      <p className="text-xs">&copy; 2024 Your Company, Inc. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
