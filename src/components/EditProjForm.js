import { useState } from 'react'
import Modal from './Modal'
import { useParams } from 'react-router-dom'

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
    const params = useParams();
    const id = params.id
    const users = props.home
    const user = users.find(u => u.id == id)

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
        props.updateProj(editProj, user.id)

        // need setIsOpen here for modal
        setIsOpen(false)
    }

    const removeProj = () => {
        props.deleteProj(user.id);
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
                                value= {user.project_name} //<-- fix this later
                                name='project_name'
                                placeholder='project_name'
                                onChange={handleChange}
                            />
                            <br />
                            <input className="editImages" 
                                type='text'
                                value={user.image_url} //<-- fix this later
                                name='image_url'
                                placeholder='image_url'
                                onChange={handleChange}
                            />
                            <br />
                            <input className="editGit" 
                                type='text'
                                value={user.project_link} //<-- fix this later
                                name='project_link'
                                placeholder='project project link'
                                onChange={handleChange}
                            />
                            <br />
                            <input className="editDesc" 
                                type='text'
                                value={user.desc} //<-- fix this later
                                name='desc'
                                placeholder='desc'
                                onChange={handleChange}
                            />
                            <br />
                            <input type="submit" className="updateBtn" value="Update Project"/>
                            <input type="submit" onClick={removeProj}className='delBtn' value='Delete'/>
                        </form>
                    </Modal>
                </div>
            </section>
        </>
    )
}

export default EditProjForm;