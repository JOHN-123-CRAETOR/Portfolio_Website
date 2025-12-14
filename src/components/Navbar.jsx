import My_Logo from "../assets/My_Logo.png";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"

function Navbar() {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            <img
              src={My_Logo}
              alt="Logo"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <motion.li className="nav-item"
                  whileHover={{
                          backgroundColor: "#a883b8ff",
                          border: "1px solid black",
                          borderRadius: "5px",
                          padding: "5px 15px",
                          color: "green"
                  }}>
                <Link className="nav-link text-primary" to="/">
                  Home
                </Link>
              </motion.li>
              <motion.li className="nav-item"
                whileHover={{
                          backgroundColor: "#a883b8ff",
                          border: "1px solid black",
                          borderRadius: "5px",
                          padding: "5px 15px",
                          color: "2px solid black"
                  }}>
                <Link className="nav-link text-primary" to="/about">
                  About
                </Link>
              </motion.li>
              <motion.li className="nav-item"
                style={{color: "black",
                }}

                whileHover={{
                          backgroundColor: "#a883b8ff",
                          border: "1px solid black",
                          borderRadius: "5px",
                          padding: "5px 15px",
                          color: "2px solid black"
                  }}>
                <Link className="nav-link text-primary" to="/projects">
                  Projects
                </Link>
              </motion.li>
              <motion.li className="nav-item"

              whileHover={{
                          backgroundColor: "#a883b8ff",
                          border: "1px solid black",
                          borderRadius: "5px",
                          padding: "5px 15px",
                          color: "2px solid black"
                  }}>
                <Link className="nav-link text-primary" to="/contact">
                  Contact
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
