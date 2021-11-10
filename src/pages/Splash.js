import { Link } from 'react-router-dom'
import LogoGoldShineStroke3 from '../images/logo/KLNG_logo_fourcolorflat.png'

function Splash(props){
    return (
        <div className="splashDiv">
            <div className="titleDiv">
                <div className="logoDiv">
                    <img src="" alt="" />
                    <img src={LogoGoldShineStroke3}/>
                </div>

                <div className="KLNGDiv">
                    <h1>KLNG</h1>
                </div>

                <div className="SloganDiv">
                    <h2> To Your Accomplishments</h2>
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
                    <Link to='/login' className="splashLink"><h4>Login</h4></Link>
                </div>

                <div className="registerSplashDiv">
                    <Link to='/register' className="splashLink"><h4>Register</h4></Link>
                </div>
            </div>

        </div>
    )
}

export default Splash;