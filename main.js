(()=>{"use strict";function e(e,t,n,a){const i=document.createElement("div");i.classList.add("menu_item");const o=document.createElement("img");o.classList.add("menu_pic"),o.src=e,o.alt=t;const c=document.createElement("p");c.classList.add("item_title"),c.textContent=t;const d=document.createElement("p");d.classList.add("item_desc"),d.textContent=n;const s=document.createElement("p");return s.classList.add("pricing"),s.textContent=a,i.appendChild(o),i.appendChild(c),i.appendChild(d),i.appendChild(s),i}const t=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");return t.setAttribute("id","menu"),t.setAttribute("id","menu"),t.appendChild(e("images/bacon_carbonara.jpg","Creamy Carbonara","Bacon, Cheese, Eggs, Pasta. What more could you ask for.","$14.99")),t.appendChild(e("images/chicken_alfredo.jpg","Chicken Alfredo","Creamy mix of chicken breast, brocilli and Passion.","$17.99")),t.appendChild(e("images/bolognese.jpg","Pasta Bolognese","Sphegatti with thick flavourful bolognese sauce.","$13.99")),t}())};function n(e){const t=document.createElement("p");return t.classList.add("textabout"),t.textContent=e,t}console.log("das"),function(){const e=document.getElementById("content");e.appendChild(function(){const e=document.createElement("div");e.setAttribute("id","header");const t=document.createElement("h1");t.textContent="PAPA PASTA",t.setAttribute("id","top"),e.appendChild(t);const n=document.createElement("h4");return n.textContent="Fresh pasta, all day, everyday.",e.appendChild(n),e}()),e.appendChild(function(){const e=document.createElement("nav");e.classList.add("navs");const a=document.createElement("p");a.textContent="Menu",a.addEventListener("click",(()=>{console.log("testmeu"),t()}));const i=document.createElement("p");return i.textContent="About",i.addEventListener("click",(()=>{!function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.setAttribute("id","about");const t=document.createElement("p");t.textContent="About",t.classList.add("abouthead");const a=document.createElement("img");return a.src="images/founder.jpeg",a.alt="founder",a.classList.add("imgabout"),e.appendChild(t),e.appendChild(a),e.appendChild(n("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat        nde soluta eius, accusamus libero deserunt fugiat, ut facere ullam illo         adipisci ipsum neque atque accusantium quae eveniet doloribus laboriosam!")),e.appendChild(n("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat        nde soluta eius, accusamus libero deserunt fugiat, ut facere ullam illo         adipisci ipsum neque atque accusantium quae eveniet doloribus laboriosam!")),e}())}()})),e.appendChild(a),e.appendChild(i),e}()),e.appendChild(function(){const e=document.createElement("main");return e.setAttribute("id","main"),console.log("main made"),e}()),t()}()})();