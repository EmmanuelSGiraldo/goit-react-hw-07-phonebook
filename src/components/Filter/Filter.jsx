import styles from "./Filter.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../redux/filterSlice";
import { getFilter } from "../../redux/selectors";

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = (e) => {
    dispatch(updateFilter(e.currentTarget.value));
  };

  return (
    <>
      <label className={styles.label} htmlFor="search">
        {" "}
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          name="search"
          value={filter}
          onChange={handleChangeFilter}
        />
      </label>
    </>
  );
};
