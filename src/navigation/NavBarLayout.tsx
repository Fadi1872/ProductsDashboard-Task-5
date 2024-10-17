import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import logo from "./../assets/navlogo.png"
import { navBarData } from "../data/NavBarData"

const NavBarLayout = () => {
  return (
    <div className="flex h-screen bg-white-50">
        <div className="h-screen bg-gray-450 shrink-0 xl:w-71 lg:w-60">
            <NavBar logo={logo} navLinks={navBarData} />
        </div>
        <div className="h-screen grow xl:py-6 md: py-4 px-28">
            <Outlet />
        </div>
    </div>
  )
}

export default NavBarLayout