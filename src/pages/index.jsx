import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/index.css";
import initData from "../data.json";

function Home() {
  const [data, setData] = useState([]);

  function getData() {
    let arr = [];
    initData.data.forEach((val) => {
      let obj = {};
      //declare key of new object
      obj["id"] = val.id;
      obj["full_name"] = `${val.first_name} ${val.last_name}`;
      obj["expert_skills"] = [];
      //split skill to [key,value]
      const skill = Object.entries(val.skills);
      skill.forEach(([key, val]) => {
        //change key word to uppercase at first letter
        if (val === "expert")
          obj["expert_skills"].push(key.charAt(0).toUpperCase() + key.slice(1));
      });
      arr.push(obj);
    });
    setData(arr);
    localStorage.setItem("data", JSON.stringify(arr));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="item-container">
      {data.map((val) => {
        return (
          <Link to={`/profile/${val.full_name}`} key={val.id} className="item">
            <h2 className="fullname">{val.full_name}</h2>
            <div className="expertskill">Expert skills:</div>
            <div className="skill">
              {val.expert_skills.length > 0
                ? val.expert_skills.join(", ")
                : "-"}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Home;
