import { Links } from 'react-router-dom'

function Home(props){
    return (
        <div className="personDiv">
            <div className="avatarDiv">
                <h4>avatar image here</h4>
            </div>

            <div className="nameDiv">
                <h1>Name goes here</h1>
            </div>

            <div className="descripDiv">
                <h4>about desc goes here</h4>
            </div>

            <div className="imageDiv">
                <h5>project image goes here</h5>
            </div>

        </div>
    )
}

export default Home;