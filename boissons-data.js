// Carte réelle du restaurant Italian Green Place — prix en FCFA
const DRINKS_DATA = [
  // ===== VIN =====
  {
    id: "vin1", cat: "vins", catLabel: "Vin",
    name: "Frontera Sauvignon Blanc (D.O. Valle Central, Chili)",
    price: "12 000 FCFA",
    priceValue: 12000,
    desc: "",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop",
    details: ["Vin blanc", "Chili — Valle Central"]
  },
  {
    id: "vin2", cat: "vins", catLabel: "Vin",
    name: "Muchas Manos Tempranillo (D.O. La Mancha, Espagne)",
    price: "12 000 FCFA",
    priceValue: 12000,
    desc: "",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop",
    details: ["Vin blanc", "Espagne — La Mancha"]
  },
  {
    id: "vin3", cat: "vins", catLabel: "Vin",
    name: "Diamante España D.O. Rioja",
    price: "12 000 FCFA",
    priceValue: 12000,
    desc: "",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop",
    details: ["Vin blanc", "Espagne — Rioja"]
  },
  {
    id: "vin4", cat: "vins", catLabel: "Vin",
    name: "Bach Semi-Dulce (D.O.)",
    price: "15 000 FCFA",
    priceValue: 15000,
    desc: "",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop",
    details: ["Vin blanc demi-doux"]
  },
  {
    id: "vin5", cat: "vins", catLabel: "Vin",
    name: "Pata Negra (Verdejo)",
    price: "15 000 FCFA",
    priceValue: 15000,
    desc: "",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop",
    details: ["Vin blanc — cépage Verdejo"]
  },
  {
    id: "vin6", cat: "vins", catLabel: "Vin",
    name: "Cune (Rioja) Blanco",
    price: "15 000 FCFA",
    priceValue: 15000,
    desc: "",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop",
    details: ["Vin blanc", "Espagne — Rioja"]
  },
  {
    id: "vin7", cat: "vins", catLabel: "Vin",
    name: "Marqués de Cáceres (Rioja) Blanco",
    price: "15 000 FCFA",
    priceValue: 15000,
    desc: "",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop",
    details: ["Vin blanc", "Espagne — Rioja"]
  },
  {
    id: "vin8", cat: "vins", catLabel: "Vin",
    name: "Cune (Rioja) GM D.O. Rioja España",
    price: "15 000 FCFA",
    priceValue: 15000,
    desc: "",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop",
    details: ["Vin blanc", "Grand format", "Espagne — Rioja"]
  },
  {
    id: "vin9", cat: "vins", catLabel: "Vin",
    name: "Marqués de Cáceres (Rioja) GM",
    price: "22 500 FCFA",
    priceValue: 22500,
    desc: "",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop",
    details: ["Vin blanc", "Grand format"]
  },
  {
    id: "vin10", cat: "vins", catLabel: "Vin",
    name: "Marqués de Riscal",
    price: "40 000 FCFA",
    priceValue: 40000,
    desc: "",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop",
    details: ["Vin blanc"]
  },
  {
    id: "vin11", cat: "vins", catLabel: "Vin",
    name: "Cune Tempranillo (D.O.C Rioja, Espagne)",
    price: "15 000 FCFA",
    priceValue: 15000,
    desc: "",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop",
    details: ["Vin rosé", "Espagne — Rioja"]
  },
  {
    id: "vin12", cat: "vins", catLabel: "Vin",
    name: "Lambrusco Italia",
    price: "15 000 FCFA",
    priceValue: 15000,
    desc: "",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop",
    details: ["Vin rosé pétillant", "Italie"]
  },
  {
    id: "vin13", cat: "vins", catLabel: "Vin",
    name: "Marqués de Cáceres Tempranillo (D.O.C Rioja)",
    price: "15 000 FCFA",
    priceValue: 15000,
    desc: "",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop",
    details: ["Vin rosé", "Espagne — Rioja"]
  },
  {
    id: "vin14", cat: "vins", catLabel: "Vin",
    name: "Federico Paternina (Rioja) PM España",
    price: "8 000 FCFA",
    priceValue: 8000,
    desc: "",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop",
    details: ["Vin rouge", "Petit format", "Espagne — Rioja"]
  },
  {
    id: "vin15", cat: "vins", catLabel: "Vin",
    name: "Cune PM",
    price: "8 000 FCFA",
    priceValue: 8000,
    desc: "",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop",
    details: ["Vin rouge", "Petit format"]
  },
  {
    id: "vin16", cat: "vins", catLabel: "Vin",
    name: "Marqués de Cáceres PM",
    price: "12 500 FCFA",
    priceValue: 12500,
    desc: "",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop",
    details: ["Vin rouge", "Petit format"]
  },
  {
    id: "vin17", cat: "vins", catLabel: "Vin",
    name: "Lambrusco (Rioja)",
    price: "12 000 FCFA",
    priceValue: 12000,
    desc: "",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop",
    details: ["Vin rouge pétillant"]
  },
  {
    id: "vin18", cat: "vins", catLabel: "Vin",
    name: "Federico Paternina 2018 (Rioja) GM",
    price: "15 000 FCFA",
    priceValue: 15000,
    desc: "",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop",
    details: ["Vin rouge", "Grand format", "Millésime 2018"]
  },
  {
    id: "vin19", cat: "vins", catLabel: "Vin",
    name: "Cabernet Syrah",
    price: "15 000 FCFA",
    priceValue: 15000,
    desc: "",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop",
    details: ["Vin rouge — Cabernet Syrah"]
  },
  {
    id: "vin20", cat: "vins", catLabel: "Vin",
    name: "Campo Viejo",
    price: "15 000 FCFA",
    priceValue: 15000,
    desc: "",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop",
    details: ["Vin rouge"]
  },
  {
    id: "vin21", cat: "vins", catLabel: "Vin",
    name: "Bach (D.O.C)",
    price: "15 000 FCFA",
    priceValue: 15000,
    desc: "",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop",
    details: ["Vin rouge"]
  },
  {
    id: "vin22", cat: "vins", catLabel: "Vin",
    name: "Canta Mañanas",
    price: "22 000 FCFA",
    priceValue: 22000,
    desc: "",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop",
    details: ["Vin rouge"]
  },
  {
    id: "vin23", cat: "vins", catLabel: "Vin",
    name: "Pata Negra (Rioja)",
    price: "22 000 FCFA",
    priceValue: 22000,
    desc: "",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop",
    details: ["Vin rouge", "Espagne — Rioja"]
  },
  {
    id: "vin24", cat: "vins", catLabel: "Vin",
    name: "Marqués de Cáceres (D.O.C. España Rioja) GM",
    price: "22 000 FCFA",
    priceValue: 22000,
    desc: "",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=900&auto=format&fit=crop",
    details: ["Vin rouge", "Grand format"]
  },
  // ===== CHAMPAGNE =====
  {
    id: "cha1", cat: "champagnes", catLabel: "Champagne",
    name: "Cordorniu Benjamín",
    price: "4 000 FCFA",
    priceValue: 4000,
    desc: "",
    img: "https://images.unsplash.com/photo-1594372303935-93d7cca4b7c4?q=80&w=900&auto=format&fit=crop",
    details: ["Format mignonnette"]
  },
  {
    id: "cha2", cat: "champagnes", catLabel: "Champagne",
    name: "Moët & Chandon Brut",
    price: "95 000 FCFA",
    priceValue: 95000,
    desc: "",
    img: "https://images.unsplash.com/photo-1594372303935-93d7cca4b7c4?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "cha3", cat: "champagnes", catLabel: "Champagne",
    name: "Laurent Perrier Brut",
    price: "95 000 FCFA",
    priceValue: 95000,
    desc: "",
    img: "https://images.unsplash.com/photo-1594372303935-93d7cca4b7c4?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "cha4", cat: "champagnes", catLabel: "Champagne",
    name: "Moët & Chandon Ice Impérial",
    price: "110 000 FCFA",
    priceValue: 110000,
    desc: "",
    img: "https://images.unsplash.com/photo-1594372303935-93d7cca4b7c4?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "cha5", cat: "champagnes", catLabel: "Champagne",
    name: "Moët & Chandon Nectar Impérial",
    price: "110 000 FCFA",
    priceValue: 110000,
    desc: "",
    img: "https://images.unsplash.com/photo-1594372303935-93d7cca4b7c4?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "cha6", cat: "champagnes", catLabel: "Champagne",
    name: "Dom Pérignon",
    price: "270 000 FCFA",
    priceValue: 270000,
    desc: "",
    img: "https://images.unsplash.com/photo-1594372303935-93d7cca4b7c4?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  // ===== BIÈRE =====
  {
    id: "bie1", cat: "bieres", catLabel: "Bière",
    name: "San Miguel Fresca",
    price: "2 000 FCFA",
    priceValue: 2000,
    desc: "",
    img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "bie2", cat: "bieres", catLabel: "Bière",
    name: "San Miguel Especial",
    price: "2 000 FCFA",
    priceValue: 2000,
    desc: "",
    img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "bie3", cat: "bieres", catLabel: "Bière",
    name: "San Miguel Clara",
    price: "2 000 FCFA",
    priceValue: 2000,
    desc: "",
    img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "bie4", cat: "bieres", catLabel: "Bière",
    name: "San Miguel % Azul",
    price: "2 000 FCFA",
    priceValue: 2000,
    desc: "",
    img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "bie5", cat: "bieres", catLabel: "Bière",
    name: "San Miguel % Manzana",
    price: "2 000 FCFA",
    priceValue: 2000,
    desc: "",
    img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "bie6", cat: "bieres", catLabel: "Bière",
    name: "Estrella Galicia",
    price: "2 000 FCFA",
    priceValue: 2000,
    desc: "",
    img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "bie7", cat: "bieres", catLabel: "Bière",
    name: "Green Limon",
    price: "2 000 FCFA",
    priceValue: 2000,
    desc: "",
    img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "bie8", cat: "bieres", catLabel: "Bière",
    name: "Heineken",
    price: "2 000 FCFA",
    priceValue: 2000,
    desc: "",
    img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "bie9", cat: "bieres", catLabel: "Bière",
    name: "Tsing Tao PM",
    price: "2 000 FCFA",
    priceValue: 2000,
    desc: "",
    img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "bie10", cat: "bieres", catLabel: "Bière",
    name: "Super Bock",
    price: "2 500 FCFA",
    priceValue: 2500,
    desc: "",
    img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "bie11", cat: "bieres", catLabel: "Bière",
    name: "Guinness PM",
    price: "3 000 FCFA",
    priceValue: 3000,
    desc: "",
    img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "bie12", cat: "bieres", catLabel: "Bière",
    name: "Tsing Tao GM",
    price: "3 000 FCFA",
    priceValue: 3000,
    desc: "",
    img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  // ===== SPIRITUEUX =====
  {
    id: "spi1", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Bitter",
    price: "3 000 FCFA",
    priceValue: 3000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "spi2", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Campari",
    price: "4 000 FCFA",
    priceValue: 4000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "spi3", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Ricard",
    price: "4 000 FCFA",
    priceValue: 4000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "spi4", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Martini Blanco",
    price: "4 000 FCFA",
    priceValue: 4000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "spi5", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Martini Rosato",
    price: "4 000 FCFA",
    priceValue: 4000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "spi6", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Martini Rosso",
    price: "4 000 FCFA",
    priceValue: 4000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "spi7", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Tres Cepas Ligth",
    price: "3 000 FCFA",
    priceValue: 3000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Cognac"]
  },
  {
    id: "spi8", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Tres Cepas",
    price: "3 000 FCFA",
    priceValue: 3000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Cognac"]
  },
  {
    id: "spi9", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Torres",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Cognac"]
  },
  {
    id: "spi10", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Carlos III",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Cognac"]
  },
  {
    id: "spi11", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Carlos I",
    price: "6 000 FCFA",
    priceValue: 6000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Cognac"]
  },
  {
    id: "spi12", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Hennessy",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Cognac"]
  },
  {
    id: "spi13", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Licor de Hierbas",
    price: "4 000 FCFA",
    priceValue: 4000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Liqueur"]
  },
  {
    id: "spi14", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Baroneys",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Liqueur"]
  },
  {
    id: "spi15", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Frangelico",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Liqueur"]
  },
  {
    id: "spi16", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Amarula",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Liqueur"]
  },
  {
    id: "spi17", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Zoco Pacharán",
    price: "6 000 FCFA",
    priceValue: 6000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Liqueur"]
  },
  {
    id: "spi18", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Get 27",
    price: "6 000 FCFA",
    priceValue: 6000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Liqueur"]
  },
  {
    id: "spi19", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Marie Brizard",
    price: "6 000 FCFA",
    priceValue: 6000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Liqueur"]
  },
  {
    id: "spi20", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Malibu",
    price: "6 000 FCFA",
    priceValue: 6000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Liqueur"]
  },
  {
    id: "spi21", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Cointreau",
    price: "6 000 FCFA",
    priceValue: 6000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Liqueur"]
  },
  {
    id: "spi22", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Sheridan's",
    price: "6 000 FCFA",
    priceValue: 6000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Liqueur"]
  },
  {
    id: "spi23", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Larios",
    price: "3 000 FCFA",
    priceValue: 3000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Gin"]
  },
  {
    id: "spi24", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Gordon's",
    price: "4 000 FCFA",
    priceValue: 4000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Gin"]
  },
  {
    id: "spi25", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Beefeater",
    price: "4 000 FCFA",
    priceValue: 4000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Gin"]
  },
  {
    id: "spi26", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Bombay",
    price: "6 000 FCFA",
    priceValue: 6000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Gin"]
  },
  {
    id: "spi27", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Havana 3 Años",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Rhum"]
  },
  {
    id: "spi28", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Saint James",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Rhum"]
  },
  {
    id: "spi29", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Vodka Absolut",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Vodka"]
  },
  {
    id: "spi30", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Vodka Smirnoff",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Vodka"]
  },
  {
    id: "spi31", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Havana 7 Años",
    price: "6 000 FCFA",
    priceValue: 6000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Rhum"]
  },
  {
    id: "spi32", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Ballantines",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Whisky"]
  },
  {
    id: "spi33", cat: "spiritueux", catLabel: "Spiritueux",
    name: "J&B",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Whisky"]
  },
  {
    id: "spi34", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Grant's",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Whisky"]
  },
  {
    id: "spi35", cat: "spiritueux", catLabel: "Spiritueux",
    name: "White Horse",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Whisky"]
  },
  {
    id: "spi36", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Red Label",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Whisky"]
  },
  {
    id: "spi37", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Black Label",
    price: "6 000 FCFA",
    priceValue: 6000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Whisky"]
  },
  {
    id: "spi38", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Chivas",
    price: "6 000 FCFA",
    priceValue: 6000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Whisky"]
  },
  {
    id: "spi39", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Jack Daniel's",
    price: "6 000 FCFA",
    priceValue: 6000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Whisky"]
  },
  {
    id: "spi40", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Doble Black",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Whisky"]
  },
  {
    id: "spi41", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Hennessy VSO",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Cognac"]
  },
  {
    id: "spi42", cat: "spiritueux", catLabel: "Spiritueux",
    name: "Gold Label Reserve",
    price: "15 000 FCFA",
    priceValue: 15000,
    desc: "",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=900&auto=format&fit=crop",
    details: ["Whisky"]
  },
  // ===== COCKTAIL =====
  {
    id: "coc1", cat: "cocktails", catLabel: "Cocktail",
    name: "Sin Alcool",
    price: "3 000 FCFA",
    priceValue: 3000,
    desc: "",
    img: "https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=900&auto=format&fit=crop",
    details: ["Cocktail sans alcool"]
  },
  {
    id: "coc2", cat: "cocktails", catLabel: "Cocktail",
    name: "Negroni",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "",
    img: "https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=900&auto=format&fit=crop",
    details: ["Gin", "Vermouth rouge", "Campari"]
  },
  {
    id: "coc3", cat: "cocktails", catLabel: "Cocktail",
    name: "Piña Colada",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "",
    img: "https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=900&auto=format&fit=crop",
    details: ["Rhum", "Ananas", "Lait de coco"]
  },
  {
    id: "coc4", cat: "cocktails", catLabel: "Cocktail",
    name: "Mojito",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "",
    img: "https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=900&auto=format&fit=crop",
    details: ["Rhum", "Citron vert", "Menthe"]
  },
  {
    id: "coc5", cat: "cocktails", catLabel: "Cocktail",
    name: "Caipirinha",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "",
    img: "https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=900&auto=format&fit=crop",
    details: ["Cachaça", "Citron vert", "Sucre"]
  },
  {
    id: "coc6", cat: "cocktails", catLabel: "Cocktail",
    name: "Punch Royal",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "",
    img: "https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "coc7", cat: "cocktails", catLabel: "Cocktail",
    name: "Cocktail con Frutas Naturales",
    price: "6 000 FCFA",
    priceValue: 6000,
    desc: "",
    img: "https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=900&auto=format&fit=crop",
    details: ["Fruits naturels"]
  },
  {
    id: "coc8", cat: "cocktails", catLabel: "Cocktail",
    name: "Cocktail de Zumo",
    price: "3 000 FCFA",
    priceValue: 3000,
    desc: "",
    img: "https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=900&auto=format&fit=crop",
    details: ["Jus de fruits"]
  },
  // ===== BOISSON CHAUDE =====
  {
    id: "cha1", cat: "chaudes", catLabel: "Boisson chaude",
    name: "Espreso",
    price: "1 000 FCFA",
    priceValue: 1000,
    desc: "",
    img: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "cha2", cat: "chaudes", catLabel: "Boisson chaude",
    name: "Té",
    price: "1 500 FCFA",
    priceValue: 1500,
    desc: "",
    img: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "cha3", cat: "chaudes", catLabel: "Boisson chaude",
    name: "Nespresso Cápsulas",
    price: "1 500 FCFA",
    priceValue: 1500,
    desc: "",
    img: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "cha4", cat: "chaudes", catLabel: "Boisson chaude",
    name: "Café Doble",
    price: "1 500 FCFA",
    priceValue: 1500,
    desc: "",
    img: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "cha5", cat: "chaudes", catLabel: "Boisson chaude",
    name: "Café con Leche",
    price: "1 500 FCFA",
    priceValue: 1500,
    desc: "",
    img: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "cha6", cat: "chaudes", catLabel: "Boisson chaude",
    name: "Cappuccino",
    price: "1 500 FCFA",
    priceValue: 1500,
    desc: "",
    img: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "cha7", cat: "chaudes", catLabel: "Boisson chaude",
    name: "Colacao con Leche",
    price: "1 500 FCFA",
    priceValue: 1500,
    desc: "",
    img: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "cha8", cat: "chaudes", catLabel: "Boisson chaude",
    name: "Vaso de Leche",
    price: "1 500 FCFA",
    priceValue: 1500,
    desc: "",
    img: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "cha9", cat: "chaudes", catLabel: "Boisson chaude",
    name: "Carajillo Tres Cepas",
    price: "1 500 FCFA",
    priceValue: 1500,
    desc: "",
    img: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "cha10", cat: "chaudes", catLabel: "Boisson chaude",
    name: "Carajillo Carlos III",
    price: "2 000 FCFA",
    priceValue: 2000,
    desc: "",
    img: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "cha11", cat: "chaudes", catLabel: "Boisson chaude",
    name: "Carajillo Carlos I",
    price: "2 500 FCFA",
    priceValue: 2500,
    desc: "",
    img: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "cha12", cat: "chaudes", catLabel: "Boisson chaude",
    name: "Irish Coffee",
    price: "2 500 FCFA",
    priceValue: 2500,
    desc: "",
    img: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "cha13", cat: "chaudes", catLabel: "Boisson chaude",
    name: "Café Especial con Leche Condensada",
    price: "3 000 FCFA",
    priceValue: 3000,
    desc: "",
    img: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  // ===== SOFT / JUS =====
  {
    id: "sof1", cat: "softs-jus", catLabel: "Soft / Jus",
    name: "Tonica",
    price: "1 000 FCFA",
    priceValue: 1000,
    desc: "",
    img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "sof2", cat: "softs-jus", catLabel: "Soft / Jus",
    name: "Fanta",
    price: "1 000 FCFA",
    priceValue: 1000,
    desc: "",
    img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "sof3", cat: "softs-jus", catLabel: "Soft / Jus",
    name: "Sprite",
    price: "1 000 FCFA",
    priceValue: 1000,
    desc: "",
    img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "sof4", cat: "softs-jus", catLabel: "Soft / Jus",
    name: "Coca-Cola",
    price: "1 500 FCFA",
    priceValue: 1500,
    desc: "",
    img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "sof5", cat: "softs-jus", catLabel: "Soft / Jus",
    name: "X-Ray",
    price: "2 000 FCFA",
    priceValue: 2000,
    desc: "",
    img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "sof6", cat: "softs-jus", catLabel: "Soft / Jus",
    name: "Red Bull",
    price: "2 000 FCFA",
    priceValue: 2000,
    desc: "",
    img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "sof7", cat: "softs-jus", catLabel: "Soft / Jus",
    name: "Coca-Cola Ligth",
    price: "2 000 FCFA",
    priceValue: 2000,
    desc: "",
    img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "sof8", cat: "softs-jus", catLabel: "Soft / Jus",
    name: "Coca-Cola Zero",
    price: "2 000 FCFA",
    priceValue: 2000,
    desc: "",
    img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "sof9", cat: "softs-jus", catLabel: "Soft / Jus",
    name: "Malta",
    price: "2 000 FCFA",
    priceValue: 2000,
    desc: "",
    img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "sof10", cat: "softs-jus", catLabel: "Soft / Jus",
    name: "Biter Kas",
    price: "1 500 FCFA",
    priceValue: 1500,
    desc: "",
    img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "sof11", cat: "softs-jus", catLabel: "Soft / Jus",
    name: "Anita",
    price: "1 500 FCFA",
    priceValue: 1500,
    desc: "",
    img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=900&auto=format&fit=crop",
    details: []
  },
  {
    id: "sof12", cat: "softs-jus", catLabel: "Soft / Jus",
    name: "Zumos Grandes",
    price: "3 000 FCFA",
    priceValue: 3000,
    desc: "",
    img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=900&auto=format&fit=crop",
    details: ["Grand format"]
  },
  {
    id: "sof13", cat: "softs-jus", catLabel: "Soft / Jus",
    name: "Zumo Natural",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "",
    img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=900&auto=format&fit=crop",
    details: ["Jus naturel"]
  },
  {
    id: "sof14", cat: "softs-jus", catLabel: "Soft / Jus",
    name: "Zumo Pequeño",
    price: "1 000 FCFA",
    priceValue: 1000,
    desc: "",
    img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=900&auto=format&fit=crop",
    details: ["Petit format"]
  },
  // ===== EAU =====
  {
    id: "eau1", cat: "eaux", catLabel: "Eau",
    name: "Ecuatorial PM",
    price: "500 FCFA",
    priceValue: 500,
    desc: "",
    img: "https://images.unsplash.com/photo-1560023907-5f339617ea30?q=80&w=900&auto=format&fit=crop",
    details: ["Petit format"]
  },
  {
    id: "eau2", cat: "eaux", catLabel: "Eau",
    name: "Ecuatorial GM",
    price: "1 000 FCFA",
    priceValue: 1000,
    desc: "",
    img: "https://images.unsplash.com/photo-1560023907-5f339617ea30?q=80&w=900&auto=format&fit=crop",
    details: ["Grand format"]
  },
  {
    id: "eau3", cat: "eaux", catLabel: "Eau",
    name: "Bezoya PM",
    price: "1 000 FCFA",
    priceValue: 1000,
    desc: "",
    img: "https://images.unsplash.com/photo-1560023907-5f339617ea30?q=80&w=900&auto=format&fit=crop",
    details: ["Petit format"]
  },
  {
    id: "eau4", cat: "eaux", catLabel: "Eau",
    name: "Bezoya GM",
    price: "2 000 FCFA",
    priceValue: 2000,
    desc: "",
    img: "https://images.unsplash.com/photo-1560023907-5f339617ea30?q=80&w=900&auto=format&fit=crop",
    details: ["Grand format"]
  },
  {
    id: "eau5", cat: "eaux", catLabel: "Eau",
    name: "Solan de Cabra PM",
    price: "1 000 FCFA",
    priceValue: 1000,
    desc: "",
    img: "https://images.unsplash.com/photo-1560023907-5f339617ea30?q=80&w=900&auto=format&fit=crop",
    details: ["Petit format"]
  },
  {
    id: "eau6", cat: "eaux", catLabel: "Eau",
    name: "Solan de Cabra GM",
    price: "2 000 FCFA",
    priceValue: 2000,
    desc: "",
    img: "https://images.unsplash.com/photo-1560023907-5f339617ea30?q=80&w=900&auto=format&fit=crop",
    details: ["Grand format"]
  },
  {
    id: "eau7", cat: "eaux", catLabel: "Eau",
    name: "Perrier PM",
    price: "2 000 FCFA",
    priceValue: 2000,
    desc: "",
    img: "https://images.unsplash.com/photo-1560023907-5f339617ea30?q=80&w=900&auto=format&fit=crop",
    details: ["Petit format", "Pétillante"]
  },
  {
    id: "eau8", cat: "eaux", catLabel: "Eau",
    name: "Perrier GM",
    price: "3 000 FCFA",
    priceValue: 3000,
    desc: "",
    img: "https://images.unsplash.com/photo-1560023907-5f339617ea30?q=80&w=900&auto=format&fit=crop",
    details: ["Grand format", "Pétillante"]
  },
];