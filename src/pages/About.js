import "../styles/about.css";

export default function About(){
    return(
        <main id="about" className="container-fluid">
            <div id="about-cover" className="slide-over"></div>
            <header>
                <h1 className="blue hello-kooky m-5">Get to know Me!</h1>
            </header>
            <section>
                <p className="duper-regular m-5 display-5">My name is Johnathan Mann, but you can just call me Johnny. I am an aspiring full-stack web developer and designer. Though I specialize in the MERN stack I’m open to learning anything and everything I can get my hands on. After taking some time for portfolio building after completing my full-stack coding bootcamp I am looking to get my professional career started. </p>
            </section>
            <section className="row m-5" id="skills">
                <section className="col-lg-4 col-sm-12">
                <h1 className="hello-kooky blue">Soft Skills</h1>
                    <ul className="duper-bold">
                        <li>Teamwork</li>
                        <li>Empathy</li>
                        <li>Interpersonal Skills</li>
                        <li>Customer Service</li>
                        <li>Communication</li>
                    </ul>
                </section>
                <section className="col-lg-4 col-sm-12">
                    <h1 className="hello-kooky blue">Hard Skills</h1>
                    <ul className="duper-bold">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>MongoDB</li>
                        <li>Bootstrap</li>
                        <li>Adobe Photoshop</li>
                        <li>Figma</li>
                    </ul>
                </section>
                <section className="col-lg-4 col-sm-12">
                <h1 className="hello-kooky blue">Personal Life</h1>
                    <ul className="duper-bold">
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