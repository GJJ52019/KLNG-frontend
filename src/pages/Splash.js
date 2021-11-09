import { Link } from 'react-router-dom'

function Splash(props){
    return (
        <div className="splashDiv">
            <div className="titleDiv">
                <div className="logoDiv">
                    <h1>Logo goes here...image tingz</h1>
                </div>

                <div className="KLNGDiv">
                    <h1>KLNG</h1>
                </div>

                <div className="SloganDiv">
                    <h2> To Your Accomplishments.....are we still keeping this phrase??</h2>
                </div>
            </div>

            <div className="submitDiv">
                <div className="discoverDiv">
                    <h3>Discover Portfolios</h3>
                </div>

                <div className="enterDiv">
                    <Link to="/home"><button className="enterbtn">Enter</button></Link>
                </div>

                <div className="loginSplashDiv">
                    <Link to='/login'>Login</Link>
                </div>

                <div className="registerSplashDiv">
                    <Link to='/register'>Register</Link>
                </div>
            </div>

        </div>
    )
}

export default Splash;