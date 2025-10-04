const productos = [
  // 🥡 ARROZ CHINO / PAISA
  { categoria: 'arroz chino', nombre: 'Chow Fan Especial', precio: 38000, descripcion: 'Arroz chino especial con vegetales y proteína mixta.', imagen: 'img/chow-fan-especial.webp' },
  { categoria: 'arroz chino', nombre: 'Chow Fan Camarones', precio: 42000, descripcion: 'Arroz chino con camarones frescos.', imagen: 'img/chow-fan-camarones.webp' },
  { categoria: 'arroz chino', nombre: 'Chow Fan Pollo Desmenuzado', precio: 38000, descripcion: 'Arroz chino con pollo desmenuzado y vegetales.', imagen: 'img/chow-fan-pollo.webp' },
  { categoria: 'arroz paisa', nombre: 'Arroz Paisa (1 persona)', precio: 41000, descripcion: 'Arroz paisa con carnes mixtas y plátano maduro.', imagen: 'img/arroz-paisa.webp' },
  { categoria: 'arroz paisa', nombre: 'Arroz Paisa (2 personas)', precio: 69000, descripcion: 'Porción doble de arroz paisa con carnes mixtas.', imagen: 'img/arroz-paisa-doble.webp' },

  // 🥗 ENSALADA CHINA / CHOP SUEY
  { categoria: 'ensalada china', nombre: 'Chop Suey Especial', precio: 40000, descripcion: 'Ensalada china con vegetales y proteína mixta.', imagen: 'img/chop-suey-especial.webp' },
  { categoria: 'ensalada china', nombre: 'Chop Suey Camarones', precio: 42000, descripcion: 'Ensalada china con camarones y vegetales.', imagen: 'img/chop-suey-camarones.webp' },
  { categoria: 'ensalada china', nombre: 'Chop Suey Pollo', precio: 38000, descripcion: 'Ensalada china con pollo y vegetales.', imagen: 'img/chop-suey-pollo.webp' },
  { categoria: 'ensalada china', nombre: 'Chop Suey Pollo y Camarones', precio: 46000, descripcion: 'Ensalada china con pollo y camarones.', imagen: 'img/chop-suey-mixto.webp' },

  // 🍝 PASTAS / CHOW MEIN
  { categoria: 'pasta', nombre: 'Pasta con Pollo', precio: 42000, descripcion: 'Chow Mein con pollo y vegetales.', imagen: 'img/pasta-pollo.webp' },
  { categoria: 'pasta', nombre: 'Pasta con Pollo y Camarones', precio: 46000, descripcion: 'Chow Mein con pollo, camarones y vegetales.', imagen: 'img/pasta-mixta.webp' },
  { categoria: 'pasta', nombre: 'Pasta con Pollo y Champiñones', precio: 42000, descripcion: 'Chow Mein con pollo y champiñones.', imagen: 'img/pasta-champinones.webp' },
  { categoria: 'pasta', nombre: 'Chow Mein Especial', precio: 42000, descripcion: 'Chow Mein con carne, pollo y camarones.', imagen: 'img/chow-mein-especial.webp' },
  { categoria: 'pasta', nombre: 'Chow Mein Pollo Desmenuzado', precio: 38000, descripcion: 'Chow Mein con pollo desmenuzado.', imagen: 'img/chow-mein-pollo.webp' },

  // 🍛 PLATOS A LA CARTA
  { categoria: 'plato a la carta', nombre: 'Carne a la Plancha', precio: 29000, descripcion: 'Carne a la plancha con papas francesas, yuca, ensalada y arroz.', imagen: 'img/carne-plancha.webp' },
  { categoria: 'plato a la carta', nombre: 'Pechuga a la Plancha', precio: 29000, descripcion: 'Pechuga a la plancha con papas francesas, yuca, ensalada y arroz.', imagen: 'img/pechuga-plancha.webp' },
  { categoria: 'plato a la carta', nombre: 'Pechuga Gratinada', precio: 32000, descripcion: 'Pechuga gratinada con papas francesas, yuca, ensalada y arroz.', imagen: 'img/pechuga-gratinada.webp' },
  { categoria: 'plato a la carta', nombre: 'Costillas BBQ', precio: 32000, descripcion: 'Costillas BBQ con papas francesas, yuca, ensalada y arroz.', imagen: 'img/costillas-bbq.webp' },
  { categoria: 'plato a la carta', nombre: 'Tabla Mixta', precio: 32000, descripcion: 'Tabla mixta con carne, pollo y camarones.', imagen: 'img/tabla-mixta.webp' },
  { categoria: 'plato a la carta', nombre: 'Mojarra', precio: 37000, descripcion: 'Mojarra frita con papas francesas, yuca, ensalada y arroz.', imagen: 'img/mojarra.webp' },
  { categoria: 'plato a la carta', nombre: 'Trucha', precio: 37000, descripcion: 'Trucha con papas francesas, yuca, ensalada y arroz.', imagen: 'img/trucha.webp' },
  { categoria: 'plato a la carta', nombre: 'Cazuela', precio: 32000, descripcion: 'Cazuela de mariscos con arroz y ensalada.', imagen: 'img/cazuela-mariscos.webp' },
  { categoria: 'plato a la carta', nombre: 'Churrasco a la Plancha', precio: 37000, descripcion: 'Churrasco a la plancha con papas francesas, yuca, ensalada y arroz.', imagen: 'img/churrasco.webp' },

  // 🍗 POLLO FRITO / BROASTER
  { categoria: 'pollo broaster', nombre: '1 Pollo Frito', precio: 39000, descripcion: 'Pollo frito completo con papas, yuca y arepa.', imagen: 'img/pollo-frito.webp' },
  { categoria: 'pollo broaster', nombre: '1/2 Pollo Frito', precio: 32000, descripcion: 'Medio pollo frito con papas, yuca y arepa.', imagen: 'img/medio-pollo-frito.webp' },
  { categoria: 'pollo broaster', nombre: '1/4 Pollo Frito', precio: 16000, descripcion: 'Cuarto de pollo frito con papas, yuca y arepa.', imagen: 'img/cuartopollo-frito.webp' },
  { categoria: 'pollo broaster', nombre: '1 Pollo Broaster', precio: 41000, descripcion: 'Pollo broaster completo con papas, yuca, arepa y gaseosa 1.5L.', imagen: 'img/pollo-broaster.webp' },
  { categoria: 'pollo broaster', nombre: '1/2 Pollo Broaster', precio: 34000, descripcion: 'Medio pollo broaster con papas, yuca y arepa.', imagen: 'img/medio-pollo-broaster.webp' },
  { categoria: 'pollo broaster', nombre: '1/4 Pollo Broaster', precio: 18000, descripcion: 'Cuarto de pollo broaster con papas, yuca y arepa.', imagen: 'img/cuartopollo-broaster.webp' },
  { categoria: 'pollo broaster', nombre: '1 Pollo Broaster Familiar', precio: 41000, descripcion: 'Pollo broaster familiar con papas, yuca, miel y gaseosa 1.5L.', imagen: 'img/pollo-broaster-familiar.webp' },

  // 🍲 CREMAS
  { categoria: 'crema', nombre: 'Crema de Pollo', precio: 21000, descripcion: 'Crema de pollo acompañada con arroz.', imagen: 'img/crema-pollo.webp' },
  { categoria: 'crema', nombre: 'Crema de Champiñones', precio: 26000, descripcion: 'Crema de champiñones acompañada con arroz.', imagen: 'img/crema-champinones.webp' },
  { categoria: 'crema', nombre: 'Crema de Mariscos', precio: 26000, descripcion: 'Crema de mariscos acompañada con arroz.', imagen: 'img/crema-mariscos.webp' },

  // 🍤 ENTRADAS
  { categoria: 'entrada', nombre: 'Alitas Miel Mostaza (4 und)', precio: 24000, descripcion: 'Alitas bañadas en salsa miel mostaza.', imagen: 'img/alitas-miel-mostaza.webp' },
  { categoria: 'entrada', nombre: 'Alitas en Salsa BBQ (4 und)', precio: 24000, descripcion: 'Alitas bañadas en salsa BBQ.', imagen: 'img/alitas-bbq.webp' },
  { categoria: 'entrada', nombre: 'Papa Francesa', precio: 9000, descripcion: 'Porción de papas francesas crujientes.', imagen: 'img/papas-francesas.webp' },
  { categoria: 'entrada', nombre: 'Huevos de Codorniz', precio: 9000, descripcion: 'Huevos de codorniz fritos (5 unidades).', imagen: 'img/huevos-codorniz.webp' },
  { categoria: 'entrada', nombre: 'Egg Roll (5 und)', precio: 12000, descripcion: 'Rollitos de huevo fritos con relleno especial.', imagen: 'img/egg-roll.webp' },
  { categoria: 'entrada', nombre: 'Costillas BBQ', precio: 24000, descripcion: 'Porción de costillas BBQ.', imagen: 'img/costillas-bbq-entrada.webp' },
  { categoria: 'entrada', nombre: 'Chuleta Apanada', precio: 23000, descripcion: 'Chuleta apanada servida como entrada.', imagen: 'img/chuleta-apanada.webp' },
  { categoria: 'entrada', nombre: 'Langostinos', precio: 27000, descripcion: 'Langostinos apanados con salsa de la casa.', imagen: 'img/langostinos.webp' },
  { categoria: 'entrada', nombre: 'Camarones', precio: 27000, descripcion: 'Camarones salteados en salsa oriental.', imagen: 'img/camarones.webp' },
  { categoria: 'entrada', nombre: 'Croquetas de Pescado', precio: 24000, descripcion: 'Croquetas de pescado doradas al punto.', imagen: 'img/croquetas-pescado.webp' },

  // 🍱 PLATOS PERSONALES
  { categoria: 'plato personal', nombre: 'Chow Fan, Francesa, Churrasquito', precio: 32000, descripcion: 'Chow fan con papas francesas y churrasquito.', imagen: 'img/plato-churrasquito.webp' },
  { categoria: 'plato personal', nombre: 'Chow Fan, Francesa, Chuleta', precio: 32000, descripcion: 'Chow fan con papas francesas y chuleta apanada.', imagen: 'img/plato-chuleta.webp' },
  { categoria: 'plato personal', nombre: 'Chow Fan, Francesa, Pollo BBQ', precio: 32000, descripcion: 'Chow fan con papas francesas y pollo BBQ.', imagen: 'img/plato-pollo-bbq.webp' },
  { categoria: 'plato personal', nombre: 'Chow Fan, Francesa, Costillas', precio: 32000, descripcion: 'Chow fan con papas francesas y costillas BBQ.', imagen: 'img/plato-costillas.webp' },
  { categoria: 'plato personal', nombre: 'Chow Fan, Francesa, Trucha', precio: 32000, descripcion: 'Chow fan con papas francesas y trucha frita.', imagen: 'img/plato-trucha.webp' },

  // 🧃 JUGOS NATURALES
  { categoria: 'jugo', nombre: 'Jugo de Mora', precio: 7000, descripcion: 'Jugo de mora natural en agua.', imagen: 'img/jugo-mora.webp' },
  { categoria: 'jugo', nombre: 'Jugo de Fresa', precio: 7000, descripcion: 'Jugo de fresa natural en agua.', imagen: 'img/jugo-fresa.webp' },
  { categoria: 'jugo', nombre: 'Jugo de Maracuyá', precio: 7000, descripcion: 'Jugo de maracuyá natural en agua.', imagen: 'img/jugo-maracuya.webp' },
  { categoria: 'jugo', nombre: 'Jugo de Guanábana', precio: 9000, descripcion: 'Jugo de guanábana natural.', imagen: 'img/jugo-guanabana.webp' },
  { categoria: 'jugo', nombre: 'Jugo de Mango', precio: 7000, descripcion: 'Jugo natural de mango en agua.', imagen: 'img/jugo-mango.webp' },
  { categoria: 'jugo', nombre: 'Jugo de Frutos Rojos', precio: 9000, descripcion: 'Jugo mixto de frutos rojos.', imagen: 'img/jugo-frutosrojos.webp' },
  { categoria: 'jugo', nombre: 'Jugo de Frutos Amarillos', precio: 9000, descripcion: 'Jugo natural de frutas amarillas.', imagen: 'img/jugo-frutosamarillos.webp' },
  { categoria: 'jugo', nombre: 'Limonada Natural', precio: 7000, descripcion: 'Refrescante limonada natural.', imagen: 'img/limonada-natural.webp' },
  { categoria: 'jugo', nombre: 'Limonada de Coco', precio: 9000, descripcion: 'Limonada cremosa con leche de coco.', imagen: 'img/limonada-coco.webp' },

  // 🥤 BEBIDAS
  { categoria: 'bebida', nombre: 'Gaseosa 1.5L', precio: 6500, descripcion: 'Botella de gaseosa 1.5 litros.', imagen: 'img/gaseosa15.webp' },
  { categoria: 'bebida', nombre: 'Jugo Hit Litro', precio: 5500, descripcion: 'Jugo Hit sabor fruta (1 litro).', imagen: 'img/jugo-hit.webp' },
  { categoria: 'bebida', nombre: 'Gaseosa 350ml', precio: 3500, descripcion: 'Gaseosa individual 350 ml.', imagen: 'img/gaseosa350.webp' },
  { categoria: 'bebida', nombre: 'Jugo Hit 350ml', precio: 3500, descripcion: 'Jugo Hit 350 ml.', imagen: 'img/jugo-hit-350.webp' },
  { categoria: 'bebida', nombre: 'Botella de Agua', precio: 2500, descripcion: 'Botella de agua pura.', imagen: 'img/agua.webp' },
  { categoria: 'bebida', nombre: 'Coca y Pola', precio: 6500, descripcion: 'Refresco o cerveza local.', imagen: 'img/pola.webp' },
  { categoria: 'bebida', nombre: 'Aguila', precio: 6500, descripcion: 'Cerveza Águila.', imagen: 'img/aguila.webp' },
  { categoria: 'bebida', nombre: 'Corona', precio: 9500, descripcion: 'Cerveza Corona importada.', imagen: 'img/corona.webp' },

  { categoria: 'combo', nombre: 'Combo 1 (2 personas)', precio: 32000, descripcion: 'Chow Fan, papas francesas y costillas BBQ.', imagen: 'img/combo1.webp' },
  { categoria: 'combo', nombre: 'Combo 2 (4-5 personas)', precio: 65000, descripcion: 'Chow Fan, papas francesas, 1 pollo frito y gaseosa 1.5L.', imagen: 'img/combo2.webp' },
  { categoria: 'combo', nombre: 'Combo 3 (6 personas)', precio: 94000, descripcion: 'Chow Fan, 1 pollo frito, papas francesas y gaseosa 1.5L.', imagen: 'img/combo3.webp' },
  { categoria: 'combo', nombre: 'Combo 4 (4 personas)', precio: 52000, descripcion: 'Chow Fan, papas francesas, 1/2 pollo frito y gaseosa 1.5L.', imagen: 'img/combo4.webp' },
  { categoria: 'combo', nombre: 'Combo 5 (4 personas)', precio: 58000, descripcion: 'Chow Fan especial, papas francesas, 1/2 pollo frito y gaseosa 1.5L.', imagen: 'img/combo5.webp' },
  { categoria: 'combo', nombre: 'Combo 6 (2 personas)', precio: 32000, descripcion: 'Chow Fan y 1/4 pollo frito.', imagen: 'img/combo6.webp' },
  { categoria: 'combo', nombre: 'Combo 7 (2 personas)', precio: 32000, descripcion: 'Chow Fan, papas francesas y chuleta apanada.', imagen: 'img/combo7.webp' },
  { categoria: 'combo', nombre: 'Combo 8 (4 personas)', precio: 52000, descripcion: 'Chow Fan, papas francesas, 1/2 pollo frito y gaseosa 1.5L.', imagen: 'img/combo8.webp' },
  { categoria: 'combo', nombre: 'Combo 9 (2 personas)', precio: 32000, descripcion: 'Chow Fan, papas francesas y 2 lumpias.', imagen: 'img/combo9.webp' },
  { categoria: 'combo', nombre: 'Combo 10 (2 personas)', precio: 34000, descripcion: 'Chow Fan, papas francesas, pollo agridulce.', imagen: 'img/combo10.webp' },
  { categoria: 'combo', nombre: 'Combo 11 (2 personas)', precio: 32000, descripcion: 'Chow Fan, papas francesas, croquetas de pescado y gaseosa 1.5L.', imagen: 'img/combo11.webp' },
  { categoria: 'combo', nombre: 'Combo 12 (4 personas)', precio: 64000, descripcion: 'Chow Fan, papas francesas, costillas BBQ y gaseosa 1.5L.', imagen: 'img/combo12.webp' },
  { categoria: 'combo', nombre: 'Combo 13 (4 personas)', precio: 64000, descripcion: 'Chow Fan, papas francesas, 1 pollo frito y gaseosa 1.5L.', imagen: 'img/combo13.webp' },
  { categoria: 'combo', nombre: 'Combo 14 (4 personas)', precio: 64000, descripcion: 'Arroz paisa, papas francesas y gaseosa 1.5L.', imagen: 'img/combo14.webp' }
];


