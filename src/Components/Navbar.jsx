import { Link } from "react-router-dom";
import navlogo from "../assets/nav-logo.png";

const Navbar = () => {
  return (
    <div className="fixed z-30 w-full">
      {/* <----1st Nav ----> */}
      <div className="h-8 bg-[#EC008C] text-neutral-content lg:flex"></div>
      {/* 2nd nav */}
      <div className="navbar bg-base-100 shadow-sm py-3.5 ">
        <div className="navbar-start w-2/6 pl-7">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden translate-x-72"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-[#747474] rounded-box z-1 mt-3 w-52 p-2 shadow translate-x-36 "
            >
              <li>
                <details>
                  <summary>
                    <Link to="/what-we-do">WHAT WE DO</Link>
                  </summary>
                  <ul className="p-2">
                    <li className="lg:w-52">
                      <Link to="/social-development">SOCIAL DEVELOPMENT</Link>
                    </li>
                    <li>
                      <Link to="/investment">INVESTMENT</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>
                    <Link to="/who-we-are">WHO WE ARE</Link>
                  </summary>
                  <ul className="p-2">
                    <li className="lg:w-52">
                      <Link to="/annual-reports">ANNUAL REPORTS</Link>
                    </li>
                    <li>
                      <Link to="/global-board">GLOBAL BOARD</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>
                    <Link to="/where-we-work">WHERE WE WORK</Link>
                  </summary>
                  <ul className="p-2">
                    <li className="lg:w-52">
                      <Link to="/afghanistan">Afghanistan</Link>
                    </li>
                    <li>
                      <Link to="/bangladesh">Bangladesh</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/job-we-offer">JOB WE OFFER</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
          <Link to={"/"}>
            <img src={navlogo} alt="" className="lg:h-14" />
          </Link>
        </div>
        <div className="navbar-end w-6/6 hidden lg:flex pr-7">
          <ul className="menu menu-horizontal gap-2 px-1 text-base text-[#747474] font-semibold">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <details>
                <summary>
                  <Link to="/what-we-do">WHAT WE DO</Link>
                </summary>
                <ul className="p-2">
                  <li className="w-52">
                    <Link to="/social-development">SOCIAL DEVELOPMENT</Link>
                  </li>
                  <li>
                    <Link to="/investment">INVESTMENT</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>
                  <Link to="/who-we-are">WHO WE ARE</Link>
                </summary>
                <ul className="p-2">
                  <li className="w-52">
                    <Link to="/annual-reports">ANNUAL REPORTS</Link>
                  </li>
                  <li>
                    <Link to="/global-board">GLOBAL BOARD</Link>
                  </li>
                </ul>
              </details>
            </li>
            {/* <li>
              <details>
                <summary>
                  <Link to="/where-we-work">WHERE WE WORK</Link>
                </summary>
                <ul className="p-2">
                  <li className="w-52">
                    <Link to="/afghanistan">Afghanistan</Link>
                  </li>
                  <li>
                    <Link to="/bangladesh">Bangladesh</Link>
                  </li>
                </ul>
              </details>
            </li> */}
            <li>
              <Link to="/job-we-offer">JOB WE OFFER</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
