import React from 'react'
import { useEffect, useState } from 'react' 
import { Switch, Route, Link } from 'react-router-dom'

import Splash from '../pages/Splash'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ShowPerson from '../pages/ShowPerson'
import ShowProject from '../pages/ShowProject'
import Profile from '../pages/Profile'

function Main(props){
    const [home, setHome] = useState(null);
    const [project, setProject] = useState(null);

    // const URL = 'https://localhost:8000/';
    const URL = 'http://klng.herokuapp.com/';
    const URLprojlist = 'http://klng.herokuapp.com/project/';

    const getHome = async() => {
        const response = await fetch (`${URL}`);
        const data = await response.json();
        setHome(data);
    }

    const getProject = async() => {
        const response = await fetch (`${URL}project/`);
        const data = await response.json();
        setProject(data);
    }


    // const createHome = async (post) =>{
    //     await fetch (`${URL}`)
    // }
 
    useEffect(() => getHome(), []);
    useEffect(() => getProject(), []);

    // console.log(home)
    // console.log(project)
    // console.log(URLprojlist)

    return (
        <div className='Main'>
            <Switch>
                {/* <Route path='/' render={()=> {<Splash />}} /> */}
                

                <Route exact path='/'>
                    <Splash />
                </Route>

                <Route path='/home'>
                    <Home home={home} />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/register' >
                    <Register />
                </Route>
                <Route path='/:id/about' render={(rp) => (
                    <ShowPerson 
                    home={home} 
                    project={project}
                    URLprojlist={URLprojlist}
                    {...rp}/>
                )}/>

                <Route path='/:id/project' render={(rp) => (
                    <ShowProject home={home} {...rp}
                    />
                    )}
                />
                    
                <Route path='/me' >

                    <Profile/>
                </Route>
            </Switch>
        </div>
    )
}

export default Main;