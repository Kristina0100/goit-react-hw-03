import styles from "./ContactList.module.css"

import Contact from "../Contact/Contact"

const ContactList = ({contacts}) => {
    return (
        <ul className={styles.contacts}>
            {contacts.map(contact => {
                return (<li key={contact.id}>
                    <Contact
                        name={contact.name}
                        number={contact.number} />
                </li>)
            })}
      </ul>
  )
}

export default ContactList