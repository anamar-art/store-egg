/*/ Seleccionar el contenedor de productos
const productsSelector = document.getElementById("products");

/ Definir el template para las tarjetas de productos
let productsTemplate = `
  ${products
    .map((product) => (
      <articule class="product-card">
        <img>
          class="product-img"
          src="${product.imageSrc}"
          alt="${product.title}"
        </img>
        <div class="product-info">
          <span class="product-title">${product.title}</span>
          <span class="product-description">${product.description}</span>
          <div class="product-price-block">
            <span class="product-price">${product.price}</span>
            <span class="product-discount">${product.discount}</span>
          </div>
          <div class="product-tax-policy">
          Incluye impuesto País y percepción AFIP
          </div>
        </div>
      </articule>
    ))
    .join("")}
`;

// Insertar el template en el contenedor de productos
productsSelector.innerHTML = productsTemplate;
function printCards(arrayOfProducts, idSelector) {
  let productsTemplate = "";
  for (const element of arrayOfProducts) {
    productsTemplate = productsTemplate + createCard(element);
  }
  const productsSelector = document.getElementById(idSelector);
  productsSelector.innerHTML = productsTemplate;
}
printCards(products, "products");
<a class="product-card" href="./details.html?id=${product.id}"></a>*/

// Función para crear una tarjeta de producto
function createCard(product) {
  return `
      <a class="product-card" href="./details.html?id=${product.id}">
          <img class="product-img" src="${product.imageSrc}" alt="${product.title}" />
          <div class="product-info">
              <span class="product-title">${product.title}</span>
              <span class="product-color">${product.colors}</span>
              <div class="product-price-block">
                  <span class="product-price">${product.price}</span>
                  <span class="product-discount">${product.discount}</span>
              </div>
              <div class="product-tax-policy">
                  Incluye impuesto País y percepción AFIP
              </div>
          </div>
      </a>
  `;
}

// Función para actualizar la vista de productos
function updateProductView(products) {
  const productsSelector = document.getElementById("products");
  if (productsSelector) {
      const productsTemplate = products.map(createCard).join('');
      productsSelector.innerHTML = productsTemplate;
  }
}