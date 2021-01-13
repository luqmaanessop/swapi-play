import React from "react";
import './App.css';
import injectContext from "./js/store/appContext";
import { Link, Route } from 'react-router-dom'
import People from "./js/component/people";
import Planets from "./js/component/planets";
import Vehicles from "./js/component/vehicles";

function Home() {
  return (
    <div className="container m-auto">
      <div className="row justify-content-center">
        <h1 className="mt-2 mb-4 text-center text-3xl font-medium">I am the homepage - I will be making calls to the SWAPI API and fetching some data then showing them to you on different routes.</h1>
      </div>
    </div>
);
}

export default Home;
