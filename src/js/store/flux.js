import { perPage, endpoint } from '../../config';

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: [],
      people: [],
      vehicles: []
    },
    actions: {
      callSwapi(url, frag) {
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
                console.log(storeHouse);
                setStore({
                  [frag]: storeHouse
                });
              })
              // Unset urlMod for next iteration
              urlMod = "";
            }
          })
          .catch(e => console.error(e));
      },
      loadPeople() {
        let fragment = "people";
        let url = endpoint + "/" + fragment;

        this.callSwapi(url, fragment);
      },
      loadPlanets() {
        let fragment = "planets";
        let url = endpoint + "/" + fragment;

        this.callSwapi(url, fragment);
      },
      loadVehicles() {
        let fragment = "vehicles";
        let url = endpoint + "/" + fragment;

        this.callSwapi(url, fragment);
      }
    }
  };
};

export default getState;
