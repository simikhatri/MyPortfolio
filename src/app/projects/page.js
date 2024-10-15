import Image from "next/image"
import Link from "next/link"
import { IoMdOpen } from "react-icons/io";
import pic1 from "../assets/images/pic1.png"
import pic2 from "../assets/images/pic2.png"
import pic3 from "../assets/images/pic3.png"
import pic4 from "../assets/images/pic4.png"
import pic5 from "../assets/images/pic5.png"
import pic6 from "../assets/images/pic6.png"
import pic7 from "../assets/images/pic7.png"
import pic8 from "../assets/images/pic8.png"
import pic9 from "../assets/images/pic9.png"

const projects = [
    {
        image: pic9,
        title: "Dolce Frutti",
        description: "I am currently working on the Dolce Frutti website, and I have designed and developed the entire UI.",
        link: "https://www.dolcefrutti.com/"
    },
    {
        image: pic7,
        title: "e-Commerce",
        description: "I have created e-commerce website using NextJS, Redux Toolkit and Tailwind CSS to enhance my skills",
        link: "https://on-shop.netlify.app/"
    },
    {
        image: pic8,
        title: "Organic Fruits",
        description: "I have created Organic-Fruits website using ReactJS, Framer Motion to enhance my skills",
        link: "https://organo-fruits.netlify.app/"
    },
    {
        image: pic1,
        title: "ApniHealth",
        description: "This is my final year project, which has been built on ReactJS and Bootstrap",
        link: "https://simikhatri.github.io/Apni-Health/index.html"
    },
    {
        image: pic2,
        title: "Social Network",
        description: "I have created social network website using ReactJS and Material UI to enhance my skills",
        link: "https://simikhatri.github.io/SocialNetwork/"
    },
    {
        image: pic3,
        title: "Pizza Shop",
        description: "I have created pizza online shop website using HTML, CSS, JavaScript, and Bootstrap",
        link: "https://simikhatri.github.io/Pizza-Template/"
    },
    {
        image: pic4,
        title: "Restaurant",
        description: "I have created Restaurant website using ReactJS and Bootstrap to enhance my skills",
        link: "https://simikhatri.github.io/Restaurant/"
    },
    {
        image: pic5,
        title: "HRIS-Portal",
        description: "I created the HRIS Portal project for A Hamson Inc. employees using Next.js and Bootstrap",
        link: "https://hris-portal-eight.vercel.app/"
    },
    {
        image: pic6,
        title: "HRMS",
        description: "I created the HRMS project for A Hamson Inc. employees using Reactjs React Bootstrap",
        link: "https://simikhatri.github.io/HRM-System/"
    }
];


const page = () => {
    return (
        <>
            <div className="project">
                <h1 className="prohead">MY PROJECTS</h1>
                <div className="container">
                    <div className="row">
                        {projects.map((project, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                <div className="card">
                                    <Image
                                        src={project.image}
                                        className="card-img-top"
                                        alt={project.title}
                                        width={600}
                                        height={300}
                                    />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{project.title}</h5>
                                        <p className="card-text">{project.description}</p>
                                        <Link href={project.link} className="btn">
                                            Show <IoMdOpen className="icon" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
