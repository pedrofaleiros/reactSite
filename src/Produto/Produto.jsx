import "./style.css";

export function Produto({name, price, size, colors, materials, img}) {
  return (
    <div className="produto">
      <img src={img} alt="" />
      <div className="data">
        <div className="nome">{name}</div>
        <div className="preco">{price}</div>
        <div className="tamanho">{size}</div>
        <div className="cores">{colors}</div>
        <div className="materiais">{materials}</div>
      </div>
      <button className="comprar">Comprar</button>
    </div>
  );
}
