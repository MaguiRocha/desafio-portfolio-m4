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

async function welcomeComp(el, pag) {
  const dataDeContentful = await recibirDataContenful();
  const dataEnJson = await convertirDataAJson(dataDeContentful);

  let tituloDeBienvenida = dataEnJson.items.map((el) => {
    if (el.fields.archivoCorrespondiente == pag) {
      return el.fields.tituloDePagina;
    }
  });

  const collectionDeImg = await dataEnJson.includes.Asset;
  let imagenDeBienvenida = collectionDeImg.map((el) => {
    if (el.fields.title === pag) {
      console.log(el.fields.file.url);
      return el.fields.file.url;
    }
  });

  const welcomeCompEl = document.createElement("div");
  welcomeCompEl.innerHTML = `
    <div class="bienvenida__container">
    <h1 class="bienvenida__titulo">${tituloDeBienvenida}</h1>
    <img class="bienvenida__img" src="${imagenDeBienvenida}" alt="imagen de inicio">
    </div>`;

  el.appendChild(welcomeCompEl);
}
