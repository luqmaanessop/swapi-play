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
            console.log("*********** ", result);
            setStore({
              people: result.results
            });
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
