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
                <h1 data-aos="fade-up" className="yellow hello-kooky ms-5">Lets connect</h1>
            </header>
            <section>
             <a href="mailto:contact@johnathanmann.com?subject=Hi Johnny!"><h2 data-aos="fade-up" className="duper-bold black m-5 display-5">contact@johnathanmann.com</h2></a>
                <div data-aos="fade-up" className="col d-flex ms-5 my-5 duper-bold">
                    <h2 className="me-5"><FontAwesomeIcon icon={faLinkedin} color="#F9CD54" /><span><a rel="noreferrer" href="https://www.linkedin.com/in/johnathan-mann-03548b240/" target="blank" className="ms-2">LinkedIn</a></span></h2>
                    <h2><FontAwesomeIcon icon={faGithubSquare} color="#F9CD54" /><span><a rel="noreferrer" href="https://github.com/johnathanmann" target="blank" className="ms-2">GitHub</a></span></h2>
                </div>
            </section>
        </main>
    )
}