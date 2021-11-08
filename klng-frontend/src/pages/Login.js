import { Link } from 'react-router-dom'

function Login(props){
    return (
        <div className="loginDiv">

            <div className="logTitleDiv">Login</div>

            <div className="inputDiv">
                <form action="">
                    <input type="text" placeholder="username" id="username"/>
                    <input type="password" name="" id="password" placeholder="password"/>
                    <input type="submit" value="Submit" id="loginsubmit"/>
                </form>
            </div>

            <div className="submitDiv">
                <button className="loginbtn" hidden>Login</button>
                <Link to='/register'>Register</Link>
            </div>

        </div>
    )
}

export default Login;