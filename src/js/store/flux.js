import { perPage, endpoint } from '../../config';

const getData = ({ getStore, getActions, setStore }) => {
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
            var storeHouse = [];
            var pages =  Math.ceil(result.count / perPage);

            async function fetchNextPages() {
              for (var i = 1; i <= pages; i++) {
                let urlMod = i === 1 ? url : url + "?page=" + i;

                await fetch(urlMod)
                .then(res => res.json())
                .then(result => {
                  storeHouse = storeHouse.concat(result.results);
                  setStore({
                    [frag]: storeHouse
                  });
                })
                // Unset urlMod for next iteration
                urlMod = "";
              }

              return storeHouse;
            }
            // Wait for all fetch actions to finish then update store value
            fetchNextPages().then(
              function(value) {
                setStore({
                  [frag]: value
                });
              }
            );
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

export default getData;
