const deserts = document.querySelector(".deserts");

const getpizzaData = function (name) {
  fetch(".././index.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderPizza(data);
      console.log(data);
    });
};

const renderPizza = function (data) {
  for (i = 0; i < data.Deserts.length; i++) {
    const html = `
<div class="deserts">
<div class="pizza1">
<img class="margherita" src="${data.Deserts[i].image}">
<div class="properties">
  <span class="pizzaname">${data.Deserts[i].name}</span>
  <span class="price">${data.Deserts[i].price}</span>
  <span class="discription">${data.Deserts[i].discription}</span>
  <span class="add">ADD</span>
  </div>
</div>

</div>`;
    deserts.insertAdjacentHTML("beforeend", html);
  }
};
getpizzaData("name");
