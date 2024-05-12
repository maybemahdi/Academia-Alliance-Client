import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import logo from "../../src/assets/logo.png";
import toast from "react-hot-toast";

const Nav = () => {
  const { user, logOut, loading } = useContext(AuthContext);
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
            to={"/create-assignment"}
          >
            Create Assignment
          </NavLink>
        </li>
      )}
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
            to={"/pending-assignments"}
          >
            Pending Assignments
          </NavLink>
        </li>
      )}
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
            to={"/create-assignment"}
          >
            Create Assignment
          </NavLink>
        </li>
      )}
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
            to={"/pending-assignments"}
          >
            Pending Assignments
          </NavLink>
        </li>
      )}
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
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "rounded-none border border-black focus:bg-[#8e914a00] bg-[#ffffff00] focus:text-[#000000] text-[#000000]"
              : "text-black no-underline"
          }
          to={"/login"}
        >
          Login
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
          to={"/register"}
        >
          Register
        </NavLink>
      </li>
    </>
  );
  if (loading)
    return <div className="bg-[#A87676] rounded-none w-full h-24"></div>;
  return (
    <div className="bg-[#A87676] z-20">
      <div
        className={`transition-all z-20 duration-500 py-5 ${
          openNav ? "mb-[280px]" : ""
        }`}
      >
        <div className="navbar w-[90%] mx-auto">
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
              className="block md:hidden cursor-pointer -ml-[18px] mr-3 border border-[#8b966700] bg-[#fff0] p-2 rounded text-black hover:bg-[#fff0] focus:outline-none"
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
            <Link data-aos="zoom-in-right" className="">
              <img className="w-40 -ml-5 md:p-0" src={logo} alt="" />
            </Link>
          </div>
          <div
            data-aos="zoom-in-right"
            className="navbar-center hidden lg:flex"
          >
            <ul className="menu menu-horizontal font-semibold px-1 gap-6">
              {navLinks}
            </ul>
          </div>
          <div className="navbar-end relative gap-4">
            <label className="cursor-pointer grid place-items-center">
              <input
              onChange={handleTheme}
                type="checkbox"
                value="synthwave"
                className="toggle h-7 w-[54px] theme-controller row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
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
                    <Link
                      to="/my-attempt"
                      className={`py-3 bg-[#ddd] text-center font-semibold transition-all duration-300 hover:bg-[#E1ACAC] rounded`}
                    >
                      My Attempt
                    </Link>
                    <button
                      onClick={() => {
                        logOut().then(() =>
                          toast.success("Logged out successfully")
                        );
                      }}
                      className="bg-[#b9947000] rounded font-semibold border border-black no-underline px-3 py-2 cursor-pointer transition-all duration-300 text-black hover:border-[#E1ACAC] hover:bg-[#E1ACAC]"
                    >
                      Log Out
                    </button>
                  </ul>
                </div>
              )}
            </div>
            {!user && (
              <div data-aos="zoom-in-right" className="md:flex hidden gap-4">
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
