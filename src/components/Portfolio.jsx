import { motion } from "framer-motion";
import My_Logo  from "../assets/My_Logo.png";

export default function Portfolio() {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#"><img src={My_Logo} alt="My Logo" style={{width: "50px", height: "50px", borderRadius: "38px"}}/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active text-primary" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link text-primary" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link text-primary" href="#">Projects</a></li>
              <li className="nav-item"><a className="nav-link text-primary" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="text-center py-5" style={{ background: 'linear-gradient(135deg, #341e5c, #e5adf0)' }}>
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: 'spring', stiffness: 120 }}
          className="display-4 mb-3 text-white"
        >
          Hi, I'm John
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3 }}
          className="lead mb-4 text-white"
        >
          A beginner frontend developer passionate about colorful, animated interfaces.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.2, rotate: 8, backgroundColor: "#ffc107", boxShadow: "0px 8px 20px rgba(0,0,0,0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-primary btn-lg"
        >
          Hire Me
        </motion.button>
      </section>

      {/* ABOUT SECTION */}
      <section className="container py-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="card shadow mb-4"
          style={{ borderTop: '5px solid #7c68ebff' }}
        >
          <div className="card-body">
            <h2 className="card-title">About Me</h2>
            <p className="card-text">
              I'm a passionate React and frontend development learner who loves designing modern web experiences. I enjoy solving problems, creating UI animations, and turning ideas into reality.
            </p>
            <motion.button
              whileHover={{ scale: 1.15, rotate: -5, backgroundColor: "#ff6f61", color: "#fff", boxShadow: "0px 8px 20px rgba(0,0,0,0.4)" }}
              className="btn btn-outline-primary mt-3"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section className="container py-5">
        <h2 className="mb-4">Projects</h2>
        <div className="row g-4">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              className="col-md-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2, boxShadow: "0px 10px 25px rgba(0,0,0,0.35)" }}
                className="card h-100 shadow-sm"
                style={{ background: 'linear-gradient(135deg, #a18cd1, #fbc2eb)' }}
              >
                <div className="card-body">
                  <h5 className="card-title">Project {item}</h5>
                  <p className="card-text">A colorful, animated project card. Replace this with your real projects.</p>
                  <motion.button
                    whileHover={{ scale: 1.2, rotate: 5, backgroundColor: "#343a40", color: "#ffc107", boxShadow: "0px 8px 25px rgba(0,0,0,0.5)" }}
                    className="btn btn-dark"
                  >
                    View Project
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="container py-5">
        <motion.div
          className="card shadow text-center"
          style={{ borderTop: '5px solid #6a11cb', background: '#f0f4ff' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="card-body">
            <h2 className="card-title mb-3">Contact</h2>
            <p className="card-text mb-3">Let's work together or connect for opportunities.</p>
            <motion.button
              whileHover={{ scale: 1.2, rotate: 8, backgroundColor: "#6a11cb", color: "#fff", boxShadow: "0px 10px 25px rgba(0,0,0,0.5)" }}
              className="btn btn-primary"
            >
              Email Me
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-3 bg-dark text-white">
        © {new Date().getFullYear()} John Boateng — All rights reserved.
      </footer>
    </div>
  );
}
