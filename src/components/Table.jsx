import Sort from "./Sort";
import Filter from "./Filter";
import './Table.css'

const Table = ({users}) => {
    const { items, requestSort, sorted } = Sort(users);
    const getClassNamesFor = (name) => {
        if (!sorted) {
          return;
        }
        return sorted.key === name ? sorted.direction : undefined;
      };
    return (
        <>
        <div>
            <table>
            <thead>
                <tr>
                    <th>Name
                    <select onChange={() => requestSort('firstName', event.target.value)}
                            className={getClassNamesFor('firstName')}>
                        <option value='ascending'>ascending
                        </option>
                        <option value='descending'>descending
                        </option>
                        <option value='withoutSorting'>without sorting
                        </option>
                    </select>
                    </th>
                    <th>Age
                    <Filter users={users} item='age'/>
                    </th>
                    <th>
                    <button type="button" 
                            onClick={() => requestSort('gender')}
                            className={getClassNamesFor('gender')}>Gender
                    </button>
                    </th>
                    <th>
                        <button type="button">Phone</button>
                    </th>
                    <th>
                    <button type="button" 
                            onClick={() => requestSort('city')}
                            className={getClassNamesFor('city')}>Address
                    </button>
                    </th>
                </tr>
            </thead>
            <tbody>
            {
                items.map((current) => {
                    const {id, firstName, maidenName, lastName, age, gender, phone} = current;
                    const {city, address} = current.address;
                    const name = firstName + ' ' + maidenName + ' ' + lastName
                    const newAddress = city + ', ' + address
                    return (
                        <tr key = {id}>
                            <td>{name}</td>
                            <td>{age}</td>
                            <td>{gender}</td>
                            <td>{phone}</td>
                            <td>{newAddress}</td>
                        </tr>
                    )
                })
            }
            </tbody>
            </table>
        </div>
        
        </>
    )
}

export default Table;


/*
<th datatype='number'>Age</th>
                    <th datatype='string'>Gender</th>
                    <th datatype='string'>Phone</th>
                    <th datatype='string'>Address</th>
*/