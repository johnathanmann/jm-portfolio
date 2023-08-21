import smiley from "../assets/imgs/black-smiley.png";

export default function Footer(){
    return(
        <footer className="text-center m-5">
            <a href="#" className="duper-bold black">Scroll to Top</a><br /><img className="mt-3" id="footer-smiley" src={smiley} alt="Black smiley face icon" />
        </footer>
    )
}