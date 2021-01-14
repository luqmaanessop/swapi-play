import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { perPage } from '../../config';
import Pagination from './Pagination';

const Vehicles = () => {
  const { store, actions } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(perPage);

  // Get current people
  const indexOfLastVehicle = currentPage * postsPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - postsPerPage;
  const currentVehicle = store.vehicles.slice(indexOfFirstVehicle, indexOfLastVehicle);

// change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-5/6 ml-0 text-center mt-5 table-wrapper">
      <table className="table table-bordered mt-2 pt-5 fl-table">
        <thead className="thead-dark">
          <tr>
            <th scope="col" colSpan="2">Vehicles</th>
          </tr>
        </thead>
        <tbody className="tbody-dark">
          {currentVehicle.map((e, index) => (
            <tr key={index}>
                <td className="text-left">Name: {e.name}</td>
                <td className="text-left">Vehicle type: {e.vehicle_class}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination postsPerPage={postsPerPage} totalPosts={store.vehicles.length} paginate={paginate}/>
    </div>
  )
}

export default Vehicles;
