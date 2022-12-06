import React from "react";
import "../Style/Style.css";

import axios from "axios";

const show = () => {
  console.log();
  try {
    axios.get("http://localhost:4000").then((res) => console.log(res.data));
  } catch (err) {
    console.log(err.stack);
  }
};

function Dashboard() {
  return (
    <div>
      <h3 onLoad={show}>Pirate Crew</h3>
    </div>
  );
}
export default Dashboard;
