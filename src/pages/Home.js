import { React, useEffect, useState } from 'react' 
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";



function Home(props){

    return (
        
        props.home.map((ele)=>(

        <div className='personDiv'>
            <div key={ele.id} className='insideMap'>
                <div className='homeNameDiv'>
                    <h5>Name</h5>
                    <Link to={`/${ele.id}/about`}><h1>{ele.name}</h1></Link>
                    <h5>About Me</h5>
                    <h2>{ele.about}</h2>
                    <h4 hidden>{ele.image_url}</h4>
                </div>

                <div className='homeUL'>
                    <ul>
                        <li><h5>GitHub</h5></li>
                        <li><h2>{ele.github_link}</h2></li>
                    </ul>
                    <ul>
                        <li><h5>Linked In</h5></li>
                        <li><h2>{ele.linkedin_link}</h2></li>
                    </ul>
                    <ul>
                        <li><a href={`${ele.project}`}><h5>{ele.project}</h5></a></li>
                    </ul>
                </div>
                <div className='homeImgDiv'>
                    <img src={ele.image_url}/>
                </div>
                

                <h5 hidden>{ele.portfolio_url}</h5>
                <Link hidden to={`${ele.portfolio_url}`}><h5>{ele.portfolio_url}</h5></Link>
                <h5 hidden>{ele.project_url}</h5>
                
                
                <br />
            </div>
        </div>
        
//#region 
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
//#endregion

    )))
}

export default Home;