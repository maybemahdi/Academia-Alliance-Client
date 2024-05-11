import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import logo from "../../src/assets/logo.png";
import toast from "react-hot-toast";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    setOpenNav(!openNav);
    // document.getElementById("mainDiv").removeAttribute("data-aos");
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("black");
    } else {
      setTheme("light");
    }
  };
  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "rounded-none border border-black focus:bg-[#8e914a00] bg-[#ffffff00] focus:text-[#000000] text-[#000000]"
              : "text-black no-underline"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "rounded-none border border-black focus:bg-[#8e914a00] bg-[#ffffff00] focus:text-[#000000] text-[#000000]"
              : "text-black no-underline"
          }
          to={"/assignments"}
        >
          Assignments
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "rounded-none border border-black focus:bg-[#8e914a00] bg-[#ffffff00] focus:text-[#000000] text-[#000000]"
              : "text-black no-underline"
          }
          to={"/create-assignment"}
        >
          Create Assignment
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "rounded-none border border-black focus:bg-[#8e914a00] bg-[#ffffff00] focus:text-[#000000] text-[#000000]"
              : "text-black no-underline"
          }
          to={"/pending-assignments"}
        >
          Pending Assignments
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "rounded-none border border-black focus:bg-[#8e914a00] bg-[#ffffff00] focus:text-[#000000] text-[#000000]"
                : "text-black no-underline"
            }
            to={"/submitted-assignments"}
          >
            Submitted Assignments
          </NavLink>
        </li>
      )}
    </>
  );
  const navLinksB = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "rounded-none border border-black focus:bg-[#8e914a00] bg-[#ffffff00] focus:text-[#000000] text-[#000000]"
              : "text-black no-underline"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "rounded-none border border-black focus:bg-[#8e914a00] bg-[#ffffff00] focus:text-[#000000] text-[#000000]"
              : "text-black no-underline"
          }
          to={"/assignments"}
        >
          Assignments
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "rounded-none border border-black focus:bg-[#8e914a00] bg-[#ffffff00] focus:text-[#000000] text-[#000000]"
              : "text-black no-underline"
          }
          to={"/create-assignment"}
        >
          Create Assignment
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "rounded-none border border-black focus:bg-[#8e914a00] bg-[#ffffff00] focus:text-[#000000] text-[#000000]"
              : "text-black no-underline"
          }
          to={"/pending-assignments"}
        >
          Pending Assignments
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "rounded-none border border-black focus:bg-[#8e914a00] bg-[#ffffff00] focus:text-[#000000] text-[#000000]"
                : "text-black no-underline"
            }
            to={"/submitted-assignments"}
          >
            Submitted Assignments
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-[#A87676] z-20">
      <div
        className={`transition-all z-20 duration-500 py-5 ${
          openNav ? "mb-[230px]" : ""
        }`}
      >
        <div data-aos="zoom-in" className="navbar w-[90%] mx-auto">
          <div className="navbar-start">
            {/* <div className="dropdown -ml-[30px] md:m-0">
            <div tabIndex={0} role="button" className="btn z-20 btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm font-semibold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div> */}
            <button
              onClick={toggleNav}
              className="block md:hidden cursor-pointer -ml-[18px] mr-3 border border-[#8b966700] bg-[#fff0] p-2 rounded text-gray-600 hover:bg-[#fff0] focus:outline-none"
            >
              <HiMiniBars3CenterLeft
                className={`w-7 h-7 ${openNav ? "hidden" : "block"}`}
              />
              <RxCross2 className={`w-7 h-7 ${openNav ? "block" : "hidden"}`} />
            </button>
            <div
              className={`${
                openNav ? "" : "hidden"
              } my-4 bg-[#A87676] w-full absolute left-0 top-20 flex flex-col gap-4 p-2`}
            >
              <ul className="menu">{navLinksB}</ul>
            </div>
            <Link className="">
              <img className="w-40 -ml-5 md:p-0" src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal font-semibold px-1 gap-6">
              {navLinks}
            </ul>
          </div>
          <div className="navbar-end relative gap-4">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                onChange={handleTheme}
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />
              {/* sun icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            <div className="flex justify-center items-center">
              {/* {console.log(user.photoURL)} */}
              {user?.photoURL && (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-11 rounded-full">
                      <img src={user?.photoURL} alt="User" />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-20 p-3 space-y-2 shadow menu menu-sm dropdown-content bg-base-100 rounded w-56"
                  >
                    <li className="py-3 bg-[#ddd] font-semibold transition-all duration-300 hover:bg-[#E1ACAC] rounded">
                      <Link
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "rounded-none py-3 text-[#000000]"
                            : "text-black hover:bg-[#E1ACAC] transition-all duration-300 hover:bg-[#e1acac00] no-underline"
                        }
                        to="/my-attempt"
                      >
                        My Attempted Assignment
                      </Link>
                    </li>
                    <button
                      onClick={() => {
                        logOut().then(() =>
                          toast.success("Logged out successfully")
                        );
                      }}
                      className="bg-[#b9947000] rounded font-semibold border border-black no-underline px-3 py-2 cursor-pointer transition-all duration-300 text-black hover:bg-[#E1ACAC]"
                    >
                      Log Out
                    </button>
                  </ul>
                </div>
              )}
            </div>
            {!user && (
              <div className="md:flex hidden gap-4">
                <Link
                  to={"/login"}
                  className="bg-[#b9947000] font-semibold border border-black no-underline px-3 py-2 cursor-pointer transition-all duration-300 text-black hover:bg-[#E1ACAC]"
                >
                  Login
                </Link>
                <Link
                  to={"/register"}
                  className="bg-[#b9947000] font-semibold border border-black no-underline px-3 py-2 cursor-pointer transition-all duration-300 text-black hover:bg-[#E1ACAC]"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
