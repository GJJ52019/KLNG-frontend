import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'


function ShowPerson(props){
    const params = useParams()
    const id = params.id

    const id2 = params.id
    const idP = id2.portfolio_id
    // const id = props.match.id
    const people = props.home
    const person = people.find(p => p.id == id)

    // const person = props.home
    // const pos = id-1
    // const pos2 = person[id-1]
    const pos2 = people[id-1]
    const projects = pos2.project
    console.log(props.home)
    // const proj = props.project[pos2]
    // console.log(props.project)

    const listprojects = () => {
        
        return projects.map((element) => (
            <div>
                <Link to={`${element}`}><h1>{element}</h1></Link>
                <Link to={`${element}`}><img src={element.image_url} alt={element.project_name} /> </Link>
            </div>
        ))
    };

    // const listProj = () => {props.project.map((projs) => (
    //     <div id="proj2" key2={idP}>
    //         <h1>{projs.project_name}</h1>
    //         <Link to='/:id/project'><img src={projs.image_url} alt={projs.project_name} /></Link>
    //         <br />
    //     </div>
    // ))}

    const loaded = () => {
        return (
            <div key={id}>
                <Nav />
                <h1>{person.name}</h1>
                <h1>{person.about}</h1>
                <br />
                <h1>{listprojects()}</h1>
                
                
            </div>
            
//         <div key={id}>
//             {/* <h4>{ele.image_url}</h4>
//             <Link to='/:id/about'> <h1>{ele.name}</h1></Link> */}
//             {/* <h4>{person.about}</h4> */}
//             {/* <h5>{ele.github_link}</h5>
//             <h5>{ele.linkedin_link}</h5>
//             <img src={ele.image_url}/>
//             <h5>{ele.project_url}</h5>
//             <h5>{ele.project}</h5> */}
//             <br />
// {/*     
//         // <div className="PersonDiv">
//         //     <Nav />
//         //     <h1>SHOW PERSON PAGE</h1>
//         //     <div className="photoDiv">
//         //         <h3>avatar image goes here</h3>
//         //         <h1>Name goes here</h1>
//         //     </div>

//         //     <div className="aboutDiv">
//         //         <h4>about description here</h4>
//         //     </div> */}

//             <div className="projectDiv">
//                 {/* <Link to='/:id/project'><h5>project images go here</h5></Link> */}
//                 {/* <Link to={`/${id}/show`}><h2>H</h2></Link> */}
//                 {/* <h2>{person.name}</h2> */}
//             </div>
//         </div>
//         // </div>
    )}

    const loading = () => {
        return <h1>Loading...</h1>
    }

    {listprojects ? loaded() : loading()}
}

export default ShowPerson;