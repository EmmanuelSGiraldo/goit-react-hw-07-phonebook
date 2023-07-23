import styles from "./ContactList.module.scss";
import { useSelector } from "react-redux";
import { ContactItem } from "../ContactItem/ContactItem";
import { getVisibleContacts } from "../../redux/selectors";

export const ContactList = () => {
  const visibleContacts = useSelector(getVisibleContacts);

  return (
    <ul className={styles.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
