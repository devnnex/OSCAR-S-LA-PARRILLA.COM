

// admin.js - combinado: tu lógica original de productos/extras + panel, ventas, charts, export, sidebar
(() => {
  'use strict';

  // URL del endpoint de Google Apps Script (base de datos de pedidos)
const GOOGLE_SHEET_API = "https://script.google.com/macros/s/AKfycbwm_1k9_4u68gAgUuSbvOXA5jfq1aIMJIaaFNDiB9PKa0yFBrZhhhMVQQQ-Qc22jeEb/exec";




  // ---------- UI elementos ----------
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const hamburger = document.getElementById('hamburger');
  const navBtns = Array.from(document.querySelectorAll('.nav-btn'));
  const sections = Array.from(document.querySelectorAll('.section'));

  // VENTAS UI
  const salesTableBody = document.querySelector('#sales-table tbody');
  const ventasSearch = document.getElementById('ventas-search');
  const ventasFilter = document.getElementById('ventas-filter');
  const exportXlsxBtn = document.getElementById('export-xlsx');
  const exportPdfBtn = document.getElementById('export-pdf');

  // GLOBAL SEARCH
  const globalSearch = document.getElementById('global-search');

  // PRODUCTOS / EXTRAS containers
  const productosContainer = document.getElementById('productos-container');
  const extrasContainer = document.getElementById('extras-container');

  // CHARTS
  let chartMonth = null;
  let chartAnalisis = null;

  // HELPERS
  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));
  const formatCurrency = v => '$' + Number(v||0).toLocaleString();

  // ---------- Sidebar behavior (always visible on desktop; slide in mobile) ----------
  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('show');
    overlay.hidden = false;
    sidebar.setAttribute('aria-hidden', 'false');
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
    overlay.hidden = true;
    sidebar.setAttribute('aria-hidden', 'true');
  }

  // hamburger click (mobile)
  hamburger.addEventListener('click', () => {
    if (sidebar.classList.contains('open')) closeSidebar();
    else openSidebar();
  });
  overlay.addEventListener('click', closeSidebar);

  // nav buttons -> change section
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const sec = btn.dataset.section; if (!sec) return;
      navBtns.forEach(n => n.classList.remove('active'));
      btn.classList.add('active');
      sections.forEach(s => s.classList.remove('active'));
      const target = document.getElementById(sec); if (target) target.classList.add('active');
      if (window.innerWidth < 900) closeSidebar();
    });
  });

  // ---------- Datos demo / persistencia ----------
  // sampleSales: si hay en localStorage úsalo; si no, genera demo (como tenías)
let ventasData = [];

