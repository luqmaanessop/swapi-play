import React from "react";
import './App.css';
import injectContext from "./js/store/appContext";
import People from "./js/component/people";
import Planets from "./js/component/planets";
import Vehicles from "./js/component/vehicles";

function App() {
  return (
    <div className="container m-auto">
      <div className="row justify-content-center">
        <h1 className="mt-12 mb-4 text-center text-3xl font-medium">Making SWAPI calls in react</h1>
        <div className="col-md-8 grid gap-4 grid-cols-3">
          <People />
          <Planets />
          <Vehicles />
        </div>
      </div>
    </div>
);
}

export default injectContext(App);
