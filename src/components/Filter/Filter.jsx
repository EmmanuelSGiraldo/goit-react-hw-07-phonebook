import { useDispatch, useSelector } from "react-redux";
import styles from "./Filter.module.scss";
import { updateFilter } from "../../redux/filterSlice";
import { selectFilter } from "../../redux/selectors";

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = (e) => {
    dispatch(updateFilter(e.currentTarget.value));
  };

  return (
    <>
      <label className={styles.label} htmlFor="search">
        Find contacts by name
        <input
          className={styles.input} // Usa el alias "Input" para aplicar el estilo al input
          type="text"
          name="search"
          value={filter}
          onChange={handleChangeFilter}
        />
      </label>
    </>
  );
};
