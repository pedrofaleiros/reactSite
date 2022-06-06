import { Produto } from "../Produto/Produto";
import "./style.css";

export function Principal() {
  let produtos = [
    {
      name: "Tapete Hexágono",
      price: "Preco: R$130.00",
      size: "Tamanho: 100 cm x 100 cm",
      colors: "Cores: azul-marinho, azul-bebê e bege-empoeirado",
      materials:
        "Materiais: barbantes EuroRoma 85% algodão e 15% outras fibras e agulha de № 3,5 mm",
      img: "imgs/tapete.png",
    },
    {
      name: "Capitão América",
      price: "Preco: R$60,00",
      size: "Tamanho: 20 cm altura",
      colors: "Cores: vermelho, azul, branco, macadâmia e marrom",
      materials:
        "Materiais: linha Amigurumi, olhos № 16, enchimento, feltro branco, agulha de tapeceiro e agulha para crochê № 2,5 mm",
      img: "imgs/capitaoamerica.png",
    },
    {
      name: "Sousplat D'luxo",
      price: "Preco: R$ 25,00 cada / R$ 140,00 jogo",
      size: "Tamanhos: 38 cm de diâmetro",
      colors: "Cores: azul-marinho e dourado",
      materials:
        "Materiais: barbante Ateliê 100% algodão № 6 e agulha № 3,0 mm",
      img: "imgs/sousplat.png",
    },
    {
      name: "Sapatinho para recém-nascido",
      price: "Preco: R$15.00",
      size: "Tamanhos: único e exclusivo para recém-nascido",
      colors: "Cores: vermelho",
      materials:
        "Materiais: lã Super Bebê Cisne antialérgica e agulha № 2,0 mm",
      img: "imgs/sapatinho.png",
    },
  ];

  return (
    <div className="produtos">
      <Produto
        name={produtos[0].name}
        price={produtos[0].price}
        size={produtos[0].size}
        colors={produtos[0].colors}
        materials={produtos[0].materials}
        img={produtos[0].img}
      />

      <Produto
        name={produtos[1].name}
        price={produtos[1].price}
        size={produtos[1].size}
        colors={produtos[1].colors}
        materials={produtos[1].materials}
        img={produtos[1].img}
      />

      <Produto
        name={produtos[2].name}
        price={produtos[2].price}
        size={produtos[2].size}
        colors={produtos[2].colors}
        materials={produtos[2].materials}
        img={produtos[2].img}
      />

      <Produto
        name={produtos[3].name}
        price={produtos[3].price}
        size={produtos[3].size}
        colors={produtos[3].colors}
        materials={produtos[3].materials}
        img={produtos[3].img}
      />
    </div>
  );
}