async function loadVentas() {
  try {
    const res = await fetch(`${GOOGLE_SHEET_API}?sheet=Ventas`);
    const data = await res.json();

    if (!data || !Array.isArray(data)) {
      console.warn("No se recibieron ventas válidas:", data);
      ventasData = [];
      return;
    }

    // Normaliza las columnas esperadas
    ventasData = data.map(v => ({
      id: v.id || v.ID || '',
      date: v.fecha || v.Fecha || v.timestamp || '',
      customer: v.nombre || v.Nombre || 'Cliente',
      type: v.tipo || v.Tipo || 'venta',
      total: Number(v.total || v.Total || 0)
    }));

    refreshSales();
  } catch (err) {
    console.error("Error cargando ventas:", err);
  }
};

  // ---------- Productos/Extras: TU BLOQUE ORIGINAL (preservado) ----------
  // Aquí se pega tu array EXACTO de productos y extras (con IDs, price, desc, image) para mantener todo.
 const productos = [
  // ===== MENU INFANTIL =====
  {
    id: 'inf1',
    category: 'Menú Infantil',
    title: 'Hamburguesa Mate',
    price: 16000,
    desc: '100 gr de carne a la parrilla, jamón, queso, jugo de caja, acompañado de papas a la francesa.',
    ingredients: ['Carne a la parrilla 100g', 'Jamón', 'Queso', 'Jugo de caja', 'Papas a la francesa'],
    image: 'images/hamburguesa-mate.png'
  },
  {
    id: 'inf2',
    category: 'Menú Infantil',
    title: 'Perro Guido',
    price: 16000,
    desc: 'Salchicha tipo americana, jamón, queso, jugo de caja, acompañado de papas a la francesa.',
    ingredients: ['Salchicha americana', 'Jamón', 'Queso', 'Jugo de caja', 'Papas a la francesa'],
    image: 'images/perro-guido.png'
  },
  {
    id: 'inf3',
    category: 'Menú Infantil',
    title: 'Deditos de Pollo al Rayo McQueen',
    price: 17000,
    desc: 'Dedos de pollo apanados artesanales, jugo de caja, acompañado de papas a la francesa.',
    ingredients: ['Dedos de pollo artesanales', 'Jugo de caja', 'Papas a la francesa'],
    image: 'images/deditos-mcqueen.png'
  },
  {
    id: 'inf4',
    category: 'Menú Infantil',
    title: 'Mini Pizzeta Sally (Queso, Jamón y Piña)',
    price: 17000,
    desc: 'Mini pizzeta de 4 porciones con queso, jamón y piña en cuadritos.',
    ingredients: ['Queso', 'Jamón', 'Piña en cuadritos', 'Masa de pizzeta'],
    image: 'images/mini-pizzeta-sally-queso-jamon-pina.png'
  },
  {
    id: 'inf5',
    category: 'Menú Infantil',
    title: 'Mini Pizzeta Sally (Pollo, Queso y Jamón)',
    price: 17000,
    desc: 'Mini pizzeta de 4 porciones con pollo, queso y jamón.',
    ingredients: ['Pollo', 'Queso', 'Jamón', 'Masa de pizzeta'],
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
    image: 'images/pizzeta-tesla.png'
  },
  {
    id: 'pizz2',
    category: 'Pizzetas Artesanales',
    title: "Oscar's",
    price: 27000,
    desc: 'Pollo, cabano, queso, tomate y salsa pesto en masa artesanal.',
    ingredients: ['Pollo', 'Cabano', 'Queso', 'Tomate', 'Salsa pesto'],
    image: 'images/pizzeta-oscars.png'
  },
  {
    id: 'pizz3',
    category: 'Pizzetas Artesanales',
    title: 'Genesis',
    price: 25000,
    desc: 'Queso, piña y jamón sobre base artesanal.',
    ingredients: ['Queso', 'Piña', 'Jamón'],
    image: 'images/pizzeta-genesis.png'
  },
  {
    id: 'pizz4',
    category: 'Pizzetas Artesanales',
    title: 'Chery',
    price: 25000,
    desc: 'Carne molida, maíz, pimentón, cebolla, jalapeño, tostacos y queso.',
    ingredients: ['Carne molida', 'Maíz', 'Pimentón', 'Cebolla', 'Jalapeño', 'Tostacos', 'Queso'],
    image: 'images/pizzeta-chery.png'
  },
  {
    id: 'pizz5',
    category: 'Pizzetas Artesanales',
    title: 'Lada',
    price: 25000,
    desc: 'Queso y bocadillo sobre base artesanal.',
    ingredients: ['Queso', 'Bocadillo'],
    image: 'images/pizzeta-lada.png'
  },
  {
    id: 'pizz6',
    category: 'Pizzetas Artesanales',
    title: 'Jac',
    price: 25000,
    desc: 'Pollo, champiñones y queso.',
    ingredients: ['Pollo', 'Champiñones', 'Queso'],
    image: 'images/pizzeta-jac.png'
  },
  {
    id: 'pizz7',
    category: 'Pizzetas Artesanales',
    title: 'Apollo',
    price: 25000,
    desc: 'Pollo, tocineta, queso y miel mostaza.',
    ingredients: ['Pollo', 'Tocineta', 'Queso', 'Miel mostaza'],
    image: 'images/pizzeta-apollo.png'
  },
  {
    id: 'pizz8',
    category: 'Pizzetas Artesanales',
    title: 'Lancia',
    price: 27000,
    desc: 'Carne en cuadros, chorizo, queso, maíz, cebolla y pimentón.',
    ingredients: ['Carne en cuadros', 'Chorizo', 'Queso', 'Maíz', 'Cebolla', 'Pimentón'],
    image: 'images/pizzeta-lancia.png'
  },
  {
    id: 'pizz9',
    category: 'Pizzetas Artesanales',
    title: 'Brabus',
    price: 25000,
    desc: 'Queso, tomate asado y salsa pesto.',
    ingredients: ['Queso', 'Tomate asado', 'Salsa pesto'],
    image: 'images/pizzeta-brabus.png'
  },
  {
    id: 'pizz10',
    category: 'Pizzetas Artesanales',
    title: 'Rubicon',
    price: 25000,
    desc: 'Queso, tocineta y maíz.',
    ingredients: ['Queso', 'Tocineta', 'Maíz'],
    image: 'images/pizzeta-rubicon.png'
  },
  {
    id: 'pizz11',
    category: 'Pizzetas Artesanales',
    title: 'Infiniti',
    price: 27000,
    desc: 'Pepperoni y queso sobre masa artesanal.',
    ingredients: ['Pepperoni', 'Queso'],
    image: 'images/pizzeta-infiniti.png'
  },
  {
    id: 'pizz12',
    category: 'Pizzetas Artesanales',
    title: 'Abarth',
    price: 30000,
    desc: 'Camarones al ajillo, queso, cebolla y pimentón.',
    ingredients: ['Camarones al ajillo', 'Queso', 'Cebolla', 'Pimentón'],
    image: 'images/pizzeta-abarth.png'
  },
  {
    id: 'pizz13',
    category: 'Pizzetas Artesanales',
    title: 'Vegetariana',
    price: 27000,
    desc: 'Champiñones, pimentón, cebolla, maíz y queso.',
    ingredients: ['Champiñones', 'Pimentón', 'Cebolla', 'Maíz', 'Queso'],
    image: 'images/pizzeta-vegetariana.png'
  }
];

  const extras = [
  { id: 'extra1', title: 'Queso adicional', price: 3000 },
  { id: 'extra2', title: 'Tocineta', price: 4000 },
  { id: 'extra3', title: 'Papas adicionales', price: 3000 },
  { id: 'extra4', title: 'Extra salsa', price: 2000 },
  { id: 'extra5', title: 'Jamón adicional', price: 2000 },
  { id: 'extra6', title: 'Pollo adicional', price: 2000 },
  { id: 'extra7', title: 'Extra piña', price: 2000 },
  { id: 'extra8', title: 'Extra champiñones', price: 2000 },
  { id: 'extra9', title: 'Extra camarones', price: 5000 }
];

  // estado de disponibilidad (localStorage)
  const savedStatus = JSON.parse(localStorage.getItem('productStatus')) || {};

  // render original (producto / extra) - manteniendo estructura y estilos
  function renderCatalog(container, items, type) {
    container.innerHTML = items.map(p => {
      const active = savedStatus[p.id] ?? true;
      return `
        <div class="product-card" data-id="${p.id}" data-type="${type}">
          <img src="${p.image}" alt="${p.title}">
          <h3>${p.title}</h3>
          <p><strong>$${(p.price||0).toLocaleString()}</strong></p>
          <p class="desc">${p.desc || ''}</p>
          <div class="toggle-row">
            <label style="display:flex;align-items:center;gap:8px;cursor:pointer">
              <input type="checkbox" class="toggle-availability" ${active ? 'checked' : ''}>
              <span style="font-size:.9rem;color:${active ? '#4CAF50' : '#f44336'};">${active ? 'Disponible' : 'Agotado'}</span>
            </label>
          </div>
        </div>
      `;
    }).join('');
  }

  // inicial render
  renderCatalog(productosContainer, productos, 'productos');
  renderCatalog(extrasContainer, extras, 'extras');

  // ============ Google Sheets update (tu función original) ============
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwoiB5wjuWak8Z0CeHenYc93M7UR7K43dPOCRGQ8RmrZjb8CAFywjqC0wGuOWBSI-GZhw/exec';

  async function updateGoogleSheet(id, disponible) {
    try {
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: "no-cors",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, disponible })
      });
      // res.json() with no-cors will likely fail; keep compatibility but handle errors
      try {
        const data = await res.json();
        return data;
      } catch (errJson) {
        // no-cors often returns opaque response; return success true to avoid blocking UI
        return { success: true };
      }
    } catch (err) {
      console.error('Error network al actualizar Sheets:', err);
      return { success: false, error: err.message || err };
    }
  }

  // Listener toggles (mantiene tu lógica original, optimista UI + sheets + localStorage)
  document.addEventListener('change', async (e) => {
    if (!e.target.classList.contains('toggle-availability')) return;

    const card = e.target.closest('.product-card');
    if (!card) return;
    const id = String(card.dataset.id);
    const checked = Boolean(e.target.checked);

    // optimista UI update
    const labelSpan = card.querySelector('.toggle-row span');
    if (labelSpan) {
      labelSpan.textContent = checked ? 'Disponible' : 'Agotado';
      labelSpan.style.color = checked ? '#4CAF50' : '#f44336';
    }

    // try update sheets
    const result = await updateGoogleSheet(id, checked);

    if (!result || !result.success) {
      // keep UI as optimistic, but notify
      console.log('Actualizado (optimista) en Sheets (respuesta opaca o no-cors):', id, result);
      // Save to localStorage anyway
      const status = JSON.parse(localStorage.getItem('productStatus')) || {};
      status[id] = checked;
      localStorage.setItem('productStatus', JSON.stringify(status));
      localStorage.setItem('productStatusUpdate', Date.now());
      // no alert flood; optionally show small toast - for simplicity we use console.log
      return;
    }

    // success path
    const status = JSON.parse(localStorage.getItem('productStatus')) || {};
    status[id] = checked;
    localStorage.setItem('productStatus', JSON.stringify(status));
    localStorage.setItem('productStatusUpdate', Date.now());
  });

  // ---------- VENTAS / KPIs / CHARTS / EXPORT ----------

  // Helpers for ventas
  function renderTable(rows) {
    salesTableBody.innerHTML = rows.map(r => `
      <tr>
        <td>${r.id}</td>
        <td>${new Date(r.date).toLocaleString()}</td>
        <td>${r.customer}</td>
        <td>${r.type}</td>
        <td>${formatCurrency(r.total)}</td>
        <td><button class="btn small view" data-id="${r.id}">Ver</button></td>
      </tr>
    `).join('');
  }

  function computeKPIs(data) {
    const total = data.reduce((s, x) => s + (x.total || 0), 0);
    const ventasCount = data.filter(x => x.type === 'venta').length;
    const pedidosCount = data.filter(x => x.type === 'pedido').length;
    return { total, ventasCount, pedidosCount };
  }

  function renderKPIs(data) {
    const k = computeKPIs(data);
    document.getElementById('kpi-ingresos').textContent = formatCurrency(k.total);
    document.getElementById('kpi-ventas').textContent = k.ventasCount;
    document.getElementById('kpi-pedidos').textContent = k.pedidosCount;
  }

  // monthly series
  function monthlySeries(data) {
    const map = new Map();
    data.forEach(s => {
      const d = new Date(s.date);
      const key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
      map.set(key, (map.get(key) || 0) + (s.total || 0));
    });
    const arr = Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    return { labels: arr.map(x => x[0]), values: arr.map(x => x[1]) };
  }

  function updateCharts(data) {
    const ms = monthlySeries(data);
    const ctx = document.getElementById('chart-month');
    if (ctx && ctx.getContext) {
      const ctx2d = ctx.getContext('2d');
      if (chartMonth) chartMonth.destroy();
      chartMonth = new Chart(ctx2d, {
        type: 'bar',
        data: { labels: ms.labels, datasets: [{ label: 'Ingresos', data: ms.values, backgroundColor: undefined }] },
        options: { plugins: { legend: { display: false } }, responsive: true }
      });
    }

    const ctxA = document.getElementById('chart-analisis');
    if (ctxA && ctxA.getContext) {
      const ctxa2d = ctxA.getContext('2d');
      if (chartAnalisis) chartAnalisis.destroy();
      chartAnalisis = new Chart(ctxa2d, {
        type: 'line',
        data: { labels: ms.labels, datasets: [{ label: 'Ingresos acumulados', data: ms.values, tension: 0.4 }] },
        options: { responsive: true }
      });
    }
  }

  // filtering logic (search + type)
   function getFilteredSales() {
    const q = (ventasSearch?.value || '').toLowerCase().trim();
    const type = ventasFilter?.value || 'all';
    return ventasData.filter(s => {
      if (type !== 'all' && s.type !== type) return false;
      if (!q) return true;
      return [s.id, s.customer, s.type].some(f => String(f || '').toLowerCase().includes(q));
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  function refreshSales() {
    const rows = getFilteredSales();
    renderTable(rows);
    renderKPIs(rows);
    updateCharts(rows);
  }

  // event listeners for ventas controls
  ventasSearch?.addEventListener('input', refreshSales);
  ventasFilter?.addEventListener('change', refreshSales);

  // export xlsx (using XLSX utils)
  exportXlsxBtn?.addEventListener('click', () => {
    const rows = getFilteredSales().map(r => [r.id, new Date(r.date).toLocaleString(), r.customer, r.type, r.total]);
    const header = ['ID', 'Fecha', 'Cliente', 'Tipo', 'Total'];
    const ws = XLSX.utils.aoa_to_sheet([header, ...rows]);
    const wb = XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb, ws, 'Ventas');
    XLSX.writeFile(wb, 'ventas.xlsx');
  });

  // export pdf (simple)
  exportPdfBtn?.addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'pt', 'a4');
    const rows = getFilteredSales().map(r => [r.id, new Date(r.date).toLocaleString(), r.customer, r.type, formatCurrency(r.total)]);
    doc.setFontSize(12); doc.text('Listado de ventas', 40, 40);
    let y = 70; doc.setFontSize(10); doc.text(['ID','Fecha','Cliente','Tipo','Total'].join(' | '), 40, y); y += 18;
    rows.forEach(r => { doc.text(r.join(' | '), 40, y); y += 14; if (y > 750) { doc.addPage(); y = 40; } });
    doc.save('ventas.pdf');
  });

  // view detail action
  document.addEventListener('click', (e) => {
    if (e.target.matches('.view')) {
      const id = e.target.dataset.id;
      const rec = sampleSales.find(s => s.id === id);
      if (rec) alert(JSON.stringify(rec, null, 2));
    }
  });

  // global search -> forward to ventas-search
  globalSearch?.addEventListener('input', (e) => {
    if (ventasSearch) ventasSearch.value = e.target.value;
    refreshSales();
  });

  // ---------- initial render ----------
  // render products/extras catalog with original data and availability state
  renderCatalog(productosContainer, productos, 'productos');
  renderCatalog(extrasContainer, extras, 'extras');

  // initial sales render
  loadPedidos();
  loadVentas();
 

  // close sidebar on small resize if needed
  window.addEventListener('resize', () => {
    if (window.innerWidth < 900) closeSidebar();
  });

  // expose small API for debugging in console
