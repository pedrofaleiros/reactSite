import "./style.css";

export function Menu() {
  return (
    <div>
      <nav class="container">
        <div class="logo">
          <img src="imgs/logo_akaito.jpg" alt="logo" />
        </div>

        <div class="redes">
          <div class="rede">
            <img
              src="imgs/instagram_icon.png"
              alt="logo instagram"
              class="icon"
            />
            <a href="https://www.instagram.com/akaito_croche/" target="_blank">
              <h2>@akaito_croche</h2>
            </a>
          </div>

          <div class="rede">
            <img
              src="imgs/whatsapp_icon.png"
              alt="logo whatsapp"
              class="icon"
            />
            <p class="telefone">(61) 9999-1234</p>
          </div>
        </div>

        <div class="menu">
          <button class="login">
            <a href="login.html">Login</a>
          </button>
          <button class="signup">
            <a href="signup.html">Cadastrar</a>
          </button>
        </div>
      </nav>
    </div>
  );
}
