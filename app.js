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
  renderProducts(activeCategory);
  applyAvailabilityToRendered(); // ✅ justo después del render
}

init();

window.addEventListener('productAvailabilityChanged', e => {
  const { id } = e.detail;
  applyAvailabilityToRendered(id);
});

window.addEventListener('storage', (e) => {
  if (e.key === 'productStatus' || e.key === 'productStatusUpdate') {
    applyAvailabilityToRendered();
    // si hay un modal abierto (product-overlay) actualiza sus extras
    const modal = document.querySelector('.product-overlay');
    if (modal) applyExtrasAvailability(modal);
  }
});




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
    el.dataset.id = p.id; // <-- asegúrate de esto
    el.innerHTML = `
      <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}">
      <div class="title">${escapeHtml(p.title)}</div>
      <div class="desc">${escapeHtml(p.desc)}</div>
      <div class="meta">
        <div class="price">$${numberWithCommas(p.price)}</div>
        <button class="add" data-id="${p.id}">Agregar</button>
      </div>
    `;
    // el evento solo se agrega si el producto está disponible (ver abajo)
    catalogEl.appendChild(el);
  });

  // después de crear las cards, aplicamos disponibilidad y bind de eventos
  applyAvailabilityToRendered();
}


// ====== 🔄 SINCRONIZACIÓN DE DISPONIBILIDAD CON GOOGLE SHEETS ======

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwoiB5wjuWak8Z0CeHenYc93M7UR7K43dPOCRGQ8RmrZjb8CAFywjqC0wGuOWBSI-GZhw/exec'; 
// 👆 el mismo que usas en el admin

async function fetchAvailability() {
  try {
    const res = await fetch(SCRIPT_URL + '?t=' + Date.now()); 
    // 👆 se agrega un timestamp para evitar que el navegador cachee la respuesta

    // Verificar que la respuesta sea correcta
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    // Convertir la data del sheet en un objeto { id: boolean }
    const status = {};
    data.forEach(item => {
      // Aseguramos compatibilidad: TRUE/FALSE, true/false, "TRUE"/"FALSE"
      status[item.id] = item.disponible === true || item.disponible === 'TRUE';
    });

    // Leer el estado anterior del localStorage
    const prevStatus = JSON.parse(localStorage.getItem('productStatus')) || {};

    // Comparar para no refrescar la UI sin necesidad
    if (JSON.stringify(prevStatus) !== JSON.stringify(status)) {
      localStorage.setItem('productStatus', JSON.stringify(status));

      // 🔥 Reaplica visualmente la disponibilidad actualizada
      if (typeof applyAvailabilityToRendered === 'function') {
        applyAvailabilityToRendered();
      }

      console.log('🔁 Estado actualizado desde Google Sheets');
    }

  } catch (err) {
    console.error('❌ Error al obtener disponibilidad:', err);
  }
}

// Ejecutar al cargar la página
fetchAvailability();

// Y volver a consultar cada 5 segundos
setInterval(fetchAvailability, 500);




// lee estados guardados y aplica cambios solo al botón del producto correspondiente
async function applyAvailabilityToRendered(productId = null) {
  // intentar leer desde Google Sheets primero
  let status = {};
  try {
    const res = await fetch(SCRIPT_URL + '?t=' + Date.now());
    const data = await res.json(); // array [{id, disponible}, ...] o similar
    data.forEach(item => {
      // robusto: acepta true/false o "TRUE"/"FALSE"
      status[item.id] = String(item.disponible).toLowerCase() === 'true' || item.disponible === true;
    });
    // actualizar cache local para fallback
    localStorage.setItem('productStatus', JSON.stringify(status));
  } catch (err) {
    // si falla la red, usar localStorage como fallback
    status = JSON.parse(localStorage.getItem('productStatus')) || {};
    console.warn('fetchAvailability fallback to localStorage', err);
  }

  // Si se pide solo un producto, actualiza solo ese
  const cards = productId 
    ? [document.querySelector(`.card[data-id="${productId}"]`)].filter(Boolean)
    : document.querySelectorAll('.card');

  cards.forEach(card => {
    const id = card.dataset.id;
    if (!id) return;

    const addBtn = card.querySelector('.add');
    if (!addBtn) return;

    const disponible = status[id] === undefined ? true : Boolean(status[id]);

    // Reset visual
    addBtn.disabled = false;
    addBtn.textContent = 'Agregar';
    addBtn.classList.remove('agotado-btn');
    addBtn.style.background = '';
    addBtn.style.color = '';

    // Si el producto está agotado, aplicar solo a ese
    if (!disponible) {
      addBtn.disabled = true;
      addBtn.textContent = 'Agotado';
      addBtn.classList.add('agotado-btn');
      addBtn.style.background = '#ccc';
      addBtn.style.color = '#666';
    }
  });
}


