const contenidoCarrito = document.getElementById("resumen-carrito");



let carrito = `
    <div class="cart-container">
            <div class="cart-header">Your Cart (0)</div>
            <div class="falseItem">
              <holaclass="img-falseItem">
                <img width="100%" src="assets/images/illustration-empty-cart.svg">
              </hol>
              <p class="txt-falseItem">Your added items will  appear here</p>
            </div>
            <div class="trueItem">
              <div class="cart-item">
                <div class="item-details">
                  <div class="item-name">Classic Tiramisu</div>
                  <span class="item-quantity">7x</span>
                  <span class="item-price">@ $5.50</span>
                  <span class="item-total">$38.50</span>
                </div>
                <div class="remove-button">
                  <img
                    class="iconremove"
                    src="assets/images/icon-remove-item.svg"
                  />
                </div>
              </div>
  
              <div class="order-total">
                <span>Order Total</span>
                <span>$46.50</span>
              </div>
  
              <div class="carbon-neutral">
                <img
                  src="assets/images/icon-carbon-neutral.svg"
                  alt="carbon neutral"
                />
                <span>This is a carbon-neutral delivery</span>
              </div>
  
              <button class="confirm-button">Confirm Order</button>
            </div>
          </div>
`;

let contendioDeCarrito = (contenidoCarrito.innerHTML = carrito);

export { contendioDeCarrito };
