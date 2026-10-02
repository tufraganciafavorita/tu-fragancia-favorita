const products=[
{name:"Yara Eau de Parfum 35 ml",cat:"perfume",price:18.90,desc:"Un aroma dulce y femenino para todos los días."},
{name:"Yara Cream",cat:"crema",price:15,desc:"Crema corporal para acompañar tu fragancia."},
{name:"Cheirosa 59",cat:"bruma",price:22,desc:"Bruma corporal con un aroma cálido y envolvente."},
{name:"Sol de Janeiro Beija Flor",cat:"pack",price:22,desc:"Pack especial para regalar o darte un capricho."},
{name:"Aswad Aqua 100 ml",cat:"perfume",price:24.90,desc:"Una fragancia fresca y elegante."},
{name:"Mystical Yara",cat:"perfume",price:24.90,desc:"Una opción especial para amantes de los aromas dulces."},
{name:"Pack de brumas",cat:"pack",price:25,desc:"Selección de brumas para disfrutar y combinar."},
{name:"Neceser especial",cat:"pack",price:25,desc:"Un detalle bonito para llevar tus favoritos."}
];
let cart=[];
const money=n=>n.toLocaleString("es-ES",{style:"currency",currency:"EUR"});
function render(filter="todos"){
 const list=filter==="todos"?products:products.filter(p=>p.cat===filter);
 document.getElementById("productCount").textContent=`${list.length} productos`;
 document.getElementById("products").innerHTML=list.map((p,i)=>`<article class="product">
 <div class="product-img">${p.name}</div><div class="product-body"><span class="tag">${p.cat}</span><h3>${p.name}</h3><p>${p.desc}</p>
 <div class="product-bottom"><span class="price">${money(p.price)}</span><button class="add" onclick="add(${products.indexOf(p)})">Añadir +</button></div></div></article>`).join("");
}
function add(i){cart.push(products[i]);updateCart();openCart()}
function updateCart(){
 document.getElementById("cartCount").textContent=cart.length;
 document.getElementById("cartItems").innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-item"><span>${p.name}<br><small>${money(p.price)}</small></span><button class="remove" onclick="removeItem(${i})">Eliminar</button></div>`).join(""):"<p style='color:#817577'>Tu carrito está vacío.</p>";
 document.getElementById("total").textContent=money(cart.reduce((s,p)=>s+p.price,0));
}
function removeItem(i){cart.splice(i,1);updateCart()}
function openCart(){document.getElementById("cart").classList.add("open");document.getElementById("overlay").classList.add("open")}
function closeCart(){document.getElementById("cart").classList.remove("open");document.getElementById("overlay").classList.remove("open")}
document.getElementById("openCart").onclick=openCart;
document.getElementById("closeCart").onclick=closeCart;
document.getElementById("overlay").onclick=closeCart;
document.querySelectorAll(".filter").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");render(b.dataset.filter)});
document.getElementById("orderBtn").onclick=()=>{
 if(!cart.length)return alert("Añade algún producto al carrito.");
 const lines=cart.map(p=>`• ${p.name} — ${money(p.price)}`).join("%0A");
 const total=money(cart.reduce((s,p)=>s+p.price,0));
 // Sustituye 34600000000 por tu número de WhatsApp cuando quieras.
 const phone="34600000000";
 window.open(`https://wa.me/${phone}?text=Hola,%20quiero%20hacer%20este%20pedido:%0A${lines}%0A%0ATotal:%20${total}`,"_blank");
};
render();