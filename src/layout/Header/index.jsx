import style from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {


  return (
    <>
      <div className={style.header}>
        <div className={style.wrapper}>
          <div><img src="/src/assets/dogFoodLogo/dogFoodLogo.png" alt="Logo" className={style.logo} /></div>
          <div className={style.searchBarDiv}>
            <input placeholder='Поиск по сайту' type="text" />
          </div>
          <div className={style.barIcon} id={style.hidden}>
            <FontAwesomeIcon icon={faBars} size='xl'/>
          </div>
          <div className={style.headerIcons}>
            <FontAwesomeIcon icon={faHeart} size='xl' />
            <FontAwesomeIcon icon={faBagShopping} size='xl' />
            <FontAwesomeIcon icon={faDog} size='xl' />
          </div>
        </div>
      </div>
    </>
  )
}