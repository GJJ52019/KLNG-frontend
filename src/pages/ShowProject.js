import Nav from "../components/Nav";
import { useParams } from "react-router-dom";

function ShowProject(props) {
    const params = useParams()
    const id = params.id

    const projects = props.project
    const project = projects.find(pj => pj.id == id)

    console.log('projects', projects)

    const proj = () => {
        return project.map((pjs) => (
            <div>
                <h1>{pjs}</h1>
            </div>
        ))
    }
    const loaded = () => {
        return (
            <div className="ProjDiv">
            <Nav />
            <h1>SHOW PROJECT PAGE</h1>
            <div className="titleDiv">
                <h3>avatar image here</h3>
                <h1>{project.name}</h1>
            </div>

            <div className="projDescripDiv">
                <h4>{project.desc}</h4>
            </div>

            <div className="screenShotDiv">
                <h4>{project.image_url}</h4>
            </div>
            </div>
        )};

    const loading = () => {
        return <h1>loading...</h1>
    }

    {projects ? loaded() : loading()}
}

export default ShowProject;
