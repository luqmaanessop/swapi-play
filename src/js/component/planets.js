import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Planets = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5 table-wrapper">
      <table className="table table-bordered mt-2 pt-5 fl-table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Planets</th>
          </tr>
        </thead>
        <tbody className="tbody-dark">
          {store.planets.map((e, index) => (
            <tr key={index}>
                <td>{e.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}

export default Planets;
