// app.js — lógica completa para The Boss (con imágenes locales)

// ---------- Config ----------
const BUSINESS_PHONE = '573123723999'; // <- reemplaza por el número real (sin '+')
const DELIVERY_FEE = 5000; // tarifa por defecto de domicilio

// ---------- Datos de ejemplo ----------
const products = [
  // ===== MENU INFANTIL =====
   {
  id: 'inf1',
  category: 'Menú Infantil',
  title: 'Hamburguesa Mate',
  price: 16000,
  desc: '100 gr de carne a la parrilla, jamón, queso, jugo de caja, acompañado de papas a la francesa.',
  ingredients: ['Carne a la parrilla 100g', 'Jamón', 'Queso', 'Jugo de caja', 'Papas a la francesa'],
  extras: [
    { name: 'Queso adicional', price: 3000 },
    { name: 'Tocineta', price: 4000 },
    { name: 'Papas adicionales', price: 3000 }
  ],
  image: 'images/hamburguesa-mate.png'
},
{
  id: 'inf2',
  category: 'Menú Infantil',
  title: 'Perro Guido',
  price: 16000,
  desc: 'Salchicha tipo americana, jamón, queso, jugo de caja, acompañado de papas a la francesa.',
  ingredients: ['Salchicha americana', 'Jamón', 'Queso', 'Jugo de caja', 'Papas a la francesa'],
  extras: [
    { name: 'Queso adicional', price: 3000 },
    { name: 'Tocineta', price: 4000 },
    { name: 'Extra salsa', price: 2000 }
  ],
  image: 'images/perro-guido.png'
},
{
  id: 'inf3',
  category: 'Menú Infantil',
  title: 'Deditos de Pollo al Rayo McQueen',
  price: 17000,
  desc: 'Dedos de pollo apanados artesanales, jugo de caja, acompañado de papas a la francesa.',
  ingredients: ['Dedos de pollo artesanales', 'Jugo de caja', 'Papas a la francesa'],
  extras: [
    { name: 'Queso adicional', price: 3000 },
    { name: 'Salsas adicionales', price: 2000 },
    { name: 'Papas adicionales', price: 3000 }
  ],
  image: 'images/deditos-mcqueen.png'
},

{
  id: 'inf4',
  category: 'Menú Infantil',
  title: 'Mini Pizzeta Sally (Queso, Jamón y Piña)',
  price: 17000,
  desc: 'Mini pizzeta de 4 porciones con queso, jamón y piña en cuadritos.',
  ingredients: ['Queso', 'Jamón', 'Piña en cuadritos', 'Masa de pizzeta'],
  extras: [
    { name: 'Queso adicional', price: 3000 },
    { name: 'Jamón adicional', price: 2000 }
  ],
  image: 'images/mini-pizzeta-sally-queso-jamon-pina.png'
},
{
  id: 'inf5',
  category: 'Menú Infantil',
  title: 'Mini Pizzeta Sally (Pollo, Queso y Jamón)',
  price: 17000,
  desc: 'Mini pizzeta de 4 porciones con pollo, queso y jamón.',
  ingredients: ['Pollo', 'Queso', 'Jamón', 'Masa de pizzeta'],
  extras: [
    { name: 'Queso adicional', price: 3000 },
    { name: 'Pollo adicional', price: 2000 }
  ],
  image: 'images/mini-pizzeta-sally-pollo-queso-jamon.png'
},
// ===== PIZZETAS ARTESANALES =====
{
  id: 'pizz1',
  category: 'Pizzetas Artesanales',
  title: 'Tesla',
  price: 25000,
  desc: 'Pizzeta artesanal con pollo, queso, maíz, cebolla y pimentón.',
  ingredients: ['Pollo', 'Queso', 'Maíz', 'Cebolla', 'Pimentón'],
  extras: [
    { name: 'Queso adicional', price: 3000 },
    { name: 'Tocineta', price: 4000 },
    { name: 'Extra salsa', price: 2000 }
  ],
  image: 'images/pizzeta-tesla.png'
},
{
  id: 'pizz2',
  category: 'Pizzetas Artesanales',
  title: "Oscar's",
  price: 27000,
  desc: 'Pollo, cabano, queso, tomate y salsa pesto en masa artesanal.',
  ingredients: ['Pollo', 'Cabano', 'Queso', 'Tomate', 'Salsa pesto'],
  extras: [
    { name: 'Queso adicional', price: 3000 },
    { name: 'Salsa adicional', price: 2000 },
    { name: 'Tocineta', price: 4000 }
  ],
  image: 'images/pizzeta-oscars.png'
},
{
  id: 'pizz3',
  category: 'Pizzetas Artesanales',
  title: 'Genesis',
  price: 25000,
  desc: 'Queso, piña y jamón sobre base artesanal.',
  ingredients: ['Queso', 'Piña', 'Jamón'],
  extras: [
    { name: 'Extra jamón', price: 3000 },
    { name: 'Extra piña', price: 2000 }
  ],
  image: 'images/pizzeta-genesis.png'
},
{
  id: 'pizz4',
  category: 'Pizzetas Artesanales',
  title: 'Chery',
  price: 25000,
  desc: 'Carne molida, maíz, pimentón, cebolla, jalapeño, tostacos y queso.',
  ingredients: ['Carne molida', 'Maíz', 'Pimentón', 'Cebolla', 'Jalapeño', 'Tostacos', 'Queso'],
  extras: [
    { name: 'Queso adicional', price: 3000 },
    { name: 'Jalapeños extra', price: 2000 },
    { name: 'Tostacos adicionales', price: 2000 }
  ],
  image: 'images/pizzeta-chery.png'
},
{
  id: 'pizz5',
  category: 'Pizzetas Artesanales',
  title: 'Lada',
  price: 25000,
  desc: 'Queso y bocadillo sobre base artesanal.',
  ingredients: ['Queso', 'Bocadillo'],
  extras: [
    { name: 'Queso adicional', price: 3000 },
    { name: 'Extra bocadillo', price: 2000 }
  ],
  image: 'images/pizzeta-lada.png'
},
{
  id: 'pizz6',
  category: 'Pizzetas Artesanales',
  title: 'Jac',
  price: 25000,
  desc: 'Pollo, champiñones y queso.',
  ingredients: ['Pollo', 'Champiñones', 'Queso'],
  extras: [
    { name: 'Queso adicional', price: 3000 },
    { name: 'Extra champiñones', price: 2000 }
  ],
  image: 'images/pizzeta-jac.png'
},
{
  id: 'pizz7',
  category: 'Pizzetas Artesanales',
  title: 'Apollo',
  price: 25000,
  desc: 'Pollo, tocineta, queso y miel mostaza.',
  ingredients: ['Pollo', 'Tocineta', 'Queso', 'Miel mostaza'],
  extras: [
    { name: 'Queso adicional', price: 3000 },
    { name: 'Extra tocineta', price: 4000 }
  ],
  image: 'images/pizzeta-apollo.png'
},
{
  id: 'pizz8',
  category: 'Pizzetas Artesanales',
  title: 'Lancia',
  price: 27000,
  desc: 'Carne en cuadros, chorizo, queso, maíz, cebolla y pimentón.',
  ingredients: ['Carne en cuadros', 'Chorizo', 'Queso', 'Maíz', 'Cebolla', 'Pimentón'],
  extras: [
    { name: 'Extra carne', price: 4000 },
    { name: 'Extra chorizo', price: 4000 }
  ],
  image: 'images/pizzeta-lancia.png'
},
{
  id: 'pizz9',
  category: 'Pizzetas Artesanales',
  title: 'Brabus',
  price: 25000,
  desc: 'Queso, tomate asado y salsa pesto.',
  ingredients: ['Queso', 'Tomate asado', 'Salsa pesto'],
  extras: [
    { name: 'Queso adicional', price: 3000 },
    { name: 'Extra salsa pesto', price: 2000 }
  ],
  image: 'images/pizzeta-brabus.png'
},
{
  id: 'pizz10',
  category: 'Pizzetas Artesanales',
  title: 'Rubicon',
  price: 25000,
  desc: 'Queso, tocineta y maíz.',
  ingredients: ['Queso', 'Tocineta', 'Maíz'],
  extras: [
    { name: 'Queso adicional', price: 3000 },
    { name: 'Extra tocineta', price: 4000 }
  ],
  image: 'images/pizzeta-rubicon.png'
},
{
  id: 'pizz11',
  category: 'Pizzetas Artesanales',
  title: 'Infiniti',
  price: 27000,
  desc: 'Pepperoni y queso sobre masa artesanal.',
  ingredients: ['Pepperoni', 'Queso'],
  extras: [
    { name: 'Extra pepperoni', price: 4000 },
    { name: 'Queso adicional', price: 3000 }
  ],
  image: 'images/pizzeta-infiniti.png'
},
{
  id: 'pizz12',
  category: 'Pizzetas Artesanales',
  title: 'Abarth',
  price: 30000,
  desc: 'Camarones al ajillo, queso, cebolla y pimentón.',
  ingredients: ['Camarones al ajillo', 'Queso', 'Cebolla', 'Pimentón'],
  extras: [
    { name: 'Queso adicional', price: 3000 },
    { name: 'Extra camarones', price: 5000 }
  ],
  image: 'images/pizzeta-abarth.png'
},
{
  id: 'pizz13',
  category: 'Pizzetas Artesanales',
  title: 'Vegetariana',
  price: 27000,
  desc: 'Champiñones, pimentón, cebolla, maíz y queso.',
  ingredients: ['Champiñones', 'Pimentón', 'Cebolla', 'Maíz', 'Queso'],
  extras: [
    { name: 'Queso adicional', price: 3000 },
    { name: 'Extra champiñones', price: 2000 }
  ],
  image: 'images/pizzeta-vegetariana.png'
}
,

//ANTOJITOS
{
  id: 'mazorca-mustang',
  category: 'Antojitos',
  title: 'Mazorca Mustang',
  price: 13000,
  desc: 'Mazorca en tusa asada a la parrilla bañada en salsa de la casa y queso rallado.',
  ingredients: ['Mazorca asada', 'Salsa de la casa', 'Queso rallado'],
  extras: [
    { name: 'Queso adicional', price: 3000 },
    { name: 'Tocineta adicional', price: 2000 }
  ],
  image: 'images/mazorca-mustang.png'
},
{
  id: 'aros-cebolla-apanado',
  category: 'Antojitos',
  title: 'Aros de Cebolla Apanado',
  price: 15000,
  desc: '5 aros de cebolla apanados.',
  ingredients: ['Cebolla', 'Apanado'],
  extras: [
    { name: 'Porción adicional de aros', price: 3000 },
    { name: 'Salsa extra', price: 2000 }
  ],
  image: 'images/aros-cebolla-apanado.png'
},
{
  id: 'papas-tesla',
  category: 'Antojitos',
  title: 'Papas Tesla',
  price: 15000,
  desc: 'Papas a la francesa y chorizo bañadas en salsa de la casa y queso rallado.',
  ingredients: ['Papas a la francesa', 'Chorizo', 'Salsa de la casa', 'Queso rallado'],
  extras: [
    { name: 'Queso adicional', price: 3000 },
    { name: 'Chorizo adicional', price: 2000 }
  ],
  image: 'images/papas-tesla.png'
},
{
  id: 'patacones-civic',
  category: 'Antojitos',
  title: 'Patacones Civic',
  price: 10000,
  desc: 'Tres patacones en moneda: uno con queso costeño, otro con suero y otro con salsa de ceviche.',
  ingredients: ['Patacones', 'Queso costeño', 'Suero', 'Salsa de ceviche'],
  extras: [
    { name: 'Porción adicional de patacones', price: 3000 },
    { name: 'Salsa extra', price: 2000 }
  ],
  image: 'images/patacones-civic.png'
},
{
  id: 'papas-fiat',
  category: 'Antojitos',
  title: 'Papas Fiat',
  price: 13000,
  desc: 'Papas a la francesa, tocineta ahumada, piña en cuadros, queso rallado y salsa de la casa.',
  ingredients: ['Papas a la francesa', 'Tocineta ahumada', 'Piña', 'Queso rallado', 'Salsa de la casa'],
  extras: [
    { name: 'Queso adicional', price: 3000 },
    { name: 'Tocineta adicional', price: 2000 }
  ],
  image: 'images/papas-fiat.png'
},
{
  id: 'enchula-tus-papas',
  category: 'Antojitos',
  title: 'Enchula tus Papas',
  price: 5000,
  desc: 'Papas bañadas en queso rallado, tocineta ahumada y salsa de la casa.',
  ingredients: ['Papas', 'Queso rallado', 'Tocineta ahumada', 'Salsa de la casa'],
  extras: [
    { name: 'Queso adicional', price: 3000 },
    { name: 'Tocineta adicional', price: 2000 }
  ],
  image: 'images/enchula-tus-papas.png'
}
,

//ENSALADAS
{
  id: 'oscars',
  category: 'Ensaladas',
  title: "Oscar's",
  price: 18000,
  desc: 'Pollo desmenuzado, lechuga batavia, mezclado con trocitos de jamón, queso y piña.',
  ingredients: ['Pollo desmenuzado', 'Lechuga batavia', 'Jamón', 'Queso', 'Piña'],
  extras: [
    { name: 'Queso adicional', price: 3000 },
    { name: 'Pollo adicional', price: 2000 }
  ],
  image: 'images/ensalada-oscars.png'
},
{
  id: 'volvo',
  category: 'Ensaladas',
  title: 'Volvo',
  price: 18000,
  desc: 'Jugosos cortes de pollo, lechuga crespa, lechuga batavia, crotones, trocitos de queso bañados en vinagreta de salsa miel mostaza.',
  ingredients: ['Pollo', 'Lechuga crespa', 'Lechuga batavia', 'Crotones', 'Queso', 'Vinagreta de miel mostaza'],
  extras: [
    { name: 'Queso adicional', price: 3000 },
    { name: 'Crotones extra', price: 2000 }
  ],
  image: 'images/ensalada-volvo.png'
},
{
  id: 'grand-vitara',
  category: 'Ensaladas',
  title: 'Grand Vitara',
  price: 18000,
  desc: 'Pollo desmenuzado, lechuga crespa, lechuga batavia, tomate rojo, crotones y queso rallado bañados en vinagreta miel mostaza.',
  ingredients: ['Pollo desmenuzado', 'Lechuga crespa', 'Lechuga batavia', 'Tomate rojo', 'Crotones', 'Queso rallado', 'Vinagreta miel mostaza'],
  extras: [
    { name: 'Queso adicional', price: 3000 },
    { name: 'Pollo adicional', price: 2000 }
  ],
  image: 'images/ensalada-grand-vitara.png'
}
,




// Bebidas
{
    id: 'bebida1',
    category: 'Bebidas',
    title: 'Gaseosa 1.5L - CocaCola',
    price: 8000,
    desc: 'Gaseosa Coca-Cola de 1.5 litros.',
    image: 'images/gaseosa-coca.png'
  },
  {
    id: 'bebida2',
    category: 'Bebidas',
    title: 'Gaseosa 1.5L - Postobón',
    price: 7000,
    desc: 'Gaseosa Postobón de 1.5 litros.',
    image: 'images/gaseosa-postobon.png'
  },
  {
    id: 'bebida3',
    category: 'Bebidas',
    title: 'Gaseosa PET 400ml - Postobón',
    price: 4000,
    desc: 'Gaseosa Postobón en presentación PET de 400ml.',
    image: 'images/gaseosa-pet-postobon.png'
  },
  {
    id: 'bebida4',
    category: 'Bebidas',
    title: 'Gaseosa PET 400ml - Coca-Cola',
    price: 4000,
    desc: 'Gaseosa Coca-Cola en presentación PET de 400ml.',
    image: 'images/gaseosa-pet-coca.png'
  },
  {
    id: 'bebida5',
    category: 'Bebidas',
    title: 'Gaseosa Familiar',
    price: 12000,
    desc: 'Gaseosa en presentación familiar para compartir.',
    image: 'images/gaseosa-familiar.png'
  },
  {
    id: 'bebida6',
    category: 'Bebidas',
    title: 'Jugo Hit 1.5L',
    price: 7000,
    desc: 'Jugo Hit de 1.5 litros.',
    image: 'images/jugo-hit-1.5.png'
  },
  {
    id: 'bebida7',
    category: 'Bebidas',
    title: 'Jugo PET 600ml',
    price: 4000,
    desc: 'Jugo en presentación PET de 600ml.',
    image: 'images/jugo-pet-600.png'
  },
  {
    id: 'bebida8',
    category: 'Bebidas',
    title: 'Agua',
    price: 3000,
    desc: 'Agua pura natural sin gas.',
    image: 'images/agua.png'
  },
  {
    id: 'bebida9',
    category: 'Bebidas',
    title: 'Agua con gas',
    price: 3000,
    desc: 'Agua mineral con gas.',
    image: 'images/agua-gas.png'
  },

  {
    id: 'jugo1',
    category: 'Jugos Naturales',
    title: 'Mora',
    price: 7000, // Precio con leche
    priceAlt: 6000, // Precio con agua
    desc: 'Jugo natural de mora. Puedes elegir entre agua o leche.',
    image: 'images/jugo-mora.png'
  },
  {
    id: 'jugo2',
    category: 'Jugos Naturales',
    title: 'Fresa',
    price: 7000, // Precio con leche
    priceAlt: 6000, // Precio con agua
    desc: 'Jugo natural de fresa. Puedes elegir entre agua o leche.',
    image: 'images/jugo-fresa.png'
  },
  {
    id: 'jugo3',
    category: 'Jugos Naturales',
    title: 'Maracuyá',
    price: 7000, // Precio con leche
    priceAlt: 6000, // Precio con agua
    desc: 'Jugo natural de maracuyá. Puedes elegir entre agua o leche.',
    image: 'images/jugo-maracuya.png'
  },
    {
    id: 'limonada1',
    category: 'Limonadas',
    title: 'Limonada Clásica',
    price: 8000,
    desc: 'Limonada fresca natural.',
    image: 'images/limonada.png'
  },
  {
    id: 'limonada2',
    category: 'Limonadas',
    title: 'Cerezada',
    price: 8000,
    desc: 'Limonada natural con un toque de cereza.',
    image: 'images/cerezada.png'
  },
  {
    id: 'limonada3',
    category: 'Limonadas',
    title: 'Limonada Simple',
    price: 7000,
    desc: 'Limonada refrescante, opción económica.',
    image: 'images/limonada-simple.png'
  }
];

