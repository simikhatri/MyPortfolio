"use client"
import React from 'react'
import Image from 'next/image'
import { FaCloudDownloadAlt } from "react-icons/fa";
import Skills from './components/Skills';

export default function Home() {
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
      <div className='Hero'>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className='Intro'>
              <h1>Hello!</h1>
              {/* <h2>I am Simran</h2> */}
              <p className='intro'>I’m Simran, a passionate Frontend Developer with a knack for creating intuitive and dynamic user experiences. I specialize in building modern web applications using React.js, Next.js, and Redux, with a focus on clean, maintainable code. Currently working at Dolcefrutti, I’ve honed my skills in building scalable e-commerce solutions, and I’m always excited to learn new technologies.</p>
              <div className="resumebtn mt-4 pt-4">
                <button type="button" className="btn" onClick={handleDownload}>
                  <FaCloudDownloadAlt className="mx-2" size={24} />Resume</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-center">
            <Image className='proImage' src="/images/intro.svg" alt="" width={350} height={350} />
          </div>
        </div>
      </div>
      <Skills />

    </>
  )
}
