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
        if (val === "expert") obj["expert_skills"].push(key);
      });
      arr.push(obj);
    });
    setData(arr);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {console.log(data)}
    </div>
  );
}

export default App;
