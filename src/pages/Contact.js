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
                <h1 data-aos="fade-up" className="yellow hello-kooky">Lets connect</h1>
            </header>
            <section>
                <p className="black duper-regular ">Feel free to shoot me an email or hit me up on LinkedIn. To see more of my works checkout my GitHub!</p>
             <a href="mailto:contact@johnathanmann.com?subject=Hi Johnny!" data-aos="fade-up" className="duper-bold black display-5">contact@johnathanmann.com</a>
                <div data-aos="fade-up" className="col d-flex my-5 duper-bold">
                    <h2 className="me-3"><FontAwesomeIcon icon={faLinkedin} color="#F9CD54" /><span><a rel="noreferrer" href="https://www.linkedin.com/in/johnathan-mann-03548b240/" target="blank" className="ms-2"> LinkedIn</a></span></h2>
                    <h2><FontAwesomeIcon icon={faGithubSquare} color="#F9CD54" /><span><a rel="noreferrer" href="https://github.com/johnathanmann" target="blank"> GitHub</a></span></h2>
                </div>
            </section>
        </main>
    )
}