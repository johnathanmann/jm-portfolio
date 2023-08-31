import "../styles/about.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faFile } from '@fortawesome/free-solid-svg-icons';
import certificate from "../assets/imgs/Mann.pdf";
import resume from "../assets/imgs/Resume-NoContact.pdf";
export default function About(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <main id="about" className="container-fluid">
            <div id="about-cover" className="slide-over"></div>
            <header>
                <h1 data-aos="fade-up" className="blue header m-3 ms-5">Get to know Me!</h1>
            </header>
            <section>
                <div data-aos="fade-up" className="col d-flex ms-5 duper-bold big-text">
                    <h1 className="me-5"><FontAwesomeIcon icon={faGraduationCap} color="#3F8FB7" /><span><a rel="noreferrer" href={certificate} target="blank" className="ms-2">Certificate</a></span></h1>
                    <h1><FontAwesomeIcon icon={faFile} color="#3F8FB7" /><span><a rel="noreferrer" href={resume} target="blank" className="ms-2">Resume</a></span></h1>
                </div>
                <p data-aos="fade-up" className="duper-regular m-5 big-text">My name is Johnathan Mann, but you can call me Johnny. I am an aspiring full-stack web developer and designer. Though I specialize in the MERN stack I’m open to learning anything and everything I can get my hands on. After taking some time for portfolio building after completing my full-stack coding bootcamp I am looking to start my professional career.</p>
            </section>
            <section className="row m-5" id="skills">
                <section className="col-lg-4 col-sm-12">
                <h1 data-aos="fade-up" className="hello-kooky sub-header blue">Soft Skills</h1>
                    <ul data-aos="fade-up" className="duper-bold p-tag">
                        <li>Teamwork</li>
                        <li>Empathy</li>
                        <li>Interpersonal Skills</li>
                        <li>Customer Service</li>
                        <li>Communication</li>
                    </ul>
                </section>
                <section className="col-lg-4 col-sm-12">
                    <h1 data-aos="fade-up" className="hello-kooky sub-header blue">Hard Skills</h1>
                    <ul data-aos="fade-up" className="duper-bold p-tag">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>MongoDB</li>
                        <li>Node.js</li>
                        <li>Bootstrap</li>
                        <li>Adobe Photoshop</li>
                        <li>Figma</li>
                    </ul>
                </section>
                <section className="col-lg-4 col-sm-12">
                <h1 data-aos="fade-up" className="hello-kooky sub-header blue">Personal Life</h1>
                    <ul data-aos="fade-up" className="duper-bold p-tag">
                        <li>Rock Climbing</li>
                        <li>Gaming</li>
                        <li>Drinking Coffee</li>
                        <li>Reading Comics</li>
                    </ul>
                </section>
            </section>
        </main>
    )
}