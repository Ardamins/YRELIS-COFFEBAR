// Menú completo de YRELIS CoffeeBar.
// El campo `icon` fue removido: los íconos se generan con CSS
// usando el `id` de cada categoría como selector (data-icon).

const menu = [
  {
    id: 'almuerzo',
    title: 'Almuerzo confortable',
    items: [
      { name: 'Fetuccini a la Huancaína', desc: 'Con chuleta o pechuga de pollo', price: 22 },
      { name: 'Fetuccini a la Huancaína', desc: 'Con lomo saltado, churrasco o bisteck', price: 28 },
      { name: 'Fetuccini al Pesto', desc: 'Con chuleta o pechuga de pollo', price: 22 },
      { name: 'Fetuccini al Pesto', desc: 'Con lomo saltado, churrasco o bisteck', price: 20 },
      { name: 'Fetuccini a lo Alfredo', desc: 'Salsa bechamel, jamón, crema de leche, parmesano', price: 20 },
      { name: 'Arroz Chaufa', desc: 'Carne', price: 25 },
      { name: 'Arroz Chaufa', desc: 'Pollo', price: 20 },
      { name: 'Lomo Saltado', desc: 'Con arroz y papas fritas', price: 28 },
      { name: 'Pollo Saltado', desc: 'Con arroz y papas fritas', price: 25 },
      { name: 'Cordón Blue', desc: 'Con arroz, papa dorada en salsa de champiñones', price: 25 },
      { name: 'Bisteck a lo Pobre', desc: 'Con arroz, papas fritas, plátano y huevo', price: 28 },
      { name: 'Pollo a la Plancha al Grill', desc: 'Elige 2 guarniciones: ensalada cocida, ensalada fresca, arroz o papa cóctel', price: 20 },
    ],
  },
  {
    id: 'piqueo',
    title: 'Piqueo',
    items: [
      { name: 'Tequeños de Queso', desc: 'Relleno con queso + salsa de guacamole', price: 18 },
      { name: 'Chicharrón de Pollo', desc: 'Marinado en salsa de casa + papas fritas y ensalada mixta', price: 22 },
      { name: "Salchipapa Yreli's", desc: 'Papas fritas, chorizo, hotdog, pollo deshilachado, huevo frito y salsa de la casa', price: 22 },
      { name: 'Alitas a la BBQ', desc: 'Marinadas en aderezo casero, bañadas en salsa acevichada con papas fritas', price: 22 },
    ],
  },
  {
    id: 'desayunos',
    title: 'Desayunos',
    items: [
      { name: 'Desayuno Americano', desc: 'Huevos revueltos, tostadas, café o jugo', price: 18 },
      { name: 'Desayuno Continental', desc: 'Tostadas, huevo, tocino y panqueque', price: 20 },
      { name: "Desayuno Yreli's", desc: 'Tostadas, plátano, fresa, palta, huevo, café o jugo', price: 18 },
      { name: 'Omellete + Leche', desc: 'Clásico, espinaca o champiñones', price: 18 },
    ],
  },
  {
    id: 'jugos',
    title: 'Jugos',
    items: [
      { name: 'Papaya', desc: 'Refrescante jugo natural', price: 7 },
      { name: 'Piña', desc: 'Dulce y tropical', price: 7 },
      { name: 'Fresa', desc: 'Delicioso y aromático', price: 8 },
      { name: 'Mango', desc: 'Exótico y cremoso', price: 10 },
      { name: 'Naranja', desc: 'Natural y lleno de vitamina C', price: 10 },
      { name: 'Surtido', desc: 'Mezcla de frutas de temporada', price: 10 },
      { name: 'Maracumango', desc: 'Combinación tropical', price: 10 },
      { name: 'Especial', desc: 'Nuestra mezcla exclusiva', price: 12 },
    ],
  },
  {
    id: 'antojitos',
    title: 'Antojitos',
    items: [
      { name: 'Sandwich Mixto', desc: 'Pan de molde, jamón, queso edam', price: 10 },
      { name: 'Triples', desc: 'Clásico: pollo, durazno, palta', price: 10 },
      { name: 'Croissants', desc: 'Mixto o de pollo con apio, pecanas y mayonesa', price: 10 },
      { name: 'Hamburguesa', desc: 'Carne o pollo, lechuga, tomate, cremas (+S/2 huevo o queso)', price: 14 },
      { name: 'Empanada', desc: 'Carne y pollo', price: 6 },
      { name: 'Causa Rellena', desc: 'Pollo o atún', price: 15 },
      { name: 'Choripán', desc: 'Tradicional y sabroso', price: 10 },
    ],
  },
  {
    id: 'dulces',
    title: 'Dulces',
    items: [
      { name: 'Keke de Plátano', desc: 'Especialidad de la casa', price: 6 },
      { name: 'Keke de Naranja', desc: 'Húmedo y aromático', price: 6 },
      { name: 'Pancakes con Arándanos', desc: 'Esponjosos y deliciosos', price: 12 },
    ],
  },
  {
    id: 'infusiones',
    title: 'Infusiones calientes',
    items: [
      { name: 'Manzanilla / Anís', desc: 'Relajante y digestiva', price: 3 },
      { name: 'Hierba Luisa', desc: 'Aromática y calmante', price: 3 },
      { name: 'Té Negro / Muña', desc: 'Energizante y digestivo', price: 3 },
      { name: 'Té Verde', desc: 'Antioxidante y refrescante', price: 3 },
      { name: 'Infusiones con Miel', desc: 'Endulzado naturalmente', price: 10 },
    ],
  },
  {
    id: 'cafes',
    title: 'Cafés',
    items: [
      { name: 'Espresso', desc: 'Intenso y aromático', price: 3 },
      { name: 'Americano', desc: 'Suave y equilibrado', price: 7 },
      { name: 'Espresso Doble', desc: 'Doble intensidad', price: 8 },
      { name: 'Capuccino', desc: 'Perfecto balance', price: 8 },
      { name: 'Latte', desc: 'Cremoso y suave', price: 9 },
      { name: 'Mocaccino', desc: 'Café con chocolate', price: 11 },
      { name: 'Chocolate', desc: 'Clásico y reconfortante', price: 10 },
      { name: 'Chocolate Naranja y Menta', desc: 'Con un toque cítrico y fresco', price: 12 },
    ],
  },
  {
    id: 'frappes',
    title: 'Frappés',
    items: [
      { name: 'Mocka', desc: 'Delicioso y cremoso', price: 13 },
      { name: 'Algarrobina', desc: 'Energético y nutritivo', price: 13 },
      { name: 'Nutella', desc: 'Indulgente y cremoso', price: 15 },
      { name: 'Clásica', desc: 'Nuestra versión tradicional', price: 13 },
      { name: 'Oreo', desc: 'Irresistible combinación', price: 15 },
    ],
  },
  {
    id: 'refrescante',
    title: 'Refrescante',
    items: [
      { name: 'Limonada Clásica', desc: 'Vaso', price: 8 },
      { name: 'Limonada Clásica', desc: 'Jarra', price: 15 },
      { name: 'Frutos Rojos', desc: 'Vaso', price: 10 },
      { name: 'Frutos Rojos', desc: 'Jarra', price: 19 },
      { name: 'Jamaica con Maracuyá', desc: 'Vaso', price: 10 },
      { name: 'Jamaica con Maracuyá', desc: 'Jarra', price: 19 },
      { name: 'Limonada Fresa o Arándano', desc: 'Vaso', price: 9 },
      { name: 'Limonada Fresa o Arándano', desc: 'Jarra', price: 17 },
      { name: 'Maracuyá Clásica', desc: 'Vaso', price: 9 },
      { name: 'Maracuyá Clásica', desc: 'Jarra', price: 18 },
      { name: 'Maracuyá Frozen', desc: 'Vaso', price: 11 },
      { name: 'Maracuyá Frozen', desc: 'Jarra', price: 20 },
      { name: 'Sparkling Fresa / Maracuyá', desc: 'Frutas naturales, hierba buena, limón y gaseosa blanca — Vaso', price: 8 },
      { name: 'Sparkling Fresa / Maracuyá', desc: 'Frutas naturales, hierba buena, limón y gaseosa blanca — Jarra', price: 15 },
    ],
  },
  {
    id: 'ice-coffee',
    title: 'Ice Coffee',
    items: [
      { name: 'Ice Caramel', desc: 'Dulce y refrescante', price: 14 },
      { name: 'Ice Mocka', desc: 'Chocolate y café helado', price: 14 },
      { name: 'Ice Capuccino', desc: 'Espumoso y frío', price: 12 },
      { name: 'Ice Americano', desc: 'Simple y refrescante', price: 10 },
      { name: 'Ice Latte', desc: 'Cremoso y helado', price: 12 },
      { name: 'Ice Matcha', desc: 'Energético y verde', price: 14 },
      { name: 'Ice Latte Vainilla', desc: 'Aromático y dulce', price: 13 },
    ],
  },
  {
    id: 'cerveza',
    title: 'Cerveza y gaseosas',
    items: [
      { name: 'Pilsen', desc: 'Cerveza nacional', price: 7 },
      { name: 'Corona', desc: 'Cerveza mexicana', price: 10 },
      { name: 'Heineken', desc: 'Cerveza holandesa', price: 10 },
      { name: 'Cusqueña', desc: 'Cerveza peruana', price: 10 },
      { name: 'Coca Cola', desc: 'Refresco de cola', price: 3 },
      { name: 'Inca Kola', desc: 'Refresco nacional', price: 3 },
      { name: 'Sprite', desc: 'Refresco de lima-limón', price: 3 },
    ],
  },
  {
    id: 'bebidas-hot',
    title: 'Bebidas hot',
    items: [
      { name: 'Calientito #1', desc: 'Naranja + té negro', price: 17 },
      { name: 'Calientito #2', desc: 'Maracuyá y muña', price: 17 },
      { name: 'Calientito #3', desc: 'Jengibre, limón y té negro', price: 17 },
    ],
  },
  {
    id: 'happy-hour',
    title: 'Happy Hour',
    items: [
      { name: 'Lunes a Jueves', desc: 'Solo cócteles clásicos', price: 30 },
      { name: 'Viernes y Sábado', desc: 'Solo cócteles clásicos', price: 35 },
    ],
  },
  {
    id: 'shots',
    title: 'Shots',
    items: [
      { name: 'Tequila', desc: 'Shot tradicional', price: 15 },
      { name: 'Pisco', desc: 'Shot nacional', price: 15 },
    ],
  },
  {
    id: 'cocteleria-clasica',
    title: 'Coctelería clásica',
    items: [
      { name: 'Pisco Sour', desc: 'Maracuyá, fresa o clásico', price: 20 },
      { name: 'Mojitos', desc: 'Frutos rojos, maracuyá o clásico', price: 20 },
      { name: 'Chilcanos', desc: 'Maracuyá, hierba luisa o clásico', price: 20 },
      { name: 'Tequila Sunrise', desc: 'Colorido y refrescante', price: 25 },
      { name: 'Piña Colada', desc: 'Tropical y cremoso', price: 25 },
      { name: 'Daiquiri', desc: 'Fresa, mango o durazno', price: 20 },
    ],
  },
  {
    id: 'cocteleria-cafe',
    title: 'Coctelería café',
    items: [
      { name: 'Espresso Martini', desc: 'Energético y elegante', price: 22 },
      { name: 'Coffee Tonic', desc: 'Refrescante y único', price: 20 },
      { name: 'Coffee Sour', desc: 'Equilibrado y aromático', price: 18 },
      { name: 'Irish Coffee', desc: 'Clásico y reconfortante', price: 17 },
    ],
  },
  {
    id: 'tendencia',
    title: 'Cócteles de tendencia',
    items: [
      { name: 'Machu Picchu', desc: 'Inspirado en nuestra cultura', price: 28 },
      { name: 'Sacsayhuamán', desc: 'Fuerte y memorable', price: 28 },
      { name: 'Aperol Spritz', desc: 'Italiano y refrescante', price: 30 },
      { name: 'Blue Hawaii', desc: 'Tropical y vibrante', price: 28 },
    ],
  },
]

export default menu