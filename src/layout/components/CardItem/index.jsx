import style from './cardItem.module.css'

export const CardItem = ({ product }) => {

  if(product.name){
    return (
      <div className={style.card}>
        <div className={style.imageBox}>
          <img src={product.pictures} alt="Чмоня" className={style.imageProduct} />
        </div>
        <p className={style.price}><b>{product.price} ₽</b></p>
        <p className={style.quantity}>{product.wight}</p>
        <div className={style.productDescription}>
          {product.description}
        </div>
        <div className={style.prittyButton}>
          <button><b>В корзину</b></button>
        </div>
      </div>
    )
  }
}