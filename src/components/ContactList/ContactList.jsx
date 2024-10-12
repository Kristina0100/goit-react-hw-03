import styles from "./ContactList.module.css"

import Contact from "../Contact/Contact"

const ContactList = ({filteredUsers, onDeleteContact}) => {
    return (
        <ul className={styles.contacts}>
            {filteredUsers.map(contact => {
                return (<li key={contact.id}>
                    <Contact
                        name={contact.name}
                        number={contact.number}
                        id={contact.id}
                        onDeleteContact={onDeleteContact} />
                </li>)
            })}
      </ul>
  )
}

export default ContactList