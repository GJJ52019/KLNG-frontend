import { Link } from "react-router-dom";

function Footer(props) {
    return(
        <div className="FooterDiv">
            
            <div className="KLNG">
                <Link to="/"><h4>© 2021 | KLNG</h4></Link>
            </div>

        </div>
    )
}

export default Footer;