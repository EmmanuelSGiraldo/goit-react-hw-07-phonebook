import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";
import styles from "./ContactItem.module.scss"; // Importa los estilos CSS Modules con alias

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={styles.item}>
      <p className={styles.text + " " + styles.firstOfType}>{name}</p>
      <p className={styles.text}>{number}</p>
      <button className={styles.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
