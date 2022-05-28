import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/index.css";
import initData from "../data.json";
import { dataMaster } from "../context";

function Home() {
  const { data, setData } = useContext(dataMaster);

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
  }

  useEffect(() => {
    if (data.length === 0) {
      getData();
    }
  }, []);

  return (
    <div className="page">
      <div className="item-container">
        {data.map((val) => {
          return (
            <Link
              to={`/profile/${val.full_name}`}
              key={val.id}
              className="item"
            >
              <h2 className="fullname">{val.full_name}</h2>
              <div className="expertskill">Expert skills:</div>
              <div className="skill">
                {/* join array of expert skill and give commas between each words */}
                {val.expert_skills.length > 0
                  ? val.expert_skills.join(", ")
                  : "-"}
              </div>
            </Link>
          );
        })}
      </div>
      <Link to="/create" className="add-btn-container">
        <div className="add-btn">+</div>
      </Link>
    </div>
  );
}

export default Home;
