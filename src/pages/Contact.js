import "../styles/contact.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function About(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <main id="contact" className="container-fluid">
            <div id="contact-cover" className="slide-over"></div>
            <header>
                <h1 data-aos="fade-up" className="yellow header">Lets connect</h1>
            </header>
            <section>
             <a data-aos="fade-up" href="mailto:contact@johnathanmann.com?subject=Hi Johnny!" className="duper-bold black sub-header">contact@johnathanmann.com</a>
                <div data-aos="fade-up" className="col d-flex my-5 duper-bold ">
                    <p className="me-3 sub-header"><FontAwesomeIcon icon={faLinkedin} color="#F9CD54" /><span><a rel="noreferrer" href="https://www.linkedin.com/in/johnathan-mann-03548b240/" target="blank" className="ms-2"> LinkedIn</a></span></p>
                    <p className="sub-header"><FontAwesomeIcon icon={faGithubSquare} color="#F9CD54" /><span><a rel="noreferrer" href="https://github.com/johnathanmann" target="blank"> GitHub</a></span></p>
                </div>
            </section>
        </main>
    )
}