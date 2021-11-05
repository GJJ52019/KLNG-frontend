import { Link } from 'react-router-dom'

function Header(props) {
    return(
        <div className='HeaderDiv'>
            <div className='searchDiv'>
                {/* search bar goes here */}
            </div>

            <div className='logoDiv'>
                <Link to='/'>KLNG</Link>
            </div>

            <div className="accountDiv">
                <Link to='/me'>User</Link>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    )

}

export default Header;