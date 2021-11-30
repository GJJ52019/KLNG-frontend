import Nav from "../components/Nav";
import { useState } from "react";
import AbtForm from "../components/AbtForm";
import AddProjForm from "../components/AddProjForm";
import EditProjForm from "../components/EditProjForm";

//#region - modal styling - needs to go here/please dont remove it
const wrap = {
  position: "relative",
  zIndex: 1,
};

const prof = {
  poisiton: "relative",
  zIndex: 2,
  padding: "10px",
};
//#endregion

function Profile(props) {
  const loaded = () => {
    return (
      <div>
        <AbtForm />
        <br />
        <AddProjForm />
        <br />
        {/* <h4>Project name <EditProjForm /></h4> */}
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <div>
      <section>
        <div className="ProfDiv">
          <Nav />
          <div className="editAbtDiv">
            <h3>avatar image</h3>
            {/* <h1>{props.updateProf.name}</h1> */}
            <h3>nellie here</h3>
            <h3>about here</h3>
            <h3>github here</h3>
            <h3>linkedin here</h3>
            {/* <h4>{props.updateProf.about}</h4> */}
            {/* <h3>{props.updateProf.github_link}</h3> */}
            {/* <h3>{props.updateProf.linkedin_link}</h3> */}
          </div>
          <div className="editListProjDiv">
            <h3>List of Projects</h3>
            <div className="editSingleProjDiv">
              <h4>Project name with edit icon</h4>
            </div>
            <h5>project image</h5>
          </div>
        </div>
        {props.home ? loaded() : loading()}
      </section>
    </div>
  );
}

export default Profile;
