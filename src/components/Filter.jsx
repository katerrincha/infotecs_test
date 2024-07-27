import Sort from "./Sort";

const Filter = ({users, item}) => {
    const { items, requestSort, sorted } = Sort(users);

    return (
        <>
        <select onChange={() => requestSort(item, event.target.value)}
                >
            <option value='ascending'>ascending
            </option>
            <option value='descending'>descending
            </option>
            <option value='withoutSorting'>without sorting
            </option>
        </select>
        </>
        
    )
}

export default Filter;