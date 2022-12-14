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

function agregarDataACard(data) {
  /*      <template id="cards">
        <a class="card__url" href="">
          <div class="card__container">
            <img src="" alt="" class="card__img">
            <h3 class="card__title"></h3>
            <p class="card__text"></p>
          </div>
        </a>
      </template> */
}

function cardComp(collectionItems) {}
