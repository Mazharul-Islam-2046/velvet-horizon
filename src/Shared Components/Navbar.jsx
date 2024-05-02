import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-16 py-8 z-10 absolute top-0 left-0 right-0">
            <p className="font-bold text-xl">Velvet Horizon</p>
            <div className="flex gap-5 justify-between items-center tracking-wider">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Movies">Movies</NavLink>
                <NavLink to="/tv-series">TV Series</NavLink>
                <NavLink to="/animations">Animation</NavLink>
                <NavLink to="/documentry">Documentry</NavLink>
            
            </div>
            

            <div className="flex gap-3 font-semibold">
                <p className="px-5 py-2 border-gray-400 border-2 rounded-lg">Signup</p>
                <p className="px-5 py-2 bg-green-700 rounded-lg">Login</p>
            </div>
        </div>
    );
};

export default Navbar;