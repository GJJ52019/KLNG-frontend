import { Link } from 'react-router-dom'
import Logofourcolor from '../images/logo/KLNG_logo_dualcolorflat.png'

function Header(props) {
    return(
        <div className='HeaderDiv'>
            <div className='searchDiv'>
                {/* temporary search input */}
                <form action="">
                    <input className="searchfield" type="search bar" placeholder="Enter Keyword"/>
                    <input type="submit" value="Search"/>
                </form>
            </div>

            <div className='logoDiv'>
                <Link to='/home'><img src={Logofourcolor}/></Link>
            </div>

            <div className="accountDiv">
                <Link className="accountlink" to='/me' hidden>User</Link>
                <br />
                <Link className="accountlink" to='/login'>Login</Link>
            </div>
        </div>
    )

}

export default Header;