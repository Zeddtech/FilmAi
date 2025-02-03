import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Banner />
      <MovieSlide />
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <Link to={"/details"}>details</Link>
    </div>
  );
};

export default Dashboard;
