const beverages = document.querySelector(".beverages");

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
  for (i = 0; i < data.Beverages.length; i++) {
    const html = `
<div class="bestsells">
<div class="pizza1">
<img class="margherita" src="${data.Beverages[i].image}">
<div class="properties">
  <span class="pizzaname">${data.Beverages[i].name}</span>
  <span class="price">${data.Beverages[i].price}</span>
  <span class="discription">${data.Beverages[i].discription}</span>
  <span class="add">ADD</span>
  </div>
</div>

</div>`;
    beverages.insertAdjacentHTML("beforeend", html);
  }
};
getpizzaData("name");
