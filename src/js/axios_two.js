const url = "http://127.0.0.1:9000";

const newUser = {
  nome: "Leite em pó Leão",
  tipo: 1,
  embalagem: "kg",
  ean: "7891534276211"
};

const updatedUser = {
  nome: "Farinha de trigo Polvo",
  tipo: 1,
  embalagem: "kg",
  ean: "7891586576428"
};

function getUser() {
  axios
    .get(url)
    .then(response => {
      //console.log(response);
      const data = response.data;
      renderResults.textContent = JSON.stringify(data);
    })
    .catch(error => console.log(error));
}

getUser();

function addNewUser() {
  //axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  axios
    .post(url, newUser)
    //response.header("Access-Control-Allow-Origin", "*");
    .then(response => {
      //response.header.add("Access-Control-Allow-Origin", "*");
      //console.log(response.data);
      window.alert(JSON.stringify(response.data));
    })
    .catch(error => console.log(error));
}

addNewUser();

/*function updateUser() {
  axios
    .put(`${url}/2`, updatedUser)
    .then(response => {
      window.alert(JSON.stringify(response.data));
    })
    .catch(error => console.log(error));
}

updateUser();*/
