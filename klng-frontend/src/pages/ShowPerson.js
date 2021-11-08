import Nav from "../components/Nav";
import { Link } from "react-router-dom";



function ShowPerson(props){
    return (
        <div className="PersonDiv">
            <Nav />
            <h1>SHOW PERSON PAGE</h1>
            <div className="photoDiv">
                <h3>avatar image goes here</h3>
                <h1>Name goes here</h1>
            </div>

            <div className="aboutDiv">
                <h4>about description here</h4>
            </div>

            <div className="projectDiv">
                <Link to='/:id/project'><h5>project images go here</h5></Link>
            </div>
        </div>
    )
}

export default ShowPerson;