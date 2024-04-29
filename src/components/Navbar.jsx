import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className=' bg-white'>
      <div className=' max-w-7xl my-0 mx-auto py-3 px-5 flex items-center justify-between'>
        <Link
          to='/'
          className=' text-[#333] font-bold font-palanquin text-4xl '
        >
          Expense Tracker
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
