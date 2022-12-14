function main() {
  const paginaActual = "Home";
  // https://cdn.contentful.com/spaces/lru2eo6cin9q/environments/master/entries?access_token=JlPlT8g0SoQCSonw6hgCrg16S1UyPni8Ur8giQL-6LQ
  headerComp(document.querySelector(".header-section"));
  welcomeComp(document.querySelector(".bienvenida-section"), paginaActual);
  contactComp(document.querySelector(".contacto-section"));
}

main();
