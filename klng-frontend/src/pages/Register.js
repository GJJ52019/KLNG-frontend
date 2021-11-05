import { Link } from 'react-router-dom'

function Register(props){
    return (
        <div className="registerDiv">
            <div className="regTitleDiv">Register</div>

            <div className="inputDiv">
                <h4>name, email, password inputs here</h4>
                <h4>optional github/linkedin inputs here</h4>
            </div>

            <div className="submitDiv">
                <button className="regbtn">Register</button>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    )
}

export default Register;