import { Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex antialiased justify-between mt-20">
      <span className="text-[#8F8F8F] ml-1 text-sm cursor-pointer">v 0.1</span>
      <div className="flex gap-6 text-[#8F8F8F] mr-2">
        <Twitter className="cursor-pointer" size={16} />
        <Mail className="cursor-pointer" size={16} />
      </div>
    </footer>
  );
};

export default Footer;
