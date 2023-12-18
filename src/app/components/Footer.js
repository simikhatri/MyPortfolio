import React from 'react'
import Link from 'next/link';
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <ul className="footerlinks">
                    <li className="foot-item">
                        <Link className="foot-link" aria-current="page" href="#" target="_blank"><IoMdMail /></Link>
                    </li>
                    <li className="foot-item">
                        <Link className="foot-link" href="https://www.linkedin.com/in/simran-kumari-720278254/" target="_blank"><FaLinkedin /></Link>
                    </li>
                    <li className="foot-item">
                        <Link className="foot-link" href="https://github.com/simikhatri" target="_blank"><FaGithub /></Link>
                    </li>
                </ul>
                <hr />
                <div className="copyrights">
                @ 2023 - Developed By Simran
                </div>
            </div>
        </>
    )
}

export default Footer
