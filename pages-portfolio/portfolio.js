function mainPorfolio() {
  const paginaActual = "Portfolio";
  headerComp(document.querySelector(".header-section"));
  welcomeComp(document.querySelector(".bienvenida-section"), paginaActual);
  footerComp(document.querySelector(".footer-section"));
}

mainPorfolio();
