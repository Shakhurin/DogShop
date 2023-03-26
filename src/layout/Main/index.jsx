import { useEffect, useState } from 'react'
import { CardList } from '../components/CardList'
import style from './main.module.css'


const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwN2UwOWFhMzk3MTIxODM4ZjI5MjQiLCJncm91cCI6Imdyb3VwLTExIiwiaWF0IjoxNjc4ODAyNDQ5LCJleHAiOjE3MTAzMzg0NDl9.GWN3Gfo58rW5GogskTLpRDu6bJTL2H0Vs6JThTJf_5Y'

export const Main = () => {

  return (
    <main>
      <CardList />
    </main>
    // <div className={style.card}>
    //   <div className={style.imageBox}>
    //     <img src="https://sun9-10.userapi.com/impg/ielAGoXnFBJTjtBrPaS3GRFBlFYWAM7QRWCPPQ/ZYYPN_Ft3nk.jpg?size=604x604&quality=96&sign=dddfde553a1a18b119d48026b40fb604&c_uniq_tag=3bo5b3TDKUZTkZ18bUOS3vmzoPUTnN5j7wCSEePPid8&type=album" alt="Чмоня" className={style.imageProduct} />
    //   </div>
    //   <p className={style.price}><b>300 P</b></p>
    //   <p className={style.quantity}>1 шт</p>
    //   <div className={style.productDescription}>
    //     Рога оленя для собак весом до 3кг. Размер XS
    //   </div>
    //   <div className={style.prittyButton}>
    //     <button><b>В корзину</b></button>
    //   </div>
    // </div>
  )
}