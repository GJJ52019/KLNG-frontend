import Nav from '../components/Nav'

function Profile(props){
    return (
        <div className='ProfDiv'>
            <Nav />
            <br/>
            <div className="editAbtDiv">
                <h3>avatar image</h3>
                <h1>name here</h1>
                <h3>email here</h3>
                <h4>about desc here</h4>
                <h3>links here</h3>
            </div>
            <br/>
            <div className="addDiv">
                <button className="addbtn">Add Project</button>
            </div>
            <br/>
            <div className="editListProjDiv">
                <h3>List of Projects</h3>
                    <div className="editSingleProjDiv">
                        <h4>Project name with edit icon</h4>
                    </div>
                <h5>project image</h5>
            </div>
        </div>
    )
}

export default Profile;