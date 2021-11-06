import Nav from '../components/Nav'
import { useState } from 'react'
import AbtForm from './ProfileForms/AbtForm'

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

    // states
    //#region 
        // add PROJECT state
    const [newProj, setNewProj] = useState({
        name: '',
        images: '',
        link: '',
        desc: '',
    })
        // edit PROJECT state
    const [editProj, setEditProj] = useState({
        name: '',
        images: '',
        link: '',
        desc: '',
    })
        // edit PROFILE state
    const [editProf, setEditProf] = useState({
        images: '',
        name: '',
        email: '',
        desc: '', 
        github_link: '',
        linkedin_link: '',
    })
    //#endregion

    // handleChange
    //#region 
        // new PROJECT 
    const handleChange1 = (event) => {
        setNewProj({ ...newProj, [event.target.name]: event.target.value})
    }
        // edit PROJECT
    const handleChange2 = (event) => {
        setEditProj({ ...editProj, [event.target.name]: event.target.value})
    }
        // edit PROFILE
    const handleChange3 = (event) => {
        setEditProf({ ...editProf, [event.target.name]: event.target.value})
    }
    //#endregion

    // submitChange
    //#region 
        // add PROJECT
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createProj(newProj);
        setNewProj({
            name: '',
            images: '',
            link: '',
            desc: '',        
        })
        props.updateProj(editProj);
        setEditProj({
            name: '',
            images: '',
            link: '',
            desc: '',        
        })
        
    }
        // edit PROJECT
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     props.updateProj(editProj);
    //     setEditProj({
    //         name: '',
    //         images: '',
    //         link: '',
    //         desc: '',        
    //     })
    //     setIsOpen(false)
    // }
        // edit PROFILE
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     props.updateProf(editProf);
    //     setEditProf({
    //         images: '',
    //         name: '',
    //         email: '',
    //         desc: '', 
    //         github_link: '',
    //         linkedin_link: '',      
    //     })
    //     setIsOpen(false)
    // }
    //#endregion

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
        <>
        <section>
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
        </section>
        </>
    )
}

export default Profile;