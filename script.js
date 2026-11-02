const products = [
 {id:1,cat:"pack",name:"Sol de Janeiro Cheirosa 68 – Beija Flor",desc:"Set con bruma perfumada, gel de ducha y crema corporal Beija Flor.",price:30},
 {id:2,cat:"pack",name:"Sol de Janeiro Cheirosa 59 – Delícia Drench",desc:"Set con bruma perfumada, aceite de ducha y manteca corporal.",price:30},
 {id:3,cat:"pack",name:"Sol de Janeiro Cheirosa 62 – Brazilian Crush",desc:"Set con bruma perfumada, gel de ducha y crema corporal.",price:30},
 {id:4,cat:"pack",name:"Sol de Janeiro Perfume Mist Discovery Set",desc:"Estuche con 5 brumas: Cheirosa 30, 48, 71, 76 y 77.",price:25},
 {id:5,cat:"pack",name:"Sol de Janeiro Perfume Mist Discovery Set",desc:"Estuche con 5 brumas: Cheirosa 40, 59, 62, 68 y 87.",price:25},
 {id:6,cat:"pack",name:"Sol de Janeiro Beija Flor Body Care Set",desc:"Neceser rosa con bruma Cheirosa 68, gel corporal y crema Beija Flor.",price:25},
 {id:7,cat:"pack",name:"Sol de Janeiro Delícia Drench Body Care Set",desc:"Neceser con bruma Cheirosa 59, aceite de ducha y crema corporal.",price:25},
 {id:8,cat:"pack",name:"Sol de Janeiro Bom Dia Bright Body Care Set",desc:"Neceser con bruma, gel de ducha Cheirosa 84 y crema Bom Dia Bright.",price:25},
 {id:9,cat:"perfume",name:"Kayali Vanilla | 28 – 30 ml",desc:"Fragancia dulce, cálida y envolvente con esencia de vainilla.",price:10},
 {id:10,cat:"perfume",name:"Kayali Vanilla Candy Rock Sugar | 42 – 30 ml",desc:"Aroma dulce y cremoso con azúcar caramelizado, vainilla y frutas.",price:10},
 {id:11,cat:"perfume",name:"Kayali Eden Juicy Apple | 01 – 30 ml",desc:"Fragancia fresca, afrutada y dulce con notas de manzana roja.",price:10},
 {id:12,cat:"perfume",name:"Kayali Lovefest Burning Cherry | 48 – 30 ml",desc:"Aroma dulce e intenso de cereza con matices cálidos y amaderados.",price:10},
 {id:13,cat:"perfume",name:"Kayali Fleur Majesty Rose Royale | 31 – 30 ml",desc:"Fragancia floral y afrutada con notas de rosa, dulce y sofisticada.",price:10},
 {id:14,cat:"perfume",name:"Kayali Fleur Majesty Rose Royale | 31 – 100 ml",desc:"Fragancia floral y romántica con matices dulces y sofisticados.",price:30},
 {id:15,cat:"perfume",name:"Kayali Utopia Vanilla Coco | 21 – 100 ml",desc:"Aroma cremoso que combina vainilla con notas tropicales de coco.",price:30},
 {id:16,cat:"pack",name:"Kayali Déjà Vu White Flower – Set 4 × 30 ml",desc:"Cofre con cuatro fragancias Kayali de inspiración floral blanca.",price:35},
 {id:17,cat:"pack",name:"Kayali Sweet Midsummer – Miniature Set",desc:"Set de cuatro fragancias: Eden Juicy Apple, Yum Pistachio Gelato, Yum Boujee Marshmallow y Fleur Majesty Rose Royale.",price:35},
 {id:18,cat:"pack",name:"Kayali Sweet Obsessions – Miniature Set",desc:"Set de cuatro fragancias dulces y gourmand de Kayali.",price:38},
 {id:19,cat:"perfume",name:"Lattafa Yara – 50 ml",desc:"Fragancia femenina dulce, floral y oriental. Elegante y envolvente.",price:15},
 {id:20,cat:"perfume",name:"Miss Vanessa – Perfume Spray Set",desc:"Caja con cuatro sprays perfumados de 40 ml.",price:20},
 {id:21,cat:"perfume",name:"Lattafa Éclaire – 30 ml",desc:"Fragancia gourmand dulce, cremosa y envolvente.",price:15},
 {id:22,cat:"perfume",name:"Reyes Queens Eva – 50 ml",desc:"Fragancia femenina con presentación elegante en tonos azules y dorados.",price:20},
 {id:23,cat:"perfume",name:"Lattafa Yara Moi – 100 ml",desc:"Aroma dulce, cremoso y floral con un fondo cálido y avainillado.",price:30},
 {id:24,cat:"perfume",name:"Reyes Queens Assad",desc:"Fragancia masculina intensa y sofisticada, de estilo árabe.",price:20},
 {id:25,cat:"perfume",name:"Lattafa Asad – 100 ml",desc:"Aroma masculino cálido, especiado y amaderado.",price:40},
 {id:26,cat:"perfume",name:"Lattafa Qaed Al Fursan – 90 ml",desc:"Fragancia de inspiración árabe con notas dulces, afrutadas y amaderadas.",price:35},
 {id:27,cat:"perfume",name:"Lattafa Aswad Aqua – 100 ml",desc:"Fragancia masculina fresca y acuática con carácter y personalidad.",price:25},
 {id:28,cat:"perfume",name:"Reyes Queens Essence – 50 ml",desc:"Fragancia masculina elegante y sofisticada, ideal para el día a día.",price:20},
 {id:29,cat:"bruma",name:"Yum Yum Pink in Sweet – Bruma corporal 100 ml (rosa)",desc:"Bruma perfumada de aroma dulce y goloso para cualquier momento.",price:15},
 {id:30,cat:"bruma",name:"Yum Yum Pink in Sweet – Bruma corporal 100 ml (morada)",desc:"Bruma perfumada de aroma dulce y afrutado, divertida y deliciosa.",price:15},
 {id:31,cat:"crema",name:"Lattafa Body Yara Lotion",desc:"Loción hidratante para manos y cuerpo con aroma dulce y femenino.",price:15},
 {id:32,cat:"crema",name:"Yara – Crema de manos y cuerpo",desc:"Crema perfumada con aroma Yara que deja la piel suave.",price:5},
 {id:33,cat:"pack",name:"Yara – Set perfume + crema de manos",desc:"Dúo con Eau de Toilette de 35 ml y crema de manos de 30 ml.",price:10},
 {id:34,cat:"pack",name:"Kevin & Coco – Set de maquillaje",desc:"Set Liquid Highlighter & Liquid Blush con coloretes, iluminadores y brocha.",price:6},
 {id:35,cat:"hogar",name:"Hayaati Air Freshener – 300 ml",desc:"Ambientador perfumado de Lattafa con aroma oriental intenso y duradero.",price:5}
];

