"use client"
import React, { useState } from 'react';
import Image from "next/image"
import { FaCloudDownloadAlt } from "react-icons/fa";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { FaComputer } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { GiSheikahEye } from "react-icons/gi";
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';

const page = () => {
    const handleDownload = () => {
        // Replace 'your_resume.pdf' with the actual path to your resume file
        const resumePath = '/images/resume.pdf';
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = 'resume.pdf';
        link.click();
    };
    return (
        <>
            {/* <div className="aboutMe">hello I am about page</div> */}
            <div className="aboutMe">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                        <div className="AboutImage">
                            <Image className="img" src="/images/About.svg" alt="" width={330} height={340} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="allcont">
                            <div className="aboutContent">
                                <h1>ABOUT ME</h1>
                                <div className="paragraph">Hello! 👋 I am Simran, a driven front-end developer with a year of hands-on experience in crafting immersive and responsive web experiences.
                                I am very passionate about improving my coding skills & developing applications & websites.
                                    Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, Bootstrap, Reactjs, Nextjs.</div>
                            </div>
                            <div className="resumebtn">
                                <button type="button" className="btn" onClick={handleDownload}>
                                    <FaCloudDownloadAlt className="mx-2" size={24} />Resume</button>
                            </div>
                            <div className="Contact">
                                <Link className="nav-link me-4" aria-current="page" href="#" target="_blank"><IoMdMail /></Link>
                                <Link className="nav-link mx-4" href="https://www.linkedin.com/in/simran-kumari-720278254/" target="_blank"><FaLinkedin /></Link>
                                <Link className="nav-link mx-4" href="https://github.com/simikhatri" target="_blank"><FaGithub /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='interest'>
                    <h1>MY INTERESTS</h1>
                    <div className="row">
                        <div className="col-lg-1 col-md-1"></div>
                        <div className="col-lg-2 col-md-2 col-sm-4 dinterest">
                            <div className="allInterest text-center">
                                <div className="drew">
                                    <GrEdit />
                                </div>
                                <div className="text">
                                    Drawing
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-4 dinterest">
                            <div className="text-center">
                                <div className="drew">
                                    <FaComputer />
                                </div>
                                <div className="text">
                                    Programming
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-4 dinterest">
                            <div className="text-center">
                                <div className="drew">
                                    <GiSheikahEye />
                                </div>
                                <div className="text">
                                    Designing
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-4 dinterest mt-md-0 mt-sm-4">
                            <div className="text-center">
                                <div className="drew">
                                    <FaPaintBrush />
                                </div>
                                <div className="text">
                                    Art
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-4 dinterest mt-md-0 mt-sm-4">
                            <div className="text-center">
                                <div className="drew">
                                    <FaMusic />
                                </div>
                                <div className="text">
                                    Music
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1"></div>
                    </div>
                </div>
                <Education/>
                <Experience/>
                <Skills/>
            </div>
        </>
    )
}

export default page
