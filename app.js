
// app.js — lógica completa para The Boss (con imágenes locales)

// ---------- Config ----------
const BUSINESS_PHONE = '573123723999'; // <- reemplaza por el número real (sin '+')
const DELIVERY_FEE = 0; // tarifa por defecto de domicilio

// ---------- Datos de ejemplo ----------
const products = [
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
  price: 13000,
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

{
  id: 'b1',
  category: 'Hamburguesas',
  title: 'Oscar’s',
  price: 48000,
  desc: 'Pan, doble carne de 140gr a la parrilla, filete de pollo a la parrilla, pollo y carne desmenuzada, tocineta ahumada, queso fundido, salsa de queso cheddar, jamón, pepinillos y cebolla apanada.',
  ingredients: [
    'Pan',
    'Doble carne 140gr a la parrilla',
    'Filete de pollo a la parrilla',
    'Pollo desmenuzado',
    'Carne desmenuzada',
    'Tocineta ahumada',
    'Queso fundido',
    'Salsa de queso cheddar',
    'Jamón',
    'Pepinillos',
    'Cebolla apanada'
  ],
  image: 'images/oscars.png'
},
{
  id: 'b2',
  category: 'Hamburguesas',
  title: 'Ferrari',
  price: 26000,
  desc: 'Pan, doble carne de 140gr a la parrilla, pollo desmenuzado, tocineta ahumada, jamón, queso, tomate y cebolla grillé.',
  ingredients: [
    'Pan',
    'Doble carne 140gr a la parrilla',
    'Pollo desmenuzado',
    'Tocineta ahumada',
    'Jamón',
    'Queso',
    'Tomate',
    'Cebolla grillé'
  ],
  image: 'images/ferrari.png'
},
{
  id: 'b3',
  category: 'Hamburguesas',
  title: 'Hummer',
  price: 42000,
  desc: 'Pan, triple carne de 140gr asada a la parrilla, pollo y carne desmenuzado, queso fundido, tocineta ahumada, jamón, tomate y cebolla grillé.',
  ingredients: [
    'Pan',
    'Triple carne 140gr a la parrilla',
    'Pollo desmenuzado',
    'Carne desmenuzada',
    'Queso fundido',
    'Tocineta ahumada',
    'Jamón',
    'Tomate',
    'Cebolla grillé'
  ],
  image: 'images/hummer.png'
},
{
  id: 'b4',
  category: 'Hamburguesas',
  title: 'Mercedes Benz',
  price: 24000,
  desc: 'Pan, carne de 140gr a la parrilla, filete de pollo, tocineta ahumada, jamón, queso, tomate y cebolla grillé.',
  ingredients: [
    'Pan',
    'Carne 140gr a la parrilla',
    'Filete de pollo',
    'Tocineta ahumada',
    'Jamón',
    'Queso',
    'Tomate',
    'Cebolla grillé'
  ],
  image: 'images/mercedes-benz.png'
},
{
  id: 'b5',
  category: 'Hamburguesas',
  title: 'Grand Cherokee',
  price: 26000,
  desc: 'Pan, carne de 140gr a la parrilla, pollo desmenuzado, chorizo bañado en salsa BBQ, salsa de queso cheddar, tortilla de huevo, platanito rallado, tocineta ahumada, jamón, queso y cebolla grillé.',
  ingredients: [
    'Pan',
    'Carne 140gr a la parrilla',
    'Pollo desmenuzado',
    'Chorizo en salsa BBQ',
    'Salsa de queso cheddar',
    'Tortilla de huevo',
    'Platanito rallado',
    'Tocineta ahumada',
    'Jamón',
    'Queso',
    'Cebolla grillé'
  ],
  image: 'images/grand-cherokee.png'
},
{
  id: 'b6',
  category: 'Hamburguesas',
  title: 'Dodge',
  price: 23000,
  desc: 'Pan, carne de 140gr a la parrilla, carne desmenuzada, jalapeños, pepinillos, pico de gallo, tocineta ahumada, jamón, queso y nachos.',
  ingredients: [
    'Pan',
    'Carne 140gr a la parrilla',
    'Carne desmenuzada',
    'Jalapeños',
    'Pepinillos',
    'Pico de gallo',
    'Tocineta ahumada',
    'Jamón',
    'Queso',
    'Nachos'
  ],
  image: 'images/dodge.png'
},
{
  id: 'b7',
  category: 'Hamburguesas',
  title: 'Toyota Ranchera',
  price: 26000,
  desc: 'Pan, carne de 140gr a la parrilla, pollo desmenuzado, chorizo, maíz, huevo frito, queso, jamón, tocineta ahumada y cebolla grillé.',
  ingredients: [
    'Pan',
    'Carne 140gr a la parrilla',
    'Pollo desmenuzado',
    'Chorizo',
    'Maíz',
    'Huevo frito',
    'Queso',
    'Jamón',
    'Tocineta ahumada',
    'Cebolla grillé'
  ],
  image: 'images/toyota-ranchera.png'
}
,

{
  id: 'b8',
  category: 'Hamburguesas',
  title: 'Ford',
  price: 22000,
  desc: 'Pan, filete de pollo a la parrilla, carne desmenuzada, queso, jamón, tocineta ahumada, tomate y cebolla grillé.',
  ingredients: [
    'Pan',
    'Filete de pollo a la parrilla',
    'Carne desmenuzada',
    'Queso',
    'Jamón',
    'Tocineta ahumada',
    'Tomate',
    'Cebolla grillé'
  ],
  image: 'images/ford.png'
},
{
  id: 'b9',
  category: 'Hamburguesas',
  title: 'Renault 4',
  price: 16500,
  desc: 'Pan, 140gr de carne a la parrilla, jamón, queso, tomate y cebolla grillé.',
  ingredients: [
    'Pan',
    'Carne 140gr a la parrilla',
    'Jamón',
    'Queso',
    'Tomate',
    'Cebolla grillé'
  ],
  image: 'images/renault-4.png'
},
{
  id: 'b10',
  category: 'Hamburguesas',
  title: 'Chrysler',
  price: 22000,
  desc: 'Pan, filete de pollo apanado, queso, jamón, tomate, tocineta ahumada y cebolla grillé.',
  ingredients: [
    'Pan',
    'Filete de pollo apanado',
    'Queso',
    'Jamón',
    'Tomate',
    'Tocineta ahumada',
    'Cebolla grillé'
  ],
  image: 'images/chrysler.png'
},
{
  id: 'b11',
  category: 'Hamburguesas',
  title: 'Mazda',
  price: 22000,
  desc: 'Pan, 140gr de carne a la parrilla, pollo desmenuzado, queso, jamón, tocineta ahumada, tomate y cebolla grillé.',
  ingredients: [
    'Pan',
    'Carne 140gr a la parrilla',
    'Pollo desmenuzado',
    'Queso',
    'Jamón',
    'Tocineta ahumada',
    'Tomate',
    'Cebolla grillé'
  ],
  image: 'images/mazda.png'
},
{
  id: 'b12',
  category: 'Hamburguesas',
  title: 'Morgan',
  price: 22000,
  desc: 'Pan, 140gr de carne a la parrilla, queso, suero costeño, queso rallado, platanito rallado, tocineta ahumada, jamón, tomate y cebolla grillé.',
  ingredients: [
    'Pan',
    'Carne 140gr a la parrilla',
    'Queso',
    'Suero costeño',
    'Queso rallado',
    'Platanito rallado',
    'Tocineta ahumada',
    'Jamón',
    'Tomate',
    'Cebolla grillé'
  ],
  image: 'images/morgan.png'
}
,

{
  id: 'b13',
  category: 'Hamburguesas',
  title: 'Hamburguesa Camaro',
  price: 40000,
  desc: 'Pan artesanal, carne Angus de 170gr a la parrilla, deditos de queso costeño apanados, mermelada de tocineta ahumada y queso cheddar, acompañado con papas a la francesa artesanales.',
  ingredients: [
    'Pan artesanal',
    'Carne Angus 170gr a la parrilla',
    'Deditos de queso costeño apanados',
    'Mermelada de tocineta ahumada',
    'Queso cheddar',
    'Papas a la francesa artesanales'
  ],
  image: 'images/camaro.png'
},
{
  id: 'b14',
  category: 'Hamburguesas',
  title: 'Hamburguesa Fiat Cronos',
  price: 40000,
  desc: 'Pan artesanal, carne Angus de 170gr a la parrilla, chorizo asado a la parrilla, chimichurri argentino y queso cheddar, acompañado con papas a la francesa artesanales.',
  ingredients: [
    'Pan artesanal',
    'Carne Angus 170gr a la parrilla',
    'Chorizo asado a la parrilla',
    'Chimichurri argentino',
    'Queso cheddar',
    'Papas a la francesa artesanales'
  ],
  image: 'images/fiat-cronos.png'
},
{
  id: 'b15',
  category: 'Hamburguesas',
  title: "Hamburguesa Oscar's 2.0",
  price: 46000,
  desc: 'Pan artesanal, carne Angus de 170gr a la parrilla, filete de pollo apanado, pepinillos agridulces, cebolla y tocineta ahumada caramelizada en cerveza Club Colombia Dorada y queso cheddar, acompañado con papas a la francesa artesanales.',
  ingredients: [
    'Pan artesanal',
    'Carne Angus 170gr a la parrilla',
    'Filete de pollo apanado',
    'Pepinillos agridulces',
    'Cebolla',
    'Tocineta ahumada caramelizada',
    'Queso cheddar',
    'Papas a la francesa artesanales'
  ],
  image: 'images/oscars-2.png'
},
{
  id: 'b16',
  category: 'Hamburguesas',
  title: 'Jack Daniels',
  price: 40000,
  desc: 'Pan artesanal, carne Angus de 170gr a la parrilla, galleta de queso tempura, costillas de cerdo con salsa Jack Daniels y queso cheddar, acompañado con papas a la francesa artesanales.',
  ingredients: [
    'Pan artesanal',
    'Carne Angus 170gr a la parrilla',
    'Galleta de queso tempura',
    'Costillas de cerdo',
    'Salsa Jack Daniels',
    'Queso cheddar',
    'Papas a la francesa artesanales'
  ],
  image: 'images/jack-daniels.png'
},
{
  id: 'b17',
  category: 'Hamburguesas',
  title: 'Hamburguesa Wrangler',
  price: 40000,
  desc: 'Pan artesanal, carne Angus de 170gr a la parrilla, tomates asados a la parrilla, tocineta ahumada, cebolla tempura y queso cheddar, acompañado con papas a la francesa artesanales.',
  ingredients: [
    'Pan artesanal',
    'Carne Angus 170gr a la parrilla',
    'Tomates asados a la parrilla',
    'Tocineta ahumada',
    'Cebolla tempura',
    'Queso cheddar',
    'Papas a la francesa artesanales'
  ],
  image: 'images/wrangler.png'
},
{
  id: 'b18',
  category: 'Hamburguesas',
  title: 'Hamburguesa Jetta',
  price: 40000,
  desc: 'Pan artesanal, carne Angus de 170gr a la parrilla, maduritos caramelizados, tocineta ahumada, carne desmenuzada y queso cheddar, acompañado con papas a la francesa artesanales.',
  ingredients: [
    'Pan artesanal',
    'Carne Angus 170gr a la parrilla',
    'Maduritos caramelizados',
    'Tocineta ahumada',
    'Carne desmenuzada',
    'Queso cheddar',
    'Papas a la francesa artesanales'
  ],
  image: 'images/jetta.png'
}
,
//PERROS CALIENTES
{
  id: 'p1',
  category: 'Perros',
  title: "Oscar's",
  price: 28000,
  desc: 'Pan, salchicha tipo americana, carne desmenuzada, trocitos de carne, pollo desmenuzado, trocitos de pollo, tocineta ahumada, piña en cuadritos, pepinillos y queso gratinado.',
  ingredients: [
    'Pan',
    'Salchicha tipo americana',
    'Carne desmenuzada',
    'Trocitos de carne',
    'Pollo desmenuzado',
    'Trocitos de pollo',
    'Tocineta ahumada',
    'Piña en cuadritos',
    'Pepinillos',
    'Queso gratinado'
  ],
  image: 'images/perro-oscars.png'
},
{
  id: 'p2',
  category: 'Perros',
  title: 'Peugeot',
  price: 20000,
  desc: 'Pan, cabano, pollo desmenuzado, carne desmenuzada, tocineta ahumada, piña en cuadritos y queso gratinado.',
  ingredients: [
    'Pan',
    'Cabano',
    'Pollo desmenuzado',
    'Carne desmenuzada',
    'Tocineta ahumada',
    'Piña en cuadritos',
    'Queso gratinado'
  ],
  image: 'images/perro-peugeot.png'
},
{
  id: 'p3',
  category: 'Perros',
  title: 'Maserati',
  price: 20000,
  desc: 'Pan, chorizo, pollo desmenuzado, maíz, tocineta ahumada, piña en cuadritos, jamón, queso gratinado y salsa de queso cheddar.',
  ingredients: [
    'Pan',
    'Chorizo',
    'Pollo desmenuzado',
    'Maíz',
    'Tocineta ahumada',
    'Piña en cuadritos',
    'Jamón',
    'Queso gratinado',
    'Salsa de queso cheddar'
  ],
  image: 'images/perro-maserati.png'
},
{
  id: 'p4',
  category: 'Perros',
  title: 'Honda',
  price: 18000,
  desc: 'Pan, salchicha tipo americana, pollo desmenuzado, tocineta ahumada, piña en cuadritos, jamón y queso gratinado.',
  ingredients: [
    'Pan',
    'Salchicha tipo americana',
    'Pollo desmenuzado',
    'Tocineta ahumada',
    'Piña en cuadritos',
    'Jamón',
    'Queso gratinado'
  ],
  image: 'images/perro-honda.png'
},
{
  id: 'p5',
  category: 'Perros',
  title: 'McLaren',
  price: 20000,
  desc: 'Pan, salchicha tipo americana, carne desmenuzada, jalapeños, pepinillos, pico de gallo, tocineta ahumada, piña en cuadritos, jamón, queso gratinado y nachos.',
  ingredients: [
    'Pan',
    'Salchicha tipo americana',
    'Carne desmenuzada',
    'Jalapeños',
    'Pepinillos',
    'Pico de gallo',
    'Tocineta ahumada',
    'Piña en cuadritos',
    'Jamón',
    'Queso gratinado',
    'Nachos'
  ],
  image: 'images/perro-mclaren.png'
},
{
  id: 'p6',
  category: 'Perros',
  title: 'Chevrolet',
  price: 16000,
  desc: 'Pan, salchicha tipo americana, pollo desmenuzado, piña en cuadritos y queso gratinado.',
  ingredients: [
    'Pan',
    'Salchicha tipo americana',
    'Pollo desmenuzado',
    'Piña en cuadritos',
    'Queso gratinado'
  ],
  image: 'images/perro-chevrolet.png'
},
{
  id: 'p7',
  category: 'Perros',
  title: 'Perro Spark',
  price: 15000,
  desc: 'Pan, salchicha tipo americana, cebolla en cuadritos, lechuga, piña en cuadritos, salsa de tomate, mostaza, tártara, queso costeño y queso gratinado.',
  ingredients: [
    'Pan',
    'Salchicha tipo americana',
    'Cebolla en cuadritos',
    'Lechuga',
    'Piña en cuadritos',
    'Salsa de tomate',
    'Mostaza',
    'Salsa tártara',
    'Queso costeño',
    'Queso gratinado'
  ],
  image: 'images/perro-spark.png'
},
{
  id: 'p8',
  category: 'Perros',
  title: 'Perro Hilux',
  price: 18000,
  desc: 'Pan, salchicha tipo americana apanada, piña en cuadritos, tocineta ahumada crispy, queso costeño y queso gratinado.',
  ingredients: [
    'Pan',
    'Salchicha tipo americana apanada',
    'Piña en cuadritos',
    'Tocineta ahumada crispy',
    'Queso costeño',
    'Queso gratinado'
  ],
  image: 'images/perro-hilux.png'
}
,

//PICADAS CADILLAC
{
  id: 'pc1',
  category: 'Picada Cadillac',
  title: 'Picada X2',
  price: 40000,
  desc: 'Papa a la francesa, salchicha tipo americana, chorizo, costillas de cerdo, trocitos de carne, trocitos de pollo, pollo desmenuzado, cebolla grillé y queso costeño o fundido.',
  ingredients: [
    'Papa a la francesa',
    'Salchicha tipo americana',
    'Chorizo',
    'Costillas de cerdo',
    'Trocitos de carne',
    'Trocitos de pollo',
    'Pollo desmenuzado',
    'Cebolla grillé',
    'Queso costeño o fundido'
  ],
  image: 'images/picada-x2.png'
},
{
  id: 'pc2',
  category: 'Picada Cadillac',
  title: 'Picada X3',
  price: 60000,
  desc: 'Papa a la francesa, salchicha tipo americana, chorizo, costillas de cerdo, trocitos de carne, trocitos de pollo, pollo desmenuzado, cebolla grillé y queso costeño o fundido.',
  ingredients: [
    'Papa a la francesa',
    'Salchicha tipo americana',
    'Chorizo',
    'Costillas de cerdo',
    'Trocitos de carne',
    'Trocitos de pollo',
    'Pollo desmenuzado',
    'Cebolla grillé',
    'Queso costeño o fundido'
  ],
  image: 'images/picada-x3.png'
},
{
  id: 'pc3',
  category: 'Picada Cadillac',
  title: 'Picada X4',
  price: 80000,
  desc: 'Papa a la francesa, salchicha tipo americana, chorizo, costillas de cerdo, trocitos de carne, trocitos de pollo, pollo desmenuzado, cebolla grillé y queso costeño o fundido.',
  ingredients: [
    'Papa a la francesa',
    'Salchicha tipo americana',
    'Chorizo',
    'Costillas de cerdo',
    'Trocitos de carne',
    'Trocitos de pollo',
    'Pollo desmenuzado',
    'Cebolla grillé',
    'Queso costeño o fundido'
  ],
  image: 'images/picada-x4.png'
}
,

//DESGRANADOS

{
  id: 'd1',
  category: 'Desgranados',
  title: "Mazorca Oscar's",
  price: 21000,
  desc: 'Maíz desgranado, pollo desmenuzado, trocitos de pollo, trocitos de carne, tocineta ahumada, bañada en salsa de la casa, queso rallado, acompañado con papas a la francesa.',
  ingredients: [
    'Maíz desgranado',
    'Pollo desmenuzado',
    'Trocitos de pollo',
    'Trocitos de carne',
    'Tocineta ahumada',
    'Salsa de la casa',
    'Queso rallado',
    'Papas a la francesa'
  ],
  image: 'images/mazorca-oscars.png'
},
{
  id: 'd2',
  category: 'Desgranados',
  title: 'Mazorca Kia',
  price: 12000,
  desc: 'Maíz desgranado, tocineta ahumada, bañada en salsa de la casa y queso rallado.',
  ingredients: [
    'Maíz desgranado',
    'Tocineta ahumada',
    'Salsa de la casa'
  ],
  image: 'images/mazorca-kia.png'
}
,

//PAPITAS CROCANTES

{
  id: 'pcro1',
  category: 'Papitas Crocantes',
  title: "Papas Oscar's",
  price: 26000,
  desc: 'Papas a la francesa, trocitos de carne, trocitos de pollo, pollo desmenuzado, chorizo, tocineta ahumada, maíz salteado, queso gratinado y salsa de queso cheddar.',
  ingredients: [
    'Papas a la francesa',
    'Trocitos de carne',
    'Trocitos de pollo',
    'Pollo desmenuzado',
    'Chorizo',
    'Tocineta ahumada',
    'Maíz salteado',
    'Queso gratinado',
    'Salsa de queso cheddar'
  ],
  image: 'images/papas-oscars.png'
},
{
  id: 'pcro2',
  category: 'Papitas Crocantes',
  title: 'Salchichoripollo Mitsubishi',
  price: 21000,
  desc: 'Papas a la francesa, chorizo, salchicha, pollo desmenuzado, cebolla grillé, bañada en salsa de la casa y queso rallado.',
  ingredients: [
    'Papas a la francesa',
    'Chorizo',
    'Salchicha',
    'Pollo desmenuzado',
    'Cebolla grillé',
    'Salsa de la casa',
    'Queso rallado'
  ],
  image: 'images/salchichoripollo-mitsubishi.png'
},
{
  id: 'pcro3',
  category: 'Papitas Crocantes',
  title: 'Salchipapa Daewo',
  price: 23000,
  desc: 'Papas a la francesa, salchicha tipo americana, pollo desmenuzado, carne desmenuzada, tocineta ahumada, bañadas en salsa de la casa y queso rallado.',
  ingredients: [
    'Papas a la francesa',
    'Salchicha tipo americana',
    'Pollo desmenuzado',
    'Carne desmenuzada',
    'Tocineta ahumada',
    'Salsa de la casa',
    'Queso rallado'
  ],
  image: 'images/salchipapa-daewo.png'
},
{
  id: 'pcro4',
  category: 'Papitas Crocantes',
  title: 'Papas Jeep',
  price: 20000,
  desc: 'Papas a la francesa, trocitos de carne, trocitos de pollo, tocineta ahumada, bañada en salsa de la casa y queso rallado.',
  ingredients: [
    'Papas a la francesa',
    'Trocitos de carne',
    'Trocitos de pollo',
    'Tocineta ahumada',
    'Salsa de la casa',
    'Queso rallado'
  ],
  image: 'images/papas-jeep.png'
},
{
  id: 'pcro5',
  category: 'Papitas Crocantes',
  title: 'Salchipapa BMW',
  price: 19000,
  desc: 'Papas a la francesa, salchicha tipo americana, pollo desmenuzado, vegetales (cebolla grillé, pepino, lechuga, tomate) bañados en salsa de la casa y queso rallado.',
  ingredients: [
    'Papas a la francesa',
    'Salchicha tipo americana',
    'Pollo desmenuzado',
    'Cebolla grillé',
    'Pepino',
    'Lechuga',
    'Tomate',
    'Salsa de la casa',
    'Queso rallado'
  ],
  image: 'images/salchipapa-bmw.png'
},
{
  id: 'pcro6',
  category: 'Papitas Crocantes',
  title: 'Salchipapa Nissan',
  price: 15000,
  desc: 'Papas a la francesa, salchicha tipo americana, bañada en salsa de la casa y queso rallado.',
  ingredients: [
    'Papas a la francesa',
    'Salchicha tipo americana',
    'Salsa de la casa',
    'Queso rallado'
  ],
  image: 'images/salchipapa-nissan.png'
}
,

//SANDWICHES
{
  id: 's1',
  category: 'Sandwiches',
  title: "Oscar's",
  price: 30000,
  desc: 'Pan con especias, pollo desmenuzado, carne desmenuzada, carne en trocitos, pollo en trocitos, cabano picado, queso y vegetales (cebolla grillé, lechuga, tomate, pepino).',
  ingredients: [
    'Pan con especias',
    'Pollo desmenuzado',
    'Carne desmenuzada',
    'Carne en trocitos',
    'Pollo en trocitos',
    'Cabano picado',
    'Queso',
    'Cebolla grillé',
    'Lechuga',
    'Tomate',
    'Pepino'
  ],
  image: 'images/sandwich-oscars.png'
},
{
  id: 's2',
  category: 'Sandwiches',
  title: 'Alfa Romeo',
  price: 28000,
  desc: 'Pan con especias, jamón de cordero, jamón pierna, tocineta ahumada, queso y vegetales (cebolla grillé, lechuga, tomate, pepino).',
  ingredients: [
    'Pan con especias',
    'Jamón de cordero',
    'Jamón pierna',
    'Tocineta ahumada',
    'Queso',
    'Cebolla grillé',
    'Lechuga',
    'Tomate',
    'Pepino'
  ],
  image: 'images/sandwich-alfa-romeo.png'
},
{
  id: 's3',
  category: 'Sandwiches',
  title: 'Jaguar',
  price: 28000,
  desc: 'Pan con especias, pollo desmenuzado, pollo en trocitos, tocineta ahumada, jamón, queso y vegetales (cebolla grillé, lechuga, tomate, pepino).',
  ingredients: [
    'Pan con especias',
    'Pollo desmenuzado',
    'Pollo en trocitos',
    'Tocineta ahumada',
    'Jamón',
    'Queso',
    'Cebolla grillé',
    'Lechuga',
    'Tomate',
    'Pepino'
  ],
  image: 'images/sandwich-jaguar.png'
},
{
  id: 's4',
  category: 'Sandwiches',
  title: 'Hyundai',
  price: 28000,
  desc: 'Pan con especias, pollo desmenuzado, champiñones, jamón, queso, salsa de la casa y vegetales (cebolla grillé, lechuga, tomate, pepino).',
  ingredients: [
    'Pan con especias',
    'Pollo desmenuzado',
    'Champiñones',
    'Jamón',
    'Queso',
    'Salsa de la casa',
    'Cebolla grillé',
    'Lechuga',
    'Tomate',
    'Pepino'
  ],
  image: 'images/sandwich-hyundai.png'
}
,

//CREPES
{
  id: 'cr1',
  category: 'Crepe',
  title: "Oscar's",
  price: 28000,
  desc: 'Tortilla de trigo rellena de carne en trocitos, pollo en trocitos, carne desmenuzada, pollo desmenuzado, jamón, queso gratinado y vegetales (cebolla grillé, lechuga), acompañada con papas a la francesa.',
  ingredients: [
    'Tortilla de trigo',
    'Carne en trocitos',
    'Pollo en trocitos',
    'Carne desmenuzada',
    'Pollo desmenuzado',
    'Jamón',
    'Queso gratinado',
    'Cebolla grillé',
    'Lechuga',
    'Papas a la francesa'
  ],
  image: 'images/crepe-oscars.png'
},
{
  id: 'cr2',
  category: 'Crepe',
  title: 'Rolls Royce',
  price: 21000,
  desc: 'Tortilla de trigo rellena de carne desmenuzada, carne en cuadritos, pico de gallo, lechuga, piña en cuadritos, jamón y queso gratinado, acompañada con papas a la francesa.',
  ingredients: [
    'Tortilla de trigo',
    'Carne desmenuzada',
    'Carne en cuadritos',
    'Pico de gallo',
    'Lechuga',
    'Piña en cuadritos',
    'Jamón',
    'Queso gratinado',
    'Papas a la francesa'
  ],
  image: 'images/crepe-rolls-royce.png'
},
{
  id: 'cr3',
  category: 'Crepe',
  title: 'Dacia',
  price: 20000,
  desc: 'Tortilla de trigo rellena de pollo desmenuzado, pollo en trocitos, jamón, queso gratinado y vegetales (cebolla grillé, lechuga), acompañada con papas a la francesa.',
  ingredients: [
    'Tortilla de trigo',
    'Pollo desmenuzado',
    'Pollo en trocitos',
    'Jamón',
    'Queso gratinado',
    'Cebolla grillé',
    'Lechuga',
    'Papas a la francesa'
  ],
  image: 'images/crepe-dacia.png'
}
,

//PATACONES
{
  id: 'pt1',
  category: 'Patacones',
  title: "Patacon Oscar's",
  price: 26000,
  desc: 'Carne en trocitos, pollo en trocitos, pollo desmenuzado, carne desmenuzada, tocineta ahumada, suero y queso costeño.',
  ingredients: [
    'Carne en trocitos',
    'Pollo en trocitos',
    'Pollo desmenuzado',
    'Carne desmenuzada',
    'Tocineta ahumada',
    'Suero',
    'Queso costeño'
  ],
  image: 'images/patacon-oscars.png'
},
{
  id: 'pt2',
  category: 'Patacones',
  title: 'Patacon Bentley',
  price: 19000,
  desc: 'Pollo desmenuzado, pollo en cuadritos, tocineta, suero y queso costeño.',
  ingredients: [
    'Pollo desmenuzado',
    'Pollo en cuadritos',
    'Tocineta',
    'Suero',
    'Queso costeño'
  ],
  image: 'images/patacon-bentley.png'
},
{
  id: 'pt3',
  category: 'Patacones',
  title: 'Patacon Skoda',
  price: 19000,
  desc: 'Carne en trocitos, carne desmenuzada, pico de gallo, piña en cuadritos y queso gratinado.',
  ingredients: [
    'Carne en trocitos',
    'Carne desmenuzada',
    'Pico de gallo',
    'Piña en cuadritos',
    'Queso gratinado'
  ],
  image: 'images/patacon-skoda.png'
}
,

//ALITAS DE POLLO
{
  id: 'ap1',
  category: 'Alitas de Pollo',
  title: 'Alitas de Pollo X6',
  price: 28000,
  desc: 'Alitas de pollo bañadas en nuestras ricas salsas (BBQ, Miel Mostaza, Picante de Búfalo) y papas a la francesa.',
  ingredients: [
    'Alitas de pollo',
    'Salsa BBQ',
    'Salsa Miel Mostaza',
    'Salsa Picante de Búfalo',
    'Papas a la francesa'
  ],
  image: 'images/alitas-x6.png',
  sizes: [
    {
      id: 'ap1-apanadas',
      label: 'Apanadas',
      price: 0,
      image: 'images/alitas-x6.png'
    },
    {
      id: 'ap1-asadas',
      label: 'Asadas al carbón',
      price: 0,
      image: 'images/alitas-x6.png'
    }
  ]
},
{
  id: 'ap2',
  category: 'Alitas de Pollo',
  title: 'Alitas de Pollo X12',
  price: 56000,
  desc: 'Alitas de pollo bañadas en nuestras ricas salsas (BBQ, Miel Mostaza, Picante de Búfalo) y papas a la francesa.',
  ingredients: [
    'Alitas de pollo',
    'Salsa BBQ',
    'Salsa Miel Mostaza',
    'Salsa Picante de Búfalo',
    'Papas a la francesa'
  ],
  image: 'images/alitas-x12.png',
  sizes: [
    {
      id: 'ap2-apanadas',
      label: 'Apanadas',
      price: 0,
      image: 'images/alitas-x12.png'
    },
    {
      id: 'ap2-asadas',
      label: 'Asadas al carbón',
      price: 0,
      image: 'images/alitas-x12.png'
    }
  ]
}
,

//CORTES DE CARNE
{
  id: 'co1',
  category: 'Cortes',
  title: 'Tomahawk Continental GT',
  price: 50000,
  desc: 'Carne de res a la parrilla acompañado de ensalada (tomate, cebolla, lechuga crespa, pepino) y papa criolla o francesa.',
  ingredients: [
    'Carne de res a la parrilla',
    'Tomate',
    'Cebolla',
    'Lechuga crespa',
    'Pepino',
    'Papa criolla o francesa'
  ],
  image: 'images/tomahawk-continental.png'
},
{
  id: 'co2',
  category: 'Cortes',
  title: 'Churrasco Porsche',
  price: 40000,
  desc: '250gr de carne de res a la parrilla, ensalada (tomate, cebolla, lechuga crespa, pepino), papas a la francesa o papa criolla.',
  ingredients: [
    'Carne de res 250gr a la parrilla',
    'Tomate',
    'Cebolla',
    'Lechuga crespa',
    'Pepino',
    'Papas a la francesa o papa criolla'
  ],
  image: 'images/churrasco-porsche.png'
},
{
  id: 'co3',
  category: 'Cortes',
  title: 'Punta de Anca Lamborghini',
  price: 40000,
  desc: '250gr de carne de res a la parrilla, ensalada (tomate, cebolla, lechuga crespa, pepino), papas a la francesa o papa criolla.',
  ingredients: [
    'Carne de res 250gr a la parrilla',
    'Tomate',
    'Cebolla',
    'Lechuga crespa',
    'Pepino',
    'Papas a la francesa o papa criolla'
  ],
  image: 'images/punta-anca-lamborghini.png'
},
{
  id: 'co4',
  category: 'Cortes',
  title: 'Pechuga Land Rover',
  price: 35000,
  desc: '250gr de pechuga a la parrilla, ensalada (tomate, cebolla, lechuga crespa, pepino), papas a la francesa o papa criolla.',
  ingredients: [
    'Pechuga 250gr a la parrilla',
    'Tomate',
    'Cebolla',
    'Lechuga crespa',
    'Pepino',
    'Papas a la francesa o papa criolla'
  ],
  image: 'images/pechuga-land-rover.png'
},
{
  id: 'co5',
  category: 'Cortes',
  title: 'Pechuga California',
  price: 40000,
  desc: '250gr de pechuga a la parrilla, piña en cuadritos, jamón, queso gratinado, ensalada (tomate, cebolla, lechuga crespa, pepino) y papa criolla o francesa.',
  ingredients: [
    'Pechuga 250gr a la parrilla',
    'Piña en cuadritos',
    'Jamón',
    'Queso gratinado',
    'Tomate',
    'Cebolla',
    'Lechuga crespa',
    'Pepino',
    'Papa criolla o francesa'
  ],
  image: 'images/pechuga-california.png'
},
{
  id: 'co6',
  category: 'Cortes',
  title: 'Costillas de Cerdo Aston Martin',
  price: 35000,
  desc: '200gr de costilla de cerdo, ensalada (tomate, cebolla, lechuga crespa, pepino), papas a la francesa o papa criolla.',
  ingredients: [
    'Costilla de cerdo 200gr',
    'Tomate',
    'Cebolla',
    'Lechuga crespa',
    'Pepino',
    'Papas a la francesa o papa criolla'
  ],
  image: 'images/costillas-aston-martin.png'
}
,

//PINCHOS
{
  id: 'pi1',
  category: 'Pinchos',
  title: 'Audi',
  price: 23000,
  desc: '200gr de pollo a la parrilla, acompañado de ensalada y papa criolla o francesa.',
  ingredients: [
    'Pollo 200gr a la parrilla',
    'Ensalada',
    'Papa criolla o francesa'
  ],
  image: 'images/pincho-audi.png'
},
{
  id: 'pi2',
  category: 'Pinchos',
  title: 'Bugatti',
  price: 23000,
  desc: '200gr de carne a la parrilla, acompañado de ensalada y papa criolla o francesa.',
  ingredients: [
    'Carne 200gr a la parrilla',
    'Ensalada',
    'Papa criolla o francesa'
  ],
  image: 'images/pincho-bugatti.png'
},
{
  id: 'pi3',
  category: 'Pinchos',
  title: 'Citroën',
  price: 25000,
  desc: '200gr de pollo y carne a la parrilla, acompañado de ensalada y papa criolla o francesa.',
  ingredients: [
    'Pollo 200gr a la parrilla',
    'Carne 200gr a la parrilla',
    'Ensalada',
    'Papa criolla o francesa'
  ],
  image: 'images/pincho-citroen.png'
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
  title: 'Pizzeta Tesla',
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
  title: "Pizzeta Oscar's",
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
  title: 'Pizzeta Genesis',
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
  title: 'Pizzeta Chery',
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
  title: 'Pizzeta Lada',
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
  title: 'Pizzeta Jac',
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
  title: 'Pizzeta Apollo',
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
  title: 'Pizzeta Lancia',
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
  title: 'Pizzeta Brabus',
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
  title: 'Pizzeta Rubicon',
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
  title: 'Pizzeta Infiniti',
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
  title: 'Pizzeta Abarth',
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
  title: 'Pizzeta Vegetariana',
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

//CERVEZA
{
  id: 'licor1',
  category: 'Licor',
  title: 'Cerveza - Original',
  price: 4500,
  desc: 'Cerveza nacional clásica con sabor equilibrado y refrescante.',
  image: 'images/cerveza-original.png'
},
{
  id: 'licor2',
  category: 'Licor',
  title: 'Cerveza - Light',
  price: 4500,
  desc: 'Cerveza suave y ligera, ideal para disfrutar en cualquier momento.',
  image: 'images/cerveza-light.png'
},
{
  id: 'licor3',
  category: 'Licor',
  title: 'Cerveza - Pilsen',
  price: 4500,
  desc: 'Cerveza tipo lager con un perfil fresco y balanceado.',
  image: 'images/cerveza-pilsen.png'
},
{
  id: 'licor4',
  category: 'Licor',
  title: 'Cerveza - Póker',
  price: 4500,
  desc: 'Cerveza de tradición con cuerpo medio y gran sabor.',
  image: 'images/cerveza-poker.png'
},
{
  id: 'licor5',
  category: 'Licor',
  title: 'Cerveza - Andina',
  price: 4500,
  desc: 'Cerveza nacional de sabor suave y refrescante.',
  image: 'images/cerveza-andina.png'
},
{
  id: 'licor6',
  category: 'Licor',
  title: 'Club Colombia Dorada',
  price: 5000,
  desc: 'Cerveza refrescante nacional con un sabor premium y balanceado.',
  image: 'images/club-colombia.png'
},
{
  id: 'licor7',
  category: 'Licor',
  title: 'Coronita',
  price: 6500,
  desc: 'Cerveza internacional de sabor ligero y refrescante.',
  image: 'images/coronita.png'
},
{
  id: 'licor8',
  category: 'Licor',
  title: 'Heineken',
  price: 6500,
  desc: 'Cerveza premium internacional con un sabor distintivo.',
  image: 'images/heineken.png'
},
{
  id: 'licor9',
  category: 'Licor',
  title: 'Budweiser',
  price: 6500,
  desc: 'Cerveza internacional suave con cuerpo equilibrado.',
  image: 'images/budweiser.png'
}
,

//GRANIZADOS
{
  id: 'g1',
  category: 'Granizados',
  title: 'Granizado de Fresa',
  price: 7000,
  desc: 'Granizado natural de fresa. Puedes elegir entre agua o leche.',
  ingredients: ['Fresa', 'Azúcar', 'Hielo'],
  image: 'images/granizado-fresa.png',
  sizes: [
    {
      id: 'g1-agua',
      label: 'En agua',
      price: 7000,
      image: 'images/granizado-fresa.png'
    },
    {
      id: 'g1-leche',
      label: 'En leche',
      price: 8000,
      image: 'images/granizado-fresa.png'
    }
  ]
},
{
  id: 'g2',
  category: 'Granizados',
  title: 'Granizado de Limón',
  price: 7000,
  desc: 'Granizado natural de limón. Puedes elegir entre agua o leche.',
  ingredients: ['Limón', 'Azúcar', 'Hielo'],
  image: 'images/granizado-limon.png',
  sizes: [
    {
      id: 'g2-agua',
      label: 'En agua',
      price: 7000,
      image: 'images/granizado-limon.png'
    },
    {
      id: 'g2-leche',
      label: 'En leche',
      price: 8000,
      image: 'images/granizado-limon.png'
    }
  ]
},
{
  id: 'g3',
  category: 'Granizados',
  title: 'Granizado de Mandarina',
  price: 7000,
  desc: 'Granizado natural de mandarina. Puedes elegir entre agua o leche.',
  ingredients: ['Mandarina', 'Azúcar', 'Hielo'],
  image: 'images/granizado-mandarina.png',
  sizes: [
    {
      id: 'g3-agua',
      label: 'En agua',
      price: 7000,
      image: 'images/granizado-mandarina.png'
    },
    {
      id: 'g3-leche',
      label: 'En leche',
      price: 8000,
      image: 'images/granizado-mandarina.png'
    }
  ]
},
{
  id: 'g4',
  category: 'Granizados',
  title: 'Granizado de Naranja',
  price: 7000,
  desc: 'Granizado natural de naranja. Puedes elegir entre agua o leche.',
  ingredients: ['Naranja', 'Azúcar', 'Hielo'],
  image: 'images/granizado-naranja.png',
  sizes: [
    {
      id: 'g4-agua',
      label: 'En agua',
      price: 7000,
      image: 'images/granizado-naranja.png'
    },
    {
      id: 'g4-leche',
      label: 'En leche',
      price: 8000,
      image: 'images/granizado-naranja.png'
    }
  ]
},
{
  id: 'g5',
  category: 'Granizados',
  title: 'Granizado de Lulo',
  price: 7000,
  desc: 'Granizado natural de lulo. Puedes elegir entre agua o leche.',
  ingredients: ['Lulo', 'Azúcar', 'Hielo'],
  image: 'images/granizado-lulo.png',
  sizes: [
    {
      id: 'g5-agua',
      label: 'En agua',
      price: 7000,
      image: 'images/granizado-lulo.png'
    },
    {
      id: 'g5-leche',
      label: 'En leche',
      price: 8000,
      image: 'images/granizado-lulo.png'
    }
  ]
},
{
  id: 'g6',
  category: 'Granizados',
  title: 'Granizado de Maracuyá',
  price: 7000,
  desc: 'Granizado natural de maracuyá. Puedes elegir entre agua o leche.',
  ingredients: ['Maracuyá', 'Azúcar', 'Hielo'],
  image: 'images/granizado-maracuya.png',
  sizes: [
    {
      id: 'g6-agua',
      label: 'En agua',
      price: 7000,
      image: 'images/granizado-maracuya.png'
    },
    {
      id: 'g6-leche',
      label: 'En leche',
      price: 8000,
      image: 'images/granizado-maracuya.png'
    }
  ]
},
{
  id: 'g7',
  category: 'Granizados',
  title: 'Granizado de Mango',
  price: 7000,
  desc: 'Granizado natural de mango. Puedes elegir entre agua o leche.',
  ingredients: ['Mango', 'Azúcar', 'Hielo'],
  image: 'images/granizado-mango.png',
  sizes: [
    {
      id: 'g7-agua',
      label: 'En agua',
      price: 7000,
      image: 'images/granizado-mango.png'
    },
    {
      id: 'g7-leche',
      label: 'En leche',
      price: 8000,
      image: 'images/granizado-mango.png'
    }
  ]
},
{
  id: 'g8',
  category: 'Granizados',
  title: 'Granizado de Uva',
  price: 7000,
  desc: 'Granizado natural de uva. Puedes elegir entre agua o leche.',
  ingredients: ['Uva', 'Azúcar', 'Hielo'],
  image: 'images/granizado-uva.png',
  sizes: [
    {
      id: 'g8-agua',
      label: 'En agua',
      price: 7000,
      image: 'images/granizado-uva.png'
    },
    {
      id: 'g8-leche',
      label: 'En leche',
      price: 8000,
      image: 'images/granizado-uva.png'
    }
  ]
},
{
  id: 'g9',
  category: 'Granizados',
  title: 'Granizado de Guanábana',
  price: 7000,
  desc: 'Granizado natural de guanábana. Puedes elegir entre agua o leche.',
  ingredients: ['Guanábana', 'Azúcar', 'Hielo'],
  image: 'images/granizado-guanabana.png',
  sizes: [
    {
      id: 'g9-agua',
      label: 'En agua',
      price: 7000,
      image: 'images/granizado-guanabana.png'
    },
    {
      id: 'g9-leche',
      label: 'En leche',
      price: 8000,
      image: 'images/granizado-guanabana.png'
    }
  ]
},
{
  id: 'g10',
  category: 'Granizados',
  title: 'Granizado de Mora',
  price: 7000,
  desc: 'Granizado natural de mora. Puedes elegir entre agua o leche.',
  ingredients: ['Mora', 'Azúcar', 'Hielo'],
  image: 'images/granizado-mora.png',
  sizes: [
    {
      id: 'g10-agua',
      label: 'En agua',
      price: 7000,
      image: 'images/granizado-mora.png'
    },
    {
      id: 'g10-leche',
      label: 'En leche',
      price: 8000,
      image: 'images/granizado-mora.png'
    }
  ]
},

{
  id: 'g11',
  category: 'Granizados',
  title: 'Granizado de Frutos Rojos',
  price: 7500,
  desc: 'Granizado refrescante de frutos rojos.',
  ingredients: ['Frutos Rojos', 'Azúcar', 'Hielo'],
  image: 'images/granizado-frutos-rojos.png'
},
{
  id: 'g12',
  category: 'Granizados',
  title: 'Granizado de Frutos Amarillos',
  price: 7500,
  desc: 'Granizado refrescante de frutos amarillos.',
  ingredients: ['Frutos Amarillos', 'Azúcar', 'Hielo'],
  image: 'images/granizado-frutos-amarillos.png'
},




// Bebidas // GASEOSAS
{
  id: 'bebida1',
  category: 'Gaseosas',
  title: 'Gaseosa 350ml',
  price: 4000,
  desc: 'Gaseosa en presentación de 350ml.',
  image: 'images/gaseosa-pet-coca.png'
},
{
  id: 'bebida2',
  category: 'Gaseosas',
  title: 'Gaseosa PET 400ml',
  price: 5000,
  desc: 'Gaseosa en presentación PET de 400ml.',
  image: 'images/gaseosa-pet-postobon.png'
},
{
  id: 'bebida3',
  category: 'Gaseosas',
  title: 'Gaseosa 1.5L',
  price: 10000,
  desc: 'Gaseosa en presentación de 1.5 litros.',
  image: 'images/gaseosa-coca.png'
},
{
  id: 'bebida4',
  category: 'Gaseosas',
  title: 'Botella de Agua',
  price: 3500,
  desc: 'Botella de agua pura natural.',
  image: 'images/agua.png'
},
{
  id: 'bebida5',
  category: 'Gaseosas',
  title: 'Michelada de Cereza',
  price: 5000,
  desc: 'Bebida michelada con sabor a cereza.',
  image: 'images/michelada-cereza.png'
},
{
  id: 'bebida6',
  category: 'Gaseosas',
  title: 'Soda Michelada',
  price: 5000,
  desc: 'Refrescante soda preparada tipo michelada.',
  image: 'images/soda-michelada.png'
},



 
  //LIMONADAS REFRESCANTES
    {
  id: 'limonada1',
  category: 'Limonadas',
  title: 'Limonada en Soda',
  price: 8500,
  desc: 'Limonada refrescante preparada en soda.',
  image: 'images/limonada-soda.png'
},
{
  id: 'limonada2',
  category: 'Limonadas',
  title: 'Limonada de Pepino',
  price: 8500,
  desc: 'Limonada natural con sabor a pepino.',
  image: 'images/limonada-pepino.png'
},
{
  id: 'limonada3',
  category: 'Limonadas',
  title: 'Limonada de Hierba Buena',
  price: 8500,
  desc: 'Limonada natural con hierba buena.',
  image: 'images/limonada-hierbabuena.png'
},
{
  id: 'limonada4',
  category: 'Limonadas',
  title: 'Limonada de Uva',
  price: 8500,
  desc: 'Limonada natural con sabor a uva.',
  image: 'images/limonada-uva.png'
},
{
  id: 'limonada5',
  category: 'Limonadas',
  title: 'Limonada de Mango',
  price: 8500,
  desc: 'Limonada natural con sabor a mango.',
  image: 'images/limonada-mango.png'
},
{
  id: 'limonada6',
  category: 'Limonadas',
  title: 'Limonada de Cereza',
  price: 11000,
  desc: 'Limonada natural con sabor a cereza.',
  image: 'images/limonada-cereza.png'
},
{
  id: 'limonada7',
  category: 'Limonadas',
  title: 'Limonada de Coco',
  price: 11000,
  desc: 'Limonada natural con sabor a coco.',
  image: 'images/limonada-coco.png'
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

  // ===== TAMAÑO SELECCIONADO =====
  let selectedSize = p.sizes
    ? p.sizes[0]
    : { id: p.id, price: p.price, image: p.image, label: "" };

  // ===== OVERLAY =====
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
            <h3>Variedad</h3>
            <div class="size-selector">
              ${p.sizes.map(s => `
                <label class="size-option">
                  <input type="radio" name="size" value="${s.id}" ${s.id === selectedSize.id ? "checked" : ""}>
                  ${s.label} — $${numberWithCommas(s.price)}
                </label>
              `).join("")}
            </div>
          ` : ""}

          ${p.extras?.length ? `
            <h3>Adiciones</h3>
            <div class="extras-list">
              ${p.extras.map(e => `
                <label>
                  <input type="checkbox"
                         data-key="${e.name}"
                         data-price="${e.price}">
                  <span>${e.name}</span>
                  <span class="extra-controls">
                    <button class="minus-extra">−</button>
                    <span class="extra-qty">0</span>
                    <button class="plus-extra">+</button>
                  </span>
                  <small>+$${numberWithCommas(e.price)}</small>
                </label>
              `).join("")}
            </div>
          ` : ""}

          <div class="quantity">
            <button class="minus">−</button>
            <span class="qty">1</span>
            <button class="plus">+</button>
          </div>

          <button class="add-btn">
            ${cartIndex !== null ? "Actualizar" : "Agregar"}
            <span class="price">$${numberWithCommas(selectedSize.price)}</span>
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // ===== CERRAR =====
  overlay.querySelector(".close").onclick = () => overlay.remove();
  overlay.onclick = e => { if (e.target === overlay) overlay.remove(); };

  // ===== VARIABLES =====
  let qty = 1;
  const qtyEl = overlay.querySelector(".qty");
  const priceEl = overlay.querySelector(".price");
  const extrasInputs = overlay.querySelectorAll(".extras-list input");

  // 🔐 ESTADO ROBUSTO DE EXTRAS
  const extrasState = {};
  // { "Tocineta": { qty: 3, price: 3000 } }

  // ===== EDICIÓN =====
  if (cartIndex !== null) {
    const item = cart[cartIndex];

    if (p.sizes) {
      selectedSize = p.sizes.find(s => s.id === item.sizeId) || p.sizes[0];
      overlay.querySelector("#product-img").src = selectedSize.image;
      overlay.querySelector(`input[value="${selectedSize.id}"]`).checked = true;
    }

    qty = item.qty;
    qtyEl.textContent = qty;

    if (item.extras?.length) {
      item.extras.forEach(e => {
        extrasState[e.name] = { qty: e.qty, price: e.price };
      });

      extrasInputs.forEach(input => {
        const key = input.dataset.key;
        if (extrasState[key]) {
          input.checked = true;
          input.closest("label").querySelector(".extra-qty").textContent =
            extrasState[key].qty;
        }
      });
    }
  }

  // ===== PRECIO FINAL (CORREGIDO) =====
  function updatePrice() {
    let extrasTotal = 0;

    Object.values(extrasState).forEach(e => {
      extrasTotal += e.price * e.qty;
    });

    // 🔑 CLAVE: el producto se multiplica, los extras NO
    const total = (selectedSize.price * qty) + extrasTotal;

    priceEl.textContent = `$${numberWithCommas(total)}`;
  }

  updatePrice();

  // ===== CAMBIO DE TAMAÑO =====
  overlay.querySelectorAll("input[name='size']").forEach(radio => {
    radio.onchange = e => {
      selectedSize = p.sizes.find(s => s.id === e.target.value);
      overlay.querySelector("#product-img").src = selectedSize.image;
      updatePrice();
    };
  });

  // ===== CANTIDAD =====
  overlay.querySelector(".plus").onclick = () => {
    qty++;
    qtyEl.textContent = qty;
    updatePrice();
  };

  overlay.querySelector(".minus").onclick = () => {
    if (qty > 1) {
      qty--;
      qtyEl.textContent = qty;
      updatePrice();
    }
  };

  // ===== CHECKBOX EXTRAS =====
  extrasInputs.forEach(input => {
    const key = input.dataset.key;
    const price = Number(input.dataset.price);
    const qtyEl = input.closest("label").querySelector(".extra-qty");

    input.onchange = () => {
      if (input.checked) {
        extrasState[key] = { qty: 1, price };
        qtyEl.textContent = 1;
      } else {
        delete extrasState[key];
        qtyEl.textContent = 0;
      }
      updatePrice();
    };
  });

  // ===== + EXTRA =====
  overlay.querySelectorAll(".plus-extra").forEach(btn => {
    btn.onclick = () => {
      const label = btn.closest("label");
      const input = label.querySelector("input");
      const key = input.dataset.key;
      const price = Number(input.dataset.price);
      const qtyEl = label.querySelector(".extra-qty");

      if (!extrasState[key]) {
        extrasState[key] = { qty: 0, price };
        input.checked = true;
      }

      extrasState[key].qty++;
      qtyEl.textContent = extrasState[key].qty;
      updatePrice();
    };
  });

  // ===== − EXTRA =====
  overlay.querySelectorAll(".minus-extra").forEach(btn => {
    btn.onclick = () => {
      const label = btn.closest("label");
      const input = label.querySelector("input");
      const key = input.dataset.key;
      const qtyEl = label.querySelector(".extra-qty");

      if (!extrasState[key]) return;

      extrasState[key].qty--;

      if (extrasState[key].qty <= 0) {
        delete extrasState[key];
        input.checked = false;
        qtyEl.textContent = 0;
      } else {
        qtyEl.textContent = extrasState[key].qty;
      }

      updatePrice();
    };
  });

  // ===== AGREGAR / ACTUALIZAR =====
  overlay.querySelector(".add-btn").onclick = () => {

    const extras = Object.entries(extrasState).map(([name, e]) => ({
      name,
      price: e.price,
      qty: e.qty
    }));

    const item = {
      productId: p.id,
      sizeId: selectedSize.id,
      title: selectedSize.label ? `${p.title} (${selectedSize.label})` : p.title,
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
  };
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
// 1. Modifica tu función actual para que actualice AMBOS contadores
function updateCartBadge() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  
  // Contador del header (el que ya tienes)
  if(cartCountEl) cartCountEl.textContent = count;
  
  // Nuevo contador de la burbuja flotante
  const floatingCountEl = document.querySelector('.bubble-count');
  if(floatingCountEl) floatingCountEl.textContent = count;
}

// 2. Lógica para mostrar/ocultar la burbuja al hacer scroll
const floatingCart = document.getElementById('floating-cart');
const headerCart = document.getElementById('open-cart'); // Tu carrito original del header

window.addEventListener('scroll', () => {
  const headerCartPos = headerCart.getBoundingClientRect().bottom;

  if (headerCartPos < 0) {
    // Si el carrito del header ya no se ve, muestra la burbuja
    floatingCart.classList.remove('hidden');
  } else {
    // Si el header es visible, oculta la burbuja
    floatingCart.classList.add('hidden');
  }
});

// 3. Hacer que el botón flotante también abra el carrito
document.getElementById('open-cart-floating').addEventListener('click', () => {
  cartDrawer.classList.remove('hidden');
  cartDrawer.setAttribute('aria-hidden', 'false');
});

// Renderizar los ítems del carrito
// ---------- Carrito ----------
// ---------- refreshCartUI CORREGIDA PARA REFLEJAR CAMBIOS ----------
function refreshCartUI() {
  cartItemsEl.innerHTML = '';

  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<div class="empty">Tu carrito está vacío 🍔</div>';
    cartSubtotalEl.textContent = '$0';
    cartDeliveryEl.textContent = '$0';
    cartTotalEl.textContent = '$0';
    updateCartBadge();
    return;
  }

  let subtotal = 0;

  cart.forEach((item, idx) => {

    // ===== TOTAL DE EXTRAS (NO SE MULTIPLICA POR qty) =====
    const extrasTotal =
      item.extras?.reduce((sum, e) => sum + (e.price * e.qty), 0) || 0;

    // 🔑 CLAVE: producto * cantidad + extras
    const itemTotal = (item.price * item.qty) + extrasTotal;

    subtotal += itemTotal;

    const extrasText = item.extras?.length
      ? item.extras
          .map(e =>
            `+ ${e.name} x${e.qty} ($${numberWithCommas(e.price * e.qty)})`
          )
          .join('<br>')
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

    // ===== CONTROL DE CANTIDAD =====
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

    // ===== ELIMINAR =====
    div.querySelector('.remove-btn').addEventListener('click', () => {
      if (confirm(`¿Eliminar "${item.title}" del carrito?`)) {
        cart.splice(idx, 1);
        persistCart();
        refreshCartUI();
      }
    });

    // ===== EDITAR =====
    div.addEventListener('click', (e) => {
      if (
        !e.target.classList.contains('minus') &&
        !e.target.classList.contains('plus') &&
        !e.target.classList.contains('remove-btn')
      ) {
        cartDrawer.classList.add('hidden');
        openProductModal(item.productId, idx);
      }
    });

    cartItemsEl.appendChild(div);
  });

  cartSubtotalEl.textContent = `$${numberWithCommas(subtotal)}`;
  cartDeliveryEl.textContent = `$${numberWithCommas(DELIVERY_FEE)}`;
  cartTotalEl.textContent = `$${numberWithCommas(subtotal + DELIVERY_FEE)}`;
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
// 🔥 Recalcular subtotal REAL (incluye extras)
let subtotal = 0;

cart.forEach(item => {
  const extrasTotal =
    item.extras?.reduce((sum, e) => sum + e.price * e.qty, 0) || 0;

  const itemTotal = (item.price * item.qty) + extrasTotal;
  subtotal += itemTotal;
});



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

      const DELIVERY_FEE = 0;
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

  const DELIVERY_FEE = 0;

  // Mostrar u ocultar campo de dirección
  addressLabel.classList.toggle('hidden', method !== 'domicilio');

  // 🔥 CALCULAR SUBTOTAL EXACTO (CON EXTRAS)
let subtotal = 0;

cart.forEach(item => {
  const extrasTotal =
    item.extras?.reduce((sum, e) => sum + e.price * e.qty, 0) || 0;

  const itemTotal = (item.price * item.qty) + extrasTotal;
  subtotal += itemTotal;
});

  // Envío
  const delivery = method === 'domicilio' && subtotal > 0 ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  // Mostrar/ocultar fila de envío
  envioRow.classList.toggle('hidden', method !== 'domicilio');

  // Actualizar valores visibles
  subtotalEl.textContent = `$${numberWithCommas(subtotal)}`;
  deliveryEl.textContent = `$${numberWithCommas(delivery)}`;
  totalEl.textContent = `$${numberWithCommas(total)}`;
}



checkoutForm.addEventListener('change', updateCheckoutTotals);






// URL del endpoint de Google Apps Script (base de datos de pedidos)
const GOOGLE_SHEET_API = "https://script.google.com/macros/s/AKfycbwm_1k9_4u68gAgUuSbvOXA5jfq1aIMJIaaFNDiB9PKa0yFBrZhhhMVQQQ-Qc22jeEb/exec";


// Envío por WhatsApp
// ✅ Escucha del formulario de checkout
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
  textParts.push('🧾 *Nuevo Pedido - Oscar La Parrilla🍔✅*');
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
  const extrasLines = extras
    .map(e => `   ➕ ${e.qty}x ${e.name} ($${numberWithCommas(e.price * e.qty)})`)
    .join('\n');

  const extrasSum = extras.reduce((sum, e) => sum + e.price * e.qty, 0);

  // 🔑 FIX: NO multiplicar extras por la cantidad del producto
  const itemTotal = (item.price * item.qty) + extrasSum;
  subtotal += itemTotal;

  // Mostrar producto base
  textParts.push(
    `${item.qty}x ${item.title} — *$${numberWithCommas(item.price * item.qty)}*`
  );

  if (extrasLines) textParts.push(extrasLines);

  // Toppings removidos
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

   // 🟢 1. REDIRECCIONAR INMEDIATAMENTE (NO BLOQUEABLE)
  window.location.href = waUrl;
 

  // 🟡 2. ENVIAR A SHEETS EN SEGUNDO PLANO
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

  fetch(GOOGLE_SHEET_API, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(orderData),
    headers: { "Content-Type": "application/json" },
    keepalive: true // 🔑 importante para que no se cancele al redireccionar
  });

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
  const DELIVERY_FEE = 0; // 💰 valor del domicilio
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
    background: "#0a0a0a",             // fondo negro
    color: "#ffffff",                   // texto blanco
    confirmButtonColor: "rgb(230, 213, 12)", // botón amarillo neón
    cancelButtonColor: "#555555",       // cancel gris oscuro
    iconColor: "rgb(230, 213, 12)"      // icono amarillo neón
  }).then(result => {
    if (result.isConfirmed) downloadImage(imgPath);
  });
});



// ============Fin de codigo de Descarga QR=================












