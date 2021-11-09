import { useState } from 'react'
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

function EditProjForm(props){
    const [editProj, setEditProj] = useState({
        project_name: '',
        image_url: '',
        project_link: '',
        desc: '',
    });

    const handleChange = (event) => {
        setEditProj({...editProj, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateProj(editProj)

        // need setIsOpen here for modal
        setIsOpen(false)
    }

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section>
                <div className="modal" style={wrap}>
                    <button onClick={() => setIsOpen(true)}className="editProjBtn">🖌</button>
                    <Modal open={isOpen} onClose={()=> setIsOpen(false)}>
                        <form className="editProjForm" onSubmit={handleSubmit}>
                            <input className="editName" 
                                type='text'
                                value='text' //<-- fix this later
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
                            <input className="editGit" 
                                type='text'
                                value='text' //<-- fix this later
                                name='github_link'
                                placeholder='github project link'
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
                            <input type="submit" className="updateBtn" value="Update Project"/>
                            <input type="submit" className='delBtn' value='Delete'/>
                        </form>
                    </Modal>
                </div>
            </section>
        </>
    )
}

export default EditProjForm;