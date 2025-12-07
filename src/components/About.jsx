import { useState } from 'react';
import { motion } from 'framer-motion';

function About() {
  const [show, setShow] = useState(false);

  return (
    <div>
      {/* HEADER SECTION */}
      <section
        className="text-center py-5"
        style={{ background: "linear-gradient(135deg, #341e5c, #e5adf0)" }}
      >
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 50, damping: 4 }}
        >
          <h1 className="text-white">ABOUT</h1>
        </motion.h1>
      </section>

      {/* BUTTON */}
      <section className="text-center m-3">
        <motion.button
          className="btn btn-primary"
          whileHover={{
            scale: 1.18,
            backgroundColor: "rgba(116, 61, 129, 0.93)",
            rotate: 4,
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShow(!show)}
        >
          {show ? "Hide" : "Show more"}
        </motion.button>

        {/* FOUR CARDS */}
        {show && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "20px",
              flexWrap: "wrap",
            }}
            
          >
            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{scale: 1.1,rotate: 2,}}
              style={{
                borderLeft: "5px solid #674ff0ff",
                borderRight: "5px solid #674ff0ff",
                maxWidth: "300px",
              }}
              className="card shadow p-3"
            >
              <h3 className="card-title">About Me</h3>
              <p className="card-text">
                Hi! I’m John, a passionate front-end developer who loves creating clean,
                modern, and interactive web experiences. I enjoy learning new technologies
                and building responsive websites.
              </p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{scale: 1.1,rotate: -2,}}
              style={{
                borderLeft: "5px solid #ff6f61",
                borderRight: "5px solid #ff6f61",
                maxWidth: "300px",
              }}
              className="card shadow p-3"
            >
              <h3 className="card-title">Skills</h3>
              <p className="card-text">
                I specialize in React, JavaScript, CSS, and Bootstrap. I enjoy creating
                interactive UI components and smooth animations.
              </p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{scale: 1.1,rotate: 2,}}
              style={{
                borderLeft: "5px solid #34c3eb",
                borderRight: "5px solid #34c3eb",
                maxWidth: "300px",
              }}
              className="card shadow p-3"
            >
              <h3 className="card-title">Projects</h3>
              <p className="card-text">
                I have worked on several web projects, building responsive layouts
                and adding animations to improve user experience.
              </p>
            </motion.div>

            {/* CARD 4 */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{scale: 1.1,rotate: -2,}}
              style={{
                borderLeft: "5px solid #ffb547",
                borderRight: "5px solid #ffb547",
                maxWidth: "300px",
              }}
              className="card shadow p-3"
            >
              <h3 className="card-title">Hobbies</h3>
              <p className="card-text">
                Outside of coding, I enjoy exploring design trends, creative projects,
                and learning new tools to improve my skills.
              </p>
            </motion.div>
          </div>
        )}
      </section>
    </div>
  );
}

export default About;
