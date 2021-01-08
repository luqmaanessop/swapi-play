import React, { useContext } from "react";
import { Context } from "../store/appContext";

const People = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5 table-wrapper">
      <table className="table table-bordered mt-2 pt-5 fl-table">
        <thead className="thead-dark">
          <tr>
            <th scope="col" colSpan="3">People</th>
          </tr>
        </thead>
        <tbody className="tbody-dark">
          {store.people.map((e, index) => (
            <tr key={index}>
                <td className="font-bold text-left">{e.name}</td>
                <td>Height: {e.height}cm</td>
                <td>Skin colour: {e.skin_color}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}

export default People;
