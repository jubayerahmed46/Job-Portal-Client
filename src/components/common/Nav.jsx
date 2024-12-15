import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Nav() {
  const { user } = useAuth();
  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive && "bg-black/80 text-white hover:bg-black/80"
                } hover:bg-gray-400/10 px-4 py-1 rounded-md`
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"jobs"}
              className={({ isActive }) =>
                `${
                  isActive && "bg-black/80 text-white hover:bg-black/80"
                } hover:bg-gray-400/10 px-4 py-1 rounded-md`
              }
            >
              Jobs
            </NavLink>
            <NavLink
              to={"add-new-job"}
              className={({ isActive }) =>
                `${
                  isActive && "bg-black/80 text-white hover:bg-black/80"
                } hover:bg-gray-400/10 px-4 py-1 rounded-md`
              }
            >
              Add New Job
            </NavLink>
            <NavLink
              to={"my-app"}
              className={({ isActive }) =>
                `${
                  isActive && "bg-black/80 text-white hover:bg-black/80"
                } hover:bg-gray-400/10 px-4 py-1 rounded-md`
              }
            >
              My App
            </NavLink>
            <NavLink
              to={"my-jobpost"}
              className={({ isActive }) =>
                `${
                  isActive && "bg-black/80 text-white hover:bg-black/80"
                } hover:bg-gray-400/10 px-4 py-1 rounded-md`
              }
            >
              My JobPost
            </NavLink>
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost text-2xl font-mono text-purple-600 font-bold p-2"
        >
          JaintasJob
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" flex gap-5 items-center">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${
                isActive && "bg-black/80 text-white hover:bg-black/80"
              } hover:bg-gray-400/10 px-4 py-1 rounded-md`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"jobs"}
            className={({ isActive }) =>
              `${
                isActive && "bg-black/80 text-white hover:bg-black/80"
              } hover:bg-gray-400/10 px-4 py-1 rounded-md`
            }
          >
            Jobs
          </NavLink>
          <NavLink
            to={"add-new-job"}
            className={({ isActive }) =>
              `${
                isActive && "bg-black/80 text-white hover:bg-black/80"
              } hover:bg-gray-400/10 px-4 py-1 rounded-md`
            }
          >
            Add New Job
          </NavLink>
          <NavLink
            to={"my-app"}
            className={({ isActive }) =>
              `${
                isActive && "bg-black/80 text-white hover:bg-black/80"
              } hover:bg-gray-400/10 px-4 py-1 rounded-md`
            }
          >
            My App
          </NavLink>
          <NavLink
            to={"my-jobpost"}
            className={({ isActive }) =>
              `${
                isActive && "bg-black/80 text-white hover:bg-black/80"
              } hover:bg-gray-400/10 px-4 py-1 rounded-md`
            }
          >
            My JobPost
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={"auth/login"}>
          <button className="btn btn-primary text-lg">Login</button>
        </Link>
      </div>
      <div>
        <p className="h-10 ml-3  aspect-square rounded-full ring-1 flex items-center justify-center bg-gray-200 text-3xl font-bold text-amber-500">
          {user?.displayName?.charAt(0)?.toUpperCase() || "?"}
        </p>
      </div>
    </div>
  );
}

export default Nav;
