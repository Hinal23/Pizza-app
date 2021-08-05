const opencart = document.querySelector(".cart");
opencart.addEventListener("click", function () {
  const cartitem = document.querySelector(".cartItems");
  const getPizzaData = function (name) {
    fetch("index.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        renderpizza(data);
        console.log(data);
      });
  };
  const renderpizza = function (data) {
    const item = JSON.parse(localStorage.getItem("Pizza"));
    console.log(...item);
    debugger;
    if (item.id === data.Pizzas[data.Pizzas.length - 1].id) {
      for (i = 0; i < item.length - 1; i++) {
        const html = `<div class="cartItems" >
      <div class="bestpizza">
        <div class="bestsells">
          <div class="pizza1">
            <img class="margherita" src="${data.Pizzas[i].image}" />
            <div class="properties">
              <span class="pizzaname">${data.Pizzas[i].name}</span>
              <span class="price">${data.Pizzas[i].price[1]}</span>
              <span class="add">Remove from Cart</span>
            </div>
          </div>
        </div>
      </div>
    </div>`;
        cartitem.insertAdjacentHTML("beforeend", html);
      }
    }
  };
  getPizzaData("name");
  document.querySelector(".cartItems").style.display = "block";
  document.querySelector(".index").style.display = "none";
});
