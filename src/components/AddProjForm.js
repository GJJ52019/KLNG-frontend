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

function AddProjForm(props){

    console.log('props', props)
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
        // props.createProj(newProj)
        setNewProj({
            project_name: '',
            image_url: '',
            project_link: '',
            desc: '',
        })
        setIsOpen(false)
        console.log('newProj', newProj)
        console.log('props', props)
    }
    console.log('props', props)

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
                                value={newProj.project_name} //<-- fix this later
                                name='project_name'
                                placeholder='project_name'
                                onChange={handleChange}
                            />
                            <br />
                            <input className="addImages" 
                                type='text'
                                value={newProj.image_url} //<-- fix this later
                                name='image_url'
                                placeholder='image_url'
                                onChange={handleChange}
                            />
                            <br />
                            <input className="addGit" 
                                type='text'
                                value={newProj.project_link} //<-- fix this later
                                name='project_link'
                                placeholder='project_link'
                                onChange={handleChange}
                            />
                            <br />
                            <input className="addDesc" 
                                type='text'
                                value={newProj.desc} //<-- fix this later
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