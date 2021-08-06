const opencart = document.querySelector(".cart");
const cartitem = document.querySelector(".cartItems");
let clicked = false;
opencart.addEventListener("click", function () {
  clicked = true;
  document.querySelector(".index").style.display = "none";

  const getPizzaData = function (name) {
    fetch("index.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        addtocart(data);
        console.log(data);
      });
  };
  const addtocart = function (data) {
    const item = JSON.parse(localStorage.getItem("Pizza"));
    console.log(item);

    const pizza = data.Pizzas;
    let y;
    for (let i = 0; i < pizza.length; i++) {
      console.log(i);
      y = pizza.find((el) => el.id == item[i]);
      console.log(y);
      if (y !== undefined) {
        const html = `<div class="cartItems" >
          <div class="bestpizza">
            <div class="bestsells">
              <div class="pizza1">
                <img class="margherita" src="${y.image}" />
                <div class="properties">
                  <span class="pizzaname">${y.name}</span>
                  <span class="price">Rs.${y.price[1]}</span>
                  <button class="remove"${y.id}>Remove from Cart</button>
                  <div class="button">
                  <button class="minus">-</button>
                  <span class="quantity">${1}</span>
                  <button class="plus">+</button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
        debugger;
        cartitem.insertAdjacentHTML("beforeend", html);
        const removeItem = document.querySelectorAll(".remove");
        removeItem.forEach((removeItem) => {
          removeItem.addEventListener("click", function () {
            alert("Are you sure ?");
            document.querySelector(".cartItems").style.display = "none";
            localStorage.removeItem("Pizza");
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
      }
    }
  };
  getPizzaData("name");
  // document.querySelector(".cartItems").style.display = "block";
});
// const arr = [{ id: "1" }, { id: "5" }, { id: "6" }];
// const arr1 = [{ id: "1" }, { id: "2" }, { id: "3" }];

// const x = arr.filter((arr) => arr.id === "1");
// console.log(x);
