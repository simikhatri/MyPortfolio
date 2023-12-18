import React from 'react'
import styles from './education.module.css'
import Image from 'next/image'
import { FaGraduationCap } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";

const Education = () => {
  return (
    <>
      <div className={styles.education}>
        <h1 className={styles.eduheading}>EDUCATION</h1>
        <div className={styles.timeline}>
            <div className={`${styles.container} ${styles.leftcontainer}`}>
                <FaGraduationCap className={styles.img}/>
                <div className={styles.textbox}>
                    <h2>BACHALOR DEGREE</h2>
                    <small>2019-2022</small>
                    <p>I have completed my Bachelor degree in Computer Science from University Of Sindh Campus Mirpurkhas with 3.9CGPA</p>
                </div>
            </div>
            <div className={`${styles.container} ${styles.rightcontainer}`}>
            <FaMeta className={styles.img}/>
                <div className={`${styles.textbox} ${styles.textbox1}`}>
                    <h2>Version Control Course</h2>
                    <small>Feb-2023</small>
                    <p>I have completed my Version Control Course from Coursera in February 2023</p>
                </div>
            </div>
            <div className={`${styles.container} ${styles.leftcontainer}`}>
            <FaMeta className={styles.img}/>
                <div className={styles.textbox}>
                    <h2>Principles Of UX/UI Design Course</h2>
                    <small>Feb-2023</small>
                    <p>I have completed my Meta Principles Of UX/UI Design Course from Coursera in February 2023</p>
                </div>
            </div>
            <div className={`${styles.container} ${styles.rightcontainer}`}>
            <FaMeta className={styles.img}/>
            <div className={`${styles.textbox} ${styles.textbox1}`}>
                    <h2>Meta Front-End Developer Course</h2>
                    <small>Mar-2023</small>
                    <p>I have completed my Meta Front-End Developer Specializaion Course from Coursera in March 2023</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Education
