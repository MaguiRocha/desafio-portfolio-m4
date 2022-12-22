function mainServices() {
  const paginaActual = "Servicios";
  const section = "servicios";
  const SelectorSeccionServicios = ".card__container-cards";

  headerComp(document.querySelector(".header-section"));
  welcomeComp(document.querySelector(".bienvenida-section"), paginaActual);
  cardComp(SelectorSeccionServicios, section);
  footerComp(document.querySelector(".footer-section"));
}

mainServices();
