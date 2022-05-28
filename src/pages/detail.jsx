import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/detail.css";
import pp from "../assets/user.png";

function Detail() {
  const [detail, setDetail] = useState({});
  const { name } = useParams();

  useEffect(() => {
    setDetail(
      JSON.parse(localStorage.getItem("data")).find(
        (val) => val.full_name === name
      )
    );
  }, [name]);

  return (
    <div className="detail-container">
      <div className="picture-container">
        <div className="symbol-picture">C</div>
        <img src={pp} alt="user-pp" width="100%" height="100%" />
      </div>
      <h2 className="detail-fullname">{detail.full_name?.toUpperCase()}</h2>
      {detail.expert_skills?.length > 0 && (
        <div className="detail-expert">Expert Skills</div>
      )}
      {detail.expert_skills?.length > 0 && (
        <div className="detail-skill-container">
          {detail.expert_skills.map((val, k) => {
            return (
              <ul key={k}>
                <li>{val}</li>
              </ul>
            );
          })}
        </div>
      )}
      <div className="detail-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  );
}

export default Detail;
