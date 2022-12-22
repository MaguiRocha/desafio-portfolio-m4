async function agregarFotoAboutMe() {
  const data = await recibirDataContenful();
  const dataEnJson = await convertirDataAJson(data);
  const collectionDeImg = await dataEnJson.includes.Asset;
  let imagenDeBienvenida = document.querySelector(".about-me__img");

  for (let i = 0; i < collectionDeImg.length; i++) {
    const el = collectionDeImg[i];
    if (el.fields.title === "Foto personal") {
      return (imagenDeBienvenida.src = el.fields.file.url);
    }
    const clone = document.importNode(imagenDeBienvenida.content, true);
    el.fields.file.url.appendChild(clone);
  }
}

async function agregarTituloAboutMe() {
  const data = await recibirDataContenful();
  const dataEnJson = await convertirDataAJson(data);

  let tituloDeBienvenidaEl = document.querySelector(".about-me__title");
  for (let i = 0; i < dataEnJson.items.length; i++) {
    const el = dataEnJson.items[i];
    if (el.fields.nombre == "Soy Magui") {
      return (tituloDeBienvenidaEl.textContent = el.fields.nombre);
    }
    const clone = document.importNode(tituloDeBienvenidaEl.content, true);
    el.fields.nombre.appendChild(clone);
  }
}

async function agregarTextoAboutMe() {
  const data = await recibirDataContenful();
  const dataEnJson = await convertirDataAJson(data);

  let textoDeBienvenidaEl = document.querySelector(".about-me__text");
  for (let i = 0; i < dataEnJson.items.length; i++) {
    const el = dataEnJson.items[i];
    if (el.fields.nombre == "Soy Magui") {
      return (textoDeBienvenidaEl.textContent =
        el.fields.descripcion.content[0].content[0].value);
    }

    const clone = document.importNode(textoDeBienvenidaEl.content, true);
    el.fields.descripcion.content[0].content[0].value.appendChild(clone);
  }
}

async function agregarDataAboutMe() {
  await agregarFotoAboutMe();
  await agregarTituloAboutMe();
  await agregarTextoAboutMe();
}

function main() {
  const paginaActual = "Home";
  const section = "servicios";
  const SelectorSeccionServicios = ".card__container-cards";

  headerComp(document.querySelector(".header-section"));
  welcomeComp(document.querySelector(".bienvenida-section"), paginaActual);
  cardComp(SelectorSeccionServicios, section);
  contactComp(document.querySelector(".contacto-section"));
  footerComp(document.querySelector(".footer-section"));
  agregarDataAboutMe();
}

main();
