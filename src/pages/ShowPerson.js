import Nav from "../components/Nav";
import { useEffect, useState } from 'react' 
import { Link } from "react-router-dom";
import userEvent from "@testing-library/user-event";


function ShowPerson(props){

//#region ---------- First Fetch Start ------------------//
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
//#endregion ---------- First Fetch End ------------------//

//#region ---- Function to get project slug Start --------//
    let result = ''

    const getProjURLSLUG = () => {
        let youRLArr = personinfo.project

        youRLArr.forEach(element => {
            let str = element
            // console.log(str.length)
            str = str.split('');
            for(let i = 34 ; i < str.length ; i++) {
                // console.log(str[i])
                result = str[i]
            }
            return result
        }) 
    };

    getProjURLSLUG();

//#endregion ---- Function to get project slug End --------//

//#region ---------- Second Fetch Start ------------------//

    const URLprojlist2 = (`${props.URLprojlist}${result}`);

    const [projID2, setProjID2] = useState(null);

    const getProjID2 = async() => {
        const response2 = await fetch (`${URLprojlist2}`);
        const data2 = await response2.json();
        setProjID2(data2);
    }

    useEffect(() => getProjID2(), []);

    // const id2 = props.match.params.id;
    // const proj = props.home;
    // const projInfo = proj.find(element => element.id == id2);

    // const id2 = props.match.params.id;
    // const proj = props.project;
    // const projinfo = proj.find(p => p._id === id2);

//#endregion --------- Second Fetch End ------------------//

    const personid = personinfo.id
    const name = personinfo.name;
    const about = personinfo.about;
    const image = personinfo.image_url;
    const projects = personinfo.project;
    const projectlist = personinfo.project;


     
    // console.log(projID2.image_url);

    const listprojects = () => {
        
        return projects.map((element) => (
            <div>
                <Link to={`${element}`}><h1>{element}</h1></Link>
                <img src="" alt="" />
            </div>
        ))
};


// <img src={projID2.image_url} alt="" />

    return (
        <div>
            <h1>{name}</h1>
            <h1>{about}</h1>
            <h1>{listprojects()}</h1>
            <h1>{result}</h1>
            
        </div>
    )
}

export default ShowPerson;

