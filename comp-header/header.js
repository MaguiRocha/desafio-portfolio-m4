function compHeader(el) {
  const headerCompEl = document.createElement("div");

  headerCompEl.innerHTML = `
  <header class="header">
  <a href="/index.html" rel="noopener noreferrer"><img src="/images/logo-magui.png" alt="Logo de Magui"
  class="logo"></a>
  <div class="menu-hamburguesa">
    <div class="menu-hamburguesa__barritas"></div>
    <div class="menu-hamburguesa__barritas"></div>
    <div class="menu-hamburguesa__barritas"></div>
  </div>
  <div class="menu-desktop">
    <a href="/pages-portfolio/portfolio.html" class="menu-desktop__opciones">PORTFOLIO</a>
    <a href="/pages-services/services.html" class="menu-desktop__opciones">SERVICIOS</a>
    <a href="/pages-contact/contact.html" class="menu-desktop__opciones">CONTACTO</a>
  </div>
</header>`;

  el.appendChild(headerCompEl);
}
