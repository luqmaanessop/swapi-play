import { perPage } from '../../config';

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: [],
      people: [],
      vehicles: []
    },
    actions: {
      loadPeople() {
        const url = "https://swapi.dev/api/people";

        fetch(url)
          .then(res => res.json())
          .then(result => {
            var pages =  Math.ceil(result.count / perPage);
            var storeHouse = result.results;

            for (var i = 2; i <= pages; i++) {
              fetch("https://swapi.dev/api/people/?page=" + i)
              .then(res => res.json())
              .then(result => {
                storeHouse = storeHouse.concat(result.results)
                setStore({
                  people: storeHouse
                });
              })
            }
          })
          .catch(e => console.error(e));
      },
      loadPlanets() {
        const url = "https://swapi.dev/api/planets";

        fetch(url)
          .then(res => res.json())
          .then(result => {
            console.log("planets**** ", result);
            setStore({
              planets: result.results
            });
          })
          .catch(e => console.error(e));
      },
      loadVehicles() {
        const url = "https://swapi.dev/api/vehicles";

        fetch(url)
          .then(res => res.json())
          .then(result => {
            console.log("vehicles*** ", result);
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