// Aplica disponibilidad a los extras dentro del modal (usa key 'extra:{name}')
async function applyExtrasAvailability(modalEl = document) {
  let status = {};

  try {
    const res = await fetch(SCRIPT_URL + '?t=' + Date.now());
    const data = await res.json();

    // 🔥 construimos el objeto de estado de forma robusta
    data.forEach(item => {
      const rawId = item.id ? String(item.id).trim() : "";
      const isAvailable = String(item.disponible).toLowerCase() === 'true' || item.disponible === true;
      status[rawId] = isAvailable;

      // si el id empieza por "extra" o es de tipo extra, lo duplicamos también como extra:Nombre
      if (rawId && !rawId.startsWith("extra:") && rawId.toLowerCase().includes("extra")) {
        status[`extra:${rawId.replace(/^extra:?/, "").trim()}`] = isAvailable;
      }
    });

    localStorage.setItem('productStatus', JSON.stringify(status));
  } catch (err) {
    status = JSON.parse(localStorage.getItem('productStatus')) || {};
    console.warn('⚠️ applyExtrasAvailability: usando cache local', err);
  }

  // aplicamos los estilos
  modalEl.querySelectorAll('.extras-list label').forEach(label => {
    const checkbox = label.querySelector('input[type="checkbox"]');
    if (!checkbox) return;

    const name = checkbox.dataset.name?.trim() || "";
    const id = checkbox.dataset.id?.trim() || "";

    const keyById = status[id];
    const keyByName = status[`extra:${name}`];

    const disponible = !(
      keyById === false ||
      keyByName === false ||
      String(keyById).toLowerCase() === 'false' ||
      String(keyByName).toLowerCase() === 'false'
    );

    const plusBtn = label.querySelector('.plus-extra');
    const minusBtn = label.querySelector('.minus-extra');
    const qtyDisplay = label.querySelector('.extra-qty');

    if (!disponible) {
      label.classList.add('agotado');
      checkbox.disabled = true;
      checkbox.checked = false;
      if (plusBtn) plusBtn.disabled = true;
      if (minusBtn) minusBtn.disabled = true;
      if (qtyDisplay) qtyDisplay.textContent = 'Agotado';
      label.style.opacity = '0.5';
    } else {
      label.classList.remove('agotado');
      checkbox.disabled = false;
      if (plusBtn) plusBtn.disabled = false;
      if (minusBtn) minusBtn.disabled = false;
      if (qtyDisplay && qtyDisplay.textContent === 'Agotado') qtyDisplay.textContent = '0';
      label.style.opacity = '';
    }
  });
}






