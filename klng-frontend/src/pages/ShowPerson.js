import Nav from "../components/Nav";

function ShowPerson(props){
    return (
        <div className="PersonDiv">
            <Nav />

            <div className="photoDiv">
                <h3>avatar image goes here</h3>
                <h1>Name goes here</h1>
            </div>

            <div className="aboutDiv">
                <h4>about description here</h4>
            </div>

            <div className="projectDiv">
                <h5>project images go here</h5>
            </div>
        </div>
    )
}

export default ShowPerson;