const categories = [...new Set(products.map(p=>p.category))];

// ---------- Estado ----------
let cart = JSON.parse(localStorage.getItem('tb_cart') || '[]');
let activeCategory = 'Menú Infantil';

// ---------- DOM refs ----------
const catalogEl = document.getElementById('catalog');
const categoriesEl = document.querySelector('.categories');
const navBtns = document.querySelectorAll('.nav-btn');
const cartCountEl = document.getElementById('cart-count');
const cartDrawer = document.getElementById('cart-drawer');
const cartItemsEl = document.getElementById('cart-items');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartDeliveryEl = document.getElementById('cart-delivery');
const cartTotalEl = document.getElementById('cart-total');
const openCartBtn = document.getElementById('open-cart');
const closeCartBtn = document.getElementById('close-cart');
const checkoutBtn = document.getElementById('checkout-btn');
const productModal = document.getElementById('product-modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const checkoutModal = document.getElementById('checkout-modal');
const checkoutForm = document.getElementById('checkout-form');
const addressLabel = document.getElementById('address-label');
const checkoutClose = document.getElementById('checkout-close');
const backToCartBtn = document.getElementById('back-to-cart');
const clearCartBtn = document.getElementById('clear-cart');
const searchInput = document.getElementById('search');

// ---------- Init ----------
function init(){
  renderCategories();
  setActiveCategory(activeCategory);
  bindEvents();
  refreshCartUI();
}
init();

// ---------- Render categorías ----------
function renderCategories(){
  categoriesEl.innerHTML = '';
  categories.forEach(cat=>{
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = cat === activeCategory ? 'active' : '';
    btn.dataset.cat = cat;
    btn.textContent = capitalize(cat);
    btn.addEventListener('click', ()=> switchCategory(cat));
    categoriesEl.appendChild(btn);
  });
}

// ---------- Cambiar categoría ----------
function setActiveCategory(cat){
  activeCategory = cat;
  Array.from(document.querySelectorAll('.categories button')).forEach(b=> b.classList.toggle('active', b.dataset.cat === cat));
  Array.from(navBtns).forEach(b=> b.classList.toggle('active', b.dataset.cat === cat));
  renderProducts(cat);
}

function switchCategory(cat){
  const ct = catalogEl;
  ct.classList.remove('fade-in');
  ct.classList.add('fade-out');
  setTimeout(()=>{
    setActiveCategory(cat);
    ct.classList.remove('fade-out');
    ct.classList.add('fade-in');
  }, 180);
}
// ---------- Render productos ----------
function renderProducts(cat) { 
  const q = (searchInput.value || '').trim().toLowerCase();
  const items = products.filter(p => 
    p.category === cat && 
    (p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
  );

  catalogEl.innerHTML = '';

  if (items.length === 0) {
    catalogEl.innerHTML = `<div class="no-results">No hay productos</div>`;
    return;
  }

  items.forEach(p => {
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}">
      <div class="title">${escapeHtml(p.title)}</div>
      <div class="desc">${escapeHtml(p.desc)}</div>
      <div class="meta">
        <div class="price">$${numberWithCommas(p.price)}</div>
        <button class="add" data-id="${p.id}">Agregar</button>
      </div>
    `;
    el.querySelector('.add').addEventListener('click', () => openProductModal(p.id));
    catalogEl.appendChild(el);
  });
}


// ---------- MINI MODAL CLEAN ----------
// ---------- FUNCION CORREGIDA: openProductModal ----------
function openProductModal(id, cartIndex = null) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  // === CREAR OVERLAY ===
  const overlay = document.createElement("div");
  overlay.className = "product-overlay";
  overlay.innerHTML = `
    <div class="product-sheet">
      <div class="modal-header">
        <span class="close">&times;</span>
      </div>

      <div class="modal-body">
        <div class="image-wrap">
          <img src="${p.image}" alt="${p.title}">
        </div>

        <div class="info">
          <h2>${p.title}</h2>
          <p>${p.desc}</p>

          ${
            p.extras?.length
              ? `<h3>Adiciones</h3>
              <div class="extras-list">
                ${p.extras
                  .map(
                    (e, i) => `
                      <label>
                        <input type="checkbox" data-name="${e.name}" data-price="${e.price}">
                        <span>${e.name}</span>
                        <span class="extra-controls" data-index="${i}">
                          <button class="minus-extra">−</button>
                          <span class="extra-qty">0</span>
                          <button class="plus-extra">+</button>
                        </span>
                        <small>+$${numberWithCommas(e.price)}</small>
                      </label>
                    `
                  )
                  .join("")}
              </div>` : ""
          }

          <div class="quantity">
            <button class="minus">−</button>
            <span class="qty">1</span>
            <button class="plus">+</button>
          </div>

          <button class="add-btn">
            ${cartIndex !== null ? 'Actualizar' : 'Agregar'} <span class="price">$${numberWithCommas(p.price)}</span>
          </button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  // === CIERRE DEL MODAL ===
  const closeBtn = overlay.querySelector(".close");
  closeBtn.addEventListener("click", () => overlay.remove());
  overlay.addEventListener("click", e => {
    if (e.target === overlay) overlay.remove();
  });

  // === VARIABLES ===
  let qty = 1;
  const qtyEl = overlay.querySelector(".qty");
  const priceEl = overlay.querySelector(".price");
  const extrasQty = Array(p.extras?.length || 0).fill(0);
  const extrasInputs = overlay.querySelectorAll(".extras-list input");

  // --- SI ES EDICIÓN, CARGAR VALORES EXISTENTES ---
  if (cartIndex !== null) {
    const item = cart[cartIndex];
    qty = item.qty;
    qtyEl.textContent = qty;
    if (item.extras?.length) {
      item.extras.forEach(e => {
        const index = p.extras.findIndex(pe => pe.name === e.name);
        if (index > -1) extrasQty[index] = e.qty;
      });
    }
    extrasInputs.forEach((input, i) => {
      input.checked = extrasQty[i] > 0;
      const qtyDisplay = input.closest('label').querySelector('.extra-qty');
      qtyDisplay.textContent = extrasQty[i];
    });
    updatePrice();
  }

  // === ACTUALIZAR PRECIO ===
  function updatePrice() {
    const extrasTotal = (p.extras || []).reduce((sum, e, i) => sum + e.price * extrasQty[i], 0);
    const total = (p.price + extrasTotal) * qty;
    priceEl.textContent = `$${numberWithCommas(total)}`;
  }

  // === BOTONES DE CANTIDAD PRINCIPAL ===
  overlay.querySelector(".plus").addEventListener("click", () => { qty++; qtyEl.textContent = qty; updatePrice(); });
  overlay.querySelector(".minus").addEventListener("click", () => { if(qty>1){qty--;qtyEl.textContent=qty;updatePrice();} });

  // === BOTONES DE CADA EXTRA ===
  overlay.querySelectorAll(".plus-extra").forEach(btn => {
    const index = Number(btn.parentElement.dataset.index);
    const qtyDisplay = btn.parentElement.querySelector(".extra-qty");
    btn.addEventListener("click", () => { extrasQty[index]++; qtyDisplay.textContent=extrasQty[index]; extrasInputs[index].checked=extrasQty[index]>0; updatePrice(); });
  });
  overlay.querySelectorAll(".minus-extra").forEach(btn => {
    const index = Number(btn.parentElement.dataset.index);
    const qtyDisplay = btn.parentElement.querySelector(".extra-qty");
    btn.addEventListener("click", () => { if(extrasQty[index]>0){ extrasQty[index]--; qtyDisplay.textContent=extrasQty[index]; extrasInputs[index].checked=extrasQty[index]>0; updatePrice(); } });
  });

  // === AGREGAR O ACTUALIZAR EN EL CARRITO ===
  overlay.querySelector(".add-btn").addEventListener("click", () => {
    const extras = (p.extras || []).map((e, i) => ({ name: e.name, price: e.price, qty: extrasQty[i] })).filter(e => e.qty > 0);
    const extrasSum = extras.reduce((a, e) => a + e.price * e.qty, 0);
    const finalUnitPrice = p.price + extrasSum;

    const item = { productId: p.id, title: p.title, price: finalUnitPrice, qty, image: p.image, extras };

    if (cartIndex !== null) {
      cart[cartIndex] = item; // actualizar producto existente
    } else {
      addToCart(item); // agregar producto nuevo
    }

    persistCart();
    refreshCartUI();
    updateCartBadge();
    overlay.remove();
    cartDrawer.classList.remove('hidden'); // mostrar carrito actualizado
  });
}




// ---------- Carrito ----------

// Agregar producto al carrito
function addToCart(item) {
  // Si ya existe el mismo producto con las mismas adiciones, solo aumentar cantidad
  const existing = cart.find(c => 
    c.productId === item.productId && 
    JSON.stringify(c.extras) === JSON.stringify(item.extras)
  );

  if (existing) {
    existing.qty += item.qty;
  } else {
    cart.push(item);
  }
  persistCart();
  refreshCartUI();
  updateCartBadge();
}

// Guardar en localStorage
function persistCart() {
  localStorage.setItem('tb_cart', JSON.stringify(cart));
}

// Actualizar contador del ícono del carrito
function updateCartBadge() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  cartCountEl.textContent = count;
}

// Renderizar los ítems del carrito
// ---------- Carrito ----------
// ---------- refreshCartUI CORREGIDA PARA REFLEJAR CAMBIOS ----------
function refreshCartUI() {
  cartItemsEl.innerHTML = '';
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<div class="empty">Tu carrito está vacío 🍦</div>';
    cartSubtotalEl.textContent = '$0';
    cartDeliveryEl.textContent = '$0';
    cartTotalEl.textContent = '$0';
    updateCartBadge();
    return;
  }

  let subtotal = 0;

  cart.forEach((item, idx) => {
    // --- CALCULAR PRECIO REAL DEL ITEM CON EXTRAS ---
    const extrasTotal = item.extras?.reduce((sum, e) => sum + e.price * e.qty, 0) || 0;
    const itemUnitPrice = item.price - extrasTotal; // precio base
    const itemTotal = (itemUnitPrice + extrasTotal) * item.qty;
    subtotal += itemTotal;

    const extrasText = item.extras?.length
      ? item.extras.map(e => `+ ${e.name} x${e.qty} ($${numberWithCommas(e.price * e.qty)})`).join('<br>')
      : '';

    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img class="cart-item-img" src="${item.image}" alt="${item.title}">
      <div class="info">
        <h4>${item.title}</h4>
        ${extrasText ? `<small>${extrasText}</small>` : ''}
        <div class="qty-controls">
          <button class="minus">−</button>
          <span>${item.qty}</span>
          <button class="plus">+</button>
        </div>
      </div>
      <div class="price">
        <span>$${numberWithCommas(itemTotal)}</span>
        <button class="remove-btn" title="Eliminar producto">🗑️</button>
      </div>
    `;

    // --- CONTROL DE CANTIDAD ---
    div.querySelector('.plus').addEventListener('click', () => {
      item.qty++;
      persistCart();
      refreshCartUI();
    });

    div.querySelector('.minus').addEventListener('click', () => {
      if (item.qty > 1) {
        item.qty--;
      } else {
        cart.splice(idx, 1);
      }
      persistCart();
      refreshCartUI();
    });

    // --- ELIMINAR PRODUCTO ---
    div.querySelector('.remove-btn').addEventListener('click', () => {
      if (confirm(`¿Eliminar "${item.title}" del carrito?`)) {
        cart.splice(idx, 1);
        persistCart();
        refreshCartUI();
      }
    });

    // --- EDITAR PRODUCTO DESDE EL CARRITO ---
    div.addEventListener('click', (e) => {
      if (!e.target.classList.contains('minus') && !e.target.classList.contains('plus') && !e.target.classList.contains('remove-btn')) {
        cartDrawer.classList.add('hidden'); // esconder carrito
        openProductModal(item.productId, idx); // enviar índice para edición
      }
    });

    cartItemsEl.appendChild(div);
  });

  cartSubtotalEl.textContent = `$${numberWithCommas(subtotal)}`;
  cartDeliveryEl.textContent = `$${numberWithCommas(DELIVERY_FEE)}`;
  cartTotalEl.textContent = `$${numberWithCommas(subtotal)}`;
  updateCartBadge();
}













// ---------- Interacciones UI ----------
openCartBtn.addEventListener('click', ()=>{ cartDrawer.classList.remove('hidden'); cartDrawer.setAttribute('aria-hidden','false'); });
closeCartBtn.addEventListener('click', ()=>{ cartDrawer.classList.add('hidden'); cartDrawer.setAttribute('aria-hidden','true'); });
checkoutBtn.addEventListener('click', ()=>{ cartDrawer.classList.add('hidden'); openCheckout(); });
clearCartBtn.addEventListener('click', ()=>{ if(confirm('Vaciar carrito?')){ cart = []; persistCart(); refreshCartUI(); } });

// ---------- Checkout ----------

// ---------- Checkout ----------
function openCheckout() {
  if (cart.length === 0) { 
    alert('El carrito está vacío.'); 
    return; 
  }

  // 🔹 Recalcular subtotal actual (incluyendo extras)
const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);


  const delivery = 0; // por defecto
  const total = subtotal + delivery;

  // 🔹 Actualizar DOM inicial
  document.getElementById('cart-subtotal').textContent = `$${numberWithCommas(subtotal)}`;
  document.getElementById('cart-delivery').textContent = `$${numberWithCommas(delivery)}`;
  document.getElementById('cart-total').textContent = `$${numberWithCommas(total)}`;
  document.getElementById('cart-total-checkout').textContent = `$${numberWithCommas(total)}`;

  // 🔹 Reset formulario
  checkoutForm.reset();
  document.getElementById('address-label').classList.add('hidden');
  document.getElementById('envio-row').classList.add('hidden');

  // 🔹 Mostrar modal
  checkoutModal.classList.remove('hidden');
  checkoutModal.setAttribute('aria-hidden', 'false');

  // 🔹 Recalcular al cambiar método (recoger/domicilio)
  const radios = checkoutForm.querySelectorAll('input[name="method"]');
  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      const method = checkoutForm.querySelector('input[name="method"]:checked')?.value || 'recoger';
      const addressLabel = document.getElementById('address-label');
      const envioRow = document.getElementById('envio-row');
      const deliveryEl = document.getElementById('cart-delivery');
      const totalCheckoutEl = document.getElementById('cart-total-checkout');

      const DELIVERY_FEE = 5000;
      const delivery = (method === 'domicilio' && subtotal > 0) ? DELIVERY_FEE : 0;
      const totalUpdated = subtotal + delivery;

      // Mostrar/ocultar campos
      addressLabel.classList.toggle('hidden', method !== 'domicilio');
      envioRow.classList.toggle('hidden', method !== 'domicilio');

      // Actualizar montos
      deliveryEl.textContent = `$${numberWithCommas(delivery)}`;
      totalCheckoutEl.textContent = `$${numberWithCommas(totalUpdated)}`;
    });
  });
}


checkoutClose.addEventListener('click', () => {
  checkoutModal.classList.add('hidden');
  checkoutModal.setAttribute('aria-hidden', 'true');
});

backToCartBtn.addEventListener('click', () => {
  checkoutModal.classList.add('hidden');
  cartDrawer.classList.remove('hidden');
});

// === Calcular totales del checkout ===
function updateCheckoutTotals() {
  const method = checkoutForm.querySelector('input[name="method"]:checked')?.value || 'recoger';
  const envioRow = document.getElementById('envio-row');
  const subtotalEl = document.getElementById('cart-subtotal-checkout');
  const deliveryEl = document.getElementById('cart-delivery-checkout');
  const totalEl = document.getElementById('cart-total-checkout');

  const DELIVERY_FEE = 5000; // mismo valor usado en refreshCartUI

  // Mostrar u ocultar campo de dirección
  addressLabel.classList.toggle('hidden', method !== 'domicilio');

  // 🧾 Heredamos los valores que ya calcula refreshCartUI()
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  // 🚚 Si el método es domicilio, se suma el envío
  const delivery = method === 'domicilio' && subtotal > 0 ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  // Mostrar/ocultar fila de envío
  envioRow.classList.toggle('hidden', method !== 'domicilio');

  // ✅ Actualizar DOM (heredado del refreshCartUI, con ajuste solo si hay envío)
  subtotalEl.textContent = document.getElementById('cart-subtotal').textContent;
  deliveryEl.textContent = document.getElementById('cart-delivery').textContent;
  totalEl.textContent = method === 'domicilio'
    ? `$${numberWithCommas(total)}`
    : document.getElementById('cart-total-checkout').textContent;
}


checkoutForm.addEventListener('change', updateCheckoutTotals);






// Envío por WhatsApp
checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const fd = new FormData(checkoutForm);
  const clientName = fd.get('name')?.trim() || '';
  const clientPhone = fd.get('phone')?.trim() || '';
  const method = fd.get('method') || 'recoger';
  const payment = fd.get('payment') || '';
  const address = fd.get('address')?.trim() || '';
  const notes = fd.get('notes')?.trim() || '';

  let textParts = [];

  // Cabecera
  textParts.push('🧾 *Nuevo Pedido - Oscars La Parrilla✅*');
  textParts.push(`👤 Cliente: ${clientName}`);
  textParts.push(`📞 Teléfono: ${clientPhone}`);
  textParts.push(`🚚 Tipo: ${method}`);
  if (method === 'domicilio') textParts.push(`🏠 Dirección: ${address}`);
  textParts.push(`💳 Pago: ${payment}`);
  textParts.push('');
  textParts.push('🍔 *Detalle del pedido:*');

  let subtotal = 0;

  cart.forEach(item => {
    // Calcular precio de extras individualmente
    const extras = item.extras || [];
    const extrasLines = extras.map(e => `   ➕ ${e.qty}x ${e.name} ($${numberWithCommas(e.price * e.qty)})`).join('\n');
    const extrasSum = extras.reduce((sum, e) => sum + e.price * e.qty, 0);

    const itemTotal = (item.price + extrasSum) * item.qty;
    subtotal += itemTotal;

    // Mostrar solo precio del artículo base + extras detallados
    textParts.push(`${item.qty}x ${item.title} — *$${numberWithCommas(item.price * item.qty)}*`);
    if (extrasLines) textParts.push(extrasLines);

    // Si hay toppings removidos
    if (item.removed && item.removed.length) {
      textParts.push(`   ⚠️ Toppings removidos: ${item.removed.join(', ')}`);
    }
  });

  const delivery = method === 'domicilio' ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  // Resumen de totales
  textParts.push('');
  textParts.push(`🧮 Subtotal: $${numberWithCommas(subtotal)}`);
  textParts.push(method === 'domicilio'
    ? `🚗 Envío: $${numberWithCommas(delivery)}`
    : '🏪 Envío: Sin costo (recoge en el local)');
  textParts.push(`💰 *Total: $${numberWithCommas(total)}*`);

  if (notes) textParts.push(`📝 Notas: ${notes}`);

  // Construir URL para WhatsApp
  const bp = String(BUSINESS_PHONE || '').replace(/\D/g, '');
  if (!bp || bp.length < 8) {
    alert('Configura BUSINESS_PHONE en app.js con el número del negocio.');
    return;
  }

  const msg = encodeURIComponent(textParts.join('\n'));
  const waUrl = `https://wa.me/${bp}?text=${msg}`;

  window.open(waUrl, '_blank');
});





// ---------- Utilidades ----------
function bindEvents(){
  navBtns.forEach(b=> b.addEventListener('click', ()=> setActiveCategory(b.dataset.cat)));
  cartCountEl.addEventListener('dblclick', ()=> { if(confirm('Vaciar carrito?')){ cart = []; persistCart(); refreshCartUI(); } });
  checkoutModal.addEventListener('click', (e)=> { if(e.target === checkoutModal) checkoutModal.classList.add('hidden'); });
  searchInput.addEventListener('input', ()=> renderProducts(activeCategory));
}

function capitalize(s){ return String(s || '').charAt(0).toUpperCase() + String(s || '').slice(1); }
function numberWithCommas(x){ return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
function escapeHtml(s){ return String(s || '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }



// ====== MENÚ LATERAL ======
const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');

menuBtn.addEventListener('click', () => {
  // Primero activamos el menú
  sideMenu.classList.add('show');
  sideMenu.style.opacity = 0;
  sideMenu.style.transform = 'translateX(-20px)'; // empieza desplazado
  sideMenu.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

  // Forzamos el repaint antes de animar
  requestAnimationFrame(() => {
    sideMenu.style.opacity = 1;
    sideMenu.style.transform = 'translateX(0)';
  });
  sideMenu.classList.remove('hidden');
});


closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('show');
  setTimeout(() => sideMenu.classList.add('hidden'), 350);
});

// Cerrar tocando fuera del panel
sideMenu.addEventListener('click', (e) => {
  if (e.target === sideMenu) {
    sideMenu.classList.remove('show');
    setTimeout(() => sideMenu.classList.add('hidden'), 350);
  }
});




// ====== FORMULARIO DE PAGO ======

document.addEventListener("DOMContentLoaded", () => {
  const paymentSelect = document.getElementById("payment-method");
  const transferInfo = document.getElementById("transfer-info");
  const methodRadios = document.querySelectorAll('input[name="method"]');
  const addressLabel = document.getElementById("address-label");
  const envioRow = document.getElementById("envio-row");
  const cartDelivery = document.getElementById("cart-delivery");
  const DELIVERY_FEE = 5000; // 💰 valor del domicilio
  const accountNumber = document.getElementById("account-number");
  const copyBtn = document.getElementById("copy-account");

  // 🔸 Mostrar u ocultar dirección según método de entrega
  methodRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.value === "domicilio" && radio.checked) {
        addressLabel.classList.remove("hidden");
        envioRow.classList.remove("hidden");
        cartDelivery.textContent = `$${DELIVERY_FEE.toLocaleString()}`;
      } else if (radio.value === "recoger" && radio.checked) {
        addressLabel.classList.add("hidden");
        envioRow.classList.add("hidden");
        cartDelivery.textContent = "$0";
      }
    });
  });

  // 🔸 Mostrar info bancaria solo si selecciona transferencia
  paymentSelect.addEventListener("change", () => {
    if (paymentSelect.value === "transferencia") {
      transferInfo.classList.remove("hidden");
    } else {
      transferInfo.classList.add("hidden");
    }
  });

  // 🔸 Copiar número de cuenta
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(accountNumber.textContent.trim())
      .then(() => {
        copyBtn.textContent = "¡Copiado!";
        copyBtn.classList.add("copied");
        setTimeout(() => {
          copyBtn.textContent = "Copiar";
          copyBtn.classList.remove("copied");
        }, 1800);
      })
      .catch(() => alert("No se pudo copiar"));
  });
});


