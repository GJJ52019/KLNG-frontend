import { useEffect, useState } from 'react' 
import { Routes, Route, Link } from 'react-router-dom'
import Splash from '../pages/Splash'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ShowPerson from '../pages/ShowPerson'
import ShowProject from '../pages/ShowProject'
import Profile from '../pages/Profile'

function Main(props){
    const [home, setHome] = useState(null);

    // const URL = 'https://localhost:8000/';
    const URL = 'http://klng.herokuapp.com/';

    const getHome = async() => {
        const response = await fetch (`${URL}`);
        const data = await response.json();
        setHome(data);
    }
    const [project, setProject] = useState(null);
    const getProject = async() => {
        const response = await fetch (`${URL}project`);
        const data = await response.json();
        setProject(data);
    }


    const createProj = async (post) =>{
       await fetch (`${URL}project/`, {
            method: "POST",
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify(post),
       });
       getProject();
    }

    const updateProj = async (proj, id) =>{
        await fetch (`${URL}project/<int:pk>`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify(proj),
        })
        getProject();
    }

    const deleteProj = async id => {
        await fetch(`${URL}/${id}`, {
            method: 'DELETE',
        })
        getProject();
    }
 
    useEffect(() => getHome(), []);
    useEffect(() => getProject(), []);


    // console.log(home)
    return (
        <div className='Main'>
            <Routes>
                {/* <Route path='/' render={()=> {<Splash />}} /> */}
                <Route path='/' element={<Splash />} />
                <Route path='/home' element={<Home home={home} /> } />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/:id/about' element={<ShowPerson home={home} project={project} />} />
                <Route path='/:id/project' element={<ShowProject />} />
                <Route path='/me' element={<Profile home={home} createProj={createProj} updateProj={updateProj} deleteProj={deleteProj} URL={URL}/>} />
            </Routes>
        </div>
    )
}

export default Main;