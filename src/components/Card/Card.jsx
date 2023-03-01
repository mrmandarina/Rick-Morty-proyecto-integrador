import styles from "./Card.module.css"

export default function Card(props) {
   return (
      <div className={styles.Card}>
         <button className={styles.button} onClick={props.onClose}>X</button>
         <div className={styles.txt}>
            <img src={props.image} alt="" />
            <h2>{props.name}</h2>
            <p>{props.gender}</p>
            <p>{props.species}</p>
         </div>
      </div>
   );
}
