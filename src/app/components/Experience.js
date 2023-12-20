import React from 'react'
import styles from './education.module.css'

const Experience = () => {
  return (
    <>
       <div className={styles.education}>
        <h1 className={styles.eduheading}>Experience</h1>
        <div className={styles.timeline}>
            <div className={`${styles.container} ${styles.leftcontainer}`}>
                <div className={styles.cont}>
                  {/* <span className={styles.dot}></span> */}
                  </div>
                <div className={styles.textbox}>
                <h2>A Hamson Inc.</h2>
                    <small>Front-End Developer | Internship</small>
                    <p>June 2023 - Nov 2023</p>
                </div>
            </div>
            <div className={`${styles.container} ${styles.rightcontainer}`}>
            <div className={styles.cont}>
              {/* <span className={styles.dot}></span> */}
              </div>
                <div className={`${styles.textbox} ${styles.textbox1}`}>
                <h2>Robotics World</h2>
                    <small>React Developer | Internship</small>
                    <p>May 2023 - Aug 2023</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Experience
