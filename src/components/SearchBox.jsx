export default function SearchBox ({ filter, setFilter }) {
    return <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />;
};
