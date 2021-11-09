import { Link } from 'react-router-dom'

function Nav(props) {
    return(
        <div className="NavDiv">
            <Link to='https://github.com'>GitHub</Link>

            <h4>Name</h4>

            <Link to='https://linkedin.com'>LinkedIn</Link>

        </div>
    )
}

export default Nav;