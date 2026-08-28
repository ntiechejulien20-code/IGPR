// Carte réelle du restaurant Italian Green Place — prix en FCFA
const MENU_DATA = [
  // ===== PETIT-DÉJEUNER =====
  {
    id: "pet1", cat: "petit-dejeuner", catLabel: "Petit-déjeuner",
    name: "Leche con Cereales",
    price: "3 000 FCFA",
    priceValue: 3000,
    desc: "",
    img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "pet2", cat: "petit-dejeuner", catLabel: "Petit-déjeuner",
    name: "Tostadas",
    price: "3 000 FCFA",
    priceValue: 3000,
    desc: "Cappuccino, confiture, beurre, tomate y pan tostado",
    img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Cappuccino", "Confiture", "Beurre", "Tomate y pan tostado"]
  },
  {
    id: "pet3", cat: "petit-dejeuner", catLabel: "Petit-déjeuner",
    name: "Continental",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "Pains, omelette, boisson chaude au choix, eau, beurre y confiture",
    img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Pains", "Omelette", "Boisson chaude au choix", "Eau", "Beurre y confiture"]
  },
  {
    id: "pet4", cat: "petit-dejeuner", catLabel: "Petit-déjeuner",
    name: "Italian Green Place",
    price: "8 000 FCFA",
    priceValue: 8000,
    desc: "Pains grillés, boisson chaude au choix, eau, verre de jus, lait froid, saucisse, céréales y œuf au plat ou omelette",
    img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Pains grillés", "Boisson chaude au choix", "Eau", "Verre de jus", "Lait froid", "Saucisse", "Céréales y œuf au plat ou omelette"]
  },
  {
    id: "pet5", cat: "petit-dejeuner", catLabel: "Petit-déjeuner",
    name: "American",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "Pain grillé, boisson chaude au choix, eau, verre de jus, lait froid, crêpes, céréales, charcuterie ou fromages, beurre, confiture y œuf au plat ou omelette",
    img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Pain grillé", "Boisson chaude au choix", "Eau", "Verre de jus", "Lait froid", "Crêpes", "Céréales", "Charcuterie ou fromages", "Beurre", "Confiture y œuf au plat ou omelette"]
  },
  // ===== ENTRÉE =====
  {
    id: "ent1", cat: "entrees", catLabel: "Entrée",
    name: "Calamares rebozados con salsa Tartar",
    price: "8 000 FCFA",
    priceValue: 8000,
    desc: "Sauce tartare",
    img: "https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Sauce tartare"]
  },
  {
    id: "ent2", cat: "entrees", catLabel: "Entrée",
    name: "Sopa de pollo",
    price: "7 500 FCFA",
    priceValue: 7500,
    desc: "",
    img: "https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "ent3", cat: "entrees", catLabel: "Entrée",
    name: "Sopa de carne",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "",
    img: "https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "ent4", cat: "entrees", catLabel: "Entrée",
    name: "Sopa de mariscos",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "",
    img: "https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "ent5", cat: "entrees", catLabel: "Entrée",
    name: "Pepesup de pescado",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "",
    img: "https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "ent6", cat: "entrees", catLabel: "Entrée",
    name: "Queso Camembert al horno con pan crujiente",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "Pain croustillant",
    img: "https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Pain croustillant"]
  },
  {
    id: "ent7", cat: "entrees", catLabel: "Entrée",
    name: "Terrina de foie gras y cebolla confitada",
    price: "12 000 FCFA",
    priceValue: 12000,
    desc: "Oignon confit, pain croustillant à l'ail",
    img: "https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Oignon confit", "Pain croustillant à l'ail"]
  },
  {
    id: "ent8", cat: "entrees", catLabel: "Entrée",
    name: "Cocktail de aguacate con gambas",
    price: "8 000 FCFA",
    priceValue: 8000,
    desc: "Avocat, gambas",
    img: "https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Avocat", "Gambas"]
  },
  {
    id: "ent9", cat: "entrees", catLabel: "Entrée",
    name: "Tartar de aguacate con salmón",
    price: "8 000 FCFA",
    priceValue: 8000,
    desc: "Avocat, salmón",
    img: "https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Avocat", "Salmón"]
  },
  {
    id: "ent10", cat: "entrees", catLabel: "Entrée",
    name: "Salmojero",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "",
    img: "https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "ent11", cat: "entrees", catLabel: "Entrée",
    name: "Tapas Calamar",
    price: "6 000 FCFA",
    priceValue: 6000,
    desc: "",
    img: "https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "ent12", cat: "entrees", catLabel: "Entrée",
    name: "Tapas Pollo",
    price: "6 000 FCFA",
    priceValue: 6000,
    desc: "Poulet",
    img: "https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Poulet"]
  },
  {
    id: "ent13", cat: "entrees", catLabel: "Entrée",
    name: "Tapas Carne",
    price: "8 000 FCFA",
    priceValue: 8000,
    desc: "Viande",
    img: "https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Viande"]
  },
  // ===== SALADE =====
  {
    id: "sal1", cat: "salades", catLabel: "Salade",
    name: "Ensalada de Macedonia",
    price: "7 500 FCFA",
    priceValue: 7500,
    desc: "Laitue, œufs durs, concombre, mayonnaise y thon",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Laitue", "Œufs durs", "Concombre", "Mayonnaise y thon"]
  },
  {
    id: "sal2", cat: "salades", catLabel: "Salade",
    name: "Ensalada Mixta",
    price: "8 000 FCFA",
    priceValue: 8000,
    desc: "Tomate, laitue, œuf, avocat, thon, maíz y concombre",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Tomate", "Laitue", "Œuf", "Avocat", "Thon", "Maíz y concombre"]
  },
  {
    id: "sal3", cat: "salades", catLabel: "Salade",
    name: "Ensalada César",
    price: "9 000 FCFA",
    priceValue: 9000,
    desc: "Blanc de poulet, laitue, croûtons à l'ail et au fromage",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Blanc de poulet", "Laitue", "Croûtons à l'ail et au fromage"]
  },
  {
    id: "sal4", cat: "salades", catLabel: "Salade",
    name: "Ensalada Italiana Green Palace",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "Blanc de poulet, laitue, tomate, maïs doux y copeaux de parmesan",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Blanc de poulet", "Laitue", "Tomate", "Maïs doux y copeaux de parmesan"]
  },
  {
    id: "sal5", cat: "salades", catLabel: "Salade",
    name: "Ensalada de Tomate y Atún",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "Tomate, thon, laitue, olives noires",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Tomate", "Thon", "Laitue", "Olives noires"]
  },
  // ===== PÂTES =====
  {
    id: "pat1", cat: "pates", catLabel: "Pâtes",
    name: "Pomodoro",
    price: "6 000 FCFA",
    priceValue: 6000,
    desc: "Tagliatel, Penne, Spaguetti ou Niocci au choix, sauce tomate",
    img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Tagliatel", "Penne", "Spaguetti ou Niocci au choix", "Sauce tomate"]
  },
  {
    id: "pat2", cat: "pates", catLabel: "Pâtes",
    name: "Vegetales",
    price: "6 000 FCFA",
    priceValue: 6000,
    desc: "Tagliatel, Penne, Spaguetti ou Niocci au choix, légumes",
    img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Tagliatel", "Penne", "Spaguetti ou Niocci au choix", "Légumes"]
  },
  {
    id: "pat3", cat: "pates", catLabel: "Pâtes",
    name: "Carbonara",
    price: "6 000 FCFA",
    priceValue: 6000,
    desc: "Tagliatel, Penne, Spaguetti ou Niocci au choix",
    img: "https://images.unsplash.com/photo-1611778948576-d4a585b52fb5?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Tagliatel", "Penne", "Spaguetti ou Niocci au choix"]
  },
  {
    id: "pat4", cat: "pates", catLabel: "Pâtes",
    name: "Bolonesa",
    price: "8 000 FCFA",
    priceValue: 8000,
    desc: "Tagliatel, Penne, Spaguetti ou Niocci au choix, sauce bolognaise",
    img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Tagliatel", "Penne", "Spaguetti ou Niocci au choix", "Sauce bolognaise"]
  },
  {
    id: "pat5", cat: "pates", catLabel: "Pâtes",
    name: "Lasagna",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "",
    img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "pat6", cat: "pates", catLabel: "Pâtes",
    name: "Salmón",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "Tagliatel, Penne, Spaguetti ou Niocci au choix, salmón",
    img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Tagliatel", "Penne", "Spaguetti ou Niocci au choix", "Salmón"]
  },
  {
    id: "pat7", cat: "pates", catLabel: "Pâtes",
    name: "Mariscos",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "Sauce crème ou tomate, fruits de mer",
    img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Sauce crème ou tomate", "Fruits de mer"]
  },
  {
    id: "pat8", cat: "pates", catLabel: "Pâtes",
    name: "Pastas de la Casa",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "Poulet o viande, sauce crème ou tomate",
    img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Poulet o viande", "Sauce crème ou tomate"]
  },
  // ===== PIZZA =====
  {
    id: "piz1", cat: "pizzas", catLabel: "Pizza",
    name: "Margarita",
    price: "7 000 FCFA",
    priceValue: 7000,
    desc: "Sauce tomate, fromage, olives noires, origan",
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Sauce tomate", "Fromage", "Olives noires", "Origan"],
    sizes: [{"label": "Moyenne", "price": "7 000 FCFA", "priceValue": 7000}, {"label": "Grande", "price": "8 000 FCFA", "priceValue": 8000}]
  },
  {
    id: "piz2", cat: "pizzas", catLabel: "Pizza",
    name: "Reina",
    price: "7 500 FCFA",
    priceValue: 7500,
    desc: "Sauce tomate, fromage, jambon, champignons",
    img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Sauce tomate", "Fromage", "Jambon", "Champignons"],
    sizes: [{"label": "Moyenne", "price": "7 500 FCFA", "priceValue": 7500}, {"label": "Grande", "price": "8 500 FCFA", "priceValue": 8500}]
  },
  {
    id: "piz3", cat: "pizzas", catLabel: "Pizza",
    name: "Napolitana",
    price: "7 500 FCFA",
    priceValue: 7500,
    desc: "Sauce tomate, fromage, anchois, câpres, olives",
    img: "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Sauce tomate", "Fromage", "Anchois", "Câpres", "Olives"],
    sizes: [{"label": "Moyenne", "price": "7 500 FCFA", "priceValue": 7500}, {"label": "Grande", "price": "8 500 FCFA", "priceValue": 8500}]
  },
  {
    id: "piz4", cat: "pizzas", catLabel: "Pizza",
    name: "4 Estacione",
    price: "7 500 FCFA",
    priceValue: 7500,
    desc: "Sauce tomate, fromage, jambon, champignons, artichauts, chorizo",
    img: "https://images.unsplash.com/photo-1607929298871-fbdcf7e84852?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Sauce tomate", "Fromage", "Jambon", "Champignons", "Artichauts", "Chorizo"],
    sizes: [{"label": "Moyenne", "price": "7 500 FCFA", "priceValue": 7500}, {"label": "Grande", "price": "8 500 FCFA", "priceValue": 8500}]
  },
  {
    id: "piz5", cat: "pizzas", catLabel: "Pizza",
    name: "La Berta",
    price: "7 500 FCFA",
    priceValue: 7500,
    desc: "Sauce tomate, fromage, poulet, oignon, champignons",
    img: "https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Sauce tomate", "Fromage", "Poulet", "Oignon", "Champignons"],
    sizes: [{"label": "Moyenne", "price": "7 500 FCFA", "priceValue": 7500}, {"label": "Grande", "price": "8 500 FCFA", "priceValue": 8500}]
  },
  {
    id: "piz6", cat: "pizzas", catLabel: "Pizza",
    name: "Toscana",
    price: "7 500 FCFA",
    priceValue: 7500,
    desc: "Sauce tomate, fromage, oignon, œufs, poivron vert, origan",
    img: "https://images.unsplash.com/photo-1602658014714-26b99d5a45cf?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Sauce tomate", "Fromage", "Oignon", "Œufs", "Poivron vert", "Origan"],
    sizes: [{"label": "Moyenne", "price": "7 500 FCFA", "priceValue": 7500}, {"label": "Grande", "price": "8 500 FCFA", "priceValue": 8500}]
  },
  {
    id: "piz7", cat: "pizzas", catLabel: "Pizza",
    name: "Vegetariana",
    price: "7 500 FCFA",
    priceValue: 7500,
    desc: "Sauce tomate, fromage, maïs doux, champignons, poivron vert, tomate, oignon, courgettes",
    img: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Sauce tomate", "Fromage", "Maïs doux", "Champignons", "Poivron vert", "Tomate", "Oignon", "Courgettes"],
    sizes: [{"label": "Moyenne", "price": "7 500 FCFA", "priceValue": 7500}, {"label": "Grande", "price": "8 500 FCFA", "priceValue": 8500}]
  },
  {
    id: "piz8", cat: "pizzas", catLabel: "Pizza",
    name: "Pizza Boscajola",
    price: "8 000 FCFA",
    priceValue: 8000,
    desc: "Bolognaise, oignon, fromage, poivron vert, champignons, sauce tomate",
    img: "https://images.unsplash.com/photo-1589477500339-82aeb8718167?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Bolognaise", "Oignon", "Fromage", "Poivron vert", "Champignons", "Sauce tomate"],
    sizes: [{"label": "Moyenne", "price": "8 000 FCFA", "priceValue": 8000}, {"label": "Grande", "price": "9 000 FCFA", "priceValue": 9000}]
  },
  {
    id: "piz9", cat: "pizzas", catLabel: "Pizza",
    name: "La Verona de Barbacoa",
    price: "7 500 FCFA",
    priceValue: 7500,
    desc: "Fromage, sauce tomate, sauce barbecue, poulet, champignons, poivron vert, œuf",
    img: "https://images.unsplash.com/photo-1651978595416-9956a5fb8f7a?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Fromage", "Sauce tomate", "Sauce barbecue", "Poulet", "Champignons", "Poivron vert", "Œuf"],
    sizes: [{"label": "Moyenne", "price": "7 500 FCFA", "priceValue": 7500}, {"label": "Grande", "price": "8 500 FCFA", "priceValue": 8500}]
  },
  {
    id: "piz10", cat: "pizzas", catLabel: "Pizza",
    name: "Pizza Peperoni",
    price: "7 500 FCFA",
    priceValue: 7500,
    desc: "Fromage, sauce tomate, chorizo",
    img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Fromage", "Sauce tomate", "Chorizo"],
    sizes: [{"label": "Moyenne", "price": "7 500 FCFA", "priceValue": 7500}, {"label": "Grande", "price": "8 500 FCFA", "priceValue": 8500}]
  },
  {
    id: "piz11", cat: "pizzas", catLabel: "Pizza",
    name: "La Dulce Virginia",
    price: "7 500 FCFA",
    priceValue: 7500,
    desc: "Sauce tomate, fromage, jambon blanc",
    img: "https://images.unsplash.com/photo-1671572579989-fa11cbd86eef?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Sauce tomate", "Fromage", "Jambon blanc"],
    sizes: [{"label": "Moyenne", "price": "7 500 FCFA", "priceValue": 7500}, {"label": "Grande", "price": "8 500 FCFA", "priceValue": 8500}]
  },
  {
    id: "piz12", cat: "pizzas", catLabel: "Pizza",
    name: "Patatosa",
    price: "7 500 FCFA",
    priceValue: 7500,
    desc: "Sauce tomate, fromage, frites",
    img: "https://images.unsplash.com/photo-1589187151053-5ec8818e661b?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Sauce tomate", "Fromage", "Frites"],
    sizes: [{"label": "Moyenne", "price": "7 500 FCFA", "priceValue": 7500}, {"label": "Grande", "price": "8 500 FCFA", "priceValue": 8500}]
  },
  {
    id: "piz13", cat: "pizzas", catLabel: "Pizza",
    name: "Italian Green Palace",
    price: "7 500 FCFA",
    priceValue: 7500,
    desc: "Sauce tomate, fromage, oignons, olives, origan y champignon",
    img: "https://images.unsplash.com/photo-1664309641932-0e03e0771b97?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Sauce tomate", "Fromage", "Oignons", "Olives", "Origan y champignon"],
    sizes: [{"label": "Moyenne", "price": "7 500 FCFA", "priceValue": 7500}, {"label": "Grande", "price": "8 500 FCFA", "priceValue": 8500}]
  },
  {
    id: "piz14", cat: "pizzas", catLabel: "Pizza",
    name: "Carbonara",
    price: "7 500 FCFA",
    priceValue: 7500,
    desc: "Jambon, fromage, bacon, crème fraîche",
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Jambon", "Fromage", "Bacon", "Crème fraîche"],
    sizes: [{"label": "Moyenne", "price": "7 500 FCFA", "priceValue": 7500}, {"label": "Grande", "price": "8 500 FCFA", "priceValue": 8500}]
  },
  {
    id: "piz15", cat: "pizzas", catLabel: "Pizza",
    name: "Prosciutto",
    price: "7 500 FCFA",
    priceValue: 7500,
    desc: "Sauce tomate, fromage, jambon blanc",
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Sauce tomate", "Fromage", "Jambon blanc"],
    sizes: [{"label": "Moyenne", "price": "7 500 FCFA", "priceValue": 7500}, {"label": "Grande", "price": "8 500 FCFA", "priceValue": 8500}]
  },
  {
    id: "piz16", cat: "pizzas", catLabel: "Pizza",
    name: "Ananas",
    price: "7 500 FCFA",
    priceValue: 7500,
    desc: "Fromage, sauce tomate, ananas",
    img: "https://images.unsplash.com/photo-1562835155-a7c2a225e97d?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Fromage", "Sauce tomate", "Ananas"],
    sizes: [{"label": "Moyenne", "price": "7 500 FCFA", "priceValue": 7500}, {"label": "Grande", "price": "8 500 FCFA", "priceValue": 8500}]
  },
  {
    id: "piz17", cat: "pizzas", catLabel: "Pizza",
    name: "Calzona",
    price: "7 500 FCFA",
    priceValue: 7500,
    desc: "Sauce tomate, fromage, jambon blanc",
    img: "https://images.unsplash.com/photo-1680405620826-83b0f0f61b28?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Sauce tomate", "Fromage", "Jambon blanc"],
    sizes: [{"label": "Moyenne", "price": "7 500 FCFA", "priceValue": 7500}, {"label": "Grande", "price": "8 500 FCFA", "priceValue": 8500}]
  },
  {
    id: "piz18", cat: "pizzas", catLabel: "Pizza",
    name: "Americana",
    price: "9 000 FCFA",
    priceValue: 9000,
    desc: "Sauce tomate, jambon serrano, fromage",
    img: "https://images.unsplash.com/photo-1544982503-9f984c14501a?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Sauce tomate", "Jambon serrano", "Fromage"],
    sizes: [{"label": "Moyenne", "price": "9 000 FCFA", "priceValue": 9000}, {"label": "Grande", "price": "10 000 FCFA", "priceValue": 10000}]
  },
  {
    id: "piz19", cat: "pizzas", catLabel: "Pizza",
    name: "4 Quesos",
    price: "7 500 FCFA",
    priceValue: 7500,
    desc: "Sauce tomate, 4 fromages diferentes",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Sauce tomate", "4 fromages diferentes"],
    sizes: [{"label": "Moyenne", "price": "7 500 FCFA", "priceValue": 7500}, {"label": "Grande", "price": "8 500 FCFA", "priceValue": 8500}]
  },
  {
    id: "piz20", cat: "pizzas", catLabel: "Pizza",
    name: "Rey Augusto",
    price: "8 000 FCFA",
    priceValue: 8000,
    desc: "Sauce tomate, fromage, jambon, champignons, poivron vert, thon, oignon, chorizo",
    img: "https://images.unsplash.com/photo-1692737580547-b45bb4a02356?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Sauce tomate", "Fromage", "Jambon", "Champignons", "Poivron vert", "Thon", "Oignon", "Chorizo"],
    sizes: [{"label": "Moyenne", "price": "8 000 FCFA", "priceValue": 8000}, {"label": "Grande", "price": "9 000 FCFA", "priceValue": 9000}]
  },
  {
    id: "piz21", cat: "pizzas", catLabel: "Pizza",
    name: "Pizza Philadelphia (Pollo)",
    price: "9 000 FCFA",
    priceValue: 9000,
    desc: "Poulet, oignon, pimiento, champignons, maíz, sauce barbecue",
    img: "https://images.unsplash.com/photo-1708649360673-fc1613edc1d5?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Poulet", "Oignon", "Pimiento", "Champignons", "Maíz", "Sauce barbecue"],
    sizes: [{"label": "Moyenne", "price": "9 000 FCFA", "priceValue": 9000}, {"label": "Grande", "price": "10 000 FCFA", "priceValue": 10000}]
  },
  {
    id: "piz22", cat: "pizzas", catLabel: "Pizza",
    name: "Pizza Philadelphia (Carne)",
    price: "9 000 FCFA",
    priceValue: 9000,
    desc: "Viande, oignon, pimiento, champignons, maíz, sauce barbecue",
    img: "https://images.unsplash.com/photo-1724116382212-b0af49d9eb5f?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Viande", "Oignon", "Pimiento", "Champignons", "Maíz", "Sauce barbecue"],
    sizes: [{"label": "Moyenne", "price": "9 000 FCFA", "priceValue": 9000}, {"label": "Grande", "price": "10 000 FCFA", "priceValue": 10000}]
  },
  {
    id: "piz23", cat: "pizzas", catLabel: "Pizza",
    name: "Pizza de Salmón",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "Saumon fumé, fromage, sauce tomate",
    img: "https://images.unsplash.com/photo-1700760934249-93efbb574d23?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Saumon fumé", "Fromage", "Sauce tomate"],
    sizes: [{"label": "Moyenne", "price": "10 000 FCFA", "priceValue": 10000}, {"label": "Grande", "price": "12 000 FCFA", "priceValue": 12000}]
  },
  {
    id: "piz24", cat: "pizzas", catLabel: "Pizza",
    name: "Pizza Mariscos",
    price: "8 000 FCFA",
    priceValue: 8000,
    desc: "Fromages, tomate, fruits de mer",
    img: "https://images.unsplash.com/photo-1679310290400-53df391fae3c?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Fromages", "Tomate", "Fruits de mer"],
    sizes: [{"label": "Moyenne", "price": "8 000 FCFA", "priceValue": 8000}, {"label": "Grande", "price": "9 000 FCFA", "priceValue": 9000}]
  },
  {
    id: "piz25", cat: "pizzas", catLabel: "Pizza",
    name: "Pizza Cancún",
    price: "7 500 FCFA",
    priceValue: 7500,
    desc: "Fromages, tomate, thon",
    img: "https://images.unsplash.com/photo-1778448951072-e0c42bbcb93b?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Fromages", "Tomate", "Thon"],
    sizes: [{"label": "Moyenne", "price": "7 500 FCFA", "priceValue": 7500}, {"label": "Grande", "price": "8 500 FCFA", "priceValue": 8500}]
  },
  {
    id: "piz26", cat: "pizzas", catLabel: "Pizza",
    name: "Capriciosa",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "Fromages, salsa tomate, poivron vert, chorizo, jambon, champignons, alcachofa",
    img: "https://images.unsplash.com/photo-1681567604770-0dc826c870ae?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Fromages", "Salsa tomate", "Poivron vert", "Chorizo", "Jambon", "Champignons", "Alcachofa"],
    sizes: [{"label": "Moyenne", "price": "10 000 FCFA", "priceValue": 10000}, {"label": "Grande", "price": "12 000 FCFA", "priceValue": 12000}]
  },
  {
    id: "piz27", cat: "pizzas", catLabel: "Pizza",
    name: "Pizza Royal",
    price: "7 500 FCFA",
    priceValue: 7500,
    desc: "Poulet, oignon, pimiento, champignon, jambon, gambas, fromage, carottes",
    img: "https://images.unsplash.com/photo-1671572580758-fd91620a1c6d?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Poulet", "Oignon", "Pimiento", "Champignon", "Jambon", "Gambas", "Fromage", "Carottes"],
    sizes: [{"label": "Moyenne", "price": "7 500 FCFA", "priceValue": 7500}, {"label": "Grande", "price": "8 500 FCFA", "priceValue": 8500}]
  },
  {
    id: "piz28", cat: "pizzas", catLabel: "Pizza",
    name: "Pizza Boloñesa",
    price: "7 500 FCFA",
    priceValue: 7500,
    desc: "Sauce tomate, fromage, viande hachée",
    img: "https://images.unsplash.com/photo-1546993641-097e8366bba0?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Sauce tomate", "Fromage", "Viande hachée"]
  },
  // ===== VIANDE =====
  {
    id: "via1", cat: "viandes", catLabel: "Viande",
    name: "Pinchos de Carne",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "via2", cat: "viandes", catLabel: "Viande",
    name: "Chuleta de Cerdo",
    price: "8 000 FCFA",
    priceValue: 8000,
    desc: "",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "via3", cat: "viandes", catLabel: "Viande",
    name: "Salteado de Cerdo al Vino Blanco",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "Au vin blanc",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Au vin blanc"]
  },
  {
    id: "via4", cat: "viandes", catLabel: "Viande",
    name: "Steak Tartar",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "via5", cat: "viandes", catLabel: "Viande",
    name: "Carpaccio de Ternera",
    price: "15 000 FCFA",
    priceValue: 15000,
    desc: "",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "via6", cat: "viandes", catLabel: "Viande",
    name: "Chateaubriand",
    price: "8 000 FCFA",
    priceValue: 8000,
    desc: "",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "via7", cat: "viandes", catLabel: "Viande",
    name: "Costillas a la Barbacoa",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "via8", cat: "viandes", catLabel: "Viande",
    name: "Solomillo",
    price: "15 000 FCFA",
    priceValue: 15000,
    desc: "",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "via9", cat: "viandes", catLabel: "Viande",
    name: "Chuleta de Cordero",
    price: "15 000 FCFA",
    priceValue: 15000,
    desc: "",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  // ===== POULET =====
  {
    id: "pou1", cat: "poulet", catLabel: "Poulet",
    name: "Pechuga de Pollo a la Plancha",
    price: "8 000 FCFA",
    priceValue: 8000,
    desc: "",
    img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "pou2", cat: "poulet", catLabel: "Poulet",
    name: "Pollo DG",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "",
    img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "pou3", cat: "poulet", catLabel: "Poulet",
    name: "Pinchos de Pollo",
    price: "8 000 FCFA",
    priceValue: 8000,
    desc: "",
    img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "pou4", cat: "poulet", catLabel: "Poulet",
    name: "Pollo Ahumado en Salsa de Cacahuetes con Plátano Machacado",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "Banane plantain écrasée",
    img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Banane plantain écrasée"]
  },
  {
    id: "pou5", cat: "poulet", catLabel: "Poulet",
    name: "Medio Pollo",
    price: "12 000 FCFA",
    priceValue: 12000,
    desc: "",
    img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "pou6", cat: "poulet", catLabel: "Poulet",
    name: "Filete de Pato",
    price: "15 000 FCFA",
    priceValue: 15000,
    desc: "",
    img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "pou7", cat: "poulet", catLabel: "Poulet",
    name: "Muslo de Pato",
    price: "15 000 FCFA",
    priceValue: 15000,
    desc: "",
    img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "pou8", cat: "poulet", catLabel: "Poulet",
    name: "Pollo Cordon Bleu",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "",
    img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "pou9", cat: "poulet", catLabel: "Poulet",
    name: "Alitas de Pollo en Salsa Barbacoa",
    price: "8 000 FCFA",
    priceValue: 8000,
    desc: "Frit o salsa tomate",
    img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Frit o salsa tomate"]
  },
  // ===== POISSON =====
  {
    id: "poi1", cat: "poissons", catLabel: "Poisson",
    name: "Filete de Pescado",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "Plancha, Provinzal, a l'Horno",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Plancha", "Provinzal", "A l'Horno"]
  },
  {
    id: "poi2", cat: "poissons", catLabel: "Poisson",
    name: "Salteado de Camarones al Ajo",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "Al ail",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Al ail"]
  },
  {
    id: "poi3", cat: "poissons", catLabel: "Poisson",
    name: "Salmón Noruego a la Parrilla",
    price: "12 000 FCFA",
    priceValue: 12000,
    desc: "",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "poi4", cat: "poissons", catLabel: "Poisson",
    name: "Pescado Lenguado en Salsa Meunière",
    price: "15 000 FCFA",
    priceValue: 15000,
    desc: "",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "poi5", cat: "poissons", catLabel: "Poisson",
    name: "Gambas al Ajo o Provinzal",
    price: "15 000 FCFA",
    priceValue: 15000,
    desc: "",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=900&auto=format&fit=crop",
    ingredients: [],
    sizes: [{"label": "Petite", "price": "15 000 FCFA", "priceValue": 15000}, {"label": "Grande", "price": "20 000 FCFA", "priceValue": 20000}]
  },
  {
    id: "poi6", cat: "poissons", catLabel: "Poisson",
    name: "Lenguado Entero",
    price: "15 000 FCFA",
    priceValue: 15000,
    desc: "",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "poi7", cat: "poissons", catLabel: "Poisson",
    name: "Pescado Colorado Barbacoa / a la Plancha",
    price: "15 000 FCFA",
    priceValue: 15000,
    desc: "",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "poi8", cat: "poissons", catLabel: "Poisson",
    name: "Parrillada Mixta",
    price: "50 000 FCFA",
    priceValue: 50000,
    desc: "Poulet, viande de veau, gambas, viande de porc, pescado y saucisses",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Poulet", "Viande de veau", "Gambas", "Viande de porc", "Pescado y saucisses"]
  },
  {
    id: "poi9", cat: "poissons", catLabel: "Poisson",
    name: "Pinchos de Pescados",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "poi10", cat: "poissons", catLabel: "Poisson",
    name: "Pinchos de Gambas",
    price: "15 000 FCFA",
    priceValue: 15000,
    desc: "",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=900&auto=format&fit=crop",
    ingredients: [],
    sizes: [{"label": "Petite", "price": "15 000 FCFA", "priceValue": 15000}, {"label": "Grande", "price": "20 000 FCFA", "priceValue": 20000}]
  },
  // ===== SPÉCIALITÉ =====
  {
    id: "spe1", cat: "specialites", catLabel: "Spécialité",
    name: "Ndolé con Carne de Buey",
    price: "8 000 FCFA",
    priceValue: 8000,
    desc: "Viande de bœuf",
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Viande de bœuf"]
  },
  {
    id: "spe2", cat: "specialites", catLabel: "Spécialité",
    name: "Ndolé con Pescado Ahumado",
    price: "8 000 FCFA",
    priceValue: 8000,
    desc: "Poisson fumé",
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Poisson fumé"]
  },
  {
    id: "spe3", cat: "specialites", catLabel: "Spécialité",
    name: "Ndolé con Gambas",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "Gambas",
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Gambas"]
  },
  {
    id: "spe4", cat: "specialites", catLabel: "Spécialité",
    name: "Folong Salteado con Pollo y Pescado Ahumado",
    price: "10 000 FCFA",
    priceValue: 10000,
    desc: "Poulet, poisson fumé",
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Poulet", "Poisson fumé"]
  },
  {
    id: "spe5", cat: "specialites", catLabel: "Spécialité",
    name: "Ndolé con Carne de Buey, Pescado Ahumado y Gambas",
    price: "13 000 FCFA",
    priceValue: 13000,
    desc: "Viande de bœuf, poisson fumé, gambas",
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Viande de bœuf", "Poisson fumé", "Gambas"]
  },
  {
    id: "spe6", cat: "specialites", catLabel: "Spécialité",
    name: "Eru",
    price: "9 000 FCFA",
    priceValue: 9000,
    desc: "",
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  // ===== HAMBURGER =====
  {
    id: "ham1", cat: "hamburgers", catLabel: "Hamburger",
    name: "Hamburguesa de Pollo",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "Blanc de poulet pané, mozzarella, laitue y œuf",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Blanc de poulet pané", "Mozzarella", "Laitue y œuf"]
  },
  {
    id: "ham2", cat: "hamburgers", catLabel: "Hamburger",
    name: "Hamburguesa de Carne",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "Viande de veau hachée, laitue, mozzarella, œuf y bacon",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Viande de veau hachée", "Laitue", "Mozzarella", "Œuf y bacon"]
  },
  {
    id: "ham3", cat: "hamburgers", catLabel: "Hamburger",
    name: "Bocadillo Vegetal",
    price: "3 500 FCFA",
    priceValue: 3500,
    desc: "",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "ham4", cat: "hamburgers", catLabel: "Hamburger",
    name: "Bocadillo de Carne",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "ham5", cat: "hamburgers", catLabel: "Hamburger",
    name: "Bocadillo de Pollo",
    price: "5 000 FCFA",
    priceValue: 5000,
    desc: "",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "ham6", cat: "hamburgers", catLabel: "Hamburger",
    name: "Bocadillo Jamón y Queso",
    price: "3 000 FCFA",
    priceValue: 3000,
    desc: "Jambon y fromage",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Jambon y fromage"]
  },
  // ===== ACCOMPAGNEMENT =====
  {
    id: "acc1", cat: "accompagnements", catLabel: "Accompagnement",
    name: "Arroz Blanco",
    price: "2 000 FCFA",
    priceValue: 2000,
    desc: "",
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "acc2", cat: "accompagnements", catLabel: "Accompagnement",
    name: "Plátano Frito",
    price: "2 000 FCFA",
    priceValue: 2000,
    desc: "",
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "acc3", cat: "accompagnements", catLabel: "Accompagnement",
    name: "Patatas Fritas",
    price: "2 000 FCFA",
    priceValue: 2000,
    desc: "",
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "acc4", cat: "accompagnements", catLabel: "Accompagnement",
    name: "Judías Verdes",
    price: "2 000 FCFA",
    priceValue: 2000,
    desc: "",
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "acc5", cat: "accompagnements", catLabel: "Accompagnement",
    name: "Patatas al Vapor",
    price: "2 000 FCFA",
    priceValue: 2000,
    desc: "",
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "acc6", cat: "accompagnements", catLabel: "Accompagnement",
    name: "Patatas Salteadas al Ajo",
    price: "2 000 FCFA",
    priceValue: 2000,
    desc: "Al ail",
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=900&auto=format&fit=crop",
    ingredients: ["Al ail"]
  },
  {
    id: "acc7", cat: "accompagnements", catLabel: "Accompagnement",
    name: "Verduras Salteadas",
    price: "2 000 FCFA",
    priceValue: 2000,
    desc: "",
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "acc8", cat: "accompagnements", catLabel: "Accompagnement",
    name: "Puré de Patatas",
    price: "2 000 FCFA",
    priceValue: 2000,
    desc: "",
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
  {
    id: "acc9", cat: "accompagnements", catLabel: "Accompagnement",
    name: "Gratinado de Patatas",
    price: "3 000 FCFA",
    priceValue: 3000,
    desc: "",
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=900&auto=format&fit=crop",
    ingredients: []
  },
];