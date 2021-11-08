import Nav from '../components/Nav'
import { useState } from 'react'
import AbtForm from '../components/AbtForm'
import AddProjForm from '../components/AddProjForm'
import EditProjForm from '../components/EditProjForm'
import Modal from '../components/Modal'

//#region - modal styling - needs to go here/please dont remove it
const wrap = {
    position: 'relative',
    zIndex: 1
}

const prof = {
    poisiton: 'relative',
    zIndex: 2,
    padding: '10px'
}
//#endregion

// did not write the modal codes, will work on it monday, im gonna take a break from coding tomorrow. Also, would you mind working on other pages that is not css/scss? I also ran into an issue when trying to see this page live, would you mind taking a looksies please?

function Profile(props){


    const loaded = () => {
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

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <section>
                <div className='ProfDiv'>
                    <Nav />
                    <AbtForm />
                    {/* find a way to connect the AbtForm page here. AbtForm has the modal and about edit forms */}
                    <br/>
                    <div className="ProfContentDiv">
                        <div className="editAbtDiv">
                            <h3>avatar image</h3>
                            <h1>name here</h1>
                            <h3>email here</h3>
                            <h4>about desc here</h4>
                            <h3>links here</h3>
                        </div>
                        <br/>
                        <div className="addDiv">
                            {/* <AddProjForm /> */}
                            {/* find a way to connect the AddProjForm here */}
                            <button className="addbtn">Add Project</button>
                        </div>
                        <br/>
                        <div className="editListProjDiv">
                            {/* <EditProjForm /> */}
                            {/* find a way to connect the EditProjForm here */}
                            <h3>List of Projects</h3>
                                <div className="editSingleProjDiv">
                                    <h4>Project name with edit icon</h4>
                                </div>
                            <h5>project image</h5>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Profile;