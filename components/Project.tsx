export default function Project(props: {
    title: string,
    description: string,
    link: string,
    image: string,
    alt: string,
}) {
    return (
        <>
            <a href={props.link} className="project-wrapper">
                <div className="project-box">
                    <img src={props.image} alt={props.alt} />
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    <div className="badge"><span>Webapp</span></div>
                </div>
            </a>
        </>
    )
}