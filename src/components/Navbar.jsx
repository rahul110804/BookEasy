import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">BookEasy</Link>
            <div className="space-x-4">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/business/dashboard">Business</Link>
            </div>
        </nav>
    );
};

export default Navbar;
