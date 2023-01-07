import styles from './timeline.module.css'

export default function Timeline ({ goals }) {
  return (
    <div className={styles.container}>
      {goals.map((finalized, index) => (
        <div key={index}>
          <div className={styles.rect} />
          <div className={styles.roundedCircle}>
            {finalized && <div className={styles.doneCircle} />}
            {index === goals.length - 1 && <div className={styles.firstRect} />}
          </div>
        </div>
      ))}
    </div>
  )
}
