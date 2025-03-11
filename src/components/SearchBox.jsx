import css from './SearchBox.module.css'

export default function SearchBox({ filter, setFilter }) {
    return (
        <>
        <p className={css.filter}>Find contacts by name</p>
            <input className={css.input} type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
            </>
)};
