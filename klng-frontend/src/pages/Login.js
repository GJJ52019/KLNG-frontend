import { Link } from 'react-router-dom'

function Login(props){
    return (
        <div className="loginDiv">

            <div className="logTitleDiv">Login</div>

            <div className="inputDiv">
                <h4>inputs goes here</h4>
            </div>

            <div className="submitDiv">
                <button className="loginbtn">Login</button>
                <Link to='/register'>Register</Link>
            </div>

        </div>
    )
}

export default Login;