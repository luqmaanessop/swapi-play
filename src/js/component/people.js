import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { perPage } from '../../config';
import Pagination from './Pagination';

const People = () => {
  const { store, actions } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(perPage);

  // Get current people
  const indexOfLastPerson = currentPage * postsPerPage;
  const indexOfFirstPerson = indexOfLastPerson - postsPerPage;
  const currentPerson = store.people.slice(indexOfFirstPerson, indexOfLastPerson);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="ml-0 text-center mt-5 w-5/6 table-wrapper">
      <table className="table table-bordered mt-2 pt-5 fl-table">
        <thead className="thead-dark">
          <tr>
            <th scope="col" colSpan="3">People</th>
          </tr>
        </thead>
        <tbody className="tbody-dark">
          {currentPerson.map((e, index) => (
            <tr key={index}>
                <td className="text-left">{e.name}</td>
                <td className="text-left">Height: {e.height}cm</td>
                <td className="text-left">Skin colour: {e.skin_color}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination postsPerPage={postsPerPage} totalPosts={store.people.length} paginate={paginate}/>
    </div>

  )
}

export default People;
