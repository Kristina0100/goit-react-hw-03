import styles from "./SearchBox.module.css"

const SearchBox = ({filter, onChange}) => {
  return (
    <div>
      <label className={styles.search}>
        Filter contacts by name
        <input className={styles.input} onChange={onChange} type="text" value={filter} />
      </label>
    </div>
  )
}

export default SearchBox