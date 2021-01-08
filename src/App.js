import React from "react";
import './App.css';
import injectContext from "./js/store/appContext";
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import People from "./js/component/people";
import Planets from "./js/component/planets";
import Vehicles from "./js/component/vehicles";

function App() {
  return (
    <div className="container m-auto">
      <div className="row justify-content-center">
        <h1 className="mt-12 mb-4 text-center text-3xl font-medium">Making SWAPI calls in react</h1>
        <div className="col-md-8 grid gap-4 grid-cols-2">
          <ul className="">
            <li className="bg-blue-100 hover:bg-blue-200 text-3xl mr-4 mt-4 mb-8"><Link className="px-4 py-4 w-full block" to="/people">People</Link></li>
            <li className="bg-red-100 hover:bg-red-200 text-3xl mr-4 mt-4 mb-8"><Link className="px-4 py-4 w-full block" to="/planets">Planets</Link></li>
            <li className="bg-yellow-100 hover:yellow-red-200 text-3xl mr-4 mt-4 mb-8"><Link className="px-4 py-4 w-full block" to="/vehicles">Vehicles</Link></li>
          </ul>
          <Route path="/people" component={People}></Route>
          <Route path="/planets" component={Planets}></Route>
          <Route path="/vehicles" component={Vehicles}></Route>
        </div>
      </div>
    </div>
);
}

export default injectContext(App);
