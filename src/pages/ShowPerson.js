import Nav from "../components/Nav";
import { useEffect, useState } from 'react' 
import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom'


function ShowPerson(props){

    const URLprojlist = props.URLprojlist;

    const [projID, setProjID] = useState(null);

    const getProjID = async() => {
        const response = await fetch (`${URLprojlist}`);
        const data = await response.json();
        setProjID(data);
    }

    useEffect(() => getProjID(), []);

    const id = props.match.params.id;
    const person = props.home;
    const personinfo = person.find(element => element.id == id);

// ------------ targeted project --------------------//

    const URLprojlist2 = (`${props.URLprojlist}${id}`);

    const [projID2, setProjID2] = useState(null);

    const getProjID2 = async() => {
        const response2 = await fetch (`${URLprojlist}`);
        const data2 = await response2.json();
        setProjID2(data2);
    }

    useEffect(() => getProjID2(), []);

    const projArrayId = props.match.params.id;
    const projArray = props.project;
  
    const projInfo = projArray.find(element => element.id == element.portfolio_id);

    console.log(projID)


    // const id2 = props.match.params.id;
    // const proj = props.project;
    // const projinfo = proj.find(p => p._id === id2);



    const personid = personinfo.id
    const name = personinfo.name;
    const about = personinfo.about;
    const image = personinfo.image_url;
    const projects = personinfo.project;
    const projectlist = personinfo.project;

   

    const listprojects = () => {
        
        return projects.map((element) => (
            <div>
                <Link to={`${element}`}><h1>{element}</h1></Link>
                <img src="" alt="" />
            </div>
        ))
    };



    return (
        <div>
            <h1>{name}</h1>
            <h1>{about}</h1>
            <h1>{listprojects()}</h1>
        </div>
    )
}

export default ShowPerson;