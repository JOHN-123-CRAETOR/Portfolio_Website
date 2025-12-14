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
          className="text-white"
        >
          ABOUT
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
      <section className="">
        <div
        style={{display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "20px",
                
              }}>
           <motion.div
              className="card shadow p-4"
              style={{
                borderLeft: "5px solid #ad76ebff",
                borderRight: "5px solid #ad76ebff",
                maxWidth: "600px",
              }}
              initial={{opacity: 0, y: 40, scale:0.9}}
              animate={{opacity: 1, y: 0, scale: 1}}
              transition={{duration: 0.9}}
              whileHover={{scale: 1.03}}>
                <motion.h3 className="card-title text-center"
                initial={{opacity: 0, y: -100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{type: "spring", stifness: 100, damping: 30}}>My Educational Background</motion.h3>
                <motion.div
                 initial={{opacity: 0, x: -100}}
                  whileInView={{opacity: 1, x: 0}}
                  transition={{type: "spring", stiffness: 100, damping: 30}}>
                    <h5 className="">Senior High</h5>
                    <p className="card-text">  I attended Tema Methodist Day Senior High School, where I built a strong academic
                        foundation and developed essential values such as discipline, teamwork, and
                        responsibility. My time in senior high school helped shape my character and
                        sparked my interest in learning, problem-solving, and personal growth.
                                      </p>
                </motion.div>
                
                        <br />
                        <motion.div
                        initial={{opacity: 0, x: 100}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{type: "spring", stiffness: 100, damping: 30}}>
                            <h5>University</h5>
                            <p>
                            I am currently studying at the University of Ghana (UG), where I am further
                            developing my academic and technical skills. At UG, I am exposed to a diverse and
                            intellectually stimulating environment that encourages critical thinking,
                            creativity, and innovation. My university experience is helping me grow both
                            academically and personally, while strengthening my passion for technology and
                            preparing me for future professional opportunities.
                          </p>
                        </motion.div>       
                </motion.div>
                <motion.div
              className="card shadow p-4"
              style={{
                borderLeft: "5px solid #ad76ebff",
                borderRight: "5px solid #ad76ebff",
                maxWidth: "600px",
              }}
              initial={{opacity: 0, y: 40, scale:0.9}}
              animate={{opacity: 1, y: 0, scale: 1}}
              transition={{duration: 0.9}}
              whileHover={{scale: 1.03}}>
                <motion.h3 className="card-title text-center"
                initial={{opacity: 0, y: -100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{type: "spring", stifness: 100, damping: 30}}>My Educational Background</motion.h3>
                <motion.div
                 initial={{opacity: 0, x: -100}}
                  whileInView={{opacity: 1, x: 0}}
                  transition={{type: "spring", stiffness: 100, damping: 30}}>
                    <h5 className="">Senior High</h5>
                    <p className="card-text">  I attended Tema Methodist Day Senior High School, where I built a strong academic
                        foundation and developed essential values such as discipline, teamwork, and
                        responsibility. My time in senior high school helped shape my character and
                        sparked my interest in learning, problem-solving, and personal growth.
                                      </p>
                </motion.div>
                
                        <br />
                        <motion.div
                        initial={{opacity: 0, x: 100}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{type: "spring", stiffness: 100, damping: 30}}>
                            <h5>University</h5>
                            <p>
                            I am currently studying at the University of Ghana (UG), where I am further
                            developing my academic and technical skills. At UG, I am exposed to a diverse and
                            intellectually stimulating environment that encourages critical thinking,
                            creativity, and innovation. My university experience is helping me grow both
                            academically and personally, while strengthening my passion for technology and
                            preparing me for future professional opportunities.
                          </p>
                        </motion.div>       
                </motion.div>


        </div>
      </section>
    </div>
  );
}

export default About;
