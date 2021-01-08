import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Vehicles = () => {
  const { store, actions } = useContext(Context);
  console.log(store);


  return (
    <div className="text-center mt-5 table-wrapper">
      <table className="table table-bordered mt-2 pt-5 fl-table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Vehicles</th>
          </tr>
        </thead>
        <tbody className="tbody-dark">
          {store.vehicles.map((e, index) => (
            <tr key={index}>
                <td>{e.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}

export default Vehicles;
