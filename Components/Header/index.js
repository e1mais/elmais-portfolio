import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './header.module.css'
import {
  faLanguage,
  faMoon
} from '@fortawesome/free-solid-svg-icons'

export default function Header () {
  return (
    <div className={styles.header}>
      <button className={styles.translate}>
        <FontAwesomeIcon icon={faLanguage} />
      </button>
      <button className={styles.darkmode}>
        <FontAwesomeIcon icon={faMoon} />
      </button>
    </div>
  )
}
