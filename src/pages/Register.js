import { Link } from 'react-router-dom'

function Register(props){
    return (
        <div className="registerDiv">
            <div className="regTitleDiv">Register</div>

            <div className="inputDiv">

                <form action="">
                    <h3>Required</h3>
                    
                    <input type="text" placeholder="username" id="username"/>

                    <input type="email" placeholder="email" id="email"/>

                    <input type="password" name="" id="password" placeholder="password"/>

                    <h3>Optional</h3>

                    <input type="text" name="" id="github" placeholder="github"/>

                    <input type="text" name="" id="linkedin" placeholder="LinkedIn"/>                       

                    <input type="submit" value="Register" id="regsubmit"/>
                </form>
            </div>

            <div className="submitDiv">
                <button className="regbtn" hidden>Register</button>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    )
}

export default Register;