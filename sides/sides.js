const sides = document.querySelector(".sides");

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
  for (i = 0; i < data.Sides.length; i++) {
    const html = `
<div class="bestsells">
<div class="pizza1">
<img class="margherita" src="${data.Sides[i].image}">
<div class="properties">
  <span class="pizzaname">${data.Sides[i].name}</span>
  <span class="price">${data.Sides[i].price}</span>
  <span class="discription">${data.Sides[i].discription}</span>
  <span class="add">ADD</span>
  </div>
</div>

</div>`;
    sides.insertAdjacentHTML("beforeend", html);
  }
};
getpizzaData("name");
