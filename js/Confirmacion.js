const confirmacion = document.getElementById("confirmacion-compra");

let confirma = `
    <div class="order-card">
        <div class="header">
          <div class="check-icon"><img width="100%" src="assets/images/icon-order-confirmed.svg" alt=""></div>
          <h1 class="title">Order Confirmed</h1>
          <p class="subtitle">We hope you enjoy your food!</p>
        </div>
    
        <div class="order-items">
          <div class="item">
            <div class="item-image"></div>
            <div class="item-details">
              <h3 class="item-name">Classic Tiramisu</h3>
              <span class="item-quantity">1× <b class="item-quantity-price" >@ $5.50</b></span>
            </div>
            <span class="item-price">$5.50</span>
          </div>
        </div>
    
        <div class="total">
          <span>Order Total</span>
          <span>$46.50</span>
        </div>
    
        <button class="new-order-btn">Start New Order</button>
      </div>
`;

let contenidoDeConfirma = confirmacion.innerHTML = confirma;

export { contenidoDeConfirma };
