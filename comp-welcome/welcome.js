async function recibirDataContenful() {
  const dataContenful = await fetch(
    "https://cdn.contentful.com/spaces/lru2eo6cin9q/environments/master/entries?access_token=JlPlT8g0SoQCSonw6hgCrg16S1UyPni8Ur8giQL-6LQ"
  );
  return dataContenful;
}

async function convertirDataAJson(data) {
  const datosDesafio = await data;
  const resEnJson = await datosDesafio.json();
  return resEnJson;
}

async function obtenerPrimerPalabraDeTitulo(title) {
  const tituloDivido = await title.split(" ");
  const primerPalabra = await tituloDivido[0];
  return primerPalabra;
}

async function obtenerRestoDeTitulo(title) {
  const tituloDivido = await title.split(" ");
  const restoFrase = await tituloDivido.slice([1]).toString().replace(",", " ");
  return restoFrase;
}

async function welcomeComp(el, pag) {
  const dataDeContentful = await recibirDataContenful();
  const dataEnJson = await convertirDataAJson(dataDeContentful);

  let tituloDeBienvenida = "";

  dataEnJson.items.filter((el) => {
    if (el.fields.archivoCorrespondiente == pag) {
      return (tituloDeBienvenida = el.fields.tituloDePagina);
    }
  });

  const primerPalabra = await obtenerPrimerPalabraDeTitulo(tituloDeBienvenida);
  const restoFrase = await obtenerRestoDeTitulo(tituloDeBienvenida);

  const collectionDeImg = await dataEnJson.includes.Asset;
  let imagenDeBienvenida;
  collectionDeImg.filter((el) => {
    if (el.fields.title === pag) {
      return (imagenDeBienvenida = el.fields.file.url);
    }
  });

  const welcomeCompEl = document.createElement("div");
  welcomeCompEl.innerHTML = `
    <div class="bienvenida__container">
    <h1 class="bienvenida__titulo">${primerPalabra}<br>${restoFrase}</h1>
    <img class="bienvenida__img" src="${imagenDeBienvenida}" alt="imagen de inicio">
    </div>`;

  el.appendChild(welcomeCompEl);
}
