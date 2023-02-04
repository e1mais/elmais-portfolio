import Timeline from '../Timeline'
import styles from './roadmap.module.css'

const roadMap = [
  {
    achive: 'Bachiller en ciencias y letras ',
    place: 'Colegio Público Bello Horizonte',
    date: '2016 - 2017',
    finalized: true
  },
  {
    achive: 'Estudiante Activo de Ingenieria en Computación',
    place: 'Universidad Nacional de Ingeniería (Nicaragua)',
    date: '2018 - Actualidad',
    finalized: true
  },
  {
    achive: 'Full-Stack Developer Jr',
    place: 'DigitalReef, EPICTECH',
    date: 'Jul 2022 - Oct 2022',
    finalized: true
  },
  {
    achive: 'Graduación Ing. Computación ',
    place: 'Universidad Nacional de Ingeniería (Nicaragua)',
    date: 'Por definirse',
    finalized: false
  }
].reverse()

export default function Roadmap () {
  return (
    <div className={styles.container}>
      <Timeline goals={roadMap.map((value) => value.finalized)} />
      <div className={styles.roadmap}>
        {roadMap.map((value, index) => (
          <div key={index} className={styles.roadmapItem}>
            <div className={styles.description}>
              <strong>{value.achive}</strong>
              <p>{value.place}</p>
            </div>
            <div className={styles.description}>
              <p>{value.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
