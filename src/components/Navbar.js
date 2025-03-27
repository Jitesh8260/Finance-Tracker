import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <h1 className="text-2xl font-bold tracking-wide flex items-center">
          <span className="text-yellow-400 text-3xl mr-2">💰</span> Finance Tracker
        </h1>
        <div className="test-class">Test Tailwind</div>
        {/* Navigation Links */}
        <div className="space-x-6 text-lg font-medium">
          <Link to="/" className="hover:text-yellow-400 transition duration-200">Home</Link>
          <Link to="/transactions" className="hover:text-yellow-400 transition duration-200">Transactions</Link>
          <Link to="/budget" className="hover:text-yellow-400 transition duration-200">Budget</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