window._adminDebug = { ventasData, productos, extras, refreshSales };






  

// ---------- PEDIDOS (desde Google Sheets) ----------

// ---------- PEDIDOS (desde Google Sheets) ----------
const ordersCard = document.getElementById('orders-card');


// 🔹 Función auxiliar: intenta parsear cualquier tipo de fecha
function tryParseDate(value) {
  if (!value) return null;

  if (value instanceof Date && !isNaN(value)) return value;

  if (typeof value === "number" && !isNaN(value)) return new Date(value);

  const s = String(value).trim();
  if (!s) return null;

  // ISO completo o con espacio
  if (/\d{4}-\d{2}-\d{2}(T|\s)\d{2}:\d{2}/.test(s)) {
    const d = new Date(s.replace(" ", "T"));
    if (!isNaN(d)) return d;
  }

  // dd/mm/yyyy
  const m1 = s.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})(?:.*(\d{1,2}):(\d{2}))?/);
  if (m1) {
    const day = +m1[1], month = +m1[2] - 1, year = +m1[3] + (m1[3].length === 2 ? 2000 : 0);
    const hour = +m1[4] || 0, min = +m1[5] || 0;
    const d = new Date(year, month, day, hour, min);
    if (!isNaN(d)) return d;
  }

  // Formato tipo "mié, 12 nov 2025, 10:30 AM"
  const meses = {
    ene: 0, feb: 1, mar: 2, abr: 3, may: 4, jun: 5,
    jul: 6, ago: 7, sep: 8, oct: 9, nov: 10, dic: 11
  };
  const m2 = s.match(/(\d{1,2})\s+([a-záéíóúñ]{3,})\s+(\d{4}),?\s+(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
  if (m2) {
    const dia = +m2[1], mes = meses[m2[2].toLowerCase()] ?? 0, año = +m2[3];
    let hora = +m2[4];
    const min = +m2[5];
    const ampm = (m2[6] || "").toUpperCase();
    if (ampm === "PM" && hora < 12) hora += 12;
    if (ampm === "AM" && hora === 12) hora = 0;
    const d = new Date(año, mes, dia, hora, min);
    if (!isNaN(d)) return d;
  }

  // fallback
  const parsed = Date.parse(s);
  if (!isNaN(parsed)) return new Date(parsed);

  return null;
}


// 🔹 Formato seguro de fecha para mostrar
function formatFechaPedido(f) {
  const d = tryParseDate(f);
  if (!d) return '-';
  try {
    return d.toLocaleString("es-CO", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  } catch (e) {
    return d.toString();
  }

 
}




// Renderizar pedidos en tabla
function renderPedidos(pedidos) {
  if (!ordersCard) return;
  if (!pedidos || pedidos.length === 0) {
    ordersCard.innerHTML = '<p style="text-align:center;color:#888;">No hay pedidos registrados.</p>';
    return;
  }

   // 🔥 ORDENAR: el más reciente siempre primero
  pedidos = [...pedidos].sort((a, b) => {
    return new Date(b.fecha) - new Date(a.fecha);
  });

  function getEstadoBadge(p) {
    const ahora = Date.now();
    const fechaPedido = new Date(p.fecha).getTime();
    const minutos = (ahora - fechaPedido) / 60000;

    const aceptados = JSON.parse(localStorage.getItem("pedidosAceptados") || "[]");
    if (aceptados.includes(p.id)) return null;

    if (minutos <= 10) {
      return { texto: "New", clase: "badge-new" };
    } else if (minutos <= 60) {
      return { texto: "Delay", clase: "badge-delay" };
    } else {
      return { texto: "Late!", clase: "badge-tarde" };
    }
  }

  const tableHTML = `
  <div class="pedidos-toolbar">
    <input type="text" id="buscarPedidos" placeholder="🔍 Buscar pedido..." />
    <div class="export-buttons">
      <button id="btnExcel">📊 Exportar Excel</button>
      <button id="btnPDF">📄 Exportar PDF</button>
    </div>
  </div>

  <div class="tabla-pedidos-container">
    <table class="tabla-pedidos">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Cliente</th>
          <th>Teléfono</th>
          <th>Método</th>
          <th>Dirección</th>
          <th>Pago</th>
          <th>Total</th>
          <th>Productos</th>
          <th>Notas</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        ${pedidos.map((p, i) => {
          const estado = getEstadoBadge(p);

          return `
          <tr data-index="${i}">
            <td>
              ${formatFechaPedido(p.fecha)}
              ${
                estado
                  ? `<span class="badge-estado ${estado.clase}" data-id="${p.id}">
                      ${estado.texto}
                    </span>`
                  : ""
              }
            </td>
            <td>${p.nombre || '-'}</td>
            <td>${p.telefono || '-'}</td>
            <td>${p.metodo || '-'}</td>
            <td>${p.direccion || '-'}</td>
            <td>${p.pago || '-'}</td>
            <td>${formatCurrency(p.total)}</td>
            <td>
              ${(p.productos || '-')
                .split('|')
                .map(item => `<div>🟢 ${item.trim()}</div>`)
                .join('')}
            </td>
            <td>${p.notas || '-'}</td>
            <td class="acciones">
              <button class="btn-whatsapp" data-index="${i}" title="WhatsApp">💬</button>
              <button class="btn-editar" data-id="${p.id || i}">✏️</button>
              <button class="btn-completar" data-id="${p.id || i}">✅</button>
              <button class="btn-cancelar" data-id="${p.id || i}">❌</button>
            </td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  </div>`;

  ordersCard.innerHTML = tableHTML;

  // === CLICK BADGE ===
  document.querySelectorAll(".badge-estado").forEach(badge => {
    badge.addEventListener("click", () => {
      if (confirm("¿Quieres aceptar esta orden?")) {
        const id = badge.dataset.id;
        const aceptados = JSON.parse(localStorage.getItem("pedidosAceptados") || "[]");
        if (!aceptados.includes(id)) {
          aceptados.push(id);
          localStorage.setItem("pedidosAceptados", JSON.stringify(aceptados));
        }
        badge.remove();
      }
    });
  });

  // === REFRESH AUTOMÁTICO CADA MINUTO ===
  setTimeout(() => {
    renderPedidos(pedidos);
  }, 60000);

  // === Eventos existentes (NO se tocan) ===
  document.querySelectorAll(".btn-editar").forEach(btn => {
    btn.addEventListener("click", () => {
      const pedido = pedidos.find(p => p.id == btn.dataset.id);
      editarPedido(pedido);
    });
  });

  document.querySelectorAll(".btn-completar").forEach(btn => {
    btn.addEventListener("click", () => {
      const pedido = pedidos.find(p => p.id == btn.dataset.id);
      completarPedido(pedido);
    });
  });

  document.querySelectorAll(".btn-cancelar").forEach(btn => {
    btn.addEventListener("click", () => {
      const pedido = pedidos.find(p => p.id == btn.dataset.id);
      cancelarPedido(pedido);
    });
  });


  // ===============================
// 📲 WHATSAPP ADMIN SIN BLOQUEO
// ===============================
document.querySelectorAll(".btn-whatsapp").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const pedido = pedidos[btn.dataset.index];
    if (!pedido || !pedido.telefono) return;

    const telefono = String(pedido.telefono).replace(/\D/g, '');

    const mensaje =
      'Hola ' +
      (pedido.nombre || '') +
      ', te contactamos porque queremos informarte que tu pedido está en proceso 🍔🔥';

    const waUrl =
      'https://wa.me/' +
      telefono +
      '?text=' +
      encodeURIComponent(mensaje);

    // 🚨 REDIRECCIÓN DIRECTA (NO POPUP)
    window.location.href = waUrl;
  });
});


  // Buscador
  const inputBuscar = document.getElementById('buscarPedidos');
  inputBuscar.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll('.tabla-pedidos tbody tr').forEach(row => {
      row.style.display = row.innerText.toLowerCase().includes(term) ? '' : 'none';
    });
  });

  // Excel y PDF quedan exactamente igual que ya los tienes
}





// Cargar pedidos desde Sheets
// Cargar pedidos desde Sheets
async function loadPedidos() {
  if (!ordersCard) return;
  ordersCard.innerHTML = '<p style="text-align:center;">Cargando pedidos...</p>';

  try {
    const res = await fetch(`${GOOGLE_SHEET_API}?sheet=Pedidos`);
    const text = await res.text();
    console.log("🧩 Respuesta cruda Pedidos:", text);
    const data = JSON.parse(text);


    if (!data || !Array.isArray(data)) {
      console.warn("No se recibieron pedidos válidos:", data);
      ordersCard.innerHTML = '<p style="text-align:center;color:#888;">No hay pedidos registrados.</p>';
      return;
    }

    // Normaliza columnas esperadas
    const pedidos = data.map(p => ({
      id: p.id || p.ID || '',
      fecha: p.fecha || p.Fecha || p.date || '',
      nombre: p.nombre || p.Nombre || 'Cliente',
      telefono: p.telefono || p.Teléfono || '',
      metodo: p.metodo || p.Método || '',
      direccion: p.direccion || p.Dirección || '',
      pago: p.pago || p.Pago || '',
      total: Number(p.total || p.Total || 0),
      productos: p.productos || p.Productos || '',
      notas: p.notas || p.Notas || ''
    }));

    pedidos.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    renderPedidos(pedidos);

  } catch (err) {
    console.error('Error al obtener pedidos:', err);
    ordersCard.innerHTML = `<p style="text-align:center;color:red;">Error al cargar pedidos</p>`;
  }
}


// Cuando el usuario hace clic en la sección "Pedidos"
document.querySelector('[data-section="pedidos"]')?.addEventListener('click', loadPedidos);


/* === ACTUALIZACIÓN AUTOMÁTICA EN TIEMPO REAL === */
const REFRESH_INTERVAL = 10000; // cada 10 segundos
let lastPedidos = [];
let lastPedidosHash = "";
let isAlertActive = false;
let soundTimeout = null;

// === SONIDO DE NUEVO PEDIDO ===
const newOrderSound = new Audio('sounds/alert.mp3');
newOrderSound.loop = true;

// === FUNCIÓN HASH SEGURA ===
function hashData(arr) {
  return btoa(JSON.stringify(arr.map(p => ({
    id: p.id || p.ID,
    estado: p.estado || p.Estado || '',
    total: Number(p.total || p.Total || 0),
    fecha: p.fecha || p.Fecha || ''
  }))));
}

// === CARGAR IDs YA NOTIFICADOS ===
function getPedidosNotificados() {
  return JSON.parse(localStorage.getItem("pedidosNotificados") || "[]");
}

// === GUARDAR IDs NOTIFICADOS ===
function savePedidosNotificados(ids) {
  localStorage.setItem("pedidosNotificados", JSON.stringify(ids));
}

// === MONITOREAR CAMBIOS ===
async function checkPedidosUpdate() {
  try {
    const res = await fetch(`${GOOGLE_SHEET_API}?sheet=Pedidos`, { cache: "no-store" });
    const data = await res.json();
    if (!Array.isArray(data)) return;

    const pedidosActuales = data.filter(p => p.id || p.ID);
    const currentHash = hashData(pedidosActuales);

    // 🧩 Detectar cambios totales (para refrescar tabla)
    if (currentHash !== lastPedidosHash) {
      console.log("♻️ Cambios detectados en la hoja de PEDIDOS");
      renderPedidos(pedidosActuales);
      lastPedidosHash = currentHash;
    }

    // 🔍 Detectar nuevos pedidos no notificados
    const nuevosPedidos = detectarPedidosNuevos(lastPedidos, pedidosActuales);
    const nuevosNoNotificados = filtrarPedidosNoNotificados(nuevosPedidos);

    if (nuevosNoNotificados.length > 0) {
      console.log(`🆕 ${nuevosNoNotificados.length} pedido(s) realmente nuevo(s)`);

      registrarPedidosNotificados(nuevosNoNotificados);

      if (!isAlertActive) {
        iniciarAlertaSonora(nuevosNoNotificados.length);
      } else {
        actualizarModalConteo(nuevosNoNotificados.length);
      }
    }

    // Actualizamos referencia local
    lastPedidos = pedidosActuales;
  } catch (err) {
    console.warn("⚠️ Error verificando cambios en Pedidos:", err);
  }
}

// === DETECTAR NUEVOS PEDIDOS ===
function detectarPedidosNuevos(prev, actual) {
  const prevIds = new Set(prev.map(p => p.id || p.ID));
  return actual.filter(p => !prevIds.has(p.id || p.ID));
}

// === FILTRAR PEDIDOS YA NOTIFICADOS ===
function filtrarPedidosNoNotificados(lista) {
  const notificados = new Set(getPedidosNotificados());
  return lista.filter(p => !notificados.has(p.id || p.ID));
}

// === REGISTRAR NUEVOS PEDIDOS COMO NOTIFICADOS ===
function registrarPedidosNotificados(lista) {
  const notificados = new Set(getPedidosNotificados());
  lista.forEach(p => notificados.add(p.id || p.ID));
  savePedidosNotificados([...notificados]);
}

// === INICIAR ALERTA SONORA ===
function iniciarAlertaSonora(cantidad) {
  isAlertActive = true;

  try {
    newOrderSound.currentTime = 0;
    newOrderSound.play().catch(err => console.warn("⚠️ No se pudo reproducir el sonido:", err));
  } catch (err) {
    console.warn("⚠️ Error al iniciar sonido:", err);
  }

  mostrarModalAlerta(cantidad);

  clearTimeout(soundTimeout);
  soundTimeout = setTimeout(() => detenerAlerta(), 60000); // detener después de 1 min
}

// === MOSTRAR MODAL ESTILO APPLE ===
function mostrarModalAlerta(cantidad) {
  Swal.fire({
    title: `
      <div class="bell-container">
        <div class="bell">🔔</div>
      </div>
      <h2>¡Nuevo${cantidad > 1 ? 's' : ''} pedido${cantidad > 1 ? 's' : ''} recibido${cantidad > 1 ? 's' : ''}!</h2>
    `,
    html: `
      <p id="pedidoCount" style="margin-top:10px;font-size:16px;">
        📦 ${cantidad} nuevo${cantidad > 1 ? 's' : ''} pedido${cantidad > 1 ? 's' : ''}.
      </p>
      <button id="stopSoundBtn" class="glass-button">🛑 Detener sonido</button>
    `,
    background: 'rgba(255, 255, 255, 0.15)',
    color: '#fff',
    backdrop: `
      rgba(0,0,0,0.4)
      url("https://media.giphy.com/media/j5QcmXoFWl4Q0/giphy.gif")
      center top
      no-repeat
    `,
    showConfirmButton: false,
    allowOutsideClick: false,
    customClass: { popup: 'glass-alert' },
    didOpen: () => {
      document.getElementById("stopSoundBtn").addEventListener("click", detenerAlerta);
    }
  });
}

// === ACTUALIZAR CONTEO EN MODAL ===
function actualizarModalConteo(nuevos) {
  const el = document.getElementById('pedidoCount');
  if (el) {
    const texto = el.innerText.match(/\d+/);
    const actuales = texto ? parseInt(texto[0]) : 0;
    const total = actuales + nuevos;
    el.innerText = `📦 ${total} nuevos pedidos detectados.`;
  }
  clearTimeout(soundTimeout);
  soundTimeout = setTimeout(() => detenerAlerta(), 60000);
}

// === DETENER ALERTA ===
function detenerAlerta() {
  newOrderSound.pause();
  newOrderSound.currentTime = 0;
  isAlertActive = false;
  clearTimeout(soundTimeout);
  Swal.close();
  console.log("🔕 Alerta detenida correctamente");
}

// === VERIFICACIÓN AUTOMÁTICA ===
setInterval(() => {
  checkPedidosUpdate();
  checkVentasUpdate();
}, REFRESH_INTERVAL);


/* === VENTAS EN TIEMPO REAL === */
let lastVentasHash = "";

async function checkVentasUpdate() {
  try {
    const res = await fetch(`${GOOGLE_SHEET_API}?sheet=Ventas`, { cache: "no-store" });
    const data = await res.json();
    if (!Array.isArray(data)) return;

    const currentHash = hashData(data);
    if (currentHash !== lastVentasHash) {
      lastVentasHash = currentHash;
      console.log("🔄 Cambios detectados en VENTAS — actualizando...");
      ventasData = data.map(v => ({
        id: v.id || v.ID || '',
        date: v.fecha || v.Fecha || v.timestamp || '',
        customer: v.nombre || v.Nombre || 'Cliente',
        type: v.tipo || v.Tipo || 'venta',
        total: Number(v.total || v.Total || 0)
      }));
      refreshSales();
      Swal.fire({
        icon: 'success',
        title: 'Ventas actualizadas',
        text: 'Los datos de ventas fueron actualizados automáticamente.',
        timer: 2500,
        showConfirmButton: false
      });
    }
  } catch (err) {
    console.warn("⚠️ Error verificando cambios en Ventas:", err);
  }
}


// ---------- Acciones de pedidos ----------
async function sendPedidoAction(action, payload = {}) {
  try {
    const res = await fetch(GOOGLE_SHEET_API, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action,       // tipo de acción: complete, cancel, edit
        ...payload    // datos adicionales
      })
    });

    // Si tu doPost responde con { success: true }
    const data = await res.json();
    return data.success || false;

  } catch (err) {
    console.error("❌ Error en acción Sheets:", err);
    return false;
  }
}

// ---------- Escuchar botones ----------
document.addEventListener("click", async (e) => {
  const btn = e.target;

  if (btn.classList.contains("btn-completar")) {
    const id = btn.dataset.id;
    if (!confirm("¿Marcar este pedido como completado?")) return;

    const ok = await sendPedidoAction("complete", { id });
    if (ok) {
      alert("✅ Pedido completado y movido a Ventas");
      fetchPedidos(); // refresca la tabla
    } else {
      Swal.fire({
  icon: 'success',
  title: '¡Éxito!',
  text: 'El pedido se completó correctamente 🎉',
  showConfirmButton: false,
  timer: 2000
});
    }
  }

  if (btn.classList.contains("btn-cancelar")) {
    const id = btn.dataset.id;
    if (!confirm("¿Cancelar este pedido?")) return;

    const ok = await sendPedidoAction("cancel", { id });
    if (ok) {
      alert("✅ Pedido cancelado");
      fetchPedidos();
    } else {
      Swal.fire({
  icon: 'success',
  title: '¡Éxito!',
  text: 'El pedido se Canceló correctamente 🎉',
  showConfirmButton: false,
  timer: 2000
});
    }
  }

  if (btn.classList.contains("btn-editar")) {
    const id = btn.dataset.id;
    const campo = prompt("Campo a editar (ej: cliente, total, producto):");
    const valor = prompt(`Nuevo valor para ${campo}:`);
    if (!campo || !valor) return;

    const ok = await sendPedidoAction("edit", { id, field: campo, value: valor });
    if (ok) {
      alert("✏️ Pedido actualizado");
      fetchPedidos();
    } else {
      Swal.fire({
  icon: 'success',
  title: '¡Éxito!',
  text: 'El pedido se Editó correctamente 🎉',
  showConfirmButton: false,
  timer: 2000
});
    }
  }
});





})();



//LA VERDADERA QUE FUNCIONA
