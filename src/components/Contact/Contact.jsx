import styles from "./Contact.module.css"

import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";


const Contact = (props) => {
    const {name, number, id, onDeleteContact} = props;
  return (
      <div className={styles.contact}>
          <div>
              <p className={styles.name}><FaUser className={styles.icons}/>{name}</p>
              <p><FaPhoneAlt className={styles.icons}/>{number}</p>
          </div>
          <button className={styles.button} onClick={() => onDeleteContact(id)} type="button">Delete</button>
    </div>
  )
}

export default Contact