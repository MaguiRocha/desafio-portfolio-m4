function mainPorfolio() {
  const paginaActual = "Portfolio";
  const section = "desafio";
  const SelectorSeccionServicios = ".card__container-cards";

  headerComp(document.querySelector(".header-section"));
  welcomeComp(document.querySelector(".bienvenida-section"), paginaActual);
  cardComp(SelectorSeccionServicios, section);
  footerComp(document.querySelector(".footer-section"));
}

mainPorfolio();
