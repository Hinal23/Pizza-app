const bestsells = document.querySelector(".bestsells");
const getpizzaData = function (name) {
  fetch("./index.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderPizza(data);
      console.log(data);
    });
};

const renderPizza = function (data) {
  for (i = 0; i < 5; i++) {
    const html = `
<div class="bestsells">
<div class="pizza1">
<img class="margherita" src="${data.Pizzas[i].image}" />
<div class="properties">
  <span class="pizzaname">${data.Pizzas[i].name}</span>
  <span class="price">${data.Pizzas[i].price[1]}</span>
  <span class="size">${data.Pizzas[i].sizes[1]}</span>
  <span class="discription">${data.Pizzas[i].discription}</span>
  <button class="add" id="${data.Pizzas[i].id}${data.Pizzas[i].image}${data.Pizzas[i].name}${data.Pizzas[i].price[1]} ${data.Pizzas[i].sizes[1]}">Add to Cart</button>
  <div class="button">
  <button>-</button>
  <button class="quantity">1</button>
  <button>+</button>
</div>
  </div>
</div>
</div>`;
    bestsells.insertAdjacentHTML("beforeend", html);
  }
  const add = document.querySelectorAll(".add");
  let items = [];
  add.forEach((add) => {
    add.addEventListener("click", function (added) {
      console.log("clicked");
      items.push(this.id);
      localStorage.setItem("Pizza", JSON.stringify(items));
    });
  });
};

getpizzaData("name");
