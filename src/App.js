import { useEffect, useState } from "react";
import "./App.css";
import initData from "./data.json";

function App() {
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
        if (val === "expert") obj["expert_skills"].push(key.charAt(0).toUpperCase() + key.slice(1));        
      });
      arr.push(obj);
    });
    setData(arr);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="item">
      {data.map((val) => {
        return (
          <div key={val.id}>
            <div>{val.full_name}</div>
            <div>
              {val.expert_skills.length > 0
                ? val.expert_skills.join(", ")
                : "-"}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