let cart=[];
function money(n){return n.toLocaleString("es-ES",{style:"currency",currency:"EUR"});}
function render(filter){
 const list=filter==="todos"?products:products.filter(p=>p.cat===filter);
 document.getElementById("productCount").textContent=list.length+" productos";
 document.getElementById("products").innerHTML=list.map(p=>'<article class="product"><div class="product-img">' + (p.id===9 ? '<img src="https://perfumebytay.co.za/cdn/shop/files/ChatGPT_Image_Jun_22_2026_at_04_58_44_PM.png?v=1782140338&width=1445" alt="Kayali Vanilla 28 30 ml" loading="lazy" style="width:100%;height:100%;object-fit:contain">' : '<div class="product-placeholder">Tu Fragancia<br><strong>Favorita</strong><span>✨</span></div>') + '</div>'<div class="product-body"><span class="tag">'+p.cat+'</span><h3>'+p.name+'</h3><p>'+p.desc+'</p><div class="product-bottom"><span class="price">'+money(p.price)+'</span><button class="add" onclick="add('+p.id+')">Añadir +</button></div></div></article>').join("");
}
function add(id){const p=products.find(x=>x.id===id);if(p){cart.push(p);updateCart();openCart();}}
function updateCart(){
 document.getElementById("cartCount").textContent=cart.length;
 document.getElementById("cartItems").innerHTML=cart.length?cart.map((p,i)=>'<div class="cart-item"><span>'+p.name+'<br><small>'+money(p.price)+'</small></span><button class="remove" onclick="removeItem('+i+')">Eliminar</button></div>').join(""):"<p style='color:#817577'>Tu carrito está vacío.</p>";
 document.getElementById("total").textContent=money(cart.reduce((s,p)=>s+p.price,0));
}
function removeItem(i){cart.splice(i,1);updateCart();}
function openCart(){document.getElementById("cart").classList.add("open");document.getElementById("overlay").classList.add("open");}
function copyOrder(text){
 const ta=document.createElement("textarea");ta.value=text;ta.setAttribute("readonly","");ta.style.position="fixed";ta.style.left="-9999px";document.body.appendChild(ta);ta.select();ta.setSelectionRange(0,99999);try{document.execCommand("copy");}catch(e){}ta.remove();
}
function sendOrder(channel){
 if(!cart.length){alert("Tu carrito está vacío. Añade algún producto antes de pedir 😊");return;}
 const text=cart.map((p,i)=>(i+1)+". "+p.name+" — "+money(p.price)).join("\n");
 const total=money(cart.reduce((s,p)=>s+p.price,0));
 const order="Hola 😊 Quiero consultar este pedido de Tu Fragancia Favorita:\n\n"+text+"\n\nTotal: "+total+"\n\n¿Me confirmáis disponibilidad y forma de pago? Gracias 💕";
 copyOrder(order);const name=channel==="instagram"?"Instagram":"TikTok";
 alert("✅ ¡Pedido copiado! 📋\n\nAhora se abrirá nuestro "+name+".\nPulsa «Mensaje», mantén pulsado y elige «Pegar». 💕");
 const url=channel==="instagram"?"https://www.instagram.com/tufraganciafavorita.2/":"https://www.tiktok.com/@tufraganciafavorita2";window.location.href=url;
}
function closeCart(){document.getElementById("cart").classList.remove("open");document.getElementById("overlay").classList.remove("open");}
function init(){
 document.getElementById("openCart").onclick=openCart;document.getElementById("closeCart").onclick=closeCart;document.getElementById("overlay").onclick=closeCart;
 document.querySelectorAll(".filter").forEach(function(b){b.onclick=function(){document.querySelectorAll(".filter").forEach(function(x){x.classList.remove("active");});b.classList.add("active");render(b.dataset.filter);};});
 document.getElementById("tiktokBtn").onclick=function(){sendOrder("tiktok");};document.getElementById("instagramBtn").onclick=function(){sendOrder("instagram");};render("todos");
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
