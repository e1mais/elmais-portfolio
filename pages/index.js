import styles from '../styles/Home.module.css'
import HeptagonLevelGraph from '../Components/HeptagonLevelGraph'
import Roadmap from '../Components/Roadmap'
import Languages from '../Components/Stack/index.js'
import Header from '../Components/Header'
import Linkers from '../Components/Linkers'

export default function Home () {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <div className={styles.presentation}>
          <div className={styles.presentationCard}>
            <span>
              <h1 className={styles.title}>Hi I&apos;m Elmais</h1>
              <p className={styles.subtitle}>Web Developer</p>
            </span>
            <div className={styles.circlePhoto} />
          </div>
        </div>

        <Linkers styles={styles} />

        <section>
          <div className={styles.profile} id='profile'>
            <div className={styles.profilePhoto} />
            <div>
              <h2>Perfil</h2>
              <p>
                Experiencia trabajando en Desarrollo web como Full Stack Developer Jr y actualmente terminando la carrera de Ingeniería en Computación✏️
                Con especial afición por los lenguajes de programación JavaScript y Python ⌨️
                En mi tiempo trabajando⏳ logré aportar cambios a un proyecto de SAP (SIM APP PUSH) hecho en ReactJS en la parte Front-End y FastAPI/Python en la parte Back-End usando GraphQL y REST.
                Con ánimos de seguir aprendiendo y creciendo en este maravilloso mundo de la programación 🌐
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 id='timeline'>Línea de Tiempo</h2>
          <div className={styles.timeline}>
            <Roadmap />
          </div>
        </section>

        <section>
          <div className={styles.langs} id='langs'>
            <h2>Stack</h2>
            <Languages />
            <div className={styles.langsCard} />
            <HeptagonLevelGraph />
          </div>
        </section>
      </main>

    </div>
  )
}
