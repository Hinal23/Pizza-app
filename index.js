const bestsells = document.querySelector(".bestsells");
const buttons = document.querySelectorAll(".button");

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
  <span class="price">Rs.${data.Pizzas[i].price[1]}</span>
  <span class="size">${data.Pizzas[i].sizes[1]}</span>
  <span class="discription">${data.Pizzas[i].discription}</span>
  <button class="add" id="${data.Pizzas[i].id}">Add to Cart</button>
  <div class="button" style="display:none"  >
  <button class="minus">-</button>
  <button class="quantity">1</button>
  <button class="plus">+</button>
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
      add.style.display = "none";
      const btn = document.querySelectorAll(".button");
      btn.forEach((btn) => {
        btn.style.display = "block";
      });
    });
  });
  const minus = document.querySelectorAll(".minus");
  minus.forEach((minus) => {
    minus.addEventListener("click", function () {
      document.querySelectorAll(".quantity").innerHTML = "quantity";
    });
  });
  const plus = document.querySelectorAll(".plus");
  plus.forEach((plus) => {
    plus.addEventListener("click", function () {
      document.querySelectorAll("quantity").innerHTML = "quantity++";
    });
  });
};

getpizzaData("name");
