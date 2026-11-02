const products = [];

let cart=[];
function money(n){return n.toLocaleString("es-ES",{style:"currency",currency:"EUR"});}
function render(filter){
 const list=filter==="todos"?products:products.filter(p=>p.cat===filter);
 document.getElementById("productCount").textContent=list.length+" productos";
 document.getElementById("products").innerHTML=list.map((p,i)=>'<article class="product"><div class="product-img"><img src="'+p.img+'" alt="'+p.name+'" loading="lazy"></div><div class="product-body"><span class="tag">'+p.cat+'</span><h3>'+p.name+'</h3><p>'+p.desc+'</p><div class="product-bottom"><span class="price">'+money(p.price)+'</span><button class="add" onclick="add('+i+')">Añadir +</button></div></div></article>').join("");
}
function add(i){cart.push(products[i]);updateCart();openCart();}
function updateCart(){
 document.getElementById("cartCount").textContent=cart.length;
 document.getElementById("cartItems").innerHTML=cart.length?cart.map((p,i)=>'<div class="cart-item"><span>'+p.name+'<br><small>'+money(p.price)+'</small></span><button class="remove" onclick="removeItem('+i+')">Eliminar</button></div>').join(""):"<p style='color:#817577'>Tu carrito está vacío.</p>";
 document.getElementById("total").textContent=money(cart.reduce((s,p)=>s+p.price,0));
}
function removeItem(i){cart.splice(i,1);updateCart();}
function openCart(){document.getElementById("cart").classList.add("open");document.getElementById("overlay").classList.add("open");}
function copyOrder(text){
 const ta=document.createElement("textarea");
 ta.value=text;ta.setAttribute("readonly","");ta.style.position="fixed";ta.style.left="-9999px";
 document.body.appendChild(ta);ta.select();ta.setSelectionRange(0,99999);
 try{document.execCommand("copy");}catch(e){}
 ta.remove();
}
function sendOrder(channel){
 if(!cart.length){alert("Tu carrito está vacío. Añade algún producto antes de pedir 😊");return;}
 const text=cart.map((p,i)=>(i+1)+". "+p.name+" — "+money(p.price)).join("\n");
 const total=money(cart.reduce((s,p)=>s+p.price,0));
 const order="Hola 😊 Quiero consultar este pedido de Tu Fragancia Favorita:\n\n"+text+"\n\nTotal: "+total+"\n\n¿Me confirmáis disponibilidad y forma de pago? Gracias 💕";
 copyOrder(order);
 const name=channel==="instagram"?"Instagram":"TikTok";
 alert("✅ ¡Pedido copiado! 📋\n\nAhora se abrirá nuestro "+name+".\nPulsa «Mensaje», mantén pulsado y elige «Pegar». 💕");
 const url=channel==="instagram"?"https://www.instagram.com/tufraganciafavorita.2/":"https://www.tiktok.com/@tufraganciafavorita2";
 window.location.href=url;
}
function closeCart(){document.getElementById("cart").classList.remove("open");document.getElementById("overlay").classList.remove("open");}
function init(){
 document.getElementById("openCart").onclick=openCart;
 document.getElementById("closeCart").onclick=closeCart;
 document.getElementById("overlay").onclick=closeCart;
 document.querySelectorAll(".filter").forEach(function(b){b.onclick=function(){document.querySelectorAll(".filter").forEach(function(x){x.classList.remove("active");});b.classList.add("active");render(b.dataset.filter);};});
 document.getElementById("tiktokBtn").onclick=function(){sendOrder("tiktok");};
 document.getElementById("instagramBtn").onclick=function(){sendOrder("instagram");};
 render("todos");
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
