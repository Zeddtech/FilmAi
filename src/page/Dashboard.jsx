import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <Link to={"/details"}>details</Link>
    </div>
  );
};

export default Dashboard;
