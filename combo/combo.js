const combos = document.querySelector(".combos");

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
  for (i = 0; i < data.Combos.length; i++) {
    const html = `
<div class="combos">
<div class="pizza1">
<img class="margherita" src="${data.Combos[i].image}">
<div class="properties">
  <span class="pizzaname">${data.Combos[i].name}</span>
  <span class="price">${data.Combos[i].price}</span>
  <span class="discription">${data.Combos[i].items}</span>
  <span class="add">ADD</span>
  </div>
</div>

</div>`;
    combos.insertAdjacentHTML("beforeend", html);
  }
};
getpizzaData("name");
