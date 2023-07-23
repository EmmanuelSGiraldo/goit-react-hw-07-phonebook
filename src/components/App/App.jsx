import styles from "./App.module.scss";

import { ContactForm } from "../ContactForm";
import { Filter } from "../Filter";
import { ContactList } from "../ContactList";

export const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.subtitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
