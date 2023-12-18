import Image from "next/image"
import Link from "next/link"
import { IoMdOpen } from "react-icons/io";

const page = () => {
    return (
        <>
            <div className="project">
                <h1 className="prohead">MY PROJECTS</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div  className="card">
                                <Image src="/images/pic1.jpg"  className="card-img-top" alt="..." width={100} height={200}/>
                                    <div  className="card-body text-center">
                                        <h5  className="card-title">ApniHealth</h5>
                                        <p  className="card-text">This is my final year project, which has been built on ReactJS and Bootstrap</p>
                                        <Link href="https://simikhatri.github.io/Apni-Health/index.html" className="btn">Show  <IoMdOpen className="icon"/></Link>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div  className="card">
                                <Image src="/images/pic1.jpg"  className="card-img-top" alt="..." width={100} height={200}/>
                                    <div  className="card-body text-center">
                                        <h5  className="card-title">Social Network</h5>
                                        <p  className="card-text">I have created social network website using ReactJS and Material UI to enhance my skills</p>
                                        <Link href="https://simikhatri.github.io/SocialNetwork/" className="btn">Show  <IoMdOpen className="icon"/></Link>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div  className="card">
                                <Image src="/images/pic1.jpg"  className="card-img-top" alt="..." width={100} height={200}/>
                                    <div  className="card-body text-center">
                                        <h5  className="card-title">Pizza Shop</h5>
                                        <p  className="card-text">I have created pizza online shop website using HTML, CSS, JavaScript, and Bootstrap</p>
                                        <Link href="https://simikhatri.github.io/Pizza-Template/" className="btn">Show  <IoMdOpen className="icon"/></Link>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div  className="card">
                                <Image src="/images/pic1.jpg"  className="card-img-top" alt="..." width={100} height={200}/>
                                    <div  className="card-body text-center">
                                        <h5  className="card-title">Restaurant</h5>
                                        <p  className="card-text">I have created Restaurant website using ReactJS and Bootstrap to enhance my skills</p>
                                        <Link href="https://simikhatri.github.io/Restaurant/" className="btn">Show  <IoMdOpen className="icon"/></Link>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div  className="card">
                                <Image src="/images/pic1.jpg"  className="card-img-top" alt="..." width={100} height={200}/>
                                    <div  className="card-body text-center">
                                        <h5  className="card-title">HRIS-Portal</h5>
                                        <p  className="card-text">I created the HRIS Portal project for A Hamson Inc. employees using Next.js and Bootstrap</p>
                                        <Link href="https://hris-portal-eight.vercel.app/" className="btn">Show  <IoMdOpen className="icon"/></Link>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div  className="card">
                                <Image src="/images/pic1.jpg"  className="card-img-top" alt="..." width={100} height={200}/>
                                    <div  className="card-body text-center">
                                        <h5  className="card-title">HRMS</h5>
                                        <p  className="card-text">I created the HRMS project for A Hamson Inc. employees using Reactjs React Bootstrap</p>
                                        <Link href="https://hris-portal-eight.vercel.app/" className="btn">Show  <IoMdOpen className="icon"/></Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