// ---------- MINI MODAL CLEAN ----------
// ---------- FUNCION CORREGIDA: openProductModal ----------
function openProductModal(id, cartIndex = null) {

  const p = products.find(x => x.id === id);
  if (!p) return;

  // ======== NUEVO: tamaño seleccionado (primer tamaño por defecto) ========
  let selectedSize = p.sizes ? p.sizes[0] : { id: p.id, price: p.price, image: p.image, label: '' };

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
          <img id="product-img" src="${selectedSize.image}" alt="${p.title}">
        </div>

        <div class="info">
          <h2>${p.title}</h2>
          <p>${p.desc}</p>

          ${p.sizes ? `
            <h3>Tamaño</h3>
            <div class="size-selector">
              ${p.sizes.map(s => `
                <label class="size-option">
                  <input type="radio" name="size" value="${s.id}" ${s.id === selectedSize.id ? "checked" : ""}>
                  ${s.label} — $${numberWithCommas(s.price)}
                </label>
              `).join("")}
            </div>
          ` : ""}

          ${ p.extras?.length ? `
            <h3>Adiciones</h3>
            <div class="extras-list">
              ${p.extras.map((e, i) => `
                <label>
                  <input type="checkbox" data-id="${e.id}" data-name="${e.name}" data-price="${e.price}">
                  <span>${e.name}</span>
                  <span class="extra-controls" data-index="${i}">
                    <button class="minus-extra">−</button>
                    <span class="extra-qty">0</span>
                    <button class="plus-extra">+</button>
                  </span>
                  <small>+$${numberWithCommas(e.price)}</small>
                </label>
              `).join("")}
            </div>
          ` : "" }

          <div class="quantity">
            <button class="minus">−</button>
            <span class="qty">1</span>
            <button class="plus">+</button>
          </div>

          <button class="add-btn">
            ${cartIndex !== null ? 'Actualizar' : 'Agregar'} 
            <span class="price">$${numberWithCommas(selectedSize.price)}</span>
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // ---- Cierre ----
  overlay.querySelector(".close").addEventListener("click", () => overlay.remove());
  overlay.addEventListener("click", e => { if (e.target === overlay) overlay.remove(); });

  // ===== VARIABLES =====
  let qty = 1;
  const qtyEl = overlay.querySelector(".qty");
  const priceEl = overlay.querySelector(".price");
  const extrasQty = Array(p.extras?.length || 0).fill(0);
  const extrasInputs = overlay.querySelectorAll(".extras-list input");

  // ===== SI ES EDICIÓN =====
  if (cartIndex !== null) {
    const item = cart[cartIndex];

    // Encontrar el tamaño usado
    if (p.sizes) {
      selectedSize = p.sizes.find(s => s.id === item.sizeId) || p.sizes[0];
      overlay.querySelector("#product-img").src = selectedSize.image;
      overlay.querySelector(`input[value="${selectedSize.id}"]`).checked = true;
    }

    qty = item.qty;
    qtyEl.textContent = qty;

    if (item.extras?.length) {
      item.extras.forEach(e => {
        const idx = p.extras.findIndex(pe => pe.name === e.name);
        if (idx >= 0) extrasQty[idx] = e.qty;
      });
    }

    extrasInputs.forEach((input, i) => {
      input.checked = extrasQty[i] > 0;
      input.closest("label").querySelector(".extra-qty").textContent = extrasQty[i];
    });
  }

  // ===== UPDATE PRICE =====
  function updatePrice() {
    const extrasTotal = (p.extras || [])
      .reduce((sum, e, i) => sum + e.price * extrasQty[i], 0);

    const total = (selectedSize.price + extrasTotal) * qty;
    priceEl.textContent = `$${numberWithCommas(total)}`;
  }

  updatePrice();

  // ===== CAMBIAR TAMAÑO DINÁMICAMENTE =====
  overlay.querySelectorAll("input[name='size']").forEach(radio => {
    radio.addEventListener("change", e => {
      const sizeId = e.target.value;
      selectedSize = p.sizes.find(s => s.id === sizeId);

      overlay.querySelector("#product-img").src = selectedSize.image;

      updatePrice();
    });
  });

  // ===== CANTIDAD =====
  overlay.querySelector(".plus").addEventListener("click", () => { qty++; qtyEl.textContent = qty; updatePrice(); });
  overlay.querySelector(".minus").addEventListener("click", () => { if (qty > 1) qty--; qtyEl.textContent = qty; updatePrice(); });

  // ===== ADICIONES =====
  overlay.querySelectorAll(".plus-extra").forEach(btn => {
    const i = parseInt(btn.parentElement.dataset.index);
    const qtyDisplay = btn.parentElement.querySelector(".extra-qty");

    btn.addEventListener("click", () => {
      extrasQty[i]++;
      qtyDisplay.textContent = extrasQty[i];
      extrasInputs[i].checked = true;
      updatePrice();
    });
  });

  overlay.querySelectorAll(".minus-extra").forEach(btn => {
    const i = parseInt(btn.parentElement.dataset.index);
    const qtyDisplay = btn.parentElement.querySelector(".extra-qty");

    btn.addEventListener("click", () => {
      if (extrasQty[i] > 0) {
        extrasQty[i]--;
        qtyDisplay.textContent = extrasQty[i];
        extrasInputs[i].checked = extrasQty[i] > 0;
        updatePrice();
      }
    });
  });

  // ===== AGREGAR AL CARRITO =====
  overlay.querySelector(".add-btn").addEventListener("click", () => {
    const extras = (p.extras || [])
      .map((e, i) => ({ name: e.name, price: e.price, qty: extrasQty[i] }))
      .filter(e => e.qty > 0);

    const item = {
      productId: p.id,
      sizeId: selectedSize.id,
      title: `${p.title} (${selectedSize.label})`,
      price: selectedSize.price,
      qty,
      image: selectedSize.image,
      extras
    };

    if (cartIndex !== null) {
      cart[cartIndex] = item;
    } else {
      addToCart(item);
    }

    persistCart();
    refreshCartUI();
    updateCartBadge();
    overlay.remove();
    cartDrawer.classList.remove("hidden");
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

// ============Descargar QR=================
document.addEventListener("click", (e) => {
  // Usa closest para soportar clicks sobre el SVG interno de FontAwesome
  const btn = e.target.closest && e.target.closest(".qr-download");
  if (!btn) return;

  const imgPath = btn.dataset.img;
  if (!imgPath) {
    console.warn("qr-download sin data-img");
    return;
  }

  // helper para descargar
  const downloadImage = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = url.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Si SweetAlert2 no está disponible, fallback a confirm nativo
  if (typeof Swal === "undefined") {
    console.warn("SweetAlert2 (Swal) no disponible. Usando confirm nativo.");
    const ok = confirm(
      "Puedes pagar escaneando nuestros códigos QR de Nequi o Bancolombia.\n\nTambién puedes descargar los QR. ¿Descargar ahora?"
    );
    if (ok) downloadImage(imgPath);
    return;
  }

  // SweetAlert2 disponible -> mostrar alerta antes de descargar
  Swal.fire({
    icon: "info",
    title: "Pago con QR",
    html: `
      Puedes pagar escaneando nuestros códigos QR de <strong>Nequi</strong> o <strong>Bancolombia</strong>.<br><br>
      También puedes <strong>descargar los QR</strong> dando clic en el icono de descarga.
    `,
    showCancelButton: true,
    confirmButtonText: "Descargar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#ff4b4b"
  }).then(result => {
    if (result.isConfirmed) downloadImage(imgPath);
  });
});


// ============Fin de codigo de Descarga QR=================


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




// URL del endpoint de Google Apps Script (base de datos de pedidos)
const GOOGLE_SHEET_API = "https://script.google.com/macros/s/AKfycbwm_1k9_4u68gAgUuSbvOXA5jfq1aIMJIaaFNDiB9PKa0yFBrZhhhMVQQQ-Qc22jeEb/exec";


// Envío por WhatsApp
// ✅ Escucha del formulario de checkout
checkoutForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // 🔸 Función para registrar en Google Sheets
  async function registrarPedidoEnSheets(orderData) {
    try {
      await fetch(GOOGLE_SHEET_API, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(orderData),
        headers: { "Content-Type": "application/json" },
      });
      alert("✅ Pedido registrado exitosamente");
    } catch (err) {
      console.error("❌ Error al registrar en Google Sheets:", err);
    }
  }

  // Obtener datos del formulario
  const fd = new FormData(checkoutForm);
  const clientName = fd.get('name')?.trim() || '';
  const clientPhone = fd.get('phone')?.trim() || '';
  const method = fd.get('method') || 'recoger';
  const payment = fd.get('payment') || '';
  const address = fd.get('address')?.trim() || '';
  const notes = fd.get('notes')?.trim() || '';

  let textParts = [];
  let subtotal = 0;

  // 🧾 Cabecera del mensaje
  textParts.push('🧾 *Nuevo Pedido - Oscar La Parrilla 🍨✅*');
  textParts.push(`👤 Cliente: ${clientName}`);
  textParts.push(`📞 Teléfono: ${clientPhone}`);
  textParts.push(`🚚 Tipo: ${method}`);
  if (method === 'domicilio') textParts.push(`🏠 Dirección: ${address}`);
  textParts.push(`💳 Pago: ${payment}`);
  textParts.push('');
  textParts.push('🍨 *Detalle del pedido:*');

  // 🧮 Procesar carrito
  cart.forEach(item => {
    const extras = item.extras || [];
    const extrasLines = extras.map(e => `   ➕ ${e.qty}x ${e.name} ($${numberWithCommas(e.price * e.qty)})`).join('\n');
    const extrasSum = extras.reduce((sum, e) => sum + e.price * e.qty, 0);
    const itemTotal = (item.price + extrasSum) * item.qty;
    subtotal += itemTotal;

    textParts.push(`${item.qty}x ${item.title} — *$${numberWithCommas(item.price * item.qty)}*`);
    if (extrasLines) textParts.push(extrasLines);

    if (item.removed?.length) {
      textParts.push(`   ⚠️ Toppings removidos: ${item.removed.join(', ')}`);
    }
  });

  const delivery = method === 'domicilio' ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  // Totales
  textParts.push('');
  textParts.push(`🧮 Subtotal: $${numberWithCommas(subtotal)}`);
  textParts.push(method === 'domicilio'
    ? `🚗 Envío: $${numberWithCommas(delivery)}`
    : '🏪 Envío: Sin costo (recoge en el local)');
  textParts.push(`💰 *Total: $${numberWithCommas(total)}*`);
  if (notes) textParts.push(`📝 Notas: ${notes}`);

  // 🧾 Crear objeto de pedido para Google Sheets
  const orderData = {
    fecha: new Date().toLocaleString(),
    nombre: clientName,
    telefono: clientPhone,
    metodo: method,
    pago: payment,
    direccion: address,
    notas: notes,
    total: total,
    carrito: cart.map(i => ({
      producto: i.title,
      cantidad: i.qty,
      precio: i.price,
      extras: i.extras?.map(e => `${e.qty}x ${e.name}`).join(', ') || ''
    }))
  };

  // 📤 Registrar en Google Sheets antes de abrir WhatsApp
  await registrarPedidoEnSheets(orderData);

  // ✅ Enviar mensaje por WhatsApp
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
function bindEvents() {
  navBtns.forEach(b=> b.addEventListener('click', ()=> setActiveCategory(b.dataset.cat)));
  cartCountEl.addEventListener('dblclick', ()=> { if(confirm('Vaciar carrito?')){ cart = []; persistCart(); refreshCartUI(); } });
  checkoutModal.addEventListener('click', (e)=> { if(e.target === checkoutModal) checkoutModal.classList.add('hidden'); });
  searchInput.addEventListener('input', ()=> renderProducts(activeCategory));

  // ✅ Delegación para botones .add
  catalogEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.add');
    if (!btn) return;
    if (btn.disabled) return;
    const id = btn.dataset.id;
    if (!id) return;
    openProductModal(id);
  });
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
  // 🧾 Checkout, métodos de pago, domicilio...
  const paymentSelect = document.getElementById("payment-method");
  const transferInfo = document.getElementById("transfer-info");
  const methodRadios = document.querySelectorAll('input[name="method"]');
  const addressLabel = document.getElementById("address-label");
  const envioRow = document.getElementById("envio-row");
  const cartDelivery = document.getElementById("cart-delivery");
  const DELIVERY_FEE = 5000;
  const accountNumber = document.getElementById("account-number");
  const copyBtn = document.getElementById("copy-account");

  // === Lógica del checkout ===
  methodRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.value === "domicilio" && radio.checked) {
        addressLabel.classList.remove("hidden");
        envioRow.classList.remove("hidden");
        cartDelivery.textContent = `$${DELIVERY_FEE.toLocaleString()}`;
      } else {
        addressLabel.classList.add("hidden");
        envioRow.classList.add("hidden");
        cartDelivery.textContent = "$0";
      }
    });
  });

  paymentSelect.addEventListener("change", () => {
    transferInfo.classList.toggle("hidden", paymentSelect.value !== "transferencia");
  });

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

  // === 🔁 SINCRONIZACIÓN DE DISPONIBILIDAD ===
  function syncProductStatus() {
    const status = JSON.parse(localStorage.getItem('productStatus')) || {};
    document.querySelectorAll('.product-card').forEach(card => {
      const id = card.dataset.id;
      const btn = card.querySelector('.btn-add');
      const label = card.querySelector('.status-label');

      if (status[id] === false) {
        card.classList.add('agotado');
        if (btn) {
          btn.disabled = true;
          btn.textContent = 'Agotado';
          btn.style.background = '#ccc';
          btn.style.color = '#666';
        }
        if (label) {
          label.textContent = 'Agotado';
          label.style.color = '#f44336';
        }
      } else {
        card.classList.remove('agotado');
        if (btn) {
          btn.disabled = false;
          btn.textContent = 'Añadir';
          btn.style.background = '';
          btn.style.color = '';
        }
        if (label) {
          label.textContent = 'Disponible';
          label.style.color = '#4CAF50';
        }
      }
    });
  }

  function syncExtrasStatus() {
    const status = JSON.parse(localStorage.getItem('productStatus')) || {};
    document.querySelectorAll('.extra-item').forEach(extra => {
      const id = extra.dataset.id;
      const checkbox = extra.querySelector('input[type="checkbox"]');
      const plusBtn = extra.querySelector('.plus');
      const minusBtn = extra.querySelector('.minus');

      if (status[id] === false) {
        extra.classList.add('agotado');
        if (checkbox) checkbox.disabled = true;
        if (plusBtn) plusBtn.disabled = true;
        if (minusBtn) minusBtn.disabled = true;
      } else {
        extra.classList.remove('agotado');
        if (checkbox) checkbox.disabled = false;
        if (plusBtn) plusBtn.disabled = false;
        if (minusBtn) minusBtn.disabled = false;
      }
    });
  }

  // Llamadas iniciales
  syncProductStatus();
  syncExtrasStatus();

  // En vivo (cada vez que el admin cambia algo)
  window.addEventListener('storage', e => {
    if (e.key === 'productStatus') {
      syncProductStatus();
      syncExtrasStatus();
    }
  });

  // Fallback cada 3 segundos
  setInterval(() => {
    syncProductStatus();
    syncExtrasStatus();
  }, 3000);
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







// === Carrusel de promociones ===
const track = document.querySelector('.banner-track');
const slides = document.querySelectorAll('.banner-slide');
const nextBtn = document.querySelector('.banner-btn.next');
const prevBtn = document.querySelector('.banner-btn.prev');

if (track && slides.length > 1) {
  let index = 0;

  function showSlide(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener('click', () => showSlide(index + 1));
  prevBtn.addEventListener('click', () => showSlide(index - 1));

  // Auto-slide cada 5s
  setInterval(() => showSlide(index + 1), 5000);
}





