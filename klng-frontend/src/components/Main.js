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

    return (
        <div className='main'>
            <Routes>
                {/* <Route path='/' render={()=> {<Splash />}} /> */}
                <Route path='/' element={<Home />} />
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