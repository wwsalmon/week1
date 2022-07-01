import Project from "../components/Project";
import projects from "../data/projects";
import ReactTypingEffect from "react-typing-effect";

export default function Index() {
    return (
        <>
            <div id="navbar">
                <span>Samson Zhang</span>
            </div>
            <div id="container">
                <div id="top-section">
                    <img src="/prof.jpg" alt="Picture of Samson" id="prof-pic"/>
                    <h1>Hi, nice to meet you!<br/>I'm <ReactTypingEffect text={["Samson"]}/>.</h1>
                    
                </div>
                <p>
                    I’m a Media Studies and Physics major at Pomona College interested in <b>Asian American and data journalism.</b>
                </p>
                <p>
                    For the last year, I've <a href="https://theyappie.com/">covered AAPI politics and activism for The Yappie.</a> I’m also the News Associate Editor of my college weekly, The Student Life.
                </p>
                <p>
                    Outside of journalism I'm an <b>experienced software engineer.</b> I maintain <b>my own social media platform</b> and writing app and a startup I founded was selected to interview for Y Combinator.
                </p>
                <hr/>
                <p>Some apps I've built</p>
                {projects.map(d => (
                    <Project
                        title={d.title}
                        description={d.description}
                        link={d.link}
                        image={d.image}
                        alt={d.alt}
                    />
                ))}
            </div>
        </>
    );
}
