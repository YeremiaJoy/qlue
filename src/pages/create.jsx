import React, { useContext, useState } from "react";
import { dataMaster } from "../context";
import "../style/create.css";
import { useNavigate } from "react-router-dom";

const checkboxData = ["Javascript", "Python", "Golang", "Php"];

function Create() {
  const { data, setData } = useContext(dataMaster);
  const { skills, handleSkillChange } = useForm();
  const [name, setName] = useState(null);
  const [submit, setSubmit] = useState(false);

  const nav = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);
    if (name) {
      //declare new item of person
      const newPerson = [
        {
          id: data.length + 1,
          full_name: name,
          expert_skills: skills,
        },
      ];
      setData([...data, ...newPerson]);
      //push route to home route "/"
      nav("/");
    }
  }

  return (
    <div className="detail-container">
      <h2 className="create-title">Create Person</h2>
      <form onSubmit={handleSubmit}>
        <div className="create-box">
          <div>Name</div>
          <input
            name="full_name"
            id="name"
            placeholder="Input Your Name"
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
          />
          {/* if no name or user click submit but does'nt fill name, it will show error */}
          {(name !== null || submit) && !name && (
            <p className="is-danger">Please fill in name above</p>
          )}
          <div>Expert skills</div>
          {checkboxData.map((val, k) => {
            return (
              <div className="create-checkbox" key={k}>
                <input
                  type="checkbox"
                  name={val}
                  value={val}
                  onChange={handleSkillChange}
                />
                <span>{val.toLowerCase()}</span>
              </div>
            );
          })}
          <input className="submit-btn" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default Create;

function useForm() {
  const [skills, setSkills] = useState([]);

  function handleSkillChange(e) {
    // isChecked = boolean (true/false)
    var isChecked = e.target.checked;
    // item = item value (Javascript, Python, Golang, Php)
    var item = e.target.value;
    if (isChecked) setSkills([...skills, item]);
    //if isChecked = false, delete item from array 
    else skills.splice(skills.indexOf(item), 1);
  }

  //return array of skills and handleSkillChange function 
  return {
    skills,
    handleSkillChange,
  };
}
