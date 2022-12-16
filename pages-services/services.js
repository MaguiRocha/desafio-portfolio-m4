function mainServices() {
  const paginaActual = "Servicios";
  headerComp(document.querySelector(".header-section"));
  welcomeComp(document.querySelector(".bienvenida-section"), paginaActual);
  footerComp(document.querySelector(".footer-section"));
}

mainServices();
