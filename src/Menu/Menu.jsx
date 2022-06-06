import "./style.css";

export function Menu() {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          <img src="imgs/logo_akaito.jpg" alt="logo" />
        </div>

        <div className="redes">
          <div className="rede">
            <img
              src="imgs/instagram_icon.png"
              alt="logo instagram"
              className="icon"
            />
            <a href="https://www.instagram.com/akaito_croche/" target="_blank">
              <h2>@akaito_croche</h2>
            </a>
          </div>

          <div className="rede">
            <img
              src="imgs/whatsapp_icon.png"
              alt="logo whatsapp"
              className="icon"
            />
            <p className="telefone">(61) 9999-1234</p>
          </div>
        </div>

        <div className="menu">
          <button className="login">
            <a href="login.html">Login</a>
          </button>
          <button className="signup">
            <a href="signup.html">Cadastrar</a>
          </button>
        </div>
      </nav>
    </div>
  );
}
