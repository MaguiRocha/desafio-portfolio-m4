async function sendForm() {
  const formEl = document.querySelector(".formulario__contenedor-interno");

  formEl.addEventListener("submit", async function (e) {
    e.preventDefault();

    const nombreForm = formEl.querySelector(
      "div.formulario__fieldset input[id='name']"
    ).value;
    const mailForm = document.querySelector(
      "div.formulario__fieldset input[id='email']"
    ).value;
    const messageForm = document.querySelector(
      "div.formulario__textarea textarea[id='messege']"
    ).value;

    const objData = {
      to: "magalirocha2104@gmail.com",
      message: `Nombre: ${nombreForm}, Email: ${mailForm}, Mensaje: ${messageForm}`,
    };

    console.log("holiss");
    console.log(objData);
    console.log(JSON.stringify(objData));

    const url = "https://apx-api.vercel.app/api/utils/dwf";

    await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(objData),
    });
    formEl.reset();
  });
}

function contactComp(el) {
  const compFormEl = document.createElement("div");

  compFormEl.innerHTML = `
      <div class="formulario">
        <div class="formulario__title">
          <h2 class="formulario__title">Escribime</h2>
        </div>
        <form class="formulario__contenedor-interno">
          <div class="formulario__contenedor-de-input-nombre-y-mail">
            <div class="formulario__fieldset">
              <label id="name" for="text">NOMBRE</label>
              <input id="name" class="formulario__area-input" type="text">
            </div>
            <div class="formulario__fieldset">
              <label for="email">EMAIL</label>
              <input class="formulario__area-input" id="email" type="email">
            </div>
          </div>
        <div class="formulario__textarea">
        <label id="messege"  for="messege">MENSAJE</label>
        <textarea class="formulario__textarea-input" id="messege" cols="30" rows="10"></textarea>
        </div>
        <div class="formulario__cont-button">
          <button class="formulario__button">Enviar</button>
        </div>
        </form>
      </div>
  `;

  el.appendChild(compFormEl);
  sendForm();
}
