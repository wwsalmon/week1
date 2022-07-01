import Head from "next/head";

export default function Index() {
    return (
        <>
            <Head>
                <title>Samson's website</title>
                <meta name="description" content="Welcome to my portfolio"/>
            </Head>
            <div id="navbar">
                <span>Samson Zhang</span>
            </div>
            <div id="container">
                <div id="top-section">
                    <img src="/prof.jpg" alt="Picture of Samson" id="prof-pic"/>
                    <h1>Hi, nice to meet you!<br/>I'm Samson.</h1>
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
                <a href="https://covid.tsl.news/" className="project-wrapper">
                    <div className="project-box">
                        <img src="/covid.png" alt="Screenshot of COVID tracker" />
                        <h2>TSL COVID Tracker</h2>
                        <p>Website that aggregates COVID data across the 5C schools and displays them in one central dashboard</p>
                        <div className="badge"><span>Webapp</span></div>
                    </div>
                </a>
                <a href="https://postulate.us/" className="project-wrapper">
                    <div className="project-box">
                        <img src="/postulate.jpg" alt="Screenshot of Postulate" />
                        <h2>Postulate</h2>
                        <p>GitHub for knowledge: a notetaking app for sharing your thoughts, learning, and work with the world.</p>
                    </div>
                </a>
            </div>
        </>
    );
}
