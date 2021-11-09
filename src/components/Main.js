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

    // const URL = 'https://localhost:8000/';
    const URL = 'http://klng.herokuapp.com/';

    const getHome = async() => {
        const response = await fetch (`${URL}`);
        const data = await response.json();
        setHome(data);
    }


    // const createHome = async (post) =>{
    //     await fetch (`${URL}`)
    // }
 
    useEffect(() => getHome(), []);

    console.log(home)
    return (
        <div className='Main'>
            <Switch>
                {/* <Route path='/' render={()=> {<Splash />}} /> */}
                
                <Route path='/home'>
                    <Home home={home} />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/register' >
                    <Register />
                </Route>
                <Route path='/:id/about' >
                    <ShowPerson/>
                </Route>
                <Route path='/:id/project' >
                    <ShowPerson/>
                </Route>
                <Route path='/me' >
                    <Profile/>
                </Route>
            </Switch>
        </div>
    )
}

export default Main;