import Nav from "../components/Nav";
import { useParams } from 'react-router'

function ShowProject(props){
    // need to import useParams to use params (params.id) now
    const params = useParams();
    const id = props.match.params.id;
    const projects = props.projects
    const project = projects.find(p => p.id === id)

    return (
        <div className="ProjDiv">
            <Nav />
            <h1>SHOW PROJECT PAGE</h1>
            <div className="titleDiv">
                <h3>avatar image here</h3>
                {/* <h1> {project.project_name} </h1> */}
            </div>

            <div className="projDescripDiv">
                {/* <h4>p{project.desc}</h4> */}
            </div>

            <div className="screenShotDiv">
                {/* <img src={project.image_url} alt={project.project_name} /> */}
            </div>


        </div>
    )
}

export default ShowProject;