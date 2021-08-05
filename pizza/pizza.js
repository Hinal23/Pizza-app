const bestsells = document.querySelector(".bestsells");
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
  for (i = 0; i < data.Pizzas.length; i++) {
    const html = `
<div class="bestsells">
<div class="pizza1">
<img class="margherita" src="${data.Pizzas[i].image}">
<div class="properties">
  <span class="pizzaname">${data.Pizzas[i].name}</span>
  <span class="price">${data.Pizzas[i].price[1]}</span>
  <span class="size">${data.Pizzas[i].sizes[1]}</span>
  <span class="discription">${data.Pizzas[i].discription}</span>
  <span class="add">ADD</span>
  </div>
</div>

</div>`;
    bestsells.insertAdjacentHTML("beforeend", html);
  }
};
getpizzaData("name");
