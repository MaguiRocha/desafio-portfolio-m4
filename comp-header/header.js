function mostrarMenuOculto() {
  const abrirMenuEl = document.querySelector(".menu-hamburguesa");
  const menuEl = document.querySelector(".menu-oculto__contenedor");
  const cerrarMenuEl = document.querySelector(".menu-oculto__boton-cerrar");

  abrirMenuEl.addEventListener("click", () => {
    menuEl.style.display = "flex";
  });

  cerrarMenuEl.addEventListener("click", () => {
    menuEl.style.display = "";
  });
}

function headerComp(el) {
  const headerCompEl = document.createElement("div");

  headerCompEl.innerHTML = `
  <header class="header">
  <a href="./index.html" rel="noopener noreferrer"><img src="./images/logo-magui.png" alt="Logo de Magui"
  class="logo"></a>
  <div class="menu-hamburguesa">
  <div class="menu-hamburguesa__barritas"></div>
  <div class="menu-hamburguesa__barritas"></div>
  <div class="menu-hamburguesa__barritas"></div>
  </div>
  <div class="menu-oculto__contenedor">
  <div class="menu-oculto__contenedor-de-boton">
  <button class="menu-oculto__boton-cerrar">  +  </button>
  </div>
  <div class="menu-oculto__contenedor-de-opciones">
  <a href="./portfolio.html" class="menu-oculto__opciones">Portfolio</a>
  <a href="./services.html" class="menu-oculto__opciones">Servicios</a>
  <a href="./contact.html" class="menu-oculto__opciones">Contacto</a>
  <a href="./index.html" class="menu-oculto__opciones">Home</a>
  </div>
  </div>
  <div class="menu-desktop">
  <a href="./portfolio.html" class="menu-desktop__opciones">PORTFOLIO</a>
  <a href="./services.html" class="menu-desktop__opciones">SERVICIOS</a>
  <a href="./contact.html" class="menu-desktop__opciones">CONTACTO</a>
  </div>
  </header>`;

  el.appendChild(headerCompEl);
  mostrarMenuOculto();
}
