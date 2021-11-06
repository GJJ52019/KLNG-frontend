import Profile from '../Profile'
import { useState } from 'react'
import Modal from '../../components/Modal'

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
        images: '',
        name: '',
        email: '',
        desc: '', 
        github_link: '',
        linkedin_link: '',
    })

    const handleChange = (event) => {
        setEditProf({...editProf, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateProf({
            images: '',
            name: '',
            email: '',
            desc: '', 
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
                                value='text' //<-- fix this later
                                name='name'
                                placeholder='name'
                                onChange={handleChange}
                            />
                            <input className="editImages" 
                                type='text'
                                value='text' //<-- fix this later
                                name='images'
                                placeholder='images'
                                onChange={handleChange}
                            />
                            <input className="editGit" 
                                type='text'
                                value='text' //<-- fix this later
                                name='github_link'
                                placeholder='github project link'
                                onChange={handleChange}
                            />
                            <input className="editDesc" 
                                type='text'
                                value='text' //<-- fix this later
                                name='desc'
                                placeholder='desc'
                                onChange={handleChange}
                            />
                        </form>
                    </Modal>
                </div>
            </section>
        </>
    )
}

export default AbtForm;