// =============================
// Productos
// =============================
let productosFiltrados = [...productos];

// Carrito: clave = índice del producto, valor = cantidad
let carrito = {};

// =============================
// Formateador a pesos colombianos
// =============================
const formatoCOP = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  minimumFractionDigits: 0
});

// =============================
// Restaurar datos guardados
// =============================
const carritoGuardado = sessionStorage.getItem('carrito');
if (carritoGuardado) {
  carrito = JSON.parse(carritoGuardado);
}

const pedidoGuardado = sessionStorage.getItem('pedido');
if (pedidoGuardado) {
  const pedido = JSON.parse(pedidoGuardado);
  pedido.resumen.forEach(item => {
    const index = productos.findIndex(p => p.nombre === item.nombre);
    if (index !== -1) carrito[index] = item.cantidad;
  });
}

// =============================
// Renderizado del carrito
// =============================
function renderCarrito() {
  const contenedor = document.querySelector('.cart-items');
  contenedor.innerHTML = '';

  productosFiltrados.forEach((producto) => {
    const index = productos.indexOf(producto);
    const cantidad = carrito[index] || 0;

    const item = document.createElement('div');
    item.className = 'cart-item';
    item.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" />
      <div class="info">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <div class="bottom">
          <span>${formatoCOP.format(producto.precio)}</span>
          <div class="qty">
            <button class="menos" data-id="${index}">−</button>
            <span id="cant_${index}">${cantidad}</span>
            <button class="mas" data-id="${index}">+</button>
          </div>
        </div>
      </div>
    `;
    contenedor.appendChild(item);
  });

  // Asignar eventos a los botones
  document.querySelectorAll('.mas').forEach(btn => {
    btn.addEventListener('click', () => cambiarCantidad(parseInt(btn.dataset.id), 1));
  });

  document.querySelectorAll('.menos').forEach(btn => {
    btn.addEventListener('click', () => cambiarCantidad(parseInt(btn.dataset.id), -1));
  });

  actualizarTotal();
}

// =============================
// Cambiar cantidad
// =============================
function cambiarCantidad(index, delta) {
  carrito[index] = Math.max(0, (carrito[index] || 0) + delta);
  document.getElementById(`cant_${index}`).textContent = carrito[index];
  actualizarTotal();
}

// =============================
// Calcular y actualizar total
// =============================
function actualizarTotal() {
  let total = 0;
  for (const i in carrito) {
    const index = parseInt(i, 10); // 👈 convertir clave a número
    if (productos[index]) {
      total += productos[index].precio * carrito[i];
    }
  }

  const totalTexto = document.getElementById('total-price');
  if (totalTexto) {
    totalTexto.textContent = formatoCOP.format(total);
  }

  // Guardar carrito en sessionStorage
  sessionStorage.setItem('carrito', JSON.stringify(carrito));
}

// =============================
// Filtro de categorías
// =============================
function filtrarBotonCategoria(boton, categoria) {
  document.querySelectorAll('.categoria-btn').forEach(btn => btn.classList.remove('active'));
  boton.classList.add('active');
  localStorage.setItem('categoriaSeleccionada', categoria);
  filtrarCategoria(categoria);
}

function filtrarCategoria(categoria) {
  productosFiltrados = productos.filter(producto => producto.categoria === categoria);
  renderCarrito();
}

// =============================
// Evento de Realizar Pedido
// =============================
document.querySelector('.pay').addEventListener('click', () => {
  const resumen = [];
  let total = 0;

  for (const i in carrito) {
    const index = parseInt(i, 10);
    const producto = productos[index];
    const cantidad = carrito[i];
    if (producto && cantidad > 0) {
      const subtotal = producto.precio * cantidad;

      resumen.push({
        nombre: producto.nombre,
        cantidad,
        subtotal
      });

      total += subtotal;
    }
  }

  const pedido = { resumen, total };

  // Guardar en localStorage y sessionStorage
  localStorage.setItem('pedido', JSON.stringify(pedido));
  sessionStorage.setItem('pedido', JSON.stringify(pedido));

  // No limpiamos el carrito para que siga al volver atrás
  window.location.href = 'customer.html';
});

// =============================
// Inicialización al cargar
// =============================
const categoriaGuardada = localStorage.getItem('categoriaSeleccionada');

if (categoriaGuardada) {
  const boton = [...document.querySelectorAll('.categoria-btn')]
    .find(btn => btn.getAttribute('onclick').includes(categoriaGuardada));

  if (boton) {
    boton.classList.add('active');
    filtrarCategoria(categoriaGuardada);
  } else {
    productosFiltrados = [...productos];
    renderCarrito();
  }
} else {
  productosFiltrados = [...productos];
  renderCarrito();
}
