import { perPage, endpoint } from '../../config';

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: [],
      people: [],
      vehicles: []
    },
    actions: {
      loadPeople() {
        let url = endpoint + "/people";

        fetch(url)
          .then(res => res.json())
          .then(result => {
            var pages =  Math.ceil(result.count / perPage);
            var storeHouse = []

            for (var i = 1; i <= pages; i++) {
              let urlMod = i === 1 ? url : url + "?page=" + i;

              fetch(urlMod)
              .then(res => res.json())
              .then(result => {
                storeHouse = storeHouse.concat(result.results);
                setStore({
                  people: storeHouse
                });
              })
              // Unset urlMod for next iteration
              urlMod = "";
            }
          })
          .catch(e => console.error(e));
      },
      loadPlanets() {
        const url = endpoint + "/planets";

        fetch(url)
          .then(res => res.json())
          .then(result => {
            // console.log("planets**** ", result);
            setStore({
              planets: result.results
            });
          })
          .catch(e => console.error(e));
      },
      loadVehicles() {
        const url = endpoint + "/vehicles";

        fetch(url)
          .then(res => res.json())
          .then(result => {
            // console.log("vehicles*** ", result);
            setStore({
              vehicles: result.results
            });
          })
          .catch(e => console.error(e));
      }
    }
  };
};

export default getState;
