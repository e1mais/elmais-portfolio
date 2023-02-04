import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './stack.module.css'
import Image from 'next/image'
import {
  faJs,
  faHtml5,
  faCss3,
  faReact,
  faNodeJs
} from '@fortawesome/free-brands-svg-icons'

export const languages = [
  {
    name: 'JavaScript',
    level: 93,
    icon: faJs
  },
  {
    name: 'HTML',
    level: 92,
    icon: faHtml5
  },
  {
    name: 'CSS',
    level: 91,
    icon: faCss3
  },
  {
    name: 'React',
    level: 86,
    icon: faReact
  },
  {
    name: 'Python',
    level: 70,
    icon: undefined
  },
  {
    name: 'NodeJS',
    level: 75,
    icon: faNodeJs
  },
  {
    name: 'PostgreSQL',
    level: 70,
    icon: null
  }
]

export default function Languages () {
  return (
    <div className={styles.languages}>
      <div className={styles.languagesContainer}>
        {languages.map((language, index) => (
          <div key={index} className={styles.languageCard}>
            {language.icon !== undefined
              ? <FontAwesomeIcon icon={language.icon} />
              : <Image alt='Python logo' src='/python-logo-only.png' width={146} height={148} />}
          </div>
        ))}
      </div>
    </div>
  )
}
