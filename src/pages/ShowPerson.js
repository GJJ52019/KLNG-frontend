import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import { useParams } from 'react-router'


function ShowPerson(props){
    console.log(props)
    // const params = useParams()
    // const id = props.match.params.id
    // const people = props.people
    // const person = people.find(p => p.id === id)
    return (
        props.home.map((ele)=>(
        <div key={ele.id}>
            {/* <h4>{ele.image_url}</h4>
            <Link to='/:id/about'> <h1>{ele.name}</h1></Link>
            <h4>{ele.about}</h4>
            <h5>{ele.github_link}</h5>
            <h5>{ele.linkedin_link}</h5>
            <img src={ele.image_url}/>
            <h5>{ele.project_url}</h5>
            <h5>{ele.project}</h5> */}
            <br />
    
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
                {/* <Link to='/:id/project'><h5>project images go here</h5></Link> */}
                <Link to={`/${ele.id}/show`}><h2>{ele.project_name}</h2></Link>
            </div>
        </div>
        </div>
    )))
}

export default ShowPerson;