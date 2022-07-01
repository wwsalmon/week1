import projects from "../data/projects";

export async function getServerSideProps(context: any) {
    const projectName = context.params.projectName;
    const project = projects.find(d => d.projectName === projectName);

    if (!project) return {notFound: true};

    return {
        props: {
            title: project.title,
            description: project.description,
            image: project.image,
            alt: project.alt,
            link: project.link,
            longDescription: project.longDescription,
        }
    }
}

export default function ProjectPage(props: {
    title: string,
    description: string,
    image: string,
    alt: string,
    link: string,
    longDescription: string,
}) {
    return (
        <>
            <div id="container">
                <div id="project-page-top">
                    <a href="/">Back home</a>
                    <h1>{props.title}</h1>
                    <p>{props.description} <a href={props.link}>See live</a></p>
                    <img src={props.image} alt={props.alt} />
                </div>
                <p>{props.longDescription}</p>
            </div>
        </>
    )
}