function printDetails(id) {
  // Buscar el producto con el ID especificado
  const product = products.find((each) => each.id === parseInt(id, 10));

  // Crear una plantilla de detalles del producto
  const detailsTemplate = `
    <section class="product-images-block">
      <div class="product-images">
        ${product.images
          .map(
            (image) => `
          <img
            class="mini-img"
            src="${product.imageSrc}"
            alt="${product.title}"
          />
                    <img
            class="mini-img"
            src="${product.imageSrc}"
            alt="${product.title}"
          />
        `
          )
          .join("")}
      </div>
      <img
        class="big-img"
        id="big-img"
        src="${product.imageSrc}"
        alt="${product.title}"
      />
      </section>
      <div class="product-description-block">
        <h1 class="product-title">${product.title}</h1>
        <form class="product-selector">
          <fieldset class="product-fieldset">
            <label class="product-label" for="color">Color</label>
            <select class="product-select" id="color">
              ${product.colors
                .map((color) => `<option value="${color}">${color}</option>`)
                .join("")}
            </select>
          </fieldset>
        </form>
        <div class="product-description">
          <span class="product-label">Descripción</span>
          <p>${product.description}</p>
        </div>
      </div>
      <div class="product-checkout-block">
        <div class="checkout-container">
          <span class="checkout-total-label">Total:</span>
          <h2 id="price" class="checkout-total-price">${product.price}</h2>
          <p class="checkout-description">
            Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
            50711 haciendo la solicitud en AFIP.
          </p>
          <ul class="checkout-policy-list">
            <li>
              <span class="policy-icon">
                <img src="./assets/truck.png" alt="Truck"/>
              </span>
              <span class="policy-desc">
                Agrega el producto al carrito para conocer los costos de envío
              </span>
            </li>
            <li>
              <span class="policy-icon">
                <img src="./assets/plane.png" alt="Plane"/>
              </span>
              <span class="policy-desc">
                Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal
              </span>
            </li>
          </ul>
          <div class="checkout-process">
            <div class="top">
              <input type="number" min="1" id="quantity-${id}" value="1" onchange="changeSubtotal(event)"/>
              <button type="button" class="cart-btn" onclick="saveProduct(${id})">
                Añadir al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

  // Seleccionar el elemento donde se mostrará la plantilla
  const detailsSelector = document.querySelector("#details");

  // Actualizar el HTML del elemento seleccionado con la plantilla
  detailsSelector.innerHTML = detailsTemplate;
}

// Capturar el parámetro ID de la URL
const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");

// Llamar a la función printDetails con el ID capturado
printDetails(id);

//Para hacer cambio de la imagen agrandada a miniatura//
function changeMini(imgSrc) {
  // Selecciona el elemento de la imagen agrandada usando su ID
  let bigImage = document.getElementById('big-img');
  
  // Actualiza el atributo 'src' de la imagen agrandada con la nueva ruta
  bigImage.src = imgSrc;
}

/*function changeSubtotal(event) {
  // Obtener la cantidad de productos desde el evento
  const quantity = parseInt(event.target.value, 10);
  console.log("Cantidad:", quantity);

  // Verificar que la cantidad es válida
    if (isNaN(quantity) || quantity <= 0) {
      console.error("Cantidad no válida");
      return;
    }
    // Buscar el producto con el ID especificado
  const id = new URLSearchParams(location.search).get("id");
  const product = products.find((each) => each.id === parseInt(id, 10));

  if (!product) {
    console.error("Producto no encontrado");
    return;
  }

  // Verificar que el precio del producto sea un número
  const price = parseFloat(product.price);
  console.log("Precio del producto:", price); // Depura el precio

  if (isNaN(price)) {
    console.error("Precio no válido");
    return;
  }

  // Calcular el subtotal
  const subtotal = quantity * price;

  // Seleccionar la etiqueta donde se renderiza el subtotal
  const priceElement = document.querySelector("#price");

  if (priceElement) {
    priceElement.textContent = `$${subtotal.toFixed(2)}`;
  } else {
    console.error("No se encontró el elemento con ID 'price'");
  }
}*/