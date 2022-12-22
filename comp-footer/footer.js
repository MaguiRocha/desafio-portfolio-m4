function footerComp(el) {
  const footerCompEl = document.createElement("div");

  footerCompEl.innerHTML = `
  <div class="footer__container">
        <img src="/images/logo-magui.png" alt="logo" class="logo">
        <div class="footer__section-icons">
          <div class="footer__container-icon">
            <a class="footer__icon-text" href="/index.html">
              <div class="footer__container-icon-and-text">
                <img src="/images/home-sin-fondo.png" alt="Home" class="footer__icon">
                <span >Home</span>
                </div>
            </a></div>
          <div class="footer__container-icon">
            <a class="footer__icon-text" href="/pages-services/services.html">
              <div class="footer__container-icon-and-text">
                <img src="/images/portfolio-sin-fondo.png" alt="Servicios" class="footer__icon">
                <span >Servicios</span></div>
            </a>
          </div>
          <div class="footer__container-icon">
            <a class="footer__icon-text" href="/pages-contact/contact.html">
              <div class="footer__container-icon-and-text">
                <img src="/images/telefono-sin-fondo.png" alt="Contact" class="footer__icon">
                <span >Contacto</span></div>
            </a>
          </div>
        </div>
        <div class="footer__container-social-icons">
          <a target="_blank" rel="noonpener noreferrer" href="https://www.linkedin.com/in/magali-rocha/"><img src="/images/linkedin.png" alt="Linkedin icon"
              class="footer__social-icon"></a>
          <a target="_blank" rel="noonpener noreferrer" href="https://github.com/MaguiRocha/"><img src="/images/github.png" alt="Github icon"
              class="footer__social-icon"></a>
          <a href=""><img src="/images/twitter.png" alt="Twitter icon" class="footer__social-icon"></a>
        </div>
      </div>
 `;

  el.appendChild(footerCompEl);
}
