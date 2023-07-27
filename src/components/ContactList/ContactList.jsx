import { useSelector } from "react-redux";
import { ContactItem } from "../ContactItem/ContactItem";
import styles from "./ContactList.module.scss";
import { selectVisibleContacts } from "../../redux/selectors";

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={styles.list}>
      {" "}
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
