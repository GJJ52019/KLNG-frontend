import { useState } from 'react'
import React from 'react'
import Modal from './Modal'

const wrap = {
    position: 'relative',
    zIndex: 1
}

const prof = {
    poisiton: 'relative',
    zIndex: 2,
    padding: '10px'
}

function AbtForm(props){
    const [editProf, setEditProf] = useState({
        image_url: '',
        name: '',
        email: '',
        about: '', 
        github_link: '',
        linkedin_link: '',
    })

    const handleChange = (event) => {
        setEditProf({...editProf, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateProf({
            image_url: '',
            name: '',
            email: '',
            about: '', 
            github_link: '',
            linkedin_link: '',
        })
        setIsOpen(false)
    }

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section>
                <div className="modal" style={wrap}>
                    <button onClick={() => setIsOpen(true)}className="editBtn">Edit 🖌</button>
                    <Modal open={isOpen} onClose={()=> setIsOpen(false)}>
                        <form className="abtForm" onSubmit={handleSubmit}>
                            <input className="editName" 
                                type='text'
                                value={props.name} //<-- fix this later
                                name='name'
                                placeholder='name'
                                onChange={handleChange}
                            />
                            <br />
                            <input className="editImages" 
                                type='text'
                                value='text' //<-- fix this later
                                name='images'
                                placeholder='images'
                                onChange={handleChange}
                            />
                            <br />
                            <input className="editEmail" 
                                type='text'
                                value='text' //<-- fix this later
                                name='email'
                                placeholder='email'
                                onChange={handleChange}
                            />
                            <br />
                            <input className="editDesc" 
                                type='text'
                                value='text' //<-- fix this later
                                name='desc'
                                placeholder='desc'
                                onChange={handleChange}
                            />
                            <br />
                            <input className="editGit" 
                                type='text'
                                value='text' //<-- fix this later
                                name='github_link'
                                placeholder='github_link'
                                onChange={handleChange}
                            />
                            <br />
                            <input className="editLinked" 
                                type='text'
                                value='text' //<-- fix this later
                                name='linkedin_link'
                                placeholder='linkedin_link'
                                onChange={handleChange}
                            />
                            <br />
                            <input type="submit" className="abtBtn" value="Update" />
                        </form>
                    </Modal>
                </div>
            </section>
        </>
    )
}

export default AbtForm;