import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { perPage } from '../../config';
import Pagination from './Pagination';

const Planets = () => {
  const { store, actions } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(perPage);

  // Get current people
  const indexOfLastPlanet = currentPage * postsPerPage;
  const indexOfFirstPlanet = indexOfLastPlanet - postsPerPage;
  const currentPlanet = store.planets.slice(indexOfFirstPlanet, indexOfLastPlanet);

// change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="ml-0 text-center mt-5 table-wrapper">
      <table className="table table-bordered mt-2 pt-5 fl-table">
        <thead className="thead-dark">
          <tr>
            <th scope="col" colspan="4">Planets</th>
          </tr>
        </thead>
        <tbody className="tbody-dark">
          {currentPlanet.map((e, index) => (
            <tr key={index}>
                <td className="font-bold text-left">{e.name}</td>
                <td>Terrain: {e.terrain}cm</td>
                <td>Gravity: {e.gravity}</td>
                <td>Population: {e.population}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination postsPerPage={postsPerPage} totalPosts={store.planets.length} paginate={paginate}/>
    </div>

  )
}

export default Planets;
