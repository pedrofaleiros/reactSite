import "./style.css";

export function Produtos() {
  return (
    <div className="produtos">
      <div class="produto">
        <img src="imgs/tapete.png" alt="" />
        <div class="data">
          <div class="nome">Tapete Hexágono</div>
          <div class="preco">Preco: R$130.00</div>
          <div class="tamanho">Tamanho: 100 cm x 100 cm</div>
          <div class="cores">
            Cores: azul-marinho, azul-bebê e bege-empoeirado
          </div>
          <div class="materiais">
            Materiais: barbantes EuroRoma 85% algodão e 15% outras fibras e
            agulha de № 3,5 mm
          </div>
        </div>
        <button class="comprar">Comprar</button>
      </div>

      <div class="produto">
        <img src="imgs/capitaoamerica.png" alt="" />
        <div class="data">
          <div class="nome">Capitão América</div>
          <div class="preco">Preco: R$60,00</div>
          <div class="tamanho">Tamanho: 20 cm altura</div>
          <div class="cores">
            Cores: vermelho, azul, branco, macadâmia e marrom
          </div>
          <div class="materiais">
            Materiais: linha Amigurumi, olhos № 16, enchimento, feltro branco,
            agulha de tapeceiro e agulha para crochê № 2,5 mm
          </div>
        </div>
        <button class="comprar">Comprar</button>
      </div>

      <div class="produto">
        <img src="imgs/sousplat.png" alt="" />
        <div class="data">
          <div class="nome">Sousplat D'luxo</div>
          <div class="preco">Preco: R$ 25,00 cada / R$ 140,00 jogo</div>
          <div class="tamanho">Tamanhos: 38 cm de diâmetro</div>
          <div class="cores">Cores: azul-marinho e dourado</div>
          <div class="materiais">
            Materiais: barbante Ateliê 100% algodão № 6 e agulha № 3,0 mm
          </div>
        </div>
        <button class="comprar">Comprar</button>
      </div>

      <div class="produto">
        <img src="imgs/sapatinho.png" alt="" />
        <div class="data">
          <div class="nome">Sapatinho para recém-nascido</div>
          <div class="preco">Preco: R$15.00</div>
          <div class="tamanho">
            Tamanhos: único e exclusivo para recém-nascido
          </div>
          <div class="cores">Cores: vermelho</div>
          <div class="materiais">
            Materiais: lã Super Bebê Cisne antialérgica e agulha № 2,0 mm
          </div>
        </div>
        <button class="comprar">Comprar</button>
      </div>
    </div>
  );
}
