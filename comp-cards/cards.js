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

async function agregarDataACard(data, section, container) {
  const seccionPag = section;
  const cardEl = document.createElement("div");
  cardEl.innerHTML = `
    <template id="cards">
      <a target="_blank" rel="noonpener noreferrer" class="card__url" href="">
        <div class="card__container">
          <img src="" alt="" class="card__img">
          <h3 class="card__title"></h3>
          <p class="card__text"></p>
        </div>
      </a>
    </template> `;

  document.body.appendChild(cardEl);
  const objContentful = await data;
  const itemsContentful = objContentful.items;

  //Elemento html a ser rellenado
  const contenedorDeCardsEl = document.querySelector(container);

  for (const r of itemsContentful) {
    if (r.sys.contentType.sys.id == seccionPag) {
      const template = document.querySelector("#cards");

      //modif del titulo
      const tituloCardEl = template.content.querySelector(".card__title");
      tituloCardEl.textContent = r.fields.titulo;
      //modif del descripcion
      const descripCardEl = template.content.querySelector(".card__text");
      descripCardEl.textContent =
        r.fields.descripcion.content[0].content[0].value;

      //modif de la imagen
      const imgCardEl = template.content.querySelector(".card__img");
      imgCardEl.src = r.fields.linkDeImg;

      //modif de la url
      const urlDesafioEl = template.content.querySelector(".card__url");
      urlDesafioEl.href = r.fields.url;

      const clone = document.importNode(template.content, true);
      contenedorDeCardsEl.appendChild(clone);
    }
  }
}

async function cardComp(container, section) {
  const dataContenful = await recibirDataContenful();
  const dataParseada = await convertirDataAJson(dataContenful);
  const agregarCardEl = await agregarDataACard(
    dataParseada,
    section,
    container
  );
}
