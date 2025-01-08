const iconCart = `<img src="assets/images/icon-add-to-cart.svg" class="cart-icon">`;
const iconDecrement = `<img class="icon-decrementar" src="assets/images/icon-decrement-quantity.svg">`;
const iconIncrement = `<img class="icon-incrmentar" src="assets/images/icon-increment-quantity.svg">`;


  fetch("data.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      Cards(data)
    });

function Cards(data) {
  let card = "";
      data.forEach((info) => {
        card += `
            <div class="product-card">
            <div class="image-container">
            <img src="${info.image.desktop}" alt="${info.category}" class="product-image">
            <div class="quantity-control">
            <button class="quantity-btn">${iconDecrement}</button>
            <span class="quantity">4</span>
            <button class="quantity-btn">${iconIncrement}</button>
            </div>
            <button class="add-to-cart">${iconCart}
            Add to Cart
            </button>
            </div>
            <div class="category">${info.category}</div>
            <div class="product-name">${info.name}</div>
            <div class="price">$${info.price}</div>
        </div>
            `;

        document.getElementById("lista-productos").innerHTML = card;
      });
}


export { Cards };
