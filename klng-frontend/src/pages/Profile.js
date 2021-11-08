import Nav from '../components/Nav'
import { useState } from 'react'
import AbtForm from '../components/AbtForm'
import AddProjForm from '../components/AddProjForm'
import EditProjForm from '../components/EditProjForm'

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
                            <AddProjForm />
                        </div>
                        <br/>
                        <div className="editListProjDiv">
                            <h3>List of Projects</h3>
                                <div className="editSingleProjDiv">
                                    <h4>Project name <EditProjForm /></h4>
                                </div>
                            <h5>project image</h5>
                        </div>
                    </div>
                </div>
                {/* {props.prof ? loaded() : loading()} */}
            </section>
        </div>
    )
}

export default Profile;