import { Link } from "react-router-dom";

function Footer(props) {
    return(
        <div className="FooterDiv">
            <Link to="/"><h4>© 2021 KLNG</h4></Link>
        </div>
    )
}

export default Footer;