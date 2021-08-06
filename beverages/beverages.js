const beverages = document.querySelector(".beverages");

const getpizzaData = function (name) {
  fetch("../index.json")
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
      <img class="margherita" src="${data.Beverages[i].image}"/>
      <div class="properties">
        <span class="pizzaname">${data.Beverages[i].name}</span>
        <span class="price">Rs.${data.Beverages[i].price}</span>
        <span class="discription">${data.Beverages[i].discription}</span>
        <button class="add" id="${data.Beverages[i].id}">Add To Cart</button>
        </div>
      </div>

      </div>`;
    beverages.insertAdjacentHTML("beforeend", html);
    console.log(data.Beverages[i].id);
  }
  const add = document.querySelectorAll(".add");
  let items = [];
  add.forEach((add) => {
    add.addEventListener("click", function (added) {
      console.log("clicked");
      items.push(this.id);
      console.log(this.id);
      localStorage.setItem("beverage", JSON.stringify(items));
      add.style.display = "none";
    });
  });
};
getpizzaData("name");
