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

    const URL = 'https://localhost:3000/';

    const getHome = async() => {
        const response = await fetch (`${URL}`);
        const data = await response.json();
        setHome(data);
    }

    // const createHome = async (post) =>{
    //     await fetch (`${URL}`)
    // }

    // ^^^how do we create something if we dont have a create route backend?? 

    return (
        <div className='Main'>
            <Routes>
                {/* <Route path='/' render={()=> {<Splash />}} /> */}
                <Route path='/' element={<Splash />} />
                <Route path='/home' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/:id/about' element={<ShowPerson />} />
                <Route path='/:id/project' element={<ShowProject />} />
                <Route path='/me' element={<Profile />} />
            </Routes>
        </div>
    )
}

export default Main;