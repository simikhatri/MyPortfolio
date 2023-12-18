"use client"
import React from 'react'
import Link from 'next/link';
import { TiThMenu } from "react-icons/ti";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useState } from 'react';

const Navbar = () => {
    // State to track the navbar collapse status
    const [isNavbarOpen, setNavbarOpen] = useState(false);

    // Function to toggle the navbar collapse status
    const toggleNavbar = () => {
        setNavbarOpen(!isNavbarOpen);
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <ul className="navbar-nav mb-2 sociallinks">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" href="mailto:simrankkhatri1@gmail.com" target="_blank"><IoMdMail /></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="https://www.linkedin.com/in/simran-kumari-720278254/" target="_blank"><FaLinkedin /></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="https://github.com/simikhatri" target="_blank"><FaGithub /></Link>
                        </li>
                    </ul>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded={isNavbarOpen ? "true" : "false"}
                        aria-label="Toggle navigation"
                        onClick={toggleNavbar}
                    >
                        <TiThMenu color='rgb(103, 252, 242)' />
                    </button>
                    <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mainLink">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
