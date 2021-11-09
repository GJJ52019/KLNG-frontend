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

function AddProjForm(props){
    const params = useParams()
    const id = params.id

    const [newProj, setNewProj] = useState({
        project_name: '',
        image_url: '',
        project_link: '',
        desc: '',
    })

    const handleChange = (event) => {
        setNewProj({...newProj, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createProj(newProj)
        setNewProj({
            project_name: '',
            image_url: '',
            project_link: '',
            desc: '',
        })
        setIsOpen(false)
    }

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section>
                <div className="modal" style={wrap}>
                    <button onClick={() => setIsOpen(true)}className="addProjBtn">Add Project</button>
                    <Modal open={isOpen} onClose={()=> setIsOpen(false)}>
                        <form className="projForm" onSubmit={handleSubmit}>
                            <input className="addName" 
                                type='text'
                                value={props.home.project_name} //<-- fix this later
                                name='name'
                                placeholder='name'
                                onChange={handleChange}
                            />
                            <br />
                            <input className="addImages" 
                                type='text'
                                value={props.home.image_url} //<-- fix this later
                                name='images'
                                placeholder='images'
                                onChange={handleChange}
                            />
                            <br />
                            <input className="addGit" 
                                type='text'
                                value={props.home.project_link} //<-- fix this later
                                name='project_link'
                                placeholder='project_link'
                                onChange={handleChange}
                            />
                            <br />
                            <input className="addDesc" 
                                type='text'
                                value={props.home.desc} //<-- fix this later
                                name='desc'
                                placeholder='desc'
                                onChange={handleChange}
                            />
                            <br />
                            <input type="submit" className="addBtn" value="Add Project"/>
                        </form>
                    </Modal>
                </div>
            </section>
        </>
    )
}

export default AddProjForm;