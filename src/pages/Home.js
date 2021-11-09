import { Link } from 'react-router-dom'
import { useState } from 'react'


function Home(props){
    console.log(props)
    // console.log(props.home[0].name)
    
    return (
        props.home.map((ele)=>(
            <div key={ele.id}>
                <h4>{ele.image_url}</h4>
                <Link to={`/${ele.id}/about`}> <h1>{ele.name}</h1></Link>
                <h4>{ele.about}</h4>
                <h5>{ele.github_link}</h5>
                <h5>{ele.linkedin_link}</h5>
                <img src={ele.image_url}/>
                <h5>{ele.project_url}</h5>
                <h5>{ele.project}</h5>
                <br />
            </div>
            
        // <div className="personDiv">
        //     <div className="avatarDiv">
        //         <h4> Image here: {props.home[0].image_url}</h4>
        //     </div>

        //     <div className="nameDiv">
        //         <h1> Name here: {props.home[0].name}</h1>
        //     </div>

        //     <div className="descripDiv">
        //         <h4>About here: {props.home[0].about}</h4>
        //     </div>

        //     <div className="imageDiv">
        //         <h5>Project image goes here:</h5>
        //     </div>

        //     <div>
        //         <h5>THIS IS WHERE I'm TESTING THE PROP</h5>
        //     </div>

        // </div>
    )))
}

export default Home;