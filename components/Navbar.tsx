const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-4 max-sm:text-base text-lg text-[#444]">
        <li className="cursor-pointer antialiased">home</li>
        <li className="cursor-pointer antialiased text-[#444]/60 hover:text-[#444]">
          writings
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
