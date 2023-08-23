import { useState } from "react";
import smiley from "../assets/imgs/black-smiley.png";
import wink from "../assets/imgs/wink-smiley.png";

export default function Footer(){
  const image1 = smiley;
  const image2 = wink;

  const [image, setImage] = useState(image1);
    return(
        <footer className="text-center m-5">
            <a href="#" className="duper-bold black">Scroll to Top</a><br /><img className="mt-3" id="footer-smiley" src={image} alt="Black smiley face icon"  onMouseEnter={() => setImage(image2)} onMouseOut={() => setImage(image1)}/>
        </footer>
    )
}