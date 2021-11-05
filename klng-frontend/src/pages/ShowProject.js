import Nav from "../components/Nav";

function ShowProject(props){
    return (
        <div className="ProjDiv">
            <Nav />

            <div className="titleDiv">
                <h3>avatar image here</h3>
                <h1>name here</h1>
            </div>

            <div className="projDescripDiv">
                <h4>project desc here</h4>
            </div>

            <div className="screenShotDiv">
                <h4>screenshot of specific project here</h4>
            </div>


        </div>
    )
}

export default ShowProject;