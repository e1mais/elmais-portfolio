import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faHourglass,
  faCode,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'

export default function Linkers ({ styles }) {
  const links = [
    {
      name: 'Perfil',
      icon: faUser,
      ref: '#profile'
    },
    {
      name: 'Línea de Tiempo',
      icon: faHourglass,
      ref: '#timeline'
    },
    {
      name: 'Lenguajes',
      icon: faCode,
      ref: '#langs'
    },
    {
      name: 'Contacto',
      icon: faEnvelope,
      ref: '#contact'
    }
  ]

  return (
    <div className={styles.linkers}>
      {links.map((link, index) => (
        <a key={index} href={link.ref} className={styles.link}>
          {link.name}
          <FontAwesomeIcon icon={link.icon} />
        </a>
      ))}
    </div>
  )
}
