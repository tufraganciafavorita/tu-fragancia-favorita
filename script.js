const products = [
  {name:"Yara Hand & Body Lotion",cat:"crema",price:15,desc:"Loción corporal Yara para acompañar tu rutina.",img:"yara-lotion.jpeg"},
  {name:"Mystical Yara · Set 4 × 30 ml",cat:"pack",price:30,desc:"Set de 4 perfumes de 30 ml.",img:"mystical-yara.jpeg"},
  {name:"Aswad Aqua · 100 ml",cat:"perfume",price:25,desc:"Eau de parfum Aswad Aqua.",img:"aswad-aqua.jpeg"},
  {name:"Kayali Fleur Majesty Rose Royale 31 · 30 ml",cat:"perfume",price:10,desc:"Perfume Kayali Fleur Majesty Rose Royale 31 en formato de 30 ml.",img:"kayali-30.jpeg"},
  {name:"Kayali Vanilla 18 · 30 ml",cat:"perfume",price:10,desc:"Perfume Kayali Vanilla 18 en formato de 30 ml.",img:"kayali-30.jpeg"},
  {name:"Kayali Vanilla Coco 31 · 30 ml",cat:"perfume",price:10,desc:"Perfume Kayali Vanilla Coco 31 en formato de 30 ml.",img:"kayali-30.jpeg"},
  {name:"Kayali · 100 ml",cat:"perfume",price:30,desc:"Perfume Kayali en formato de 100 ml.",img:"kayali-100.jpeg"},
  {name:"Kayali · Pack 5 × 30 ml",cat:"pack",price:35,desc:"Pack de 5 perfumes Kayali de 30 ml.",img:"kayali-pack.jpeg"},
  {name:"Sol de Janeiro · Pack 5 Brumas",cat:"bruma",price:25,desc:"Discovery set con 5 brumas: 40, 59, 62, 68 y 87.",img:"sol-brumas.jpeg"},
  {name:"Sol de Janeiro · Neceser",cat:"pack",price:25,desc:"Neceser Sol de Janeiro con productos de cuidado corporal.",img:"sol-neceser.jpeg"},
  {name:"Sol de Janeiro · Pack",cat:"pack",price:30,desc:"Pack de cuidado corporal Sol de Janeiro.",img:"sol-pack.jpeg"},
  {name:"Miss Vanessa Yara · Perfume Spray Set",cat:"pack",price:30,desc:"Set de perfume spray de 40 ml.",img:"miss-vanessa-yara.jpeg"},
  {name:"Yara Bourbon · Crema + perfume 35 ml",cat:"pack",price:5,desc:"Set Yara Bourbon de crema y perfume de 35 ml.",img:"yara-bourbon-catalogo.png"}
];

let cart = [];

function money(n) {
  return n.toLocaleString("es-ES",{style:"currency",currency:"EUR"});
}

function render(filter) {
  const list = filter === "todos" ? products : products.filter(p => p.cat === filter);
  document.getElementById("productCount").textContent = list.length + " productos";
  document.getElementById("products").innerHTML = list.map((p,i) =>
    '<article class="product">' +
      '<div class="product-img"><img src="' + p.img + '" alt="' + p.name + '" loading="lazy"></div>' +
      '<div class="product-body"><span class="tag">' + p.cat + '</span><h3>' + p.name + '</h3><p>' + p.desc + '</p>' +
      '<div class="product-bottom"><span class="price">' + money(p.price) + '</span><button class="add" onclick="add(' + i + ')">Añadir +</button></div></div>' +
    '</article>'
  ).join("");
}

function add(i) {
  cart.push(products[i]);
  updateCart();
  openCart();
}

function updateCart() {
  document.getElementById("cartCount").textContent = cart.length;
  document.getElementById("cartItems").innerHTML = cart.length
    ? cart.map((p,i) => '<div class="cart-item"><span>' + p.name + '<br><small>' + money(p.price) + '</small></span><button class="remove" onclick="removeItem(' + i + ')">Eliminar</button></div>').join("")
    : "<p style='color:#817577'>Tu carrito está vacío.</p>";
  document.getElementById("total").textContent = money(cart.reduce((s,p) => s + p.price, 0));
}

function removeItem(i) {
  cart.splice(i,1);
  updateCart();
}

function openCart() {
  document.getElementById("cart").classList.add("open");
  document.getElementById("overlay").classList.add("open");
}

function closeCart() {
  document.getElementById("cart").classList.remove("open");
  document.getElementById("overlay").classList.remove("open");
}

function init() {
  document.getElementById("openCart").onclick = openCart;
  document.getElementById("closeCart").onclick = closeCart;
  document.getElementById("overlay").onclick = closeCart;

  document.querySelectorAll(".filter").forEach(function(b) {
    b.onclick = function() {
      document.querySelectorAll(".filter").forEach(function(x) { x.classList.remove("active"); });
      b.classList.add("active");
      render(b.dataset.filter);
    };
  });

  document.getElementById("tiktokBtn").onclick = function() {
    window.open("https://www.tiktok.com/@tufraganciafavorita2","_blank");
  };

  document.getElementById("instagramBtn").onclick = function() {
    window.open("https://www.instagram.com/tufraganciafavorita.2/","_blank");
  };

  render("todos");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
