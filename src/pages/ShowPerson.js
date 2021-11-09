import Nav from "../components/Nav";
import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom'


function ShowPerson(props){

    const id = props.match.params.id;
    const person = props.home;
    const personinfo = person.find(p => p._id === id);

    const name = person[id-1].name;
    const about = person[id-1].about;
    const projects = person[id-1].project;


    console.log(id-1);
    console.log(person[id-1].name);

    return (
        <div>
            <h1>{name}</h1>
            
            {% for i in projects; 
                
                <ul>
                <li><h1>{{projects}}</h1></li>
                </ul>
                
                
                %};


            

       
            
            {/* <h1>{props.filter(id => props.id.map(filteredProp =>(
                <li>
                    {filteredProp}
                </li>
            ))}</h1> */}
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
    )
}

export default ShowPerson;