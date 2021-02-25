const starWarsApiUrl = "https://swapi.dev/api/people";

const getStarWarsPeople = (cb) => {
  fetch(starWarsApiUrl)
    .then((res) => res.json())
    .then((cb) => console.log(cb));
};

getStarWarsPeople((res) => {});