// --- FORM MULTIPASO (compatible con checkout actual) ---
const form = document.getElementById("checkout-form");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const nextStep1 = document.getElementById("next-step1");
const backStep2 = document.getElementById("back-step2");
const clientSummary = document.getElementById("client-summary");

if (nextStep1) {
  nextStep1.addEventListener("click", () => {
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();

    if (!name || !phone) {
      alert("Por favor completa tu nombre y teléfono.");
      return;
    }

    // Mostrar resumen
    clientSummary.innerHTML = `<strong>${name} </strong><span>${phone}</span>`;

    // Animación de transición
    step1.classList.remove("active");
    step2.classList.add("active");
  });
}

if (backStep2) {
  backStep2.addEventListener("click", () => {
    step2.classList.remove("active");
    step1.classList.add("active");
  });
}



const checkoutOverlay = document.getElementById("checkout-modal");
const btnConfirmOrder = document.getElementById("confirm-order"); // botón en el carrito
const btnBackToCart = document.getElementById("back-to-cart");

btnConfirmOrder?.addEventListener("click", () => {
  checkoutOverlay.classList.remove("hidden");
});

btnBackToCart?.addEventListener("click", () => {
  checkoutOverlay.classList.add("hidden");
});


// También cerrar si se toca fuera del panel
checkoutOverlay.addEventListener("click", (e) => {
  if (e.target === checkoutOverlay) {
    checkoutOverlay.classList.remove("show");
  }
